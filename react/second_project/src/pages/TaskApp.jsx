import React from 'react'
import Navbar from '../components/Navbar'

const TaskApp = () => {
    let taskArr = [
        {id:1 , taskName:'html study', status:'incompleted'},
        {id:2 , taskName:'css study', status:'incompleted'},
        {id:3 , taskName:'js study', status:'completed'},
    ]

  return (
    <div>
        <Navbar/>
      <h1>This is Task App</h1>

      <table border={1} cellPadding={10}>
            <thead>
                    <tr>
                        <th>Sno</th>
                        <th>TaskName</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
            </thead>

            <tbody>
                    {/* <tr>
                        <td>1</td>
                        <td>html study</td>
                        <td>incompleted</td>
                    </tr> */}

                    {
                        taskArr.map((val , i)=>{
                            return <tr>
                                <td>{val.id}</td>
                                <td>{val.taskName}</td>
                                <td>{val.status}</td>
                                <td><button>Delete</button></td>
                            </tr>
                        })
                    }
            </tbody>
      </table>
    </div>
  )
}

export default TaskApp
