import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ShopContext from "../context/shop-context";

const CartPage = (props) => {
  const context = useContext(ShopContext);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <React.Fragment>
      <div className="container my-3 ">
        <nav class="navbar ">
          <div class="container-fluid">
            <h4 class="navbar-brand">
              <NavLink className="navbar-brand fw-bold fs-4 " to="/">
                <i class="fa fa-arrow-left mx-3"></i>
                Continue Shopping
              </NavLink>
            </h4>
            <button class="btn btn-outline-success ">
              <i class="fa fa-cart-arrow-down mx-1"></i>
              {context.cart.length}
            </button>
          </div>
        </nav>
        <hr />
        <br />
        <div className="container">
          <h4>Shopping Cart</h4>
          <p>
            You Have <span>{context.cart.length}</span> items in Shoppng Cart
          </p>

          {context.cart.map((cartItem) => (
            <>
              <div className=" py-3" key={cartItem.id}>
                <div class="d-flex justify-content-between  ">
                  <div class="align-self-center">
                    <img
                      src={cartItem.image}
                      alt="timage"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div class="align-self-center ">
                    <h5>{cartItem.title}</h5>
                  </div>

                  <div class="align-self-center">
                    <h4>{cartItem.price}$</h4>
                  </div>

                  <div class="align-self-center ">
                    <i
                      class="fa fa-trash mx-3 "
                      onClick={context.removeProductFromCart.bind(
                        this,
                        cartItem.id
                      )}
                    ></i>
                  </div>
                </div>
                <hr />
              </div>
            </>
          ))}
        </div>
      </div>
      <h3 className="text-center">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
      </h3>
    </React.Fragment>
  );
};

export default CartPage;
