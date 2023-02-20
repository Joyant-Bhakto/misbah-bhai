import React from "react";
import image from "./Images/blog1.png";

const Hypothesis = ({ quantity = [] }) => {
  return (
    <>
      <section className="blogs_section container">
        <div className="blogs_title">
          <h2>My Hypothesis ☟</h2>
        </div>
        {quantity.map((key) => (
          <div className="blog_card">
            <div className="blog_card_hover" key={key}>
              <img src={image} alt=""></img>
              <h2>Article</h2>
              <h3 className="blog_title">
                Placerat sed pharetra interdum odio et tincidunt
              </h3>
              <p className="blog_description">
                In purus at morbi magna in in maecenas. Nunc nulla magna elit,
                varius phasellus blandit convallis.
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Hypothesis;
