import axios from "axios";

const axiosOptions = {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: { "Content-Type": 'application/json' },
    withCredentials: true
}

const axiosClassic = axios.create(axiosOptions)
const axiosWithAuth = axios.create(axiosOptions)

axiosWithAuth.interceptors.request.use((config) => {
    console.log('Hello Reguest Interceptor')
    console.log('Check token')
    return config
})

axiosWithAuth.interceptors.response.use(
    (config) => {
        console.log('Hello Response Interceptor')
        return config
    },
    (error) => {
        const reguestConfig = error.config

        if (error.response.status == 401) {
            reguestConfig._isRetry = true

            try {
                console.log('Get new Token axiosClassic.request()')
                console.log('Retry request axiosWithAuth.request(reguestConfig)')
            } catch (error) {
                console.log('Error get token')
                console.log('Remove access token')
            }
        }
        return error
    }
)

export {axiosClassic, axiosWithAuth}