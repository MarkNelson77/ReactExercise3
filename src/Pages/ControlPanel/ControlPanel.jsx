import React, { useState } from 'react'
import Swal from 'sweetalert2';

//Pages - Control Panel
import Header from './Header'
import List from './List'
import Add from './Add'
import Edit from './Edit'

import { productsData } from '../../data/ProductData'
import Footer from '../../components/Footer'

function ControlPanel() {

  const [products, setProducts] = useState(productsData)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = (id) => {
    const [product] = products.filter(product => product.id === id);

    setSelectedProduct(product);
    setIsEditing(true);
}
  
  const handleDelete = ( id ) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
  }).then(result => {
      if (result.value) {
          const [product] = products.filter(product => product.id === id);

          Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: `${product.title}'s data has been deleted.`,
              showConfirmButton: false,
              timer: 1500,
          });

          setProducts(products.filter(product => product.id !== id));
      }
  });
  }

  return (
    <>
    <div class="container p-5 my-4">
{/* **************************************************************** */}
      {/* List */}
      {!isAdding && !isEditing && 
        (
          <>
          <Header setIsAdding = {setIsAdding} />

          <List
            products = {products}
            handleEdit={handleEdit}
            handleDelete={handleDelete} />
          </>
        )
      }

{/* **************************************************************** */}
      {/* Add */}
      { isAdding && (
        <Add
          products = {products}
          setProducts = {setProducts}
          setIsAdding = {setIsAdding} 
        />
        )}

{/* **************************************************************** */}
        {/* Edit */}
        { isEditing && (
          <Edit
          products = {products}
          setProducts = {setProducts}
          setIsEditing = {setIsEditing}
          selectedProduct = {selectedProduct}
          />
          )}

{/* **************************************************************** */}

    </div>
    <Footer/>
    </>
  )
}

export default ControlPanel