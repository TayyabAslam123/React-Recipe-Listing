import React from 'react'
import { useState } from "react"


const AddRecipe = ({addNew}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const addNewRecipe =(e)=>{
        e.preventDefault();
        // If value missing
        if(!title || !desc){
            alert('Please complete title or description to add recipe.');
        }
        // Call function
        addNew(title, desc);
        // Reset form values
        setTitle('');
        setDesc('');

    }

    return (
        <div className="mt-4 p-5 bg-secondary text-white ">
            <h3 className="text-center">Add Recipe</h3>
            <form onSubmit={addNewRecipe}>
                <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" value={title} onChange={(e)=>setTitle(e.target.value)}
                />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                </div>

                <div className="d-grid gap-2">
                    <button className="btn btn-success" type="submit">ADD</button>
                </div>
            </form>
        </div>
    )
}

export default AddRecipe
