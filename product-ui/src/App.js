import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");

  const fetchProducts = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/products");
    setProducts(res.data);
  };

  const addProduct = async () => {
    await axios.post("http://127.0.0.1:8000/api/products", {
      name: name,
      price: 10,
      quantity: 1
    });

    setName("");
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Product List</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product name"
      />

      <button onClick={addProduct}>Add</button>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name}
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;