import React, { Component } from 'react'

export class App extends Component {

constructor(props) {
  super(props)

  this.state = {
    monsteres:[],
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users)=>
  this.setState(
    ()=>{
      return {monsteres:users};
    },
    ()=>{
      console.log(this.state);
    }
  )
  )
}


  render() {
    return (
      <div>
        <input 
        className='search-boxx' 
        type='search' 
        placeholder='search monsters' 
        onChange={(event) =>{
          console.log(event.target.value);
          const arraydata=this.state.monsteres.filter(x=>x.name==event.target.value)
          console.log(arraydata);
        }}></input>

        {
          this.state.monsteres.map((monster)=>{
            return(
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
