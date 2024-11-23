import { UseRecipesContext } from "../hooks/UseRecipesContext"

const RecipeDetails = ({ recipe }) => {
    const { dispatch } = UseRecipesContext()

    const handleClick = async () => {
        const response = await fetch('/api/api/recipes/' + recipe._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: "DELETE_RECIPE", payload: json})
        }
    }

    return (
        <div className="recipe-details">
            <h4>{recipe.title}</h4>
            <p><strong>Author: </strong>{recipe.author}</p>
            <p><strong>Last Updated: </strong>{recipe.createdAt}</p>
            <p><strong>Steps: </strong>{recipe.steps}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default RecipeDetails