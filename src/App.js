import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber'
import Sphere from './components/sphere';
import Navbar from './components/navbar'
import MainContent from './components/mainContent';
import { ActionContainer } from './components/githubHistoryContainer';
import { searchbar as Mssearchbar } from './components/searchbar';
import Clock from './components/clock';
import RandomPhoto from './components/randomPhoto';

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
     <Clock />
     <RandomPhoto />
    </div>
  );
}

export default App;

/*

DONE: Menu zawierające min 5 pozycji (jedna pozycja = jeden artykuł) // na koniec
DONE: Zamieszczony dowolny film 
DONE: Dowolna galeria zdjęć (min 10 zdjęć) pod osobną pozycją w menu  
DONE: Zegar cyfrowy (dowolny)
DONE: Moduł z losowo wyświetlanym zdjęciem 
DONE: Mapy google z dowolną lokalizacją  
DONE: Wybrany przez siebie dowolny moduł rozszerzający funkcjonalność strony 

*/
