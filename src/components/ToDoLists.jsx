import React from 'react'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';


export default function ToDoLists(props) {
  return (
    <>
    <div className="todo_style">
      <DeleteSweepIcon 
              color="inherit"
              sx={{ "&:hover": { color: "red" } }}
              onClick={() => {
        props.onSelect(props.id)
      }} />
      <li>{props.item}</li>
    </div>
    </>
  )
}
