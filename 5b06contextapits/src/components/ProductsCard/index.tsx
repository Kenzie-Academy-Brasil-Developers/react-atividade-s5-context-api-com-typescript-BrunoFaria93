import { useContext } from "react";

interface ProductsCardProps{
    products?: Product | undefined;
    isCart?: boolean;
    cart?: Product | undefined;
    addProduct?: (products: Product) => void ;
    deleteProduct?: (products: Product) => void ;
  }
  interface Product {
    title: string;
    price: number;
    image: string;
  }

const ProductsCard = ({products, isCart=false, addProduct, deleteProduct, cart}: ProductsCardProps) => {

console.log(cart)
    return(
        <div className='big-card'>
        {isCart ? (
            <div className='card'>
                <h3>{cart && cart.title}</h3>
                <img src={cart && cart.image} alt={cart && cart.title} />
                <div>
                    <span>R$ {cart && cart.price}</span>
                </div>
                <div>
                    <button onClick={ () => (deleteProduct && cart) && deleteProduct(cart)}>Deletar do carrinho</button>
                </div>
            </div>
            ) : (
            <div className='card'>
                <h6>{products && products.title}</h6>
                <img src={products && products.image} alt={products && products.title} />
                <div>
                    <span>R$ {products && products.price}</span>
                </div>
                <div>
                    <button onClick={ () => (addProduct && products) && addProduct(products)}>Adicionar ao carrinho</button>
                </div>
            </div>
        )}
        
      </div>
      
  );
};


export default ProductsCard