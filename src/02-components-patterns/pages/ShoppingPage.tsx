import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";
import '../styles/custom-style.css'

const product = {
  id: "1",
  title: "coffee mug ",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
  return (
    <h1 className="bg-dark">
      Shooping store
      <hr />
      <div
        style={{
          //defino 1 objeto, y la otra llave defino el valor de ese objeto
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >             {/* estandarizar el uso así */}

        {/* //! compound component pattern. TENER A LA DISPOSICION DE AÑADIR COMPONENTES HIJOS, MANTENIENDO UNA RELACION DIRECTA ENTRE SI */}
        <ProductCard product={product}>
          <ProductCard.Image className='custom-img' />
          <ProductCard.Title className='text-bold' activeClass='active' />
          <ProductCard.Buttons className='custom-bts' />
        </ProductCard>

        <ProductCard
          product={product}
          className='text-white bg-dark'
        >
          <ProductImage className='custom-img'
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.8' }} />
          <ProductTitle className='text-bold' activeClass='active' />
          <ProductButtons className='custom-bts' />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: '#70D1F8'
          }}
        >
          <ProductImage
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.8' }}
          />
          <ProductTitle
            style={{ fontWeight: '100' }}
          />
          <ProductButtons
            style={{
              display: 'flex',
              justifyContent: 'flex-end'
            }} />
        </ProductCard>
      </div>
    </h1>
  );
};

export default ShoppingPage;
