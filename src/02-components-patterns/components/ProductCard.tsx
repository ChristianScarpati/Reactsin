import React, { createContext, ReactElement, useContext } from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import useProduct from "../hooks/useProduct";

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[]; //es una interfaz
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext; //provider = proveedor de informacion.Es otro HOC

export const ProductImage = ({ img = "" }) => {
  //esto quiere decir que la imagen va a ser opcional

  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img className={styles.productImg} src={imgToShow} alt="Product Image" />
  );
  //! Un string vacío para un ternario es considerado que NO TIENE VALOR
};

export const ProductTitle = ({ title }: { title?: string }) => {
  
  const {product} = useContext(ProductContext)

  
  return <span className={styles.productDescription}>{title ? title : product.title }</span>;
};

export const ProductButtons = () => {
  const { counter, increaseBy } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};

export const ProductCard = ({ children, product }: Props) => {
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
      <div className={styles.productCard}>
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

ProductCard.Title = ProductTitle; //le estoy añadiendo esta nueva propiedad a componente PRODUCT CARD
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
