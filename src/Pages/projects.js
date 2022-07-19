import React, { Component } from 'react'
import './projects.css'
import Card from '../Components/Cards/projectCard'
export class project extends Component {

  render() {
    const projectLogos = ['/ProjectLogos/Pandemic.png','/ProjectLogos/Flappy.png','/ProjectLogos/EduAR.png','/ProjectLogos/Office.png'];

    return (
      <div className='projects'>
        <div className='projects__header'>Projects</div>
        <div className='cards'>
          <Card img={process.env.PUBLIC_URL + projectLogos[0]} title='Pandemic Simulator' author='Unity' />
          <Card img={process.env.PUBLIC_URL + projectLogos[1]} title='Flappy Bird AI' author='Unity' />
          <Card img={process.env.PUBLIC_URL + projectLogos[2]} title='EduAR' author='Unity' />
          <Card img={process.env.PUBLIC_URL + projectLogos[3]} title='Office Marathon' author='Unity' />
        </div>
      </div>
    )
  }
}

export default project