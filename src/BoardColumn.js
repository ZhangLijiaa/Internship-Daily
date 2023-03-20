import React from "react";
const BoardColumn = ({children, className, name}) => {
  return (
    <section 
      className = {`board-column ${className}`}
    >
      <h3>{name}</h3>
      <ul>{children}</ul>
    </section>
  );
};
export default BoardColumn;