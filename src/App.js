import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber'
import Sphere from './components/sphere';
import Navbar from './components/navbar'
import MainContent from './components/mainContent';
import { ActionContainer } from './components/githubHistoryContainer';
import { searchbar as Mssearchbar } from './components/searchbar';

function App() {
  return (
    <div>
    <a href="/">
      <Canvas camera={{ position: [0, 5, 1] }} className='faceCanvas'>
        <Sphere />
      </Canvas>
    </a>
    <Mssearchbar/>
    <Navbar />
    <ActionContainer />
    <MainContent/>
    </div>
  );
}

export default App;
