import React from "react";
import Image1 from "./Images/Image1.png";
import Image2 from "./Images/Image2.png";

const CaseStudies = (data) => {
console.log(data,'DDD')
  return (
    <>
      <a href={`${data.data.link}`}>
        <div className="case_section ">
          <div className="image_div">
            <img src={data?.data.thumbnail} alt=""></img>
          </div>
          <div className="text_div">
            <h2>{data.data.title}</h2>
            <p>
              At accumsan condimentum donec dictumst eros, tempus in diam.
              Ornare gravida quis eu blandit lectus vestibulum egestas. Congue
              neque in mi vulputate tincidunt amet arcu varius pulvinar.
            </p>
            <button className="btn">Read more</button>
            <span className="line">&raquo;</span>
          </div>
        </div>
      </a>
      <a href={`${data.data.link}`}>
        <div className="case_section case_section_revarce">
          <div className="image_div">
            <img src={data?.data.thumbnail} alt=""></img>
          </div>
          <div className="text_div revarce_text">
            <h2>{data.data.title}</h2>
            <p>
              At accumsan condimentum donec dictumst eros, tempus in diam.
              Ornare gravida quis eu blandit lectus vestibulum egestas. Congue
              neque in mi vulputate tincidunt amet arcu varius pulvinar.
            </p>
            <button className="btn">Read more</button>
            <span className="line">&raquo;</span>
          </div>
        </div>
      </a>
    </>
  );
};

export default CaseStudies;
