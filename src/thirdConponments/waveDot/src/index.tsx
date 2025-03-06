import './index.less'
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'https://cdn.skypack.dev/three@0.136.0/build/three.module.js'
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/geometries/TextGeometry.js'
import { EffectComposer } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/ShaderPass.js'

export default defineComponent({
  name: 'WaveDot',
  setup() {
    const init = () => {
      const container = document.querySelector('.WaveDot')
      container.style.width = '100%' // 根据需要调整
      container.style.height = '100%' // 根据需要调整
      container.style.position = 'relative'

      // Shader code
      const vertexShader = `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

      const fragmentShader = `
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
`

      const shaderMaterial = new THREE.ShaderMaterial({
        wireframe: false,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms: {
          iTime: { value: 5.0 },
          iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          factorSpeed: { value: 20.0 },
          factorBold: { value: 3.0 }
        }
      })
      document.addEventListener('dblclick', () => {
        shaderMaterial.wireframe = !shaderMaterial.wireframe
      })

      // Initialize scene, camera, and renderer
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0x080b1b)
      // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ antialias: true })
      // renderer.setSize(window.innerWidth, window.innerHeight)
      // document.body.appendChild(renderer.domElement)

      renderer.setSize(container.clientWidth, container.clientHeight) // 使用容器尺寸
      container.appendChild(renderer.domElement) // 将渲染器的canvas添加到容器中

      // Add orbit controls
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.5
      controls.minDistance = 0.5
      controls.maxDistance = 25

      // Initialize composer for post-processing
      const composer = new EffectComposer(renderer)
      const renderPass = new RenderPass(scene, camera)
      composer.addPass(renderPass)
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight))
      bloomPass.strength = 0.1
      bloomPass.threshold = 0.1
      bloomPass.radius = 0.1
      composer.addPass(bloomPass)

      const RadialVignetteShader = {
        uniforms: {
          tDiffuse: { value: null },
          resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          vignetteIntensity: { value: 1.0 }, // Intensité de l'effet vignette (0 à 1)
          blurStrength: { value: 1.0 } // Force du flou radial
        },

        vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
    `,

        fragmentShader: /* glsl */ `
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
    `
      }
      const vignettePass = new ShaderPass(RadialVignetteShader)
      composer.addPass(vignettePass)

      // Load font and create text geometry
      const loader = new FontLoader()
      loader.load('https://raw.githubusercontent.com/vainsan/assets/main/Dubtronic_Regular.json', function (font) {
        const textGeometry1 = new TextGeometry('FuckAll', {
          font: font,
          size: 1,
          height: 2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.1,
          bevelSize: 0.06,
          bevelOffset: 0,
          bevelSegments: 1
        })

        const textGeometry2 = new TextGeometry('TheWorld', {
          font: font,
          size: 1,
          height: 2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.1,
          bevelSize: 0.1,
          bevelOffset: 0,
          bevelSegments: 1
        })

        // Center the text geometry
        textGeometry1.center()
        textGeometry2.center()

        // Create text meshes
        const textMesh1 = new THREE.Mesh(textGeometry1, shaderMaterial)
        const textMesh2 = new THREE.Mesh(textGeometry2, shaderMaterial)

        // Position the text meshes
        textMesh1.position.set(0, 1.2, 0) // Adjust the Y position as needed
        textMesh2.position.set(0, -0.2, 0) // Adjust the Y position as needed

        // Add text meshes to the scene
        scene.add(textMesh1)
        scene.add(textMesh2)
      })
      // Add particles
      const particleGeometry = new THREE.BufferGeometry()
      const particleCount = 5000
      // const positions = [];
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)
      const rand_pos = 12
      const radius = 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() * 2 - 1) * 5
        positions[i * 3 + 1] = (Math.random() * 2 - 1) * 5
        positions[i * 3 + 2] = (Math.random() * 2 - 1) * 5

        colors[i * 3] = Math.random()
        colors[i * 3 + 1] = Math.random()
        colors[i * 3 + 2] = Math.random()
      }
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.5
      })

      const particles = new THREE.Points(particleGeometry, particleMaterial)
      scene.add(particles)

      // Add a light
      const light = new THREE.AmbientLight(0x404040) // Soft white light
      scene.add(light)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(5, 5, 5).normalize()
      scene.add(directionalLight)
      camera.position.z = 5

      window.addEventListener('resize', () => {
        const width = container.clientWidth
        const height = container.clientHeight
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
        composer.setSize(width, height)
        shaderMaterial.uniforms.iResolution.value.set(width, height)
      })

      function animate() {
        requestAnimationFrame(animate)
        shaderMaterial.uniforms.iTime.value += 0.025
        controls.update()
        renderer.render(scene, camera)
        composer.render()
      }

      animate()
    }

    // init()
    onMounted(init)
    return () => <div class="WaveDot" />
  }
})
