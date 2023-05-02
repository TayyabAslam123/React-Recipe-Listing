import React from 'react'

const RecipeItem = ({ recipe , onDelete}) => {
  return (
    <div>
      <h5>{recipe.title}</h5>
      <p>{recipe.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(recipe)}}>Delete</button>
      <hr></hr>
    </div>
  )
}

export default RecipeItem
