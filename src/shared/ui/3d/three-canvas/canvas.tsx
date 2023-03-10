import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';

export const TheeCanvas = () => {
  let scene;
  let camera;
  let renderer;

  camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 100;
  scene = new Scene();

  renderer = new WebGLRenderer();

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor('black');

  document.body.appendChild(renderer.domElement);

  return renderer.domElement;
};
