import React, { Component } from 'react'
import './projects.css'
import Card from '../Components/Cards/projectCard'
export class project extends Component {

  render() {
    const projectLogos = ['/ProjectLogos/Pandemic.png','/ProjectLogos/Flappy.png'];

    return (
      <div className='projects'>
        <div className='projects__header'>Projects</div>
        <div className='cards'>
          <Card img={process.env.PUBLIC_URL + projectLogos[0]} title='Pandemic Simulator' author='Unity' />
          <Card img={process.env.PUBLIC_URL + projectLogos[1]} title='Flappy Bird AI' author='Unity' />
        </div>
      </div>
    )
  }
}

export default project