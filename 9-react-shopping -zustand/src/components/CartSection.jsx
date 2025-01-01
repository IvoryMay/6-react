import React from "react";
import Cart from "./Cart";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";

import emptyCartImg from "../assets/empty-cart.jpg";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const price = products.find(({ id }) => id === cv.productId).price;
    const cost = cv.quantity * price;
    return pv + cost;
  }, 0);

  const tax = total * 0.05;
  const netTotal = total + tax;

  return (
    <>
      <div className="flex flex-col gap-3">
        {carts.length === 0 ? (
          <img
            src={emptyCartImg}
            alt="empty"
            className=" w-[400px] block mx-auto mt-[100px] rounded-lg"
          />

        ) : (
          carts.map((cart) => <Cart key={cart.id} cart={cart} />)
        )}
      </div>
      <div className="absolute bottom-10 left-0 w-full ">
        <Container className="px-5">
          <div className="flex justify-end gap-10 py-3 border-black border-t">
            <div className="text-right">
              <p className="text-gray-500">Total</p>
              <p>{total.toFixed(2)}</p>
            </div>

            <div className="text-right">
              <p className="text-gray-500">Tax(5%)</p>
              <p>{tax.toFixed(2)}</p>
            </div>

            <div className="text-right">
              <p className="text-gray-500"> Net Total</p>
              <p>{netTotal.toFixed(2)}</p>
            </div>
          </div>
          <div className="text-end mb-3">
            <Link className="border-2 border-black px-4 py-2 rounded-md">
              Order Now
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CartSection;
