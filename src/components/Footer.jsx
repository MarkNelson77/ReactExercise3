import React from 'react'
import { useThemeHook } from '../GlobalComponents/ThemeProvider'

const Footer = () => {

  const [theme] = useThemeHook();

  return (
    <div>
        <br /><br /><br /><br /><br />
        <footer class={`${theme? 'py-5 bg-light':'py-5 bg-dark' }`}> 
            <div class="container px-4 px-lg-5">
              <div class="text-center">
                <p className={theme ? "text-black" : "text-light"} >
                    Copyright &copy; ReactJS Website 2022
                </p>
              </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
