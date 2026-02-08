"use client"
import React, { useEffect, useState } from 'react'
import { listProjects } from "../../services/project.service"
import { listTasks } from '../../services/task.service'
import "./Stats.css"
const Stats = () => {

    const [totalProjects, setTotalProjects] = useState(0)
    const [totalTasks, setTotalTasks] = useState(0)
    const [completedTasks, setCompletedTasks] = useState(0)
    const [pendingTasks, setPendingTasks] = useState(0)
    
    useEffect(() => {
        const projects = listProjects()
        const tasks = listTasks()

        setTotalProjects(projects.length);
        setTotalTasks(tasks.length);
        setCompletedTasks(tasks.filter(task => task.done).length);
        setPendingTasks(tasks.filter(task => !task.done).length);
    }, [])

  return (
    <div className="statsContainer">
      <div className="statsCard">
        <span>
Total projects</span>
        <strong className='statsStrong'>{totalProjects} 
          <span className="material-symbols-outlined">
            deployed_code
          </span>
        </strong>
      </div>

      <div className="statsCard">
        <span>Total tasks</span>
        <strong className='statsStrong'>{totalTasks} 
          <span className="material-symbols-outlined">
            assignment
          </span>
        </strong>
      </div>

      <div className="statsCard">
        <span>Completed tasks</span>
        <strong className='statsStrong'>{completedTasks}
          <span style={{color: "green"}} className="material-symbols-outlined">
            check_circle
          </span>
        </strong>
      </div>

      <div className="statsCard">
        <span>Pending tasks</span>
        <strong className='statsStrong'>{pendingTasks} 
          <span style={{color: "orange"}} className="material-symbols-outlined">
            clock_loader_10
          </span>
        </strong>
      </div>
    </div>
  );
}
export default Stats