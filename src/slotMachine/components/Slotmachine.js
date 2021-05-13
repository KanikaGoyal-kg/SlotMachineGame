import React from 'react';

const SlotM = (props) => {

    // let x = props.x;
    // let y =  props.y;
    // let z = props.z;

    // or

    let { x, y, z } = props

    if ((x===y) && (y===z)) {
        return (
            <>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 style={{marginBottom: '0px'}}> {x} {y} {z} </h1>
                <h1>This is matching.</h1>
                <hr style={{width: '100%'}} />
            </div>
            </>
        )
    }else {
        return (
            <>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 style={{marginBottom: '0px'}}> {x} {y} {z} </h1>
                <h1>This is not matching.</h1>
                <hr style={{width: '100%'}} />
            </div>
            </>
        )
    }
}

export default SlotM;
