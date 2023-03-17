import React, { useRef, useState } from 'react';

import { Canvas, useFrame } from '@react-three/fiber'
import { RenderTexture, OrbitControls, PerspectiveCamera, Text, ContactShadows } from '@react-three/drei'
const Banner = () => {
    function Cube() {
        const textRef = useRef()
        useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
        return (
          <mesh>
            <boxGeometry />
            <meshStandardMaterial>
              <RenderTexture attach="map" anisotropy={16}>
                <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
                <color attach="background" args={['orange']} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} />
                <Text ref={textRef} fontSize={4} color="#555">
                  hello
                </Text>
                <Dodecahedron />
              </RenderTexture>
            </meshStandardMaterial>
          </mesh>
        )
      }
      function Dodecahedron(props) {
        const meshRef = useRef()
        const [hovered, hover] = useState(false)
        const [clicked, click] = useState(false)
        useFrame(() => (meshRef.current.rotation.x += 0.01))
        return (
          <group {...props}>
            <mesh
              ref={meshRef}
              scale={clicked ? 1.5 : 1}
              onClick={() => click(!clicked)}
              onPointerOver={() => hover(true)}
              onPointerOut={() => hover(false)}>
              <dodecahedronGeometry args={[0.75]} />
              <meshStandardMaterial color={hovered ? 'hotpink' : '#5de4c7'} />
            </mesh>
          </group>
        )
      }
    return (
        <div className='flex justify-center '>
            <div className='text-white pl-16 pt-20 pb-8'>
                <p className='ml-8 text-4xl pr-8 leading-lose'>Get Set Ready To 
                    <br></br><span className='text-8xl font-bold'>Show The Real</span><br></br>
                    <span className='text-6xl font-bold'>Power OF YOUR<br></br> MIND</span></p>
            </div>
           
                <div style={{height:400,width:400}}>
                <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Cube />
      <Dodecahedron position={[0, 1, 0]} scale={0.2} />
      <ContactShadows frames={1} position={[0, -0.5, 0]} blur={1} opacity={0.75} />
      <ContactShadows frames={1} position={[0, -0.5, 0]} blur={3} color="orange" />
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
    </Canvas>

                </div>
            
        </div>
    );
};

export default Banner;