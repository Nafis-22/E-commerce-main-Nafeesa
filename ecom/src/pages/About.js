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
          <div className="container py-3 ">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="https://media.istockphoto.com/photos/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-picture-id1206800961?k=20&m=1206800961&s=612x612&w=0&h=hcPoUKhWtzHXR3PIAHVgPVZDZaO7R8yZ1wNPkUSsgwU="
                  alt="e-commerce"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h5>
                  From Dharmika Enterprises (wholesale & retail) "Dharmika
                  Enterprises
                </h5>
                Established in the year 2016, Dharmika Enterprises in Maddur
                Nagar, Kurnool is a top player in the category Women Readymade
                Garment Retailers in the Kurnool. (wholesale &retail) provides
                all kinds of Men's and Ladies clothing,Footwear and Accessories
                in Kurnool,Andhra Pradesh.Our focus is to position ourselves as
                the top retail Store servicing this particular market."
                <h6 className="py-3">
                  Address:50/753/7, Tagore Nagar Rd, Maddur Nagar, Kurnool,
                  Andhra Pradesh 518002
                </h6>
              </div>
            </div>
          </div>
        </>
      )}
    </ShopContext.Consumer>
  );
}

export default About;
