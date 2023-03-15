import React from 'react';
import { Link } from 'react-router-dom';
import MERN from '../components/Contact/MERN';

import Main from '../layouts/Main';

const today = new Date();
const curHr = today.getHours();
let wishing;

if (curHr < 12) {
  wishing = 'Good Morning';
} else if (curHr < 18) {
  wishing = 'Good Afternoon';
} else {
  wishing = 'Good Evening';
}

const Index = () => (
  <Main
    description={"SHANGEETH S.S's personal website. Coimbatore based KCT graduate, "}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Me</Link></h2>
          <h3 data-testid="heading"><Link to="/"><MERN /></Link></h3>
          <p>
            {'      '}{wishing}! I&apos;m a MERN stack developer with a strong passion for creating dynamic
            and responsive web applications
            using <b>M</b>ongo DB ,<b>E</b>xpress JS ,<b>R</b>eact JS and <b>N</b>ode JS. My focus
            is on creating clean, efficient, and maintainable code that
            delivers an exceptional user experience.
          </p>
          <p>
            I&apos;m passionate about staying up-to-date with the latest industry
            trends and technologies to ensure
            that my applications are cutting-edge and optimized for performance.
            Whether you need a simple website
            or a complex web application, I&apos;m committed to delivering
            high-quality solutions that exceed your expectations.
          </p>
          <p>
            I&apos;m also proud to hold an intensive Full Stack certification that
            has equipped me with the skills and knowledge necessary to create exceptional
            web applications. Let&apos;s work together to develop cutting-edge solutions that
            will make your web experience remarkable.
          </p>
        </div>
      </header>
      <p> Welcome to my website. You can check out my  {'  '}
        <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/u/0/folders/13PK-j5lO4XbVYbs8puaZkKNzhUzruZbB">Resume</a> , {'   '}
        <Link to="/resume">Skills</Link> , {'   '}
        <Link to="/projects">Projects</Link> , {'   '}
        or <Link to="/contact">Contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
