import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function addTube(group, points, color, radius = 0.025) {
  const curve = new THREE.CatmullRomCurve3(points.map(([x, y, z]) => new THREE.Vector3(x, y, z)));
  const geometry = new THREE.TubeGeometry(curve, 32, radius, 8, false);
  const material = new THREE.MeshStandardMaterial({ color, metalness: 0.65, roughness: 0.3 });
  group.add(new THREE.Mesh(geometry, material));
}

function createDriver() {
  const driver = new THREE.Group();
  const navy = new THREE.MeshStandardMaterial({ color: '#14243a', roughness: 0.52 });
  const burgundy = new THREE.MeshStandardMaterial({ color: '#7c1730', roughness: 0.38 });
  const gold = new THREE.MeshStandardMaterial({ color: '#d4af37', metalness: 0.78, roughness: 0.24 });
  const darkMetal = new THREE.MeshStandardMaterial({ color: '#111922', metalness: 0.62, roughness: 0.2 });
  const ivory = new THREE.MeshStandardMaterial({ color: '#f3ead5', roughness: 0.4 });

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.68, 0.7, 8, 32), navy);
  torso.position.set(0, -0.92, 0);
  torso.scale.set(1.15, 1.08, 0.8);
  driver.add(torso);

  const chest = new THREE.Mesh(new THREE.BoxGeometry(0.46, 1.13, 0.055), burgundy);
  chest.position.set(0, -0.92, 0.62);
  chest.rotation.z = 0.08;
  driver.add(chest);

  for (const side of [-1, 1]) {
    const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.46, 24, 20), navy);
    shoulder.position.set(side * 0.63, -0.52, 0);
    shoulder.scale.set(1.05, 0.86, 0.83);
    driver.add(shoulder);

    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.66, 6, 20), navy);
    arm.position.set(side * 0.91, -1.08, 0.02);
    arm.rotation.z = side * -0.34;
    driver.add(arm);

    const piping = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.6, 0.035), gold);
    piping.position.set(side * 0.66, -0.63, 0.39);
    piping.rotation.z = side * -0.28;
    driver.add(piping);
  }

  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.075, 12, 40), gold);
  collar.position.set(0, -0.16, 0);
  collar.rotation.x = Math.PI / 2;
  driver.add(collar);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, 0.28, 32), burgundy);
  neck.position.set(0, 0.08, 0);
  driver.add(neck);

  const helmet = new THREE.Mesh(
    new THREE.SphereGeometry(0.84, 48, 36),
    new THREE.MeshPhysicalMaterial({ color: '#8d1c37', metalness: 0.45, roughness: 0.2, clearcoat: 0.8 })
  );
  helmet.position.set(0, 0.94, 0);
  helmet.scale.set(1, 1.08, 0.78);
  driver.add(helmet);

  const visor = new THREE.Mesh(
    new THREE.SphereGeometry(1, 48, 20, 0, Math.PI * 2, Math.PI * 0.36, Math.PI * 0.43),
    new THREE.MeshPhysicalMaterial({ color: '#172b40', metalness: 0.88, roughness: 0.12, clearcoat: 1 })
  );
  visor.position.set(0, 0.98, 0.27);
  visor.scale.set(0.85, 0.9, 0.78);
  driver.add(visor);

  addTube(driver, [[-0.55, 1.28, 0.45], [-0.37, 1.58, 0.48], [0, 1.69, 0.39], [0.37, 1.58, 0.48], [0.55, 1.28, 0.45]], '#f5d061', 0.035);
  addTube(driver, [[-0.68, 1.15, 0.42], [-0.34, 1.36, 0.56], [0, 1.4, 0.59], [0.34, 1.36, 0.56], [0.68, 1.15, 0.42]], '#d4af37', 0.018);

  const badge = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.045), gold);
  badge.position.set(0, -1.01, 0.68);
  driver.add(badge);

  const nameplate = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.08, 0.04), darkMetal);
  nameplate.position.set(0, -1.3, 0.66);
  driver.add(nameplate);

  const leftPatch = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.13, 0.045), ivory);
  leftPatch.position.set(-0.47, -0.56, 0.47);
  driver.add(leftPatch);

  const rightPatch = leftPatch.clone();
  rightPatch.position.x = 0.47;
  driver.add(rightPatch);

  return driver;
}

export function RacingDriver3D() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0.05, 7.6);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.setAttribute('aria-hidden', 'true');
    renderer.domElement.style.touchAction = 'none';
    host.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight('#fff5df', '#293249', 2.1));
    const keyLight = new THREE.DirectionalLight('#fff0c2', 3.4);
    keyLight.position.set(-3, 4, 5);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight('#bdcce2', 2.6);
    rimLight.position.set(3, 1.5, -3);
    scene.add(rimLight);
    const fillLight = new THREE.PointLight('#b12d4a', 1.4, 9);
    fillLight.position.set(0, -1.4, 3);
    scene.add(fillLight);

    const driver = createDriver();
    scene.add(driver);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let dragging = false;
    let hovered = false;
    let visible = false;
    let previousX = 0;
    let previousY = 0;
    let velocity = 0;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.position.z = width < 480 ? 8.9 : 7.6;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(host);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frame) {
        previousTime = 0;
        frame = requestAnimationFrame(animate);
      } else if (!visible && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    visibilityObserver.observe(host);

    const onPointerDown = (event) => {
      dragging = true;
      previousX = event.clientX;
      previousY = event.clientY;
      renderer.domElement.setPointerCapture(event.pointerId);
    };
    const onPointerMove = (event) => {
      if (!dragging) return;
      const deltaX = event.clientX - previousX;
      const deltaY = event.clientY - previousY;
      driver.rotation.y += deltaX * 0.009;
      driver.rotation.x = THREE.MathUtils.clamp(driver.rotation.x + deltaY * 0.006, -0.32, 0.32);
      velocity = deltaX * 0.0002;
      previousX = event.clientX;
      previousY = event.clientY;
    };
    const onPointerUp = () => { dragging = false; };
    const onPointerEnter = () => { hovered = true; };
    const onPointerLeave = () => { hovered = false; dragging = false; };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('pointercancel', onPointerUp);
    renderer.domElement.addEventListener('pointerenter', onPointerEnter);
    renderer.domElement.addEventListener('pointerleave', onPointerLeave);

    let previousTime = 0;
    const animate = (time) => {
      frame = 0;
      if (!visible) return;
      frame = requestAnimationFrame(animate);
      const delta = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;
      if (!dragging) {
        if (!reducedMotion) driver.rotation.y += delta * (hovered ? 0.38 : 0.22);
        driver.rotation.y += velocity;
        velocity *= 0.94;
      }
      renderer.render(scene, camera);
    };
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      renderer.domElement.removeEventListener('pointercancel', onPointerUp);
      renderer.domElement.removeEventListener('pointerenter', onPointerEnter);
      renderer.domElement.removeEventListener('pointerleave', onPointerLeave);
      driver.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
          else object.material.dispose();
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="driver-3d"
      role="img"
      aria-label="Interactive three-dimensional racing driver. Drag to rotate."
      title="Drag to rotate"
    />
  );
}
