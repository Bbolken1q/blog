import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber'
import Sphere from './components/sphere';
import Navbar from './components/navbar'
import MainContent from './components/mainContent';
import { ActionContainer } from './components/githubHistoryContainer';
import { Action } from './components/action';
import { searchbar as Mssearchbar } from './components/searchbar';
import getContributedRepos from './components/githubActionGetter';




function App() {
  // getContributedRepos("Bbolken1q")
  return (
    <div>
    <a href="/">
      <Canvas camera={{ position: [0, 5, 1] }} className='faceCanvas'>
        <Sphere />
      </Canvas>
    </a>
    <Mssearchbar/>
    <Navbar />
    <ActionContainer><div>asdf</div></ActionContainer>
    <MainContent/>
    </div>
  );
}

export default App;
