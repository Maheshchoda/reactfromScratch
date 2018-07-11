import React from 'react';

const Gamelist = (props) => {
  return (
    <div>
    <button onClick = {props.sorted} className= 'ui primary button'>Sort</button>
    <div className="ui card">
     <div className="image">
      <img  src={props.games.img} />
     </div>
    <div className="content">
       <a className="header">{props.games.title}</a>
        <div className="description">
        {props.games.description}
        </div>
   </div>
  <div className="extra content">
     <a>
     <i className="dollar sign icon"></i>
     { props.games.price}
    </a>
   </div>
 </div>
 </div>
);
};

export default Gamelist;
