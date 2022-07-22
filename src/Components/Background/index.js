import React, { Component,useRef} from 'react'
import './Background.css';
import mt1 from './mt1.svg'
import mt2 from './mt2.svg'
import mt3 from './mt3.svg'
export class BackGround extends Component {

  
  componentDidMount() {
    document.addEventListener("mousemove", this.parallax);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.parallax);
  }

  parallax = (e) =>
  {
    document.querySelectorAll(".layer").forEach(element => {
      const speed = element.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed*0.5) / 100;
      element.style.transform = "translateX(" + -x + "px) translateY(" + y + "px)";
    });
  }

  render() {   
    return (
        <div className='Background'>
          <div className='mt-2'>
            <img src={mt2} class ='layer' data-speed ='1'></img>
          </div>
          <div className='mt-1'>
            <img src={mt1} class ='layer' data-speed ='0.5'></img>
          </div>
          <div className='mt-3'>
            <img src={mt3} class ='layer' data-speed ='1'></img>
          </div>
        </div>
    )
  }
}

export default BackGround