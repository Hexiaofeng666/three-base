import * as THREE from "three";
// 导入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
<<<<<<< HEAD
// 导入动画库
import gsap from "gsap";
// 导入dat.gui
import * as dat from "dat.gui";

// 目标：基础材质与纹理
=======

// console.log(THREE);

// 目标：控制3d物体移动
>>>>>>> f022ddb (three.js初始化)

// 1、创建场景
const scene = new THREE.Scene();

// 2、创建相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// 设置相机位置
camera.position.set(0, 0, 10);
scene.add(camera);

<<<<<<< HEAD
// 导入纹理
const textureLoader = new THREE.TextureLoader();
const doorColorTexture = textureLoader.load("./textures/door/color.jpg");

// console.log(doorColorTexture);
// 

// 添加物体
const cubeGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
// 材质
const basicMaterial = new THREE.MeshBasicMaterial({
  color: "#ffff00",
  map: doorColorTexture,
});
const cube = new THREE.Mesh(cubeGeometry, basicMaterial);
scene.add(cube);

=======
// 添加物体
// 创建几何体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

// 修改物体的位置
// cube.position.set(5, 0, 0);
cube.position.x = 3;

// 将几何体添加到场景中
scene.add(cube);

console.log(cube);

>>>>>>> f022ddb (three.js初始化)
// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);
// console.log(renderer);
// 将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement);

// // 使用渲染器，通过相机将场景渲染进来
// renderer.render(scene, camera);

// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);
<<<<<<< HEAD
// 设置控制器阻尼，让控制器更有真实效果,必须在动画循环里调用.update()。
controls.enableDamping = true;
=======
>>>>>>> f022ddb (three.js初始化)

// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
<<<<<<< HEAD
// 设置时钟
const clock = new THREE.Clock();

function render() {
  controls.update();
=======

function render() {
  cube.position.x += 0.01;
  if (cube.position.x > 5) {
    cube.position.x = 0;
  }
>>>>>>> f022ddb (three.js初始化)
  renderer.render(scene, camera);
  //   渲染下一帧的时候就会调用render函数
  requestAnimationFrame(render);
}

render();
<<<<<<< HEAD

// 监听画面变化，更新渲染画面
window.addEventListener("resize", () => {
  //   console.log("画面变化了");
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight;
  //   更新摄像机的投影矩阵
  camera.updateProjectionMatrix();

  //   更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight);
  //   设置渲染器的像素比
  renderer.setPixelRatio(window.devicePixelRatio);
});
=======
>>>>>>> f022ddb (three.js初始化)
