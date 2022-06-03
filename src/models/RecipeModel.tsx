import Ingreadient from "./IngreadientModel"

type RecipeModel = {
    id: string,
    title: string,
    description: string,
    ingreadients?: Array<Ingreadient>
    steps?: Array<string>
}

export default RecipeModel