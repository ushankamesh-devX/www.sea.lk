import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import gsap from "gsap";

function DroneModelB({ scale = 10 }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const droneRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  let animationFrameId = useRef(null);

  useEffect(() => {
    if (sceneRef.current) return; // Prevent re-initialization

    // Create Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera Setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 10);
    cameraRef.current = camera;

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load Drone Model
    const objLoader = new OBJLoader();
    objLoader.load("/models/drone_expanded.obj", (object) => {
      object.name = "DroneModel";
      object.scale.set(scale, scale, scale);
      object.position.set(0, 0, 0);

      // Initial Rotation
      object.rotation.set(
        THREE.MathUtils.degToRad(-90),
        THREE.MathUtils.degToRad(-45),
        THREE.MathUtils.degToRad(45)
      );

      scene.add(object);
      droneRef.current = object;

      // Ensure animation loop starts only after model loads
      animate();
    });

    // Mouse Move Event
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      mouse.current.x = (event.clientX / innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / innerHeight) * 2 + 1;

      if (droneRef.current) {
        gsap.to(droneRef.current.rotation, {
          x: THREE.MathUtils.degToRad(-90) + mouse.current.y * 0.5, // Smooth X-axis tilt
          y: THREE.MathUtils.degToRad(-45) + mouse.current.x * 0.5, // Smooth Y-axis rotation
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.innerHTML = "";
      }
    };
  }, [scale]);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }}></div>;
}

export default DroneModelB;
