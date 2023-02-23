import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about SHANGEETH S.S's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>Highlighted projects that demonstrate my skills and experience</p>
          <h3 data-testid="heading">Login Credentials :</h3>
          <p className="credentials"><b className="tittlee">Admin</b> : moto.service.centerr@gmail.com  |<b className="tittlee"> Password</b> : abcd1234</p>
          <p className="credentials"><b className="tittlee">User - 1</b> : user.1@gmail.com  |<b className="tittlee"> Password</b> : abcd1234</p>
          <p className="credentials"><b className="tittlee">User - 2</b> : user.2@gmail.com  |<b className="tittlee"> Password</b> : abcd1234</p>
          <p><b>Extra Credentials </b>for <u>ONLINE BIKE SERVICE BOOKING</u> (First Project) - <a target="_blank" rel="noreferrer" href="https://github.com/Shangeeth7/msc_caps_client/blob/main/README.md">click here</a></p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
