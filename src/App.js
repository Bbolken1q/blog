import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber'
import Sphere from './sphere';

function App() {
  return (
    <Canvas camera={{ position: [0, 5, 1] }} className='FaceCanvas'>
      <Sphere />
    </Canvas>
  );
}

export default App;
