import React from 'react';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Skills from '../components/Resume/Skills';

import degrees from '../data/resume/degrees';
import { skills, categories } from '../data/resume/skills';

const Resume = () => (
  <Main
    title="Resumee"
    description="SHANGEETH S.S's Resume."
  >
    <article className="post" id="resume">
      <Education data={degrees} />
      <Skills skills={skills} categories={categories} />

    </article>
  </Main>
);

export default Resume;
