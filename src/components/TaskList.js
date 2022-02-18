import { useState, useEffect } from 'react';
import {List} from 'antd';
import Task from './Task';

const fakeTasks = [
    
]

const tasks = [
    {id: 1, task: 'Buy Chanel Bag', done: false},
    {id: 2, task: 'Drive Tesla', done: false},
    {id: 3, task: 'Buy Europe Plane Ticket', done: false},
    {id: 4, task: 'Buy Teacup puppy', done: false},
    {id: 5, task: 'Eat Birria Tacos', done: false},
]

export default function TaskList() {
    const [tasks, setTasks] = useState()
    return(
        <List 
        bordered
        dataSource={tasks}
        renderItem={item => <Task item={item} />}
        />
    )
}