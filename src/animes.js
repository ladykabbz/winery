import React from "react";
import Rotate from "react-reveal/Rotate";
import "./App.css";

class RotateExample extends React.Component {
  render() {
    return (
      <div>
        <Rotate top left>
          <h2 className="one">
            BRINGING PEOPLE TOGETHER THROUGH SPONTANEOUS CONVERSATIONS
          </h2>
        </Rotate>
      </div>
    );
  }
}

export default RotateExample;
