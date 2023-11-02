import React, { useState } from "react";
import '../App.css'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
} from "reactstrap";

const CreateTask = ({modal, toggle, save}) => {

    const [taskName, setTaskName] = useState ('')
    const [description, setDescription] = useState("")

    const handleChange = (e) =>{
//    const name = e.target.name
//    const value = e.target.value

   const {name, value} = e.target

   if(name == "taskName"){
    setTaskName(value)
   } else{
    setDescription(value)
   }


    }
 
    const handleSave = () =>{
        let taskObj = {}
        taskObj ["Name"] = taskName
        taskObj ["Description"] = description

        save(taskObj)
    }
    
  return (
    <div className="create-task">
    <Modal isOpen={modal} toggle={toggle}  >
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form className="create-form">
       <div className="form-group">
        <label>Task Name</label>
        <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName"/>
       </div>
       <div className="form-group mt-3">
        <label>Description</label>
        <textarea  rows="5" className="form-control mt-1" value={description} onChange={handleChange} name="description"></textarea>
       </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
        Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
    </div>
  );
}

export default CreateTask;
