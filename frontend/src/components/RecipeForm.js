import { useState } from 'react'
import { UseRecipesContext } from "../hooks/UseRecipesContext"

const RecipeForm = () => {
    const { dispatch } = UseRecipesContext()

    const [title, setTitle] = useState('') 
    const [steps, setSteps] = useState('')
    const [author, setAuthor] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const recipe = {title, author, steps}

        const response = await fetch('/api/api/recipes', {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            setTitle('')
            setSteps('')
            setAuthor('')
            setError(null)
            dispatch({type: 'CREATE_RECIPE', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Recipe</h3>
            <label>Recipe Title:</label>
            <input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

        <label>Recipe Author</label>
            <input 
                type="text" 
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
            />

        <label>Recipe Steps</label>
            <input 
                type="number" 
                onChange={(e) => setSteps(e.target.value)}
                value={steps}
            />

        <button>Add Recipe</button>
        {error && <div className="error">{error}</div>}
        </form>
    )
}

export default RecipeForm