// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
// // const TOKEN =
// //   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
// //     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   header: { token: `Bearer ${TOKEN}` },
// });


import axios from "axios"

// const BASE_URL = "http://localhost:5000/api/"
const BASE_URL = "https://mykart2.herokuapp.com/api/"
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTI1N2Q2ZWViMWRjYTBjNWFhNTcwNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDQ4OTMwMywiZXhwIjoxNjUwNzQ4NTAzfQ.8sgOjw5-Aieo4kEgks5CPueogHmK7wA6oTD5yFawe4Q"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`Bearer ${TOKEN}`}
})