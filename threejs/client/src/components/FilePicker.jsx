import React from 'react'
import { useSnapshot } from 'valtio'

import CustomButton from './CustomButton'
import { getContrastingColor } from '../config/helpers'
import state from '../store'

const FilePicker = ({ file, setFile, readFile }) => {
    const snap = useSnapshot(state)
  return (
    <div className='filepicker-container'>
        <div className='flex-1 flex flex-col'>
            <input 
                id='file-upload'
                type='file'
                accept='image/*'
                onChange={ (e) => setFile(e.target.files[0]) }
            />
            <label 
                htmlFor='file-upload' 
                className='filepicker-label' 
                style={{borderColor:getContrastingColor(snap.color), color:getContrastingColor(snap.color)}}
            >
                Upload File
            </label>
            <p className='mt-2 text-500 text-xs truncate' style={{color:getContrastingColor(snap.color)}}>
                {file ? file.name : 'No file selected'}
            </p>
        </div>
        <div className='mt-4 flex flex-wrap gap-3'> 
            <CustomButton 
                type='outline'
                title='Logo'
                handleClick={ ()=>readFile('logo') } 
                customStyles='text-xs'
            /> 
            <CustomButton 
                type='filled'
                title='Full'
                handleClick={ ()=>readFile('full') } 
                customStyles='text-xs'
            /> 
        </div>
    </div>
  )
}

export default FilePicker