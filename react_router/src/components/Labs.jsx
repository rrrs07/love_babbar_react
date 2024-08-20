import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {

  const navigate = useNavigate();

  function clickHandler() {
    //move to about page
    navigate("/about");
  }
  function backHandler() {
    //move to back page
    navigate(-1);
  }

  return (
    <div>
      <div>
        labs page
      </div>
      <button onClick={clickHandler}>Move to about page</button>
      <button onClick={backHandler}>Go Back</button>
    </div>
  );
};

export default Labs;
