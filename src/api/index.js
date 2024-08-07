import axiosRoot from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export const axios = axiosRoot.create({
    baseURL: baseUrl,
});

export const setAuthToken = (token) => {
    if (token) axios.defaults.headers["Authorization"] = `Bearer ${token}`;
    else delete axios.defaults.headers["Authorization"];
};

export const getAll = async (url) => {
    const { data } = await axios.get(url);
    return data;
};

export const getById = async (url) => {
    const { data } = await axios.get(url);
    return data;
};

export const save = async (url, { arg: body }) => {
    await axios.post(url, body);
};

export const remove = async (url, { arg: body }) => {
    const { id } = body;
    await axios.delete(`${url}/${id}`);
};

export const removeNoArg = async (url) => await axios.delete(`${url}`);

export const post = async (url, { arg }) => {
    const { data } = await axios.post(url, arg);
    return data;
};

export const get = async (url) => {
    const { data } = await axios.get(url);
    return data;
};

export const updateProfile = async (klantId, profileData) => {
    const { data } = await axios.put(`/klanten/${klantId}`, profileData);
    return data;
};
