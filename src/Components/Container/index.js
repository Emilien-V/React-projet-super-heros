import React from 'react';

export default function Container(props) {

  return (
    <>
      {props.header}
      <div className="container-fluid" id={props.id && props.id}>
        <div className="row">
          <div className="col">{props.children}</div>
        </div>
      </div>
    </>
  );
}
