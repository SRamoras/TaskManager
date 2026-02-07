import React from 'react'
import { Task } from "../../../../types/Task"

type TaskCardProps = {
    task: Task;
    setDone: (id: string) => void;
};

const TaskCard = ({task, setDone}: TaskCardProps) => {
    return (
        <div>
            <p>{task.title}</p>
            <input type="checkbox" checked={task.done} onChange={() => {setDone(task.id)}} />
        </div>
    )
}

export default TaskCard