import { useEffect, useRef, useState } from 'react';
const vertexSource = `attribute vec2 position;void main(){gl_Position=vec4(position,0.,1.);}`;
const fragmentSource = `
precision highp float;
uniform vec2 resolution;uniform vec2 pointer;uniform float time;
vec3 env(vec3 direction){vec3 d=normalize(direction);float a=atan(d.z,d.x)+time*.08;float bands=pow(.5+.5*sin(a*3.+d.y*4.),8.);vec3 tint=.5+.5*cos(vec3(0.,2.1,4.2)+a*1.8+d.y*3.);float light=pow(max(0.,dot(d,normalize(vec3(-.5,1.,1.)))),24.);return vec3(.035,.04,.055)+tint*bands*.6+vec3(1.3,1.35,1.4)*light;}
void main(){vec2 uv=(gl_FragCoord.xy-.5*resolution)/min(resolution.x,resolution.y);vec3 ro=vec3(pointer.x*.15,pointer.y*.1,3.1);vec3 rd=normalize(vec3(uv*2.5,-3.1));float b=dot(ro,rd);float h=b*b-dot(ro,ro)+.88*.88;if(h<0.){gl_FragColor=vec4(0.);return;}vec3 p=ro+rd*(-b-sqrt(h));vec3 n=normalize(normalize(p)+.045*sin(p.yzx*5.+vec3(time*.2,time*.13,0.)));float f=pow(1.-max(0.,dot(-rd,n)),3.);vec3 reflection=env(reflect(rd,n));vec3 refraction=vec3(env(refract(rd,n,1./1.40)).r,env(refract(rd,n,1./1.46)).g,env(refract(rd,n,1./1.52)).b);float contour=pow(1.-max(0.,dot(-rd,n)),12.);float rim=pow(max(0.,dot(n,normalize(vec3(-.7,.85,1.)))),70.);vec3 color=mix(refraction*.72,reflection,.15+f*.85)+contour*vec3(.6,.65,.75)+rim*1.8;gl_FragColor=vec4(pow(color,vec3(.72)),smoothstep(0.,.009,h));}`;

export default function GlassOrb({ paused }) {
  const canvasRef=useRef(null), pausedRef=useRef(paused), redraw=useRef(()=>{});
  const [ready,setReady]=useState(false);
  useEffect(()=>{pausedRef.current=paused;redraw.current();},[paused]);
  useEffect(()=>{
    const canvas=canvasRef.current;
    const gl=canvas.getContext('webgl',{alpha:true,antialias:false,powerPreference:'low-power',premultipliedAlpha:false});
    if(!gl)return;
    const shaders=[];
    const compile=(type,source)=>{const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);shaders.push(s);return gl.getShaderParameter(s,gl.COMPILE_STATUS)?s:null;};
    const vertex=compile(gl.VERTEX_SHADER,vertexSource),fragment=compile(gl.FRAGMENT_SHADER,fragmentSource);
    if(!vertex||!fragment){shaders.forEach(s=>gl.deleteShader(s));return;}
    const program=gl.createProgram();gl.attachShader(program,vertex);gl.attachShader(program,fragment);gl.linkProgram(program);
    if(!gl.getProgramParameter(program,gl.LINK_STATUS)){gl.deleteProgram(program);shaders.forEach(s=>gl.deleteShader(s));return;}
    gl.useProgram(program);
    const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
    const position=gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
    const uniforms={resolution:gl.getUniformLocation(program,'resolution'),pointer:gl.getUniformLocation(program,'pointer'),time:gl.getUniformLocation(program,'time')};
    const motion=window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)');
    let frame=0,visible=true,lost=false,elapsed=0,last=0,x=0,y=0;
    const draw=now=>{frame=0;if(lost||!visible||document.hidden)return;const moving=!pausedRef.current&&!motion.matches;if(moving&&last)elapsed+=Math.min(now-last,50)/1000;last=now;gl.uniform2f(uniforms.resolution,canvas.width,canvas.height);gl.uniform2f(uniforms.pointer,x,y);gl.uniform1f(uniforms.time,elapsed);gl.drawArrays(gl.TRIANGLES,0,6);if(moving)frame=requestAnimationFrame(draw);};
    const start=()=>{cancelAnimationFrame(frame);last=0;if(!lost&&visible&&!document.hidden)frame=requestAnimationFrame(draw);};redraw.current=start;
    const resize=()=>{const r=canvas.getBoundingClientRect();const scale=Math.min(window.devicePixelRatio||1,1.5);canvas.width=Math.max(1,Math.round(r.width*scale));canvas.height=Math.max(1,Math.round(r.height*scale));gl.viewport(0,0,canvas.width,canvas.height);start();};
    const move=e=>{if(motion.matches||pausedRef.current)return;const r=canvas.getBoundingClientRect();x=(e.clientX-r.left)/r.width-.5;y=.5-(e.clientY-r.top)/r.height;};
    const leave=()=>{x=0;y=0;};const contextLost=e=>{e.preventDefault();lost=true;cancelAnimationFrame(frame);setReady(false);};
    const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;start();});observer.observe(canvas);
    const sizes=new ResizeObserver(resize);sizes.observe(canvas);canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerleave',leave);canvas.addEventListener('webglcontextlost',contextLost);document.addEventListener('visibilitychange',start);motion.addEventListener('change',start);setReady(true);resize();
    return()=>{cancelAnimationFrame(frame);redraw.current=()=>{};observer.disconnect();sizes.disconnect();canvas.removeEventListener('pointermove',move);canvas.removeEventListener('pointerleave',leave);canvas.removeEventListener('webglcontextlost',contextLost);document.removeEventListener('visibilitychange',start);motion.removeEventListener('change',start);gl.deleteBuffer(buffer);gl.deleteProgram(program);shaders.forEach(s=>gl.deleteShader(s));};
  },[]);
  return <div className="orb-render" aria-hidden="true"><div className={`orb-fallback ${ready?'orb-hidden':''}`} /><canvas ref={canvasRef} className={ready?'orb-canvas':'orb-canvas orb-hidden'} /></div>;
}
