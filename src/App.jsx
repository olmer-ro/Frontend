import React, { useState, useEffect } from 'react';
import AddItem from './components/AddItem';
import ListItems from './components/ListItems';
import EditItem from './components/EditItem';
import './App.css';

function App() {
    const [items, setItems] = useState([]);
    const [itemToEdit, setItemToEdit] = useState(null);

    // Cargar los elementos desde el backend
    useEffect(() => {
        const fetchItems = async () => {
            try {
                // Cambié 'localhost' por 'backend' para que apunte al servicio Docker
                const response = await fetch('http://localhost:3001/api/items');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error al cargar los productos:', error);
            }
        };
        fetchItems();
    }, []);

    // Función para agregar un nuevo producto
    const addItem = (newItem) => {
        setItems([...items, newItem]);
    };

    // Función para editar un producto
    const editItem = async (updatedItem) => {
        const response = await fetch(`http://localhost:3001/api/items/${updatedItem.id}`, {  // Cambié 'localhost' por 'backend'
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedItem),
        });
        const result = await response.json();

        setItems(items.map(item => item.id === updatedItem.id ? result : item));
        setItemToEdit(null); // Cerrar el formulario de edición
    };

    // Función para eliminar un producto
    const deleteItem = async (id) => {
        const response = await fetch(`http://localhost:3001/api/items/${id}`, {  // Cambié 'localhost' por 'backend'
            method: 'DELETE',
        });

        if (response.status === 204) {
            setItems(items.filter(item => item.id !== id)); // Eliminar de la lista
        } else {
            console.error('Error al eliminar el producto');
        }
    };

    // Función para manejar la edición de un producto
    const handleEditItem = (item) => {
        setItemToEdit(item); // Mostrar formulario de edición con el item seleccionado
    };

    return (
        <div>
            <h1>Gestión de Productos</h1>

            {/* Mostrar formulario para agregar un nuevo producto */}
            <AddItem onAddItem={addItem} />

            {/* Si se está editando un producto, mostramos el formulario de edición */}
            {itemToEdit ? (
                <EditItem item={itemToEdit} onEditItem={editItem} />
            ) : (
                <ListItems 
                    items={items} 
                    onEditItem={handleEditItem} 
                    onDeleteItem={deleteItem} 
                />
            )}
        </div>
    );
}

export default App;
