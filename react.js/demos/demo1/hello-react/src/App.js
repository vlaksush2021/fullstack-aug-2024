import React from 'react';
import Greeting from './Greeting';
import Product from './Product';
import Counter from './Counter';
import InputFiled from './InputFiled';
function App() {
  const name = "Shiva";
  const product = {
    name:"Laptop",
    price:"$2000"
  }
  const org = "ABC Products";

  return (
    <div style={{ textAlign: 'left'}}>
      <h1>Learning React </h1>
      <hr color='red' />
  

      <Greeting name={name}  />  
      <Product product={product} org={org} />
      <Counter />
      <InputFiled />
    </div>
  );
}

export default App;
