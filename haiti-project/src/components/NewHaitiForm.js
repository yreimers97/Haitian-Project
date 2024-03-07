import React from "react";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function NewHaitiForm(){
  
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    category: ""
  })

  const navigate = useNavigate()
  const {addForm} = useOutletContext()

    //post

    function handleSubmit(event){
      event.preventDefault()

      addForm(formData)
      setFormData({name: "", image: ""})
      navigate('/haiti-culture')
      
    }

    function updateFormData(event) {
      setFormData({...formData, [event.target.name] : event.target.value})
    }

    return(
      <div className="new-form">
        <h2>Enter New Details</h2>
        <form onSubmit={handleSubmit}>
        <input  onChange={updateFormData} type="text" name="name" placeholder="Name" value={formData.name}/>
        <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image}/>
        <select onChange={updateFormData} name="category" placeholder="Select" value={formData.category}>
          <option value="true">Food</option>
          <option value="false">Landmarks</option>
        </select>

        {/* <input onChange={updateFormData} type="text" name="category" placeholder="Category" value={formData.category}/> */}
        <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default NewHaitiForm