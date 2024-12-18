import React, { useState } from 'react';

const EditItem = ({ item, onEditItem }) => {
    const [name, setName] = useState(item.name);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedItem = { ...item, name };
        onEditItem(updatedItem); // Enviar el producto actualizado al componente padre
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <button type="submit">Guardar cambios</button>
        </form>
    );
};

export default EditItem;

