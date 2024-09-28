import axios from "axios";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_SERVER,
  withCredentials: true,
});

export const url = process.env.NEXT_PUBLIC_URL_SERVER;
