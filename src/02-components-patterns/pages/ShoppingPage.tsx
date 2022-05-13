import React from "react";
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components/ProductCard";

const product = {
  id: "1",
  title: "coffee mug ",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
  return (
    <h1>
      Shooping store
      <hr />
      <div
        style={{
          //defino 1 objeto, y la otra llave defino el valor de ese objeto
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
           {/* //! compound component pattern. TENER A LA DISPOSICION DE AÑADIR COMPONENTES HIJOS, MANTENIENDO UNA RELACION DIRECTA ENTRE SI */}
        <ProductCard product={product}>
             {/* estandarizar el uso así */}
             <ProductCard.Image/>
             <ProductCard.Title title={'Hola mundo'} />
             <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
             <ProductImage/>
             <ProductTitle />
             <ProductButtons />
        </ProductCard>
      </div>
    </h1>
  );
};

export default ShoppingPage;
