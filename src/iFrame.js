import React from "react";

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const iFrame = () => {
  return (
    <div className="app-content">
      <h1>iFrame Content</h1>
      <p>
          Here is some content for your iFrame.  Below is your iFrame.
      </p>
      <iframe title="llu frame" src="https://letslevelup.net/" width="100%" height="800px"> </iframe>
    </div> 
  );
};

export default iFrame;