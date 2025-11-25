import { useState } from 'react'
import './App.css'
import Keyboard from './components/keyboard'
import { Container } from './components/container';
import SliderLayout from './components/slider'


function App() {
  const [hover, setHover] = useState(false);

  
  return (
    <div>
      <Container className='flex flex-col md:flex-row items-center justify-center gap-6 mt-10'>
        <Keyboard onMouseEnter={()=>setHover(true)}
  onMouseLeave={()=>setHover(false)}/>
        <SliderLayout isHover={hover}/>
      </Container>
    
    </div>
  )
}

export default App
