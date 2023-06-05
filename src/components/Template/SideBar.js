import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <header>
        <h2>SHANGEETH S.S</h2>
        <p>
          <a target="_blank" rel="noreferrer" href="mailto:shangeeth@gmail.com">
            shanshangeeth@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Shangeeth, a MERN stack developer with a degree in Computer
        Science Engineering and a passion for building dynamic and responsive
        web applications. As a{" "}
        <a target="_blank" rel="noreferrer" href="https://www.kct.ac.in">
          KCT
        </a>{" "}
        graduate, I&apos;m Seeking an opportunity with an esteemed organization
        where I can utilize my skills to make life handy and enhance learning in
        the field of work .
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/drive/folders/1yNCw7e0_SgHAeC257KVcp38nekl13nzd"
              className="button"
            >
              Resume
            </a>
          ) : (
            <Link to="/contact" className="button">
              Contact Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; SHANGEETH S.S <Link to="/">Portfolio</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
