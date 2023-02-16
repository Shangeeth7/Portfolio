import React from 'react';

const Education = () => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/u/0/folders/13PK-j5lO4XbVYbs8puaZkKNzhUzruZbB">
        <h3>Resume - <span className="dotteddd">click here</span></h3>
      </a>
    </div>
  </div>
);

Education.defaultProps = {
  data: [],
};

export default Education;
