import Ingreadient from "./IngreadientModel"

type Recipe = {
    title: string,
    description: string,
    ingreadients?: Array<Ingreadient>
    steps?: Array<string>
}

export default Recipe