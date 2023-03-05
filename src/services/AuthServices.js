import httpCommon from "../http-common";

const login = (data) => {
    return httpCommon.post(`/auth/token/`, data);
};

const signup = (data) => {
    return httpCommon.post(`/auth/register/`, data);
};

export default {
    login,
    signup
}