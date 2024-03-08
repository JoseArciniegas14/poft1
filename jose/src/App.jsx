import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


function App() {


  return (
    
    <>

    
      <header>
        <ul>
          <li>
            Inicio
          </li>
          <li>
            Sobre mí
          </li>
          <li>
            Proyectos
          </li>
          <li>
            Aprendiendo a hacer enrutamientos, juemadre
          </li>
        </ul>
      </header>

      
      <div className="hero-1">
        <h1>Hola, soy Jose</h1>
        <p>Soy un desarrollador frontend practicando</p>
      </div>

      <div className="about">
        <h1>Me apasiona crear, programar, hacer volar ideas</h1>
        <h2>no sé que decir jaja</h2>
        <p>probando p</p>
      </div>


        
    </>
  )
}

export default App
