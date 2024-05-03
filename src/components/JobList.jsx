import React from "react"
import { useSelector } from "react-redux"
import JobCard from "./JobCard"




const JobList = () => {
    const jobs = useSelector(state => state.jobs)

    return (
        <div className='max-h-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-6'>
                <JobCard />
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
        </div>
    )
}


export default JobList;