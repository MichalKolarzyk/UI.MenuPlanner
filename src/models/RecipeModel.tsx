import Ingreadient from "./IngreadientModel"

type Recipe = {
    ingreadients?: Array<Ingreadient>
    steps?: Array<string>
}

export default Recipe