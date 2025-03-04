import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import gsap from 'gsap'; // GSAP for smooth animations

function DroneModelA({ scale = 10 }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const droneRef = useRef(null);

  useEffect(() => {
    if (sceneRef.current) return; // Prevent duplicate scene creation
    sceneRef.current = new THREE.Scene();
    const scene = sceneRef.current;
    scene.background = null; // Transparent background

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(-2, 0, 10);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const mountElement = mountRef.current;
    if (mountElement && !mountElement.firstChild) {
      mountElement.appendChild(renderer.domElement);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x3399ff, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load Material (MTL) first
    const mtlLoader = new MTLLoader();
    mtlLoader.load('/models/drone_compacked.mtl', (materials) => {
      materials.preload(); // Ensure materials are ready

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials); // Apply materials to OBJ

      objLoader.load('/models/drone_compacked.obj', (object) => {
        object.name = 'DroneModel';
        object.scale.set(scale, scale, scale);
        object.position.set(0, 0, 0);

        // Initial Rotation State
        object.rotation.set(
          THREE.MathUtils.degToRad(10),  // X: 10 degrees
          THREE.MathUtils.degToRad(-60), // Y: -60 degrees
          THREE.MathUtils.degToRad(90)   // Z: 90 degrees
        );

        scene.add(object);
        droneRef.current = object; // Store reference for GSAP animation

        // Animate Rotation Smoothly
        gsap.to(object.rotation, {
          x: THREE.MathUtils.degToRad(10),
          y: THREE.MathUtils.degToRad(-40),
          z: THREE.MathUtils.degToRad(90),
          duration: 3, // Smooth transition in 3 seconds
          ease: "power2.inOut",
          repeat: -1, // Infinite rotation
          yoyo: true, // Rotates back and forth
        });

        // Animation Loop
        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
        animate();
      });
    });

    return () => {
      if (mountRef.current) {
        mountRef.current.innerHTML = ''; // Cleanup
      }
    };
  }, [scale]);

  return <div ref={mountRef}></div>;
}

export default DroneModelA;
