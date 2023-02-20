import React from "react";
import Image1 from "./Images/Image1.png";
import Image2 from "./Images/Image2.png";

const CaseStudies = () => {
  return (
    <>
      <section className="container">
        <div className="case_title">
          <h2>My case studies ☟</h2>
        </div>
        <div className="case_section ">
          <div className="image_div">
            <img src={Image1} alt=""></img>
          </div>
          <div className="text_div">
            <h2>Viverra accumsan, sed vestibulum sit turpis neque, sit.</h2>
            <p>
              At accumsan condimentum donec dictumst eros, tempus in diam.
              Ornare gravida quis eu blandit lectus vestibulum egestas. Congue
              neque in mi vulputate tincidunt amet arcu varius pulvinar.
            </p>
            <button className="btn">Read more</button>
            <span className="line">&raquo;</span>
          </div>
        </div>
        <div className="case_section case_section_revarce">
          <div className="image_div">
            <img src={Image2} alt=""></img>
          </div>
          <div className="text_div revarce_text">
            <h2>Viverra accumsan, sed vestibulum sit turpis neque, sit.</h2>
            <p>
              At accumsan condimentum donec dictumst eros, tempus in diam.
              Ornare gravida quis eu blandit lectus vestibulum egestas. Congue
              neque in mi vulputate tincidunt amet arcu varius pulvinar.
            </p>
            <button className="btn">Read more</button>
            <span className="line">&raquo;</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
