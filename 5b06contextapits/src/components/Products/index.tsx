import ProductsCard from "../ProductsCard"
import { useCart } from '../../Providers/Cart'

interface ProductsProps{
  products: Product[]
}
interface Product {
  title: string,
  price: number,
  image: string
}
const Products = ({products}: ProductsProps) => {

  const {cart, addProduct, deleteProduct} = useCart()

    return(
        <>
        <div className='page'>
          <div className='products-title'>
            <h2>Produtos</h2>
          </div>
          <div className='products'>
            {products.map((products) => (
                  <ProductsCard products={products} addProduct={addProduct} />
              ))}
          </div>
          <div className='cart-title'>
            <h2>Carrinho</h2>
          </div> 
          <div className='products'>
            {cart.map((products) => (
                  <ProductsCard cart={products} isCart={true} deleteProduct={deleteProduct} />
              ))}
          </div>
        </div>
           
        </>
    )
}

export default Products