import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

//si necesito mas de 1 prop mando esta interfaz a ProductCardHOCProps en interfaces
export interface ProductTitleInterface {
  className ?: string;
  title?: string;
  activeClass?: string
  style?: CSSProperties

}


export const ProductTitle = ( { title, className, style } : ProductTitleInterface) => {
     const { product } = useContext(ProductContext);
   
     return (
       <span
        className={`${ styles.productDescription } ${ className }`}
        style={style}
       >
         {title ? title : product.title}
       </span>
     );
   };