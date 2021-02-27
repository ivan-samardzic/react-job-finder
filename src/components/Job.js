import React from 'react'

const Job = ({job, onDelete}) => {
    return (
        <div className="job">
            <h3><span>{job.level}</span> {job.title}
            </h3>
            <h4>{job.tech}</h4>
            <h4>{job.deadline}</h4>
            <button onClick={() => onDelete(job.id)} className="btn" style={{backgroundColor : "white", border : "2px solid gray"}}>
                <i style={{color : "gray", cursor : "pointer", fontSize : "20px"}} className="fas fa-trash-alt"></i>
            </button>
            
        </div>
    )
}

export default Job
