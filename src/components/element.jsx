import React, { useState } from 'react';



const Element = () => {

    const [backgroundColor, setColor] = useState('rgb(0,0,0)');
    const [manageInterval, setManageInterval] = useState(0);

    function randomInteger(max) {
        return Math.floor(Math.random()*(max + 1));
    }

    const onChangeColor = () => {
      return setManageInterval(setInterval(setBackground, 500));
    };

    const setBackground = () => {
        var newBackground = `rgb(${randomInteger(255)},${randomInteger(255)},${randomInteger(255)})`
        return setColor(newBackground);
    }

    const onStopChangeColor = () => {
        return clearInterval(manageInterval);
    }

    const onClickChangeColor = () => {
        return clearInterval(manageInterval);
    }

    return (
        <div
        id="square"
        onMouseOver={onChangeColor}
        onMouseLeave={onStopChangeColor}
        onDoubleClick={onClickChangeColor}
        style={{ width: '255px', height: '255px', backgroundColor: backgroundColor, margin: '35vh auto' }}
      ></div>
    );
}

export default Element;
