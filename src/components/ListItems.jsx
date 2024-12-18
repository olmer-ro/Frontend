import React from 'react';

const ListItems = ({ items, onEditItem, onDeleteItem }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {item.name}
                    <button onClick={() => onEditItem(item)}>Editar</button>
                    <button onClick={() => onDeleteItem(item.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

export default ListItems;

