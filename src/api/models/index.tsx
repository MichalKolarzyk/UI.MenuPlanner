export class TagModel {
    id?: string;
    name?: string;
    description?: string;
}

export class RegisterUserModel {
    id?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
}

export class UserModel {
    id?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
}

export class ErrorModel{
    detail?: string
    status?: number
    title?: string
    traceId?: string
    type?: string
}

export class LoginRequestModel{
    email?: string
    password?: string
}

export class LoginResponseModel{
    token?: string
    authorizationMethod?: string
}

export class DishModel{
     id?: string;
     userId?: string
     dishType?: DishTypeEnum
     day?: string
     recipeTitle?: string
     recipeId?: string
}

export enum DishTypeEnum {
    starter = "starter",
    breakfast= "breakfast",
    lunch="lunch",
    snack="snack",
    dinner="dinner",
    supper="supper",
}
export class RecipeModel{
    id?: string;
    title?: string;
    description?: string;
    ingreadients?: Array<Ingreadient>;
    steps?: Array<string>;
    tagIds?: Array<string>;
}

export class Ingreadient {
    name?: string;
    amount?: number;
}
