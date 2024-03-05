import React, { Component } from 'react'

 class Cardlist extends Component {
  render() {
    const{monsters}=this.props
    return (
      <div>
       {
        monsters.map(monster=>(
            <div classname='card-container'> 
                <img alt={`monster${monster.name}`}></img>
            </div>
        ))
       }
      </div>
    )
  }
}

export default Cardlist
