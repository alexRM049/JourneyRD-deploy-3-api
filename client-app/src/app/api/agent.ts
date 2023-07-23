import axios, { AxiosResponse } from 'axios'
import { Destiny } from '../models/destiny';
import { User, UserFormValues } from '../models/user';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post:<T> (url: string, body: {}) => axios.post <T>(url,body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put <T>(url,body).then(responseBody), 
    del: <T> (url: string) => axios.delete <T>(url).then(responseBody), 
}

const Destinies = {
    list: () => requests.get<Destiny[]>('/destiny'),
    details: (id: string) => requests.get<Destiny>(`/destiny/${id}`),
    create: (destiny: Destiny) => requests.post<void>('/destiny', destiny) ,
    update: (destiny: Destiny) => requests.put<void>(`/destiny/${destiny.id}`, destiny),
    delete: (id: string) => requests.del<void>(`/destiny/${id}`),

}

const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/register', user),
    refreshToken: () => requests.post<User>('/account/refreshToken', {}),
}
const agent = {
    Destinies, Account,
}



export default agent;