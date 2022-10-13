import * as THREE from "three";
<<<<<<< HEAD
// 导入动画库
import gsap from "gsap";
// 导入轨道控制器
import {
  OrbitControls
} from "three/examples/jsm/controls/OrbitControls";
// 导入dat.gui
import * as dat from "dat.gui"
import { Material } from "three";

// console.log(THREE);

// 目标：BufferGeometry
=======

// console.log(THREE);

// 目标：了解three.js最基本的内容
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
const geometry = new THREE.BufferGeometry()
const vertices = new Float32Array([
  -1.0,-1.0,1.0,
  1.0,-1.0,1.0,
  1.0,1.0,1.0,
  1.0,1.0,1.0,
  -1.0,1.0,1.0,
  -1.0,-1.0,1.0,
])
geometry.setAttribute('position',new THREE.BufferAttribute(vertices, 3))

const material = new THREE.MeshBasicMaterial({
  color: 0xffff00
});
// 根据几何体和材质创建物体
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// console.log(cubeGeometry);

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

<<<<<<< HEAD
// // 使用渲染器，通过相机将场景渲染进来
// renderer.render(scene, camera);

// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);
// 设置控制器阻尼，让控制器更有真实的效果，必须在动画循环里调用updata()
controls.enableDamping = true

// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// 设置动画
// var animate1 = gsap.to(cube.position, {
//   x: 5,
//   z: 5,
//   duration: 5,
//   ease: "power1.inOut",
//   onComplete: () => {
//     console.log("动画完成");
//   },
//   onStart: () => {
//     console.log("动画开始");
//   },
//   // 设置重复的次数，无限次循环-1
//   repeat: 0,
//   // 往返运动
//   yoyo: true,
//   // 延迟
//   delay: 1
// })
// gsap.to(cube.rotation, {
//   x: 2 * Math.PI,
//   duration: 5
// })

window.addEventListener("dblclick", () => {
  const fullScreenElement = document.fullscreenElement
  if (!fullScreenElement) {
    // 双击控制屏幕进入全屏，退出全屏
    // 让画布对象全屏
    renderer.domElement.requestFullscreen()
  } else {
    // 退出全屏，使用document对象
    document.exitFullscreen()
  }



  // console.log(animate1);
  // if (animate1.isActive()) {
  //   // 暂停
  //   animate1.pause()
  // }else{
  //   // 恢复
  //    animate1.resume()
  // }

})

function render() {
  // cube.position.x += 0.01
  // if (cube.position.x >= 5) {
  //   cube.position.x = 0
  // }
  controls.update()
  renderer.render(scene, camera);
  //   渲染下一帧的时候就会调用render函数
  requestAnimationFrame(render);
}

render();


// 监听画面变化，更新渲染画面
window.addEventListener('resize', () => {
  // console.log('画面变化了');
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight
  // 更新摄像机的投影矩阵
  camera.updateProjectionMatrix()
  // 更新渲染器
  renderer.setSize(window.innerWidth, innerHeight)
  // 设置渲染器的像素比
  renderer.setPixelRatio(window.devicePixelRatio)
})
=======
// 使用渲染器，通过相机将场景渲染进来
renderer.render(scene, camera);
>>>>>>> f022ddb (three.js初始化)
