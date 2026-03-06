import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editQuantity, setEditQuantity] = useState("");

  const API = "http://127.0.0.1:8000/api/products";

  // Fetch products
  const fetchProducts = async () => {
    const res = await axios.get(API);
    setProducts(res.data);
  };

  // Add product
  const addProduct = async () => {
    await axios.post(API, {
      name: name,
      price: 10,
      quantity: 1
    });

    setName("");
    fetchProducts();
  };

  // Delete product
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchProducts();
  };

  // Start editing
  const startEdit = (product) => {
    setEditingId(product.id);
    setEditName(product.name);
    setEditPrice(product.price);
    setEditQuantity(product.quantity);
  };

  // Update product
  const updateProduct = async (id) => {
    await axios.put(`${API}/${id}`, {
      name: editName,
      price: editPrice,
      quantity: editQuantity
    });

    setEditingId(null);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Product List</h2>

      <input
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addProduct}>Add</button>

      <ul>
        {products.map((p) => (
          <li key={p.id} style={{ marginTop: 10 }}>

            {editingId === p.id ? (
              <>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />

                <input
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                />

                <input
                  value={editQuantity}
                  onChange={(e) => setEditQuantity(e.target.value)}
                />

                <button onClick={() => updateProduct(p.id)}>Save</button>
              </>
            ) : (
              <>
                {p.name} | ${p.price} | Qty: {p.quantity}

                <button onClick={() => startEdit(p)}>Edit</button>

                <button onClick={() => deleteProduct(p.id)}>Delete</button>
              </>
            )}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;