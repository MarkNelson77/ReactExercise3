import React from 'react'
import {useThemeHook} from '../../GlobalComponents/ThemeProvider'

function List( {products , handleEdit , handleDelete} ) {

  const [theme] = useThemeHook();

  return (
    <div class="d-flex">
      <div class="table-responsive">
        <table class={`${theme? 'table table-dark table-striped':'table table-striped' }`}>
          <thead>
            <tr>
              <th colspan="1" class="text-center">Id</th>
              <th colspan="1" class="text-center">Title</th>
              <th colspan="1" class="text-center">Price</th>
              <th colspan="1" class="text-center">Description</th>
              <th colspan="1" class="text-center">Category</th>
              <th colspan="1" class="text-center">Image</th>
              <th colspan="2" class="text-center" >Action</th>
            </tr>
          </thead>

          <tbody>
            {products.length > 0 ? 
              (
                products.map((product,i) =>
                (
                  <tr key = {product.id}>
                    <td colspan="1" class="text-center">{i + 1}</td>
                    <td colspan="1" class="text-wrap">{product.title}</td>
                    <td colspan="1" class="text-center">{product.price}</td>
                    <td colspan="1" class="text-wrap">{product.description}</td>
                    <td colspan="1" class="text-center" >{product.category}</td>
                    <td colspan="1" >
                      <img src={product.image} className="img-fluid"></img>
                    </td>

                    <td class="text-right">
                      <button
                        onClick={() => handleEdit(product.id)}
                        class={`${theme? 'btn btn-outline-light':'btn btn-outline-dark' } `} >
                          Edit
                      </button>
                    </td>

                    <td class="text-left">
                      <button
                        onClick={() => handleDelete(product.id)}
                        class={`${theme? 'btn btn-outline-light':'btn btn-outline-dark' } `} >
                          Delete
                      </button>
                    </td>



                  </tr>
                ))
              ):
                (
                  <tr>
                    <td colSpan={8}>No Products</td>
                  </tr>
                )
            }

          </tbody>
        </table>

      </div>
    </div>
  )
}

export default List