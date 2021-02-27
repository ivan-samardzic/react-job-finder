import React from 'react'
import Job from './Job'

const Jobs = ({jobs, onDelete}) => {
    
    return (
        <div>
            {jobs.map((job) => (
                <Job key={job.id} job={job} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default Jobs
