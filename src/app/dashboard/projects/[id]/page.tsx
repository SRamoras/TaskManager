"use client"
import React, { useEffect, useState } from 'react'
import {listTasks, addTask, toggleTaskDone} from "../../../../services/task.service"
import { useParams } from "next/navigation";
import {Task} from "../../../../types/Task"
import TaskCard from "./TaskCard"
const page = () => {
  const { id } = useParams<{ id: string }>();
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState("")
  
  useEffect(() => {
    setTasks(listTasks())
  }, [])

  function setDone(taskID: string): void{
    toggleTaskDone(taskID)
    setTasks(listTasks())
  }

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        addTask(id, title)
        setTasks(listTasks())
      }}>
        <label htmlFor="title">title</label>
        <input id="title" type="title" value={title} onChange={e => setTitle(e.target.value)} />
        <input type='submit' value="Add Task"/>
      </form>
      {
        tasks.filter(task => task.projectId === id).map(task => (
          <TaskCard
            key={task.id}
            task={task}
            setDone={setDone}
          />
        ))
      }
    </div>
  )
}

export default page