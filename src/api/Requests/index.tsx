export class RecipeRequest {
    take? : number
    skip? : number
    sortBy? : "Title" | "Description"
    tagIds? : Array<string>
}

export class DishRequest {
    firstDay?: string;
    numberOfDays?: number;
    userIds?: Array<string>;
}