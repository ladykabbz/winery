import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import rocks1 from "./image/rocks1.jpeg";
import rocks2 from "./image/rocks2.jpeg";
import rocks4 from "./image/rocks4.jpeg";
import rocks7 from "./image/rocks7.jpeg";
import rocks9 from "./image/rocks9.jpg";
import OrderForm from "./OrderForm";

export default function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            ROCKS PLAYHOUSE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="intro" id="home">
        <div className="container">
          <h2 className="one">
            BRINGING PEOPLE TOGETHER THROUGH SPONTANEOUS CONVERSATIONS
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="part1">
          <h2 className="heading3" id="about">
            ABOUT ROCKS PLAYHOUSE
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="about">-Initiate great conversations through-</h3>
              <h3 className="subheading">ROCKS PLAYCARDS!</h3>

              <p className="info">
                Feeling a bit jiggy?or you want to have an exciting gamenight
                with friends?Perhaps you want to spark up some intense
                conversation with someone that you are getting to know more?Then
                Rocks playhouse is the place you should run to.Rocks playcards
                are specially curated to initiate mature and exciting
                converations that will have you giving a second of thought into
                it.
              </p>
              <OrderForm />
            </div>
            <div className="col-lg-3">
              <br />
              <img
                src={rocks1}
                alt="nails"
                width={300}
                height={200}
                className="image1"
              />

              <img
                src={rocks2}
                alt="nails"
                width={250}
                height={225}
                className="image2"
              />
              <br />
              <br />
            </div>

            <div className="col-lg-3">
              <br />
              <img
                src={rocks4}
                alt="nails"
                width={275}
                height={325}
                className="image3"
              />
            </div>
          </div>

          <br />
          <br />
        </div>
      </div>

      <div className="part2">
        <div className="container">
          <h2 className="heading2" id="why">
            WHY ROCKS PLAYHOUSE?
          </h2>
          <div className="row">
            <div className="col-lg-3">
              <br />
              <br />

              <img
                src={rocks7}
                alt="nails"
                width={275}
                height={325}
                className="image7"
              />
            </div>
            <div className="col-lg-3">
              <br />
              <br />

              <img
                src={rocks9}
                alt="nails"
                width={275}
                height={325}
                className="image9"
              />
            </div>

            <div className="col-lg-6">
              <p className="info1">
                We've gone the extra mile to make these cards totally epic as
                We've done tons of research and talked to awesome people like
                you to create the most mind-blowing content ever. These cards
                are packed with questions and topics that will blow your mind,
                spark your imagination, and make you see the world in a whole
                new light.
              </p>
              <hr />
              <p className="info1">
                We've tapped into the secrets of what gets people talking,
                laughing, and connecting. So, get ready for some wild
                discussions that'll leave you amazed by the different
                perspectives out there. But here's the really cool part: we've
                made sure Rocks PlayCards are a reflection of YOU. We know
                you're unique, so we've included challenges and reflections that
                dig deep into your passions, dreams, and strengths. It's like
                personal growth on steroids!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="part3">
        <div className="container">
          <h2 className="heading3">GET INTO THE PLAYHOUSE</h2>
          <p className="info3">
            Grab some conversational cards and get ready to dive into awesome
            conversations, learn new things, and have a blast connecting with
            others. It's like a secret weapon for awesome social skills! Get
            ready to rock those conversations like a pro! Grab Rocks PlayCards,
            gather your crew, and let the magic happen. It's time to unleash
            your inner conversational genius and show the world what you're made
            of. Get ready to rock the talk, my darling!
          </p>
          <OrderForm />
          <br />
        </div>
        <br />
      </div>

      <div className="finalpart" id="contact">
        <div className="container">
          <div className="row">
            <div class="col-sm-4">
              <ul>
                <li class="finalist">
                  <a class="finalink" href="#home">
                    Home
                  </a>
                </li>
                <li class="finalist">
                  <a class="finalink" href="#about">
                    About us
                  </a>
                </li>
                <li class="finalist">
                  <a class="finalink" href="#why">
                    why us
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-sm-4">
              <h3 class="finalname">ROCKS PLAYHOUSE</h3>

              <p className="finalword">
                BRINGING PEOPLE TOGETHER THROUGH SPONTANEOUS CONVERSATIONS
              </p>
              <br />
            </div>

            <div class="col-sm-4">
              <ul>
                <li class="finalist">
                  <a
                    class="finalink"
                    href="mailto:kabiinicole@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Email
                  </a>
                </li>
                <li class="finalist">
                  <a
                    class="finalink"
                    href="https://instagram.com/nicole_kabii?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    rel="noreferrer"
                  >
                    instagram
                  </a>
                </li>
                <li class="finalist">
                  <a
                    class="finalink"
                    href="https://twitter.com/simply_nicoole"
                    target="_blank"
                    rel="noreferrer"
                  >
                    twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
