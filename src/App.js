import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import Appi from './Api';

class App extends Component {
  state = {
    characters: [],
  };

  addCharacter = (character) => {
    // this.setState(state => ({characters: [...state.characters, character]}));
  }

  removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character,i) => {
        console.log(i, index);
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    const { characters } = this.state
    // const characters = [
    //   {
    //     name: 'Charlie',
    //     job: 'Janitor',
    //   },
    //   {
    //     name: 'Mac',
    //     job: 'Bouncer',
    //   },
    //   {
    //     name: 'Dee',
    //     job: 'Aspring actress',
    //   },
    //   {
    //     name: 'Dennis',
    //     job: 'Bartender',
    //   },
    // ]
    // I used this for props!
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} addCharacter={this.addCharacter} />
        <Form handleSubmit={this.handleSubmit} />
        <Appi />
      </div>
    )
  }
}

export default App