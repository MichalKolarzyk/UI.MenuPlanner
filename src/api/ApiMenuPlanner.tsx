import axios, { AxiosInstance, AxiosResponse } from "axios";
import { store } from "../redux";
import { LoginRequestModel, LoginResponseModel, TagModel, RegisterUserModel, UserModel, DishModel, RecipeModel } from "./models";
import { DishRequest, RecipeRequest } from "./requests";

export default class ApiMenuPlanner {
    axiosInstance: AxiosInstance;

    constructor(baseUrl: string) {
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            timeout: 1000,
        });

        this.axiosInstance.interceptors.request.use((config) => {
            const token = store.getState().login.login?.token;
            if (config.headers && token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        this.axiosInstance.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error?.response?.status && error.response.status === 401) {
                    window.location.href = "/login";
                }
            }
        );
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

    profileUser(): Promise<AxiosResponse<UserModel>> {
        return this.axiosInstance.get("/api/user/profile");
    }

    getDishes(request: DishRequest): Promise<AxiosResponse<Array<DishModel>>> {
        return this.axiosInstance.post("/api/dish", request);
    }

    createDishes(dish: DishModel): Promise<AxiosResponse<Array<DishModel>>> {
        return this.axiosInstance.post("/api/dish/create", dish);
    }
}
