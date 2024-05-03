import React from 'react'
import BasicSelect from './BasicSelect'
import { useSelector } from 'react-redux'
import selectionBox from './index.js'


const Appbar = () => {
    const state = useSelector(state => state.state)
  return (
    <div className='h-32 flex'>      
           <div  >
                <BasicSelect/>
           </div>
       
    </div>
  )
}

export default Appbar