import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header/Header';
import ItemBoard from './components/item-board/ItemBoard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <Header/>
    <br></br>
    <ItemBoard/>
    </div>
  )
}

export default App
