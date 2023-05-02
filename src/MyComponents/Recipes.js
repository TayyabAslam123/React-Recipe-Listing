import React from 'react'
import RecipeItem from './RecipeItem'

const Recipes = (props) => {
    return (
        <div className="mt-0 p-1 bg-secondary text-white">
            <h1 className="text-center">Recipe List</h1>
            <hr></hr>
            {/* If no recipe exist */}
            {props.recipes_list.length ===0 ?
            <div className="alert alert-warning" role="alert">
                No recipe found !
            </div> :""}

            {props.recipes_list.map(function (item, index) {
                return (
                    <RecipeItem recipe={item} onDelete={props.onDelete} key={index} />
                )
            })}
        </div>
    )
}

export default Recipes
