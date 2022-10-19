import React, { useState } from "react";
import z1_1 from './assects/z1/1,1.png'
import { SideScrollTest } from "./scroll/one";


// import StepOne from "./steps/StepOne"

import { useRef } from "react"
import StepOne from "./steps/StepOne"
import StepThree from "./steps/StepThree"
import StepTwo from "./steps/StepTwo"

const App = () => {
  const [stepOne, setStepOne] = useState(
    { width: 500, height: 500, show: true }
  )
  const [stepTwo, setStepTwo] = useState(
    { width: 500, height: 500, show: false }
  )
  const [stepThree, setStepThree] = useState(
    { width: 1000, height: 800, show: false }
  )
  const oneRef = useRef()
  const stepOneHandler = () => {
    if(stepOne.width > 600){
      setStepOne({ width: 0, height: 0, show: false })
      setStepTwo({ width: '800px', height: '800px', show: true })
    }else{
      setStepOne({ width: stepOne.width + 100, height: stepOne.height + 100, show: true })
    }
  }
  const stepTwoHandler = () => {
    if(stepTwo.width > 1200){
      setStepTwo({ width: stepTwo.width, height: stepTwo.height, show: false })
      setStepThree({ width: 800, height: 500, show: true })
    }else{
      setStepTwo({ width: stepTwo.width + 50, height: stepTwo.height + 50, show: true })
    }
  }
  const stepThreeHandler = () => {
    if(stepTwo.width > 1200){
      setStepThree({ width: stepThree.width, height: stepThree.height, show: false })
      // setStepThree({ width: 800, height: 500, show: true })
    }else{
      setStepThree({ width: stepThree.width + 50, height: stepThree.height + 50, show: true })
    }
  }
  const scrollOne = (e) => {
    console.log('e',e)
    // setStepOne({ width: stepOne.width + 100, height: stepOne.height + 100, show: true })
    if(stepOne.width > 600){
      setStepOne({ width: 0, height: 0, show: false })
      setStepTwo({ width: 500, show: true })
    }else{
      setStepOne({ width: stepOne.width + 100, height: stepOne.height + 100, show: true })
    }
  }
  const scrollTwo = (e) => {
    if(stepTwo.width > 800){
      setStepTwo({ width: stepTwo.width, height: stepTwo.height, show: false })
      setStepThree({ width: 400, height: 400, show: true })
    }else{
      setStepTwo({ width: stepTwo.width + 100, show: true })
    }
  }
  const imgOneStyle = { height: stepOne.height, width: stepOne.width }
  const divTwoSize = { width: stepTwo.width }
  console.log('step', stepOne.show)
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ width: '100vw', height: '100vh'}}>
      {stepOne.show ? <StepOne imgOneStyle={imgOneStyle} stepOneHandler={scrollOne}/> : ''}
      {stepTwo.show ? <StepTwo divTwoSize={divTwoSize} stepTwoHandler={scrollTwo}/> : ''}
      {stepThree.show ? <StepThree imgThreeStyle={imgOneStyle} stepThreeHandler={stepThreeHandler}/> : ''}
    </div>
    // // <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh', marginTop:"10px" }}>
    //   <div>
    //     <img src={z1_1} onWheel={scroll} style={imgOneStyle}/> 
    //   </div>
      
      
  )
}

export default App

// const App = () => {
//   const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });

//   const onScroll = (e) => {
//     const delta = e.deltaY * -0.01;
//     const newScale = pos.scale + delta;

//     const ratio = 1 - newScale / pos.scale;

//     setPos({
//       scale: newScale,
//       x: pos.x + (e.clientX - pos.x) * ratio,
//       y: pos.y + (e.clientY - pos.y) * ratio
//     });
//   };

//   return (
//     // <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center', width: '100vw', height: '100vh' }}>
//       <div onWheelCapture={onScroll}>
//         <img
//           src={z1_1}
//           // src="https://source.unsplash.com/random/300x300?sky"
//           style={{
//             transformOrigin: "0 0",
//             transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`
//           }}
//         />

//       </div>
//     // </div>
//   );
// };

// export default App
