import React, { useState } from 'react'

const useProduct = () => {

     const [counter, setCounter] = useState(0)
     
     const increaseBy = (value: number) => {
          setCounter((prev) => Math.max(prev + value, 0));
        };

  return {counter, setCounter, increaseBy}

  //si existe orden utilizo []
}

export default useProduct