import z3_1_1 from '../assects/z3/1,1.png'
import z3_1_2 from '../assects/z3/1,2.png'
import z3_1_3 from '../assects/z3/1,3.png'
import z3_1_4 from '../assects/z3/1,3.png'
import z3_2_1 from '../assects/z3/2,1.png'
import z3_2_2 from '../assects/z3/2,2.png'
import z3_2_3 from '../assects/z3/2,3.png'
import z3_2_4 from '../assects/z3/2,4.png'
import z3_3_1 from '../assects/z3/3,1.png'
import z3_3_2 from '../assects/z3/3,2.png'
import z3_3_3 from '../assects/z3/3,3.png'
import z3_3_4 from '../assects/z3/3,4.png'

const StepThree = ({ oneRef, imgOneStyle, stepThreeHandler }) =>{
    const imgTwoStyle = { height: '100%', width: "100%" }
    const divTwo = {width: `${500}px`}
    return(
        <div style={divTwo} >
            <div className="row p-0 m-0"  style={imgTwoStyle}>
                <div className='col-3 p-0 m-0'>
                    <img src={z3_1_1}  style={imgTwoStyle} />
                </div>
                <div className='col-3 p-0 m-0'>
                    <img src={z3_1_2}  style={imgTwoStyle} />
                </div>
                <div className='col-3 p-0 m-0'>
                    <img src={z3_1_3}  style={imgTwoStyle} />
                </div>
                <div className='col-3 p-0 m-0'>
                    <img src={z3_1_4}  style={imgTwoStyle} />
                </div>
                <div className='col-3 p-0 m-0'>
                    <img src={z3_2_1}  style={imgTwoStyle} />
                </div>
                <div className='col-3 p-0 m-0'>
                    <img src={z3_2_2}  style={imgTwoStyle} />
                </div>
                <div className='col-3 p-0 m-0'>
                    <img src={z3_2_3}  style={imgTwoStyle} />
                </div>
                <div className='col-3 p-0 m-0'>
                    <img src={z3_2_4}  style={imgTwoStyle} />
                </div>
                <div className='col-3 p-0 m-0'>
                    <img src={z3_3_1}  style={imgTwoStyle} />
                </div>
                <div className='col-3 p-0 m-0'>
                    <img src={z3_3_2}  style={imgTwoStyle} />
                </div>
                <div className='col-3 p-0 m-0'>
                    <img src={z3_3_3}  style={imgTwoStyle} />
                </div>
                <div className='col-3 p-0 m-0'>
                    <img src={z3_3_4}  style={imgTwoStyle} />
                </div>
            </div>
        </div>
    )
}

export default StepThree