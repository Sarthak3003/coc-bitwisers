import httpCommon from "../http-common";

const getUserDetails = async (token) => {
    const res = await httpCommon.get(`/auth/token/`, {
        "headers": {
            "Authorization": `Token ${token}`,
        }
    })
    return res;
}
export default { getUserDetails }