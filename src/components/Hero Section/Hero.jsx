import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const ReflectiveText = ({ children, ...props }) => {
  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: props.color,
      metalness: 1,
      roughness: 0.2,
    });
  }, [props.color]);

  const textRef = useRef();

  return (
    <Text
      ref={textRef}
      {...props}
      material={material}
      material-transparent={true}
      material-opacity={1}
      depth={0.5}
      rotation={[0, 0, 0]}
    >
      {children}
    </Text>
  );
};

const Scene = () => {
  const { viewport } = useThree();
  const groupRef = useRef();
  const lightRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePos.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = mousePos.current.x * viewport.width;
      lightRef.current.position.y = mousePos.current.y * viewport.height;
    }
  });

  const mainFontSize = Math.min(viewport.width * 0.15, 3.5);
  const subFontSize = Math.min(viewport.width * 0.12, 2.5);

  return (
    <group ref={groupRef}>
      <ReflectiveText
        position={[0, 0, 0]}
        fontSize={mainFontSize}
        color='#FFFFFF'
        anchorX='center'
        anchorY='middle'
        font='/assets/fonts/Techno.ttf'
      >
        INNOVISION
      </ReflectiveText>
      <ReflectiveText
        position={[viewport.width / 3.8, -mainFontSize / 1.4, 0]}
        fontSize={subFontSize}
        color='#FFFFFF'
        anchorX='end'
        anchorY='middle'
        font='/assets/fonts/Techno.ttf'
      >
        24
      </ReflectiveText>

      {/* Moving light */}
      <directionalLight
        ref={lightRef}
        intensity={1}
        angle={0.3}
        penumbra={0.5}
        castShadow
        position={[0, 0, 5]}
        color='blue'
      />

      <directionalLight
        intensity={10}
        color='white'
        position={[viewport.width / 2, -viewport.height / 2, 50]}
      />
    </group>
  );
};

const Hero = () => {
  return (
    <div className='relative h-auto md:h-screen mx-auto'>
      <Canvas
        dpr={[1, 2]}
        style={{
          backgroundColor: '#070c23',
          backgroundImage: 'url(/static/images/noise&texture.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero;
