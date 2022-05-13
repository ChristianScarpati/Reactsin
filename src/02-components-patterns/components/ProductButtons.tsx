import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { useContext } from "react";

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