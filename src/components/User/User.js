import React from "react";

function User(props) {
  console.log(props.name);
  return <div>{`${props.name}-${props.lastName}`}</div>;
}

export default User;
