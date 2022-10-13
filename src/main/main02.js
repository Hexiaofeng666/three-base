import * as THREE from "three";
// 导入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
<<<<<<< HEAD
// 导入动画库
import gsap from "gsap";
// 导入dat.gui
import * as dat from "dat.gui";

// 目标：打造酷炫的三角形
=======

// console.log(THREE);

// 目标：使用控制器查看3d物体
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

// 添加物体
// 创建几何体
<<<<<<< HEAD
for (let i = 0; i < 50; i++) {
  // 每一个三角形，需要3个顶点，每个顶点需要3个值
  const geometry = new THREE.BufferGeometry();
  const positionArray = new Float32Array(9);
  for (let j = 0; j < 9; j++) {
    positionArray[j] = Math.random() * 10 - 5;
  }
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positionArray, 3)
  );
  let color = new THREE.Color(Math.random(), Math.random(), Math.random());
  const material = new THREE.MeshBasicMaterial({
    color: color,
    transparent: true,
    opacity: 0.5,
  });
  // 根据几何体和材质创建物体
  const mesh = new THREE.Mesh(geometry, material);
  console.log(mesh);
  scene.add(mesh);
}
=======
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// 将几何体添加到场景中
scene.add(cube);
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

<<<<<<< HEAD
// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);
// 设置控制器阻尼，让控制器更有真实效果,必须在动画循环里调用.update()。
controls.enableDamping = true;
=======
// 导入轨道控制器
// 参数1：相机，参数2：元素
const controls = new OrbitControls(camera, renderer.domElement);
>>>>>>> f022ddb (three.js初始化)

// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
<<<<<<< HEAD
// 设置时钟
const clock = new THREE.Clock();

function render() {
  controls.update();
  renderer.render(scene, camera);
  //   渲染下一帧的时候就会调用render函数
=======

//浏览器每秒刷新60/144帧，所以抛弃之前的渲染方法，重新设置个render函数，让画面更新的同时浏览器能重新渲染
function render() {
  renderer.render(scene, camera);
  //浏览器自带
  //渲染下一帧的时候就会调用render函数
>>>>>>> f022ddb (three.js初始化)
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
