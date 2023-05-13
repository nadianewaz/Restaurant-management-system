import React from 'react';



const Product = (props) => {
    
        const   {title, body} = props.product;     
    return (
        <>
       
                    <div className="todo">
                    <h5>{Product.title}</h5>
                    <p>{Product.body}</p>
                    </div>


        
            
        </>
    );
};

export default Product;