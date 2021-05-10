import axios from "./index";

export const listByCountries = async () => {
    return await axios(`countries`, {
        method: "get",
        headers: {
            "Content-type": "application/json"
        }
    });
}