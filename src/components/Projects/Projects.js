import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import console from "../../Assets/Projects/console.png";
import emotion from "../../Assets/Projects/emotion.png";
import event from "../../Assets/Projects/events.jpg";
import todo from "../../Assets/Projects/todo.jpg";
import blog from "../../Assets/Projects/blog.jpg";
import gym from "../../Assets/Projects/gym.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo-application"
              description=" ToDo App is a full-stack task management application built with MongoDB, Express, React, and Node.js. It allows users to add, update, delete, and mark tasks as complete with a responsive UI and persistent storage."
              ghLink="https://github.com/Bhavi098/Todo-application"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog-Application"
              description="MERN Blog is a full-stack open-source blogging platform built using MongoDB, Express, React, and Node.js. It features authentication, CRUD operations, image uploads, comments, and a responsive UI."
              ghLink="https://github.com/Bhavi098/Blog-application"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={console}
              isBlog={false}
              title="Hotel-System"
              description=" Developed a console based java application. The main
 feauture of the app is in it's simplicity and use of core OOP
 feautures like Abstraction, Polymorphism, Encapsulation
 and Inheritance."
              ghLink="https://github.com/Bhavi098/Hotel_room_management_java"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="Eventoems"
              description=" EventoEMS is a full-featured MERN stack event management system designed for campus events — enabling scheduling, approval, ticket booking, and QR-based entry all in one platform."
              ghLink="https://github.com/Bhavi098/Event-management-system"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Workout Assistant"
              description="Built with TensorFlow.js and MoveNet, it ensures privacy, supports custom workouts, and enables users to train and test models right from the browser."
              ghLink="https://github.com/Bhavi098/workout-assistant"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
