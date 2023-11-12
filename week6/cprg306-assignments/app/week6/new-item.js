'use client';
import React, {useState} from 'react';

function NewItem() {
    // Initialize State Variables
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('Produce');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        setName('');
        setQuantity(1);
        setCategory('Produce');
    };

    return (
        <div className='new-item' style={{
            backgroundColor: 'blue',
            padding: '10px, 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',


        }}>
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="Name" value={name} onChange={e => setName(e.target.value)} placeholder='Name' style={{
                        color: 'black',
                        backgroundColor: 'white'
                    }}/>
                </label>
                <br />
                <label>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="1" max="99" required style={{
                        color: 'black',
                        backgroundColor: 'white'
                    }}/>
                </label>
                <br />
                <label title='Category'>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} style={{
                        color: 'black',
                    }}>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <br />
                <button className="submit-btn" type="submit" style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginRight: '20px',
                
                }}>Submit</button>
            </form>
        </div>
    );
}

export default NewItem;