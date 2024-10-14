import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import './Hero.css';
import Image from 'next/image';
import { GreenPrimaryButton, PrimaryButton, SecondaryButton } from '../shared/Typography/Buttons';
import Link from 'next/link';
// import robot from "/assets/images/robot.png"

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

  const mainFontSize = Math.min(viewport.width * 0.19, 3.5);
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
    <div className='relative h-screen p-4 mx-auto overflow-hidden md:h-screen'>
      <div className='absolute inset-0 z-0 bg-hero-primary' />

      <div className='absolute inset-0 z-10 flex items-end justify-center'>
        <div className='relative aspect-square md:w-[90%] max-h-[90%] -translate-x-8 md:-translate-x-0 h-[87dvh] xxxs:h-[85dvh]'>
          <Image
            src='/assets/images/robot.png'
            alt='Robot image'
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      <div className='absolute inset-0 z-20 flex flex-col items-center justify-center my-12'>
        <Canvas dpr={[1, 2]} style={{ background: 'transparent' }}>
          <Scene />
        </Canvas>
        <div className='h-[40dvh] flex flex-col justify-center items-center relative gap-2 mb-12 md:mb-0'>
          <Image
            src='/assets/images/pfp.png'
            alt='hello'
            width={200}
            height={100}
            className='hidden sm:block'
          />
          <div className='text-2xl font-bold text-center font-prompt'>
            Navigating the tech cosmos and shaping the future landscape
          </div>
          <div className='font-bulgatti absolute bottom-0 right-0 translate-x-[20%] md:translate-x-1/2 scale-[60%] sm:scale-80 md:scale-100 translate-y-1/2 md:translate-y-[20%]'>
            <Image src='/assets/images/are_u_ready.svg' alt='' width={300} height={100} />
          </div>
        </div>
        <div className='flex gap-8'>
          <Link href='/register'>
            <PrimaryButton>Register</PrimaryButton>
          </Link>
          <Link
            href='https://drive.google.com/file/d/1jWXT8ShzBW5KTn50DrTsgSqLgmSJMwTO/view?usp=sharing'
            target='_blank'
          >
            <GreenPrimaryButton>Brochure</GreenPrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
