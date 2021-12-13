import axios from 'axios';

const gitApi = {
    getUser: async (user: string) => {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        return response.data
    }
}

export default gitApi;
