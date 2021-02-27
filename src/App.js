import './App.css';
import Header from './components/Header'
import Jobs from './components/Jobs'
import AddForm from './components/AddForm'
import {useState} from 'react'

const App =() => {
  const [jobs, setJobs] = useState([]);
  const [showAddJob, setShowAddJob] = useState(true)

  const addJob = (job) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newJob = {id, ...job};
    setJobs([...jobs, newJob]);
  }

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id))
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddJob(!showAddJob)} showAdd={showAddJob}/>
      {showAddJob && <AddForm  onAdd={addJob}/>}
      <Jobs jobs={jobs} onDelete={deleteJob} />
    </div>
  );
}

export default App;
