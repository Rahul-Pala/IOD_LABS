import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userinfo from './Components/Userinfo'
import Contact from './Components/Contact'
import SchoolInfo from './Components/SchoolInfo'
import CollegeInfo from './Components/CollegeInfo'
import PropsDisplayer from './Components/PropsDisplayer'
import Greeting from './Components/Greeting'
import Pet from './Components/Pet'

function App() {
  
  const jsxcode = <p>Paragraph injected from variable</p>
  const idname = "Paragraph1"

  function handlebuttonclick()
  {
    //To DO
  }

  const spiderman = { name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility' };
  const spideyJSX = (<div>
 <h3>{spiderman.name}</h3>
 <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
</div>);

  return (
    <div>
      <h1>My first react app</h1>
      <label>Username</label>
      {jsxcode}
      <p id={idname}> idname paragraph</p>
      <button onClick={handlebuttonclick}>clickMe</button>
      {spideyJSX}
      <Userinfo firstName="Rahul" lastName="Pala">
        <p>Children of UserInfo component</p> {/*Children of Userinfo component*/}
      </Userinfo>
      <Contact></Contact>
      <PropsDisplayer pets={["cat", "dog", "goldfish"]}></PropsDisplayer>
      <Pet name = "Raooul"></Pet>
      <Greeting name="John">
      <p>Children of greeting component</p>
      </Greeting>
    </div>
    
  )
}

export default App

