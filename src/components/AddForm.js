import React from 'react'
import {useState} from 'react'

const AddForm = ({onAdd}) => {
    const [title, setTitle] = useState("")
    const [tech, setTech] = useState("")
    const [level, setLevel] = useState("")
    const [type, setType] = useState("")
    const [deadline, setDeadline] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();

        if((!title) || (!tech) || (!level) || (!type) || (!deadline)) {
            alert("Please add text into a form");
            return
        }

        onAdd({title, tech, level, type, deadline});
        
        setTitle("");
        setTech("");
        setLevel("");
        setType("");
        setDeadline("");
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Job Title</label>
                <input type="text" placeholder="Job Title" 
                value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div className="form-control">
                <label>Technology</label>
                <input type="text" placeholder="Job Tech"
                value={tech} onChange={(event) => setTech(event.target.value)}/>
            </div>
            <div className="form-control">
                <label>Job Level</label>
                <input type="text" placeholder="Job Level" 
                value={level} onChange={(event) => setLevel(event.target.value)}/>
            </div>
            <div className="form-control">
                <label>Job Type</label>
                <input type="text" placeholder="Job Type" 
                value={type} onChange={(event) => setType(event.target.value)}/>
            </div>
            <div className="form-control">
                <label>Deadline</label>
                <input type="text" placeholder="Job Deadline"
                value={deadline} onChange={(event) => setDeadline(event.target.value)}/>
            </div>
            <input type="submit" value="Save" className="btn btn-block"/>
        </form>
    )
}

export default AddForm
