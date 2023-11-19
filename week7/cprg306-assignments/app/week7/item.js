'use strict';
'use client';
import React, {useState} from 'react';

function Item({ name, quantity, category, onSelect }){
    const handleClick = () => {
        onSelect(name);
    }
    
    return(
        <li className='container' style={{
            border: '1px solid #0f4c81',
            backgroundColor: '#e2eaeb',
            padding: '10px',
            marginTop: '10px',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none',
            width: '50%',
            cursor: 'pointer'            
        }}
        onClick={handleClick} // make item in list clickable
        >
            <div className="title" style={{
                color: 'black',
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '5px',


            }}>{name}</div>
            <div className='description' style={{
                color: 'black',
                fontSize: '15px'

            }}>Category: {category}</div>
            <div className='description' style={{
                color: 'black',
                fontSize: '15px'

            }}>Quantity: {quantity}</div>
        </li>
    )

}

export default Item;