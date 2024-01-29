import axios from "axios";

export const API_SERVER_HOST = 'http://localhost:8080'

const prefix =`${API_SERVER_HOST}/api/account`

export const getAccountList = async () => {
    const res = await axios.get(`${prefix}/list`)

    console.log(res);

    return res.data;
}

export const getTest = async () => {
    const res = await axios.get(`${prefix}/test`)
}