import React, { useState, useEffect} from 'react';
import Card from '../components/productCard'
import Hero from '../components/Hero'
import Choice from '../components/choose';


export default function Home(){
  const [products, setProduct] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/home') 
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); 
        setProduct(data.products);
        
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const limitedProducts = products.slice(0, 4); 

    return(
        <>
        <Hero/>
        

       <section className='my-8   '>
        <h1 className='text-3xl font-semibold text-center mb-8'>Products</h1>
       <div className=' w-4/5  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center'>
      
        {limitedProducts.map(product => (
          <Card 
              imageSrc={`http://localhost:8000/${product.image}`}
              title={product.name}
              description={product.description}
              price={product.price}

             

          />
           
         
        ))}
     
   
    
      </div>

       </section>
       <Choice/>
        </>
    )
}