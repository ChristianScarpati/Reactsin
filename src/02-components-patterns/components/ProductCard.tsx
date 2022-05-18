import { createContext, CSSProperties, ReactElement } from "react";
import { ProductContextProps, Product } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext; //provider = proveedor de informacion.Es otro HOC

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[]; //es una interfaz
  className?: string;
  style?: CSSProperties
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    // value = info que quiero compartir con todos mis hijos
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children}

        {/* ProductImage img={product.img} />

        <ProductTitle title={product.title} />

        <ProductButtons increaseBy={increaseBy} counter={counter} />
        */}
      </div>
    </Provider>
  );
};

export default ProductCard;
/* 
ProductCard.Title = ProductTitle; //le estoy añadiendo esta nueva propiedad a componente PRODUCT CARD
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
 */
