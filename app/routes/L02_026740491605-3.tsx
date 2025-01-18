import React, { useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddProduct = () => {
    if (form.name && form.price && form.image) {
      setProducts([...products, { ...form }]);
      setForm({ name: '', price: '', image: '' });
    }
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div style={{ padding: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h2>เพิ่มข้อมูลสินค้า</h2>
      <div style={{ marginBottom: '50px' }}>
        <input
          type="text"
          name="name"
          placeholder="ชื่อสินค้า"
          value={form.name}
          onChange={handleChange}
          style={{ marginRight: '50px', padding: '20px' }}
        /> 
        <input
          type="text"
          name="price"
          placeholder="ราคา"
          value={form.price}
          onChange={handleChange}
          style={{ marginRight: '50px', padding: '20px' }}
        />
        <input
          type="text"
          name="image"
          placeholder="รูปภาพ (URL)"
          value={form.image}
          onChange={handleChange}
          style={{ marginRight: '50px', padding: '20px' }}
        />
        <button onClick={handleAddProduct} style={{ padding: '5px 10px',backgroundColor: 'green',color:'white', marginRight: '10px' }}>บันทึก</button>
        <button onClick={() => setForm({ name: '', price: '', image: '' })} style={{ padding: '5px 10px',backgroundColor: 'red',color: 'white' }}>เคลียร์</button>
      </div>

      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>No.</th>
            <th>ชื่อสินค้า</th>
            <th>ราคา</th>
            <th>รูปภาพสินค้า</th>
            <th>ดำเนินการ</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>
                <button onClick={() => handleDelete(index)} style={{ padding: '5px 10px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', cursor: 'pointer' }}>ลบ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;