import React, { useState } from "react";
import Swal from "sweetalert2";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";

function Edit({ products, selectedProduct, setProducts, setIsEditing }) {
  const [theme] = useThemeHook();
  const id = selectedProduct.id;

  const [title, setTitle] = useState(selectedProduct.title);
  const [price, setLastName] = useState(selectedProduct.price);
  const [description, setDescription] = useState(selectedProduct.description);
  const [category, setCategory] = useState(selectedProduct.category);
  const [image, setImage] = useState(selectedProduct.image);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!title || !price || !description || !category || !image) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products.splice(i, 1, product);
        break;
      }
    }

    setProducts(products);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${product.title}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div class="container w-75" className={theme ? "text-light" : "text-dark"}>
      <form onSubmit={handleUpdate}>
        <h1>Edit Product</h1>

        <div class="mb-3 mt-3" >
          <label htmlFor="title">Title</label>
          <input
            class="form-control"
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div class="mb-3 mt-3" >
          <label htmlFor="price">Price ($)</label>
          <input
            class="form-control"
            id="price"
            type="number"
            name="price"
            value={price}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div class="mb-3 mt-3" >
          <label htmlFor="description">Description</label>
          <input
            class="form-control"
            id="description"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div class="mb-3 mt-3" >
          <label htmlFor="category">Category</label>
          <input
            class="form-control"
            id="category"
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div class="mb-3 mt-3" >
          <label htmlFor="image">Image</label>
          <input
            class="form-control"
            id="image"
            type="url"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "30px" }}>
          <input 
            type="submit" 
            value="Update" 
            class="btn btn-outline-primary"/>
          <input
            style={{ marginLeft: "12px" }}
            class="btn btn-outline-danger"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>

      </form>
    </div>
  );
}

export default Edit;
