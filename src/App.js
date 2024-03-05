import React, { Component } from "react";
import Cardlist from "./component/Cardlist";
import Searchbox from "./component/Searchbox";
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsteres: [],
      serachFeild: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsteres: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  onSearchChange = (event) => {
    const serachFeild = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { serachFeild };
    });
  };

  render() {
    const { monsteres, serachFeild } = this.state;
    const { onSearchChange } = this;
    let arraydata = monsteres.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(serachFeild);
    });
    return (
      <div>
        <Searchbox 
        onChangeHandler={onSearchChange} 
        placeholder='monster-search-monster'
        classname='SearchBox'
        />

        <Cardlist monsters={arraydata}></Cardlist>
      </div>
    );
  }
}

export default App;
