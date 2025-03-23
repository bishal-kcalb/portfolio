import * as THREE from 'three';
import { gsap } from 'gsap';

export default defineNuxtPlugin(() => {
  // Wait for DOM to be loaded
  if (typeof window !== 'undefined') {
    // console.log('Three.js plugin initialized');
    
    setTimeout(() => {
      initThreeJS();
    }, 100);
  }
});

function initThreeJS() {
  // Scene setup
  const scene = new THREE.Scene();
  
  // Camera setup
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;
  
  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true 
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // Append to DOM
  const canvas = renderer.domElement;
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);
  
  // Particles setup
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 2000;
  
  const posArray = new Float32Array(particlesCount * 3);
  
  // Fill with random positions
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 100;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  // Material
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.1,
    color: 0xFFFFFF,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });
  
  // Mesh
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);
  
  // Animation
  const animate = () => {
    requestAnimationFrame(animate);
    
    particlesMesh.rotation.x += 0.0003;
    particlesMesh.rotation.y += 0.0003;
    
    renderer.render(scene, camera);
  };
  
  animate();
  
  // Handle resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  // Mouse effect
  let mouseX = 0;
  let mouseY = 0;
  
  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    
    gsap.to(particlesMesh.rotation, {
      x: mouseY * 0.3,
      y: mouseX * 0.3,
      duration: 2
    });
  });
  
  // console.log('Three.js scene initialized');
}