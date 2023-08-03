import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "a4fccb7954afe7cf0f568e139df41b43",
        language: "ko-KR"
    }

})

export default instance