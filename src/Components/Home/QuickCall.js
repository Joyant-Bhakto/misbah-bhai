import React from "react";
import image from "./Images/Call_image.gif";
import BookACall from "../BookACall";

const QuickCall = () => {
  return (
    <section className="container quickcall_section">
      <div className="quickcall">
        <div className="quickcall_image">
          <img src={image} alt=""></img>
        </div>
        <div className="quickcall_Text">
          <h2>Lets have a quick call!</h2>
          <p>
            I believe being a entrepreneur its hard to know about everything, As
            a designer i am here to help you regarding the design related issues
            and also can help to create a great product for cusomer.
          </p>
          <BookACall />
        </div>
      </div>
    </section>
  );
};

export default QuickCall;
