'use strict';
import React, {useState} from 'react';//add "use client" directive

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
        <div>
            <h2>New Item Component</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="Name" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Quantity:
                    <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="1" max="99" required/>
                </label>
                <br />
                <label>
                    Category:
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewItem;