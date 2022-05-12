import axios, { AxiosInstance } from "axios";

export default class ApiPlanner {
    axiosInstance: AxiosInstance;

    constructor(baseUrl: string) {
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            timeout: 1000,
        });
    }

    async getTestAsync() {
        try {
            const response = await this.axiosInstance.get("");
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }

    getTest() {
        this.axiosInstance.get("").then(response => {
            console.log(response);
        }).then(error => {
            console.log(error)
        }).then(() => {
            //always executed
        })
    }
}
