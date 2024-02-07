import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row >
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                {/* <img src={driveImg} alt="" className="w-100 rounded-3" /> */}
                <iframe width="510" height="330" src="https://www.youtube.com/embed/zs3AnAJpSOE?si=b2uUV6dEKWo8cafZ" frameborder="0" allowfullscreen></iframe>
              </div>
            </Col>
 
            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Team : Web Warriors
                </h2>
                <br/>
                <p className="section__description">
                 RentNGo is a react based project in which you can book or pick car of your choice,can watch blogs covering car maintainance.
                </p>
                 <br/>
                <p className="section__description">
                We used Components,Routing (also Dynamic Routing) and Array of objects to concise the data .It include Components such as Home,About,Contact and login.In  Blog component ,we have fetched api of youtube.
                </p>

           
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle"></h6>
              <h2 className="section__title">Our Team Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
