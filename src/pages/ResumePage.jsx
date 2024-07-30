/* eslint-disable no-unused-vars */
import React from 'react';

const ResumePage = () => {
  return (
    <div style={{ textAlign: 'center', width: '100vw', height: '100vh'}}>
      <iframe
        src="/AlexG_Resume.pdf"
        title="AlexGresume"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default ResumePage;
