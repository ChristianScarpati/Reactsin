import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { CSSProperties, useContext } from "react";

export interface ProductButtonsProps {
  className?: string
  style?: CSSProperties
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
  const { counter, increaseBy } = useContext(ProductContext);

  return (
    <div 
    className={`${styles.buttonsContainer} ${className}` }
    style={style}
    >
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