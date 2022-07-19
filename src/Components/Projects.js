import React from 'react'
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import 'animate.css'
import TrackVisibility from 'react-on-screen'

const Projects = () => {

    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];

  return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                  {({isVisible}) => 
                  <div className={isVisible ? 'animate__animated animate__fadeIn' : ''} >
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aspernatur incidunt!</p>
                    </div>}
                  </TrackVisibility>
                    <Tab.Container id='projects-tab' defaultActiveKey='first'>
                        <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab' >
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non earum aliquid, rem aperiam mollitia maxime!</Tab.Pane>
                            <Tab.Pane eventKey='third'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae hic reprehenderit molestias eligendi, natus modi.</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2} />
    </section>
  )
}

export default Projects