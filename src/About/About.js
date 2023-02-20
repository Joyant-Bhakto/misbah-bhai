import React from "react";
import "./About.css";
import image from "./Images/About_image.png";
import Testimonials from "./Testimonials";

const About = () => {
  return (
    <>
      <div className="about_hero">
        <h1>
          Hello, I am MD Mezba, <br /> A Product designer, Technology
          Enthusiast, And tour lover
        </h1>
        <h4>Based in Bangladesh — Available worldwide</h4>
      </div>
      <div className="container">
        <div className="about_philoshopy">
          <img src={image} alt="" />
          <div className="about_philoshopy_text">
            <h1>My Philoshopy</h1>
            <p>
              As a designer i worked in this market around 5+ Years. Before deep
              dive to design, i worked with marketing team, development team,
              Founder circles and also several event management firms to
              understand the consequences and effects of design and technology.
            </p>
            <p>
              My believe or philosophy is simple and mimic actual human nature.
              Understand the problem, Iterate with several solutions, Point out
              the pain points, create a solution according to the business needs
              and mimic the lifestyle to tagged it with the business model.
            </p>

            <p>
              My journey is exciting and trilling, cause most of the clients or
              jobs i get all of them are startups. So thrilling and new problem
              arise in every projects. But its really enjoyable journey.{" "}
            </p>
            <h3>
              Like what you see? <u>Let's talk.</u>
            </h3>
          </div>
        </div>
        <div className="first_text">
          <h1>
            What I bring to
            <br /> the table
          </h1>
          <div>
            <p>
              <strong>
                <u>Specialties areas:</u>&nbsp;
              </strong>
              Product Design, Interaction Design, Visual Design, Content
              Strategy, Marketing Strategy, Product Strategy, Critical thinking,
              Psychological Enforcement Strategy
            </p>
            <p>
              <strong>
                <u>Breadth X Depth:</u>&nbsp;
              </strong>
              As a designer i like to think everything depends on technology,
              and Psychology. Technology Helps me to articulate to access more
              boarder, to achieve the best product goal. And help me to find
              something which make me different form other designer.
              <br />
              <br /> Psychology helps me to refine or enforce the feature or
              product or brand to my targeted audience.
            </p>
            <p>
              <strong>
                <u>Best user acquire method:</u>&nbsp;
              </strong>
              As a designer i like to play with the psychology of my users, and
              psychology helps to plot my users, my users needs, my users
              problem, their confirmation bias, their emotional spaces. Its also
              can help marketing and operation team to understand what need to
              be focus and what not to be. And if any business give me a proper
              time i assure you to grow 10+ % more growth in 6 month.
            </p>
          </div>
        </div>
        <div className="second_text">
          <h1>
            Current
            <br /> job roles
          </h1>
          <div>
            <span>Feb 2021 - Present · 1 yr 11 mos</span>
            <h3>Lead Product Designer at Migobucks</h3>
            <ul>
              <li>
                Taken on a management role in the development of strategies,
                concepts, and executions of a wide range of digital products
              </li>
              <li>
                Collaborate with members of cross-functional teams and be a
                champion for user-centered culture and design practices.
              </li>
              <li>
                Create visually engaging, innovative and functional digital
                products.
              </li>
              <li>
                Work closely with product managers, engineers, QA and their
                leaders to ensure a cohesive user experience across all products
              </li>
              <li>
                Managed the design and development process of our product
                portfolio throughout their lifecycle
              </li>
              <li>
                Established strategic plans and objectives to contribute to the
                successful business growth of the company through proper
                execution.
              </li>
              <li>
                Build design culture that encourages innovation while balancing
                the need for optimisation.
              </li>
              <li>Mentor and grow a team of world-class design talent</li>
            </ul>
          </div>
        </div>
        <Testimonials />
      </div>
    </>
  );
};

export default About;
