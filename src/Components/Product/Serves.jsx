import React from 'react';

const Serves = (props) => {
    const {id, title, body} = props.service;
    return (
        <>


       <h2>{id}</h2>
       <h2>{title}</h2>
       <h2>{body}</h2>    

            
        </>
    );
};

export default Serves;