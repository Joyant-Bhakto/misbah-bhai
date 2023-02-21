import React from "react";
import image from "./Images/blog1.png";

const Blogs = (data) => {
  return (
    <>
        <a href={`${data.data.link}`}>

        <div className="blog_card">
            <div className="blog_card_hover">
                <img src={data.data.thumbnail} alt=""></img>
                <h2>Article</h2>
                <h3 className="blog_title">
                    {data.data.title}
                </h3>
                <p className="blog_description">
                    In purus at morbi magna in in maecenas. Nunc nulla magna elit,
                    varius phasellus blandit convallis.
                </p>
            </div>
        </div>
        </a>
    </>
  );
};

export default Blogs;
