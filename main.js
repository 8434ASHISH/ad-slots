import * as SHAPES from './shapes.js';

const canvas = document.getElementById('three-canvas');
const scene = new THREE.Scene();

const camera3D = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 100);
camera3D.position.z = 4;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(innerWidth, innerHeight);

// Particle system
let currentShape = 0;
const shapeFns = [
  SHAPES.heartShape,
  SHAPES.flowerShape,
  SHAPES.saturnShape
];

const COUNT = 4000;
let geometry = new THREE.BufferGeometry();
let material = new THREE.PointsMaterial({
  size: 0.03,
  color: 0xff66cc
});

let particles;

function createParticles(shapeFn) {
  if (particles) scene.remove(particles);
  geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(shapeFn(COUNT), 3)
  );
  particles = new THREE.Points(geometry, material);
  scene.add(particles);
}

createParticles(shapeFns[currentShape]);

// Sound
const sounds = {
  switch: new Audio('sounds/switch.mp3'),
  expand: new Audio('sounds/expand.mp3')
};

// Animate
function animate() {
  requestAnimationFrame(animate);
  particles.rotation.y += 0.002;
  renderer.render(scene, camera3D);
}
animate();

// Resize
addEventListener('resize', () => {
  camera3D.aspect = innerWidth / innerHeight;
  camera3D.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});
