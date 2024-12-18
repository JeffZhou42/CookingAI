import { useEffect }from 'react'
import { UseRecipesContext } from '../hooks/UseRecipesContext'

//components
import RecipeDetails from '../components/RecipeDetails'
import RecipeForm from '../components/RecipeForm'

const Home = () => {
    const {recipes, dispatch} = UseRecipesContext()

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('/api/api/recipes')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_RECIPES', payload: json})
            }
        }

        fetchRecipes()
    }, [dispatch])
    return (
        <div className="home">
            <div className="recipes">
                {recipes && recipes.map(recipe => (
                    <RecipeDetails recipe={recipe} key={recipe._id} />
                ))}
            </div>
            <RecipeForm />
        </div>
    )
}

export default Home