import axios, { AxiosInstance, AxiosResponse } from "axios";
import DishModel from "../models/DishModel";
import RecipeModel from "../models/RecipeModel";

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

    getRecipe(id: string): Promise<AxiosResponse<RecipeModel>>{
        return this.axiosInstance.get(`/api/recipe/${id}`, {});
    }

    getRecipes(): Promise<AxiosResponse<Array<RecipeModel>>>{
        return this.axiosInstance.get(`/api/recipe`, {});
    }

    patchRecipe(recipe: RecipeModel): Promise<AxiosResponse<string>> {
        return this.axiosInstance.put<string>("/api/recipe", recipe);
    }

    createRecipe(recipe: RecipeModel): Promise<AxiosResponse<RecipeModel, RecipeModel>> {
        return this.axiosInstance.post<RecipeModel>("/api/recipe", recipe);
    }
}
