import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";

const endPoints = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',    
}

export async function register(email, password) {
    const userData = await post(endPoints.register, { email, password });
    setUserData(userData);
    return userData;
}

export async function login(email, password) {
    const userData = await post(endPoints.login, { email, password });
    setUserData(userData);
    return userData;
}

export async function logout() {
    const userData = get(endPoints.logout);
    clearUserData(userData);
}