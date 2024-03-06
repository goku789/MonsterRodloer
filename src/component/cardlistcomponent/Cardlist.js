import React, { Component } from "react";
import './cardlist.css'

class Cardlist extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div classname={`card-list`}>
        {monsters.map((monster) => {
          const{name,email,id}=monster;
          return(
          <div classname={"card-container"} key={id}>
            <img
              alt={`monster${name}`}
              src={`https://robohash.org/${id}?set=set=2&size=180x180`}
            ></img>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        )})}
      </div>
    );
  }
}

export default Cardlist;
