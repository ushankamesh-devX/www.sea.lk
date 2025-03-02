import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import gsap from 'gsap';

function DroneModelB({ scale = 10 }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const droneRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 }); // Store mouse position

  useEffect(() => {
    if (sceneRef.current) return; // Prevent duplicate scene creation
    sceneRef.current = new THREE.Scene();
    const scene = sceneRef.current;
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(-2, 0, 10);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    if (mountRef.current && !mountRef.current.firstChild) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x3399ff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load Drone Model
    if (!scene.getObjectByName('DroneModel')) {
      const objLoader = new OBJLoader();
      objLoader.load('/models/drone_expanded.obj', (object) => {
        object.name = 'DroneModel';
        object.scale.set(scale, scale, scale);
        object.position.set(0, 0, 0);

        // Initial Rotation State
        object.rotation.set(
          THREE.MathUtils.degToRad(-90),
          THREE.MathUtils.degToRad(-45),
          THREE.MathUtils.degToRad(45)
        );

        scene.add(object);
        droneRef.current = object;

        // Animation Loop
        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
        animate();
      });
    }

    // Mouse Move Event
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      mouse.current.x = (event.clientX / innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / innerHeight) * 2 + 1;

      if (droneRef.current) {
        gsap.to(droneRef.current.rotation, {
          x: THREE.MathUtils.degToRad(-90) + mouse.current.y * 0.5,
          y: THREE.MathUtils.degToRad(-45) + mouse.current.x * 0.5,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current) {
        mountRef.current.innerHTML = '';
      }
    };
  }, [scale]);

  return <div ref={mountRef} className=''></div>;
}

export default DroneModelB;
