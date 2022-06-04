export class RecipeRequest {
    take? : number
    skip? : number
    sortBy? : "Title" | "Description"
    tagIds? : Array<string>
}