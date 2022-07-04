import ApiMenuPlanner from "./ApiMenuPlanner";
import configData from "../config.json"

export const apiMenuPlanner = new ApiMenuPlanner(configData.API_MENU_PLANNER_BASE_URL);