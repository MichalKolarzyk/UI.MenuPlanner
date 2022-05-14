import axios, { AxiosInstance } from "axios";
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

    async getDish(id: string) {
        try {
            const response = await this.axiosInstance.get(`/api/dish/${id}`, {});
            return response.data as DishModel;
        } catch (error) {
            console.log(error);
        }
    }

    async createRecipe(recipe: RecipeModel) {
        try {
            const response = await this.axiosInstance.post("/api/recipe", {
                body: recipe,
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    // getTest() {
    //     this.axiosInstance.get("").then(response => {
    //         console.log(response);
    //     }).then(error => {
    //         console.log(error)
    //     }).then(() => {
    //         //always executed
    //     })
    // }
}
