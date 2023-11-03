import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';

import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ title, type, handleClick, customStyles }) => {
    const snap = useSnapshot(state)
    const generateStyle = (type) => {
        switch (type) {
            case "filled":
                return { backgroundColor: snap.color, color: getContrastingColor(snap.color) }
            case "outline":
                return { 
                    backgroundColor: "transparent", 
                    borderColor: getContrastingColor(snap.color), 
                    borderWidth: 1,
                    color: getContrastingColor(snap.color),
                }
            case "text":
                return { backgroundColor: "transparent" }
            default:
                return { backgroundColor: "#0b0b0b" }
        }
    }
  return (
    <button 
        className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`} 
        style={generateStyle(type)}
        onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton