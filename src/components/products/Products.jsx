import { Grid } from '@material-ui/core'
import React from 'react'
import Product from './product/Product';

const products=[
{id:1,name:'Shoes',description:'Running shoes',price:'$5'},
{id:2,name:'Macbook',description:'Apple macbook',price:'$10'}
];

function Products() {
  
  
  
    return (
        <main>
            <Grid container justify="center" spacing={4}>

                
                {
                products.map((product)=> (<Grid item key={products.id} xs={12} sm={6} md={4}>

                    <Product product={product}/>
                    </Grid>))
                    
                    }


            </Grid>
        </main>
     
    )
}

export default Products
