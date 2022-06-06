import { TagModel } from "../api/models"
import Ingreadient from "./IngreadientModel"

type RecipeModel = {
    id: string,
    title: string,
    description: string,
    ingreadients?: Array<Ingreadient>
    steps?: Array<string>
    tagIds?: Array<string>
}

export default RecipeModel