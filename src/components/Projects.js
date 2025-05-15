import { Container, Row, Col, Tab, Nav, Modal } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import britech from "../assets/img/Britech-Group-Inc-Website.jpg";
import britectFull from "../assets/img/Britech-Group-Inc.jpg";

import collegiate from "../assets/img/Collegiate-Website.jpg";
import collegiateFull from "../assets/img/Collegiate-leadership-&-Achievement-Recovered.jpg";

import nanosense from "../assets/img/NanoSense-banner.jpg";
import nanosenseFull from "../assets/img/NanoSense.jpg"

import homeliving from "../assets/img/Home-and-Living-Marketing---1-banner.jpg";
import homelivingFull from "../assets/img/Home and Living Marketing - 1.jpg"

import cleanpool from "../assets/img/Cleanpool-website.jpg";
import cleanpoolFull from "../assets/img/Cleanpool.jpg";

import heaven from "../assets/img/Havens-5000-website.jpg";
import heavenFull from "../assets/img/Havens-5000.jpg"



import Brewed from "../assets/img/banner/Brewed-Balance-Roasters.jpg";
import Food from "../assets/img/banner/Food-Industry.jpg";
import Landscape from "../assets/img/banner/Landscape-design.jpg";
import starpak from "../assets/img/banner/starpak.jpg";
import crevzlimo from "../assets/img/banner/crevzlimo.jpg";
import smokysupplies from "../assets/img/banner/smokysupplies.jpg";

import arenaLogo from "../assets/img/logo/Arena-logo-v1.jpg";
import construction from "../assets/img/logo/CONSTRACTION.jpg";
import Cyber from "../assets/img/logo/Cyber-Logo.png";
import Abt from "../assets/img/logo/abt-img-after.jpg";
import heavenLogo from "../assets/img/logo/heaven-5000.jpg";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'




export const Projects = () => {

  // Inside your functional component
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleImageClick = (fullImage, title) => {
    setModalImage(fullImage);
    setModalTitle(title);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const webDesignProjects = [
    {
      title: "Modern Business Website",
      description: "Web Design & Development",
      imgUrl: britech,
      fullImage: britectFull
    },

    {
      title: "Modern Company Website",
      description: "Company Branding Site",
      imgUrl: nanosense,
      fullImage: nanosenseFull
    },
    {
      title: "Courses Website",
      description: "Web UI/UX",
      imgUrl: collegiate,
      fullImage: collegiateFull
    },

    {
      title: "Pool Company Website",
      description: "Web UI/UX",
      imgUrl: cleanpool,
      fullImage: cleanpoolFull
    },
    {
      title: "Modern Business Website",
      description: "Web Design & Development",
      imgUrl: homeliving,
      fullImage: homelivingFull
    },
    {
      title: "Water Company Website",
      description: "Personal Branding Site",
      imgUrl: heaven,
      fullImage: heavenFull
    },
  ];

  const graphicDesignProjects = [
    {
      title: "Creative Poster Design",
      description: "Graphics Design",
      imgUrl: Brewed,
      fullImage: Brewed
    },
    {
      title: "Social Media Banners",
      description: "Creative Assets",
      imgUrl: Food,
      fullImage: Food
    },
    {
      title: "Event Brochure",
      description: "Print Design",
      imgUrl: Landscape,
      fullImage: Landscape
    },
    {
      title: "Creative Poster Design",
      description: "Graphics Design",
      imgUrl: starpak,
      fullImage: starpak
    },
    {
      title: "Social Media Banners",
      description: "Creative Assets",
      imgUrl: crevzlimo,
      fullImage: crevzlimo
    },
    {
      title: "Event Brochure",
      description: "Print Design",
      imgUrl: smokysupplies,
      fullImage: smokysupplies
    },
  ];

  const brandingProjects = [
    {
      title: "Startup Brand Identity",
      description: "Logo & Branding",
      imgUrl: arenaLogo,
      fullImage: arenaLogo
    },
    {
      title: "Corporate Rebranding",
      description: "Visual Identity",
      imgUrl: construction,
      fullImage: construction
    },
    {
      title: "Personal Brand Logo",
      description: "Logo Design",
      imgUrl: Cyber,
      fullImage: Cyber
    },
    {
      title: "Startup Brand Identity",
      description: "Logo & Branding",
      imgUrl: Abt,
      fullImage: Abt
    },
    {
      title: "Corporate Rebranding",
      description: "Visual Identity",
      imgUrl: heavenLogo,
      fullImage: heavenLogo
    },
    {
      title: "Personal Brand Logo",
      description: "Logo Design",
      imgUrl: Cyber,
      fullImage: Cyber
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Design is about making ideas tangible.
                    Here’s a glimpse into the work where creativity meets strategy — websites, graphics, and brand visuals crafted to tell stories, engage users, and drive results.
                    Explore some of the projects that reflect my style and expertise.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Graphic Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Branding</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                      <Tab.Pane eventKey="first">
                        <Row>
                          {webDesignProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} onClick={handleImageClick} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {graphicDesignProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} onClick={handleImageClick} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {brandingProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} onClick={handleImageClick} />
                          ))}
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Zoom>
            <img src={modalImage} alt={modalTitle} style={{ width: '100%', borderRadius: '12px' }} />
          </Zoom>
        </Modal.Body>
      </Modal>
    </section>
  )
}
