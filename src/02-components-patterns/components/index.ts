
import { ProductButtons } from "./ProductButtons";
import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCard as ProductCardHOC } from "./ProductCard";


export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

//pasamos propiedades a ProductCard.
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
     Title: ProductTitle,
     Image: ProductImage,
     Buttons: ProductButtons,
})



export default ProductCard