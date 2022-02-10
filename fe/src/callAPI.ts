import axios , {AxiosError} from 'axios'

import storage from './helpers/storage'

import { DOMAIN } from './constant'
import axiosRetry from 'axios-retry';

const create = () => {
    const jwt = storage.getToken()
    return axios.create({
        baseURL: DOMAIN,
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    })
}


const callAPI  = {
    get: async function (route: string) : Promise<any> {
        try {
            const client = create()
            axiosRetry(client, {
                retries: 3,
                retryDelay: retryCount => retryCount * 1000,
            })
            const { data } = await client.get(route)
            return data
        } catch (error : any) {
            return error
        }
    },
    post: async (route: string, body: {}) : Promise< any> => {
        try {
            const client = create()
            axiosRetry(client, {
                retries: 3,
                retryDelay: retryCount => retryCount * 1000,
            })
            const { data } = await client.post(route, body)
            return data
        } catch (error: any) {
            console.log(error);
        }
    },
    put : async (route : string , body : {}) : Promise< any> => {
        try {
            const client = create()
            axiosRetry(client, {
                retries: 3,
                retryDelay: retryCount => retryCount * 1000,
            })
            const { data } = await client.put(route,body)
            return data
        } catch (error: any) {
            console.log(error);
        }
    },
    delete : async (route : string ) : Promise< any> => {
        try {
            const client = create()
            axiosRetry(client, {
                retries: 3,
                retryDelay: retryCount => retryCount * 1000,
            })
            const { data } = await client.delete(route)
            return data
        } catch (error: any) {
            console.log(error);
        }
    }
}

export default callAPI