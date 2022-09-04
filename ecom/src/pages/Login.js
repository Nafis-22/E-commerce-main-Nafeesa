import React from "react";
import MainNavigation from "../components/MainNavigation";
import ShopContext from "../context/shop-context";

function About() {
  return (
    <ShopContext.Consumer>
      {(context) => (
        <>
          <MainNavigation
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
          <form className="container py-3">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={{ width: "500px" }}
                required
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                style={{ width: "500px" }}
                required
              />
            </div>
            <br />

            <button type="submit" class="btn btn-primary ">
              Submit
            </button>
          </form>
        </>
      )}
    </ShopContext.Consumer>
  );
}

export default About;
