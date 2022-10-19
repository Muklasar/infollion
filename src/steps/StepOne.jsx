import { useState } from 'react'
import z1_1 from '../assects/z1/1,1.png'

const StepOne = ({ oneRef, imgOneStyle, stepOneHandler }) =>{
    const [state, setState] = useState({message: ''})
    console.log(state?.message)
    const handleEvent = (event) => {
        console.log('event', event.type)
        // if (event.type === "mousedown") {
        //        setState({ message: "Mouse Down"});
        //    } else {
        //        setState({ message: "Mouse Up"});
        //    }
       }
    return(
        <div className=''>
            <img src={z1_1} style={imgOneStyle} onClick={stepOneHandler} onWheel={stepOneHandler}/>
            {/* <img src="https://firebasestorage.googleapis.com/v0/b/varun-3e55f.appspot.com/o/images%2Fz1%2F1%2C1.png?alt=media&token=6a440154-18d0-4a9a-aac4-7bf861922a4b" /> */}
        </div>
    )
}

export default StepOne