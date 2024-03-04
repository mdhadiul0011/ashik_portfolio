import React from 'react'

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "inline-block",  position: "absolute", left: '45%', transform: 'translateX(-45%)', top: '370px', }}
        onClick={onClick}
      />
    );
  }

  export default SamplePrevArrow