const RecipeDetails = ({ recipe }) => {
    return (
        <div className="recipe-details">
            <h4>{recipe.title}</h4>
            <p><strong>Author: </strong>{recipe.author}</p>
            <p><strong>Last Updated: </strong>{recipe.createdAt}</p>
            <p><strong>Steps: </strong>{recipe.steps}</p>
        </div>
    )
}

export default RecipeDetails