
import { Product } from "@/types/product";
import { useProducts } from "@/services/products/queries";


const Products = () => {

    const productQuery = useProducts()

    console.log(productQuery.data)

    if(productQuery.isLoading) {
        return <p>Loading</p>
    }

    if (productQuery.isError) {
        return <p>Error loading products</p>;
      }

    return (
        <>
            {
                productQuery.data?.data.map((item : Product) => (
                    <div key={item._id}>
                        <p>{item.name}</p>
                    </div>
                )) 
            }
        </>
    )
}

export default Products;