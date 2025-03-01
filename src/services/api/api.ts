import axios from 'axios';

// export const api = axios.create({
//     baseURL: 'http://localhost:3000/api'
// })

const api = axios.create({
    baseURL: 'http://localhost:8888/api'
})

const ProductsApi = {

    get: async () => {

        try {

            const { data, status } = await api.get('/products');

            if(status === 200) return data;

        } catch (error) {
            console.log(error);
        }

    }

}

const UserApi = {

    tokenVerify: async (token: object) => {
        const res = await api.post('/tokenVerify', token)
        return res;
    },

    login: async ( email: string, password: string ) => {
        const res = await api.post('/login', { email, password });
        return res;
    },

    logout: async () => {
        const res = await api.post('/logout')
        return res.data;
    }

}

export { ProductsApi , UserApi }
