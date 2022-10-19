import z1_1 from '../assects/z2/1,1.png'
import z1_2 from '../assects/z2/1,2.png'
import z1_3 from '../assects/z2/2,1.png'
import z1_4 from '../assects/z2/2,2.png'

const StepTwo = ({ oneRef, stepTwoHandler, divTwoSize }) => {
    const imgTwoStyle = { height: '100%', width: "100%" }
    const divTwo = {width: `${divTwoSize.width}px`}
    console.log('dixTwo', divTwo)
    return (
        <div style={divTwo} onWheel={stepTwoHandler}>
            <div className="row p-0 m-0"  style={imgTwoStyle}>
                <div className='col-sm-6 col-lg-6 p-0 m-0'>
                    <img src={z1_1} onClick={stepTwoHandler} style={imgTwoStyle} />
                </div>
                <div className='col-6 p-0 m-0'>
                    <img src={z1_2} onClick={stepTwoHandler} style={imgTwoStyle} />
                </div>
                <div className='col-6 p-0 m-0'>
                    <img src={z1_3} onClick={stepTwoHandler} style={imgTwoStyle} />
                </div>
                <div className='col-6 p-0 m-0'>
                    <img src={z1_4} onClick={stepTwoHandler} style={imgTwoStyle} />
                </div>
            </div>
        </div>
        // <div className='row p-0 m-0 w-100' >
        //     <div className='col-sm-6 col-lg-6 p-0 m-0 border'>
        //         <img src={z1_1}  onClick={stepTwoHandler} style={imgTwoStyle}/>
        //     </div>
        //     <div className='col-6 p-0 m-0'>
        //         <img src={z1_2} onClick={stepTwoHandler} style={imgTwoStyle}/>
        //     </div>
        //     <div className='col-6 p-0 m-0'>
        //         <img src={z1_3}  onClick={stepTwoHandler} style={imgTwoStyle}/>
        //     </div>
        //     <div className='col-6 p-0 m-0'>
        //         <img src={z1_4}  onClick={stepTwoHandler} style={imgTwoStyle}/>
        //     </div>
        //</div>
    )
}

export default StepTwo