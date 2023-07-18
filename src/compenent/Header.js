import React from 'react';
import '../style/style.css'


function Header() {
    return (

      <div className="flex items-center bg-blue-200">
      <img src="logo.png" className="w-8 h-8 mr-2" alt="Logo" />
      <h1 className="text-white text-xl font-bold">CareHuber</h1>
    </div>
    

      
    );
  }
  
  export default Header;
  