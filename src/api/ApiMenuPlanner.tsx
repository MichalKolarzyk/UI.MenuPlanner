import axios, { AxiosInstance, AxiosResponse } from "axios";
import RecipeModel from "../models/RecipeModel";
import { LoginRequestModel, LoginResponseModel, TagModel, RegisterUserModel, UserModel, DishModel } from "./models";
import { DishRequest, RecipeRequest } from "./requests";

export default class ApiMenuPlanner {
    axiosInstance: AxiosInstance;

    constructor(baseUrl: string) {
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            timeout: 1000,
        });
    }

    getDish(id: string): Promise<AxiosResponse<DishModel>> {
        return this.axiosInstance.get(`/api/dish/${id}`, {});
    }

    getRecipe(id: string): Promise<AxiosResponse<RecipeModel>> {
        return this.axiosInstance.get(`/api/recipe/${id}`, {});
    }

    getRecipes(request: RecipeRequest): Promise<AxiosResponse<Array<RecipeModel>>> {
        return this.axiosInstance.post("/api/recipe", request);
    }

    patchRecipe(recipe: RecipeModel): Promise<AxiosResponse<string>> {
        return this.axiosInstance.put<string>("/api/recipe", recipe);
    }

    addRecipe(recipe: RecipeModel): Promise<AxiosResponse<RecipeModel>> {
        return this.axiosInstance.post<RecipeModel>("/api/recipe/new", recipe);
    }

    deleteRecipe(id: string) {
        return this.axiosInstance.delete(`/api/recipe?id=${id}`);
    }

    getTags(): Promise<AxiosResponse<Array<TagModel>>> {
        return this.axiosInstance.get<Array<TagModel>>("/api/tag");
    }

    registerUser(newUser: RegisterUserModel) {
        return this.axiosInstance.post("/api/user", newUser);
    }

    loginUser(login: LoginRequestModel): Promise<AxiosResponse<LoginResponseModel>> {
        return this.axiosInstance.post("/api/user/login", login);
    }

    profileUser(token?: string): Promise<AxiosResponse<UserModel>> {
        return this.axiosInstance.get("/api/user/profile", { headers: { Authorization: `Bearer ${token}` } });
    }

    getDishes(request: DishRequest) : Promise<AxiosResponse<Array<DishModel>>>{
        return this.axiosInstance.post("/api/dish", request);
    }
    
    createDishes(dish: DishModel) : Promise<AxiosResponse<Array<DishModel>>>{
        return this.axiosInstance.post("/api/dish/create", dish);
    }
}
