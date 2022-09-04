import React from "react";
import Home from "../componant/Home";
import ShopContext from "../context/shop-context";
import MainNavigation from "../components/MainNavigation";

const ProductsPage = (props) => {
  return (
    <ShopContext.Consumer>
      {(context) => (
        <React.Fragment>
          <MainNavigation
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
          <Home />
          <div className="containr my-5 py-5 mx-3 my-3">
            <div className="row">
              <div className="col-12 mb-5">
                <h1 className="dispaly-6 fw-bolder text-center">
                  Latest Products
                </h1>
                <hr />
              </div>
            </div>
            <div className="row justify-content-center">
              <>
                {context.products.map((product) => {
                  return (
                    <>
                      <div className="col-md-3 mb-4  ">
                        <div
                          className="card h-100 text-center p-4"
                          key={product.id}
                        >
                          <img
                            src={product.image}
                            className="card-img-top"
                            alt={product.title}
                            height="250px"
                          />
                          <div className="card-body">
                            <h5 className="card-title mb-0">
                              {product.title.substring(0, 12)}...
                            </h5>
                            <p className="card-text lad fw-bold">
                              ${product.price}
                            </p>

                            <button
                              className="btn btn-outline-dark mx-2"
                              onClick={context.addProductToCart.bind(
                                this,
                                product
                              )}
                            >
                              ADD TO CART
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            </div>
          </div>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

export default ProductsPage;
