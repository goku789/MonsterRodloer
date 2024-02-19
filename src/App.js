import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      monsteres: [],
      serachFeild: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
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
      )
  }
  onSearchChange = (event) => {
    const serachFeild = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { serachFeild };
    });

  }

  render() {
    const { monsteres, serachFeild } = this.state;
    const { onSearchChange } = this
    let arraydata = monsteres.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(serachFeild)
    })
    return (
      <div>
        <input
          className='search-boxx'
          type='search'
          placeholder='search monsters'
          onChange={onSearchChange}></input>

        {
          arraydata.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App
