import React from "react";
import { useThemeHook } from '../../GlobalComponents/ThemeProvider'

function Header({ setIsAdding }) {

  const [theme] = useThemeHook();

  return (
    <header>
      <h1 className={theme ? "text-light" : "text-black"}>
        Product Management
      </h1>

      <div style={{ marginTop: "15px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)} 
          class={`${theme? 'btn btn-outline-light':'btn btn-outline-dark' } `}
          >
          Add Product
        </button>
      </div>
    </header>
  );
}

export default Header;
