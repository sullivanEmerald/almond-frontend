import { Product} from '@/types/product'

export interface GetProductInterface {
    data : Product[];
    success: true;
    msg: string;
  }