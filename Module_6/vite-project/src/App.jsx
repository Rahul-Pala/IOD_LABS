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
import FullName from './Components/FullName'
import NamePart from './Components/NamePart'
import ComplexComment from './Components/ComplexComment'
import Callout from './Components/Callout'
import MoviesList from './Components/MoviesList'
import BigCats from './Components/BigCats'
import Greet from './ComponentsStudy/Greet'

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

const comment = {
  date: new Date(),
  text: 'I hope your enjoy learning React!',
  author: {
    name: 'Hello Mikky',
    avatarUrl: 'https://placekitten.com/g/64/64',
  }

}

  return (
    <div>
      <Greet name="SRK" heroname="Badshah">
      <p>This is children</p></Greet>
      <Greet name="Rahul" heroname="Superman"/>
      <Greet name="Spider" heroname="man"/>
      <h2 >HELLO UNIVERSE</h2>
      <BigCats></BigCats>
      <MoviesList></MoviesList>
      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition">
          <p>yellow</p>
        <FullName firstName="Elon" lastName="Musk" />
      </Callout>
      {/*<ComplexComment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      >
        {" "}
  </ComplexComment>*/}
      <FullName firstName="Rahul" lastName="Pala"></FullName>
      <h1>My first react app</h1>
      <label>Username</label>
      {jsxcode}
      <p id={idname}> idname paragraph</p>
      <button onClick={handlebuttonclick}>clickMe</button>
      {spideyJSX}
      <Userinfo firstName="Rahul" lastName="Pala">
        <p>Children of UserInfo component</p>{" "}
        {/*Children of Userinfo component*/}
      </Userinfo>
      <Contact></Contact>
      <PropsDisplayer pets={["cat", "dog", "goldfish"]}></PropsDisplayer>
      <Pet name="Raooul"></Pet>
      <Greeting name="John">
        <p>Children of greeting component</p>
      </Greeting>
    </div>
  );
}

export default App

