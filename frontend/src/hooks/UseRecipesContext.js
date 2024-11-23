import { RecipesContext } from '../context/RecipesContext'
import { useContext } from 'react'

export const UseRecipesContext = () => {
    const context = useContext(RecipesContext)

    if (!context) {
        throw Error('recipe context isnt working')
    }

    return context
}