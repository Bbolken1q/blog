import React, { Suspense, useRef} from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import {useLoader, useFrame} from '@react-three/fiber'
import  texture from '../assets/ja.jpg'

function Sphere() {
  const textureMap= useLoader(TextureLoader, texture);
  const mesh = useRef(null);
  useFrame(() => { mesh.current.rotation.y += 0.01 });
  return (  
    <mesh rotation={[-Math.PI / 2, 0, 0]} ref={mesh}>
      <ambientLight intensity={1} />
      <Suspense fallback={<p>loading..</p>}>
        <sphereGeometry attach='geometry' args={[2.5,64]}/>
      </Suspense>
      <meshStandardMaterial map={textureMap} />
    </mesh>
  )
}

export default Sphere