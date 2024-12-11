

import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';



const ListComponent = () => {

  const [list, setList] = useState([])

  const inputPlaceHolder = 'Tip something to do'

  function addItemToList(text) {
    const tarea = {
      id: crypto.randomUUID(),
      task: text
    }

    setList([...list, tarea])
  }
function deleteItem(id){
  console.log(id)
  setList(list.filter((element) => element.id!==id))
}



  return (<>

    <InputGroup className="mb-3">
      <Form.Control onKeyDown={(e) => {
        if (e.key === "Enter") {
          addItemToList(e.target.value);
          e.target.value=""
         

      }}}
        placeholder={inputPlaceHolder}
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
    {list.map((element) => {
      return (
        <div key={element.id} style={{marginBottom:"5px",width:"100% " , display:"flex" , justifyContent:"space-between"}} >{element.task}
        
        <Button  onClick= {()=>{deleteItem(element.id)}}variant="outline-secondary"> X </Button>
        </div>
      )

    })}

  </>
  )
}

export default ListComponent