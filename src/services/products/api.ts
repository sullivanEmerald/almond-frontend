import axios from "axios";
import { GetProductInterface} from '@/types/getProduct'

const BASE_URL = 'http://localhost:5000' 

const axiosProductInstance = axios.create({ baseURL : BASE_URL})

export const getProducts = async () => {
    return (await axiosProductInstance.get<GetProductInterface>('products')).data
}

