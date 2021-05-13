import React from 'react';
import SlotM from './components/Slotmachine'

const SlotMachineGame = (props) => {

    
    return (
        <>
        <div className="main-div">
        <h1 className="header" >
            🎰 Welcome to Slot Machine Game 🎰
        </h1>
        <div className="table">
        <SlotM x= '😄' y= '😄' z= '😄' />
        <SlotM x= '😊' y= '😄' z= '😊'/>
        <SlotM x= '🍎' y= '🥭' z= '🍎'/>
        <SlotM x= '👪' y= '👪' z= '👪'/>
        </div>
        </div>
        </>
    )
}

export default SlotMachineGame;