import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

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