import React from "react";
import products from "../data/products";
import Cart from "./Cart";
import Container from "./Container";
import { Link } from "react-router-dom";
import carts from "../data/carts";

const CartSection = () => {
 

  return (
    <>
      <div className="flex flex-col gap-3">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full ">
        <Container>
          <div className="flex justify-end gap-10 py-3 border-black border-t">
            <div className="text-right">
              <p className="text-gray-500">Total</p>
              <p>123</p>
            </div>

            <div className="text-right">
              <p className="text-gray-500">Tax(10%)</p>
              <p>123</p>
            </div>

            <div className="text-right">
              <p className="text-gray-500"> Net Total</p>
              <p>123</p>
            </div>
          </div >
          <div className="text-end mb-3">
          <Link className="border border-black px-4 py-2 rounded-md">
          Order Now
          </Link>
          </div>
        </Container>

      </div>
    </>
  );
};

export default CartSection;
