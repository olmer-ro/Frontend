import React, { useState } from 'react';

function AddItem({ onAddItem }) {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { name };

        try {
            const response = await fetch('http://backend:3001/api/items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newItem)
            });

            if (!response.ok) {
                throw new Error('Error al agregar el producto');
            }

            const result = await response.json();
            onAddItem(result);
            setName(''); // Limpiar el input
        } catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre del producto"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <button type="submit">Agregar</button>
        </form>
    );
}

export default AddItem;
