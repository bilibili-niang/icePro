import{P as E}from"./preview-096c3109.js";import*as e from"https://cdn.skypack.dev/three@0.136.0/build/three.module.js";import{OrbitControls as V}from"https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js";import{FontLoader as H}from"https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/FontLoader.js";import{TextGeometry as k}from"https://cdn.skypack.dev/three@0.136.0/examples/jsm/geometries/TextGeometry.js";import{EffectComposer as L}from"https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/EffectComposer.js";import{RenderPass as G}from"https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/RenderPass.js";import{UnrealBloomPass as j}from"https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/UnrealBloomPass.js";import{ShaderPass as N}from"https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/ShaderPass.js";import{j as P,k as I,f as m,a as _,o as B,b as O,w as b,g as q,d as $,u as J,F as K,l as Q}from"./index-ddefbaea.js";const X=P({name:"WaveDot",setup(){return I(()=>{const n=document.querySelector(".WaveDot");n.style.width="100%",n.style.height="100%",n.style.position="relative";const c=`
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,h=`
uniform float iTime;
uniform vec2 iResolution;
uniform float factorSpeed;
uniform float factorBold;
varying vec2 vUv;

vec3 palette(float t) {
    vec3 a = vec3(0.577, 0.192, 0.922);
    vec3 b = vec3(0.827, 0.944, 0.565);
    vec3 c = vec3(0.472, 1.541, 1.174);
    vec3 d = vec3(3.973, 5.658, 1.133);
    return a + b * cos(6.28318 * (c * t + d));
}

void main() {
    vec2 fragCoord = vUv * iResolution;
    vec2 uv = (fragCoord * 0.15 - iResolution) / iResolution.y;
    vec3 finalColor = vec3(0.0);
    vec2 uv0 = uv;

    for (float i = 0.0; i < 2.0; i++) {
        uv = uv - sign(iTime) * 0.5;
        float d = min(dot(uv.x, uv.x), 0.5) + exp(-length(uv0));
        vec3 col = palette(length(uv + abs(uv0)) * 0.4 + iTime * 0.4);
        d = sin(d * factorSpeed + iTime) / factorSpeed;
        d = abs(d+d+d)+d;
        d = 0.005 / d;    
        finalColor += col * d * factorBold;
    }
    gl_FragColor = vec4(finalColor, 1.0);
}
`,i=new e.ShaderMaterial({wireframe:!1,vertexShader:c,fragmentShader:h,uniforms:{iTime:{value:5},iResolution:{value:new e.Vector2(window.innerWidth,window.innerHeight)},factorSpeed:{value:20},factorBold:{value:3}}});document.addEventListener("dblclick",()=>{i.wireframe=!i.wireframe});const o=new e.Scene;o.background=new e.Color(527131);const s=new e.PerspectiveCamera(75,n.clientWidth/n.clientHeight,.1,1e3),l=new e.WebGLRenderer({antialias:!0});l.setSize(n.clientWidth,n.clientHeight),n.appendChild(l.domElement);const d=new V(s,l.domElement);d.enableDamping=!0,d.dampingFactor=.5,d.minDistance=.5,d.maxDistance=25;const v=new L(l),T=new G(o,s);v.addPass(T);const u=new j(new e.Vector2(window.innerWidth,window.innerHeight));u.strength=.1,u.threshold=.1,u.radius=.1,v.addPass(u);const z={uniforms:{tDiffuse:{value:null},resolution:{value:new e.Vector2(window.innerWidth,window.innerHeight)},vignetteIntensity:{value:1},blurStrength:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform vec2 resolution;
      uniform float vignetteIntensity;
      uniform float blurStrength;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;

        // Centre de la texture
        vec2 center = vec2(0.5, 0.5);
        vec2 delta = uv - center;
        float dist = length(delta);

        // Calcul de la vignette : plus le point est éloigné, plus l'effet s'intensifie
        float vignette = smoothstep(0.1, 0.8, dist);

        // Flou radial : échantillonnage multi-points le long de la direction radiale
        const int samples = 256;
        vec4 color = vec4(0.0);
        float total = 0.0;
        for (int i = 0; i < samples; i++) {
          float t = float(i) / float(samples - 1);
          vec2 sampleUv = center + delta * (t + blurStrength);
          color += texture2D(tDiffuse, sampleUv);
          total += 1.0;
        }
        color /= total;

        // Application de l'effet vignette en assombrissant les bords
        color.rgb *= mix(1.0, 1.0 - vignetteIntensity, vignette);

        gl_FragColor = color;
      }
    `},F=new N(z);v.addPass(F),new H().load("https://raw.githubusercontent.com/vainsan/assets/main/Dubtronic_Regular.json",function(t){const a=new k("FuckAll",{font:t,size:1,height:2,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.06,bevelOffset:0,bevelSegments:1}),S=new k("TheWorld",{font:t,size:1,height:2,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelOffset:0,bevelSegments:1});a.center(),S.center();const y=new e.Mesh(a,i),M=new e.Mesh(S,i);y.position.set(0,1.2,0),M.position.set(0,-.2,0),o.add(y),o.add(M)});const g=new e.BufferGeometry,w=5e3,f=new Float32Array(w*3),p=new Float32Array(w*3);for(let t=0;t<w;t++)f[t*3]=(Math.random()*2-1)*5,f[t*3+1]=(Math.random()*2-1)*5,f[t*3+2]=(Math.random()*2-1)*5,p[t*3]=Math.random(),p[t*3+1]=Math.random(),p[t*3+2]=Math.random();g.setAttribute("color",new e.BufferAttribute(p,3)),g.setAttribute("position",new e.BufferAttribute(f,3));const R=new e.PointsMaterial({size:.05,vertexColors:!0,transparent:!0,opacity:.5}),U=new e.Points(g,R);o.add(U);const A=new e.AmbientLight(4210752);o.add(A);const x=new e.DirectionalLight(16777215,1);x.position.set(5,5,5).normalize(),o.add(x),s.position.z=5,window.addEventListener("resize",()=>{const t=n.clientWidth,a=n.clientHeight;s.aspect=t/a,s.updateProjectionMatrix(),l.setSize(t,a),v.setSize(t,a),i.uniforms.iResolution.value.set(t,a)});function C(){requestAnimationFrame(C),i.uniforms.iTime.value+=.025,d.update(),l.render(o,s),v.render()}C()}),()=>m("div",{class:"WaveDot"},null)}}),Y={class:"exampleContainer"},W=P({__name:"backContainerNormal.preview",setup(r){return(n,c)=>{const h=_("ice-text"),i=_("BackContainer"),o=_("container");return B(),O(K,null,[m(h,null,{default:b(()=>c[0]||(c[0]=[q(" 一个简单的滤镜 ")])),_:1}),m(o,null,{default:b(()=>[$("div",Y,[m(i,null,{default:b(()=>[m(J(X),{level:"20"})]),_:1})])]),_:1})],64)}}});const D=r=>{r.__sourceCodeTitle="BackContainer 背景容器",r.__sourceCode=`<div class="exampleContainer">\r
      <BackContainer>\r
        <WaveDot level="20"/>\r
      </BackContainer>\r
    </div>`,r.__script="import WaveDot from '../../../thirdConponments/waveDot'",r.__styleCode=`.exampleContainer {\r
  border: var(--color-theme-900) 1px solid;\r
  display: flex;\r
  height: 500px;\r
  width: 100%;\r
}`};typeof D=="function"&&D(W);const ce={__name:"index",setup(r){return(n,c)=>(B(),Q(E,{component:W}))}};export{ce as default};
