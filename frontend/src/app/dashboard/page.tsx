"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import { getStorageItem } from "../../utils/storage"
import { createProject, listProjects, deleteProject } from "../../services/project.service"
import { Project } from "../../types/Project"
const page = () => {
    const router = useRouter();
    const [name, setName] = useState("")
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        let isSaved = getStorageItem("email")
        if(!isSaved){
            router.push("/");
        }
    }, [router])

    useEffect(() => {
      setProjects(listProjects());
    }, []);


  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        createProject(name)
        setProjects(listProjects())
      }}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <input type="submit" value="Add Project" />
      </form>

      {
      projects.map(project => (
        <div key={project.id}>
          <p>{project.name}</p>
          <button onClick={() => setProjects(deleteProject(project.id))}>Delete Project</button>
        </div>
      ))
      }
    </div>
  )
}

export default page