import React from 'react'
import BasicSelect from './BasicSelect'
import { useSelector } from 'react-redux'
import JobList from './JobList'


const Appbar = () => {
    const state = useSelector(state => state.state)
  return (
    <div>
      <div className='h-32 '>
          <BasicSelect/>
      </div>
    </div>
  )
}

export default Appbar