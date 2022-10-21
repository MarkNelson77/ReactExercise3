import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';
import { useThemeHook } from '../../GlobalComponents/ThemeProvider';

function Add({ products, setProducts, setIsAdding }) {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const textInput = useRef(null);
  const [theme] = useThemeHook();

  useEffect(() => {
    textInput.current.focus();
}, [])

const handleAdd = e => 
{
  e.preventDefault();
  if (!title || !price || !description || !category || !image) 
  {
      return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'All fields are required.',
          showConfirmButton: true
      });
    }

      const id = products.length + 1;
      const newProduct = {
          id,
          title,
          price,
          description,
          category,
          image
      }
    
      products.push(newProduct);
      setProducts(products);
      setIsAdding(false);

      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `${title}'s data has been Added.`,
        showConfirmButton: false,
        timer: 1500
    });
  }

  return (
    <div class="container w-75" className={theme ? "text-light" : "text-dark"}>
      <form onSubmit={handleAdd} >
        <h3>Add Product</h3>

        <div class="mb-3 mt-3" >
          <label>Title</label>
          <input 
            class="form-control"
            id="title" 
            type="text"
            ref={textInput}
            name="title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div class="mb-3 mt-3" >
          <label>Price ($)</label>
          <input 
            class="form-control"
            id="price" 
            type="number"
            ref={textInput}
            name="price" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div class="mb-3 mt-3" >
          <label >Description</label>
          <input 
            class="form-control"
            id="description" 
            type="text"
            ref={textInput}
            name="description" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div class="mb-3 mt-3" >
          <label >Category</label>
          <input 
            class="form-control"
            id="category" 
            type="text"
            ref={textInput}
            name="category" 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div class="mb-3 mt-3" >
          <label >Image url</label>
          <input 
            class="form-control"
            id="image" 
            type="url"
            ref={textInput}
            name="image" 
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div style={{ marginTop: '30px' }}>
          <input 
            type="submit" 
            value="Add" 
            class="btn btn-outline-primary"/>
          <input
            style={{ marginLeft: '5px' }}
            class="btn btn-outline-danger"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>

      </form>
    </div>
  )
}

export default Add