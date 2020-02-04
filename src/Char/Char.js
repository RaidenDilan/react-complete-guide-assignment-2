import React from 'react';

const char = (props) => {
  const charStyle = {
    display: 'inline-block',
    textTransform: 'uppercase',
    padding: '0 8px',
    margin: '4px 8px',
    border: '1px solid black',
    borderRadius: '4px',
    textAlign: 'center'
  };

  return (
    <div
      style={charStyle}
      onClick={ props.clicked }
      >
      <p>{ props.character }</p>
    </div>
  );
};

export default char;
