import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="px-5 py-5" >
      <Container>
      <div className="flex justify-between items-center">
        <Link to={"/"} className="text-2xl font-bold">Online Shop</Link>
        <Link to={"/my-cart"} className=" relative px-4 py-2 border border-black rounded-md">My Cart
          <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white px-1 rounded-full">1</span>
        </Link>
      </div>
      </Container>
    </header>
 );
};

export default Header;