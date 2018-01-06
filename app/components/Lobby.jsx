import React from 'react';
import database from '../../firebase';
import { setupGame } from '../game_logic';

export default class Lobby extends React.Component {
  constructor(props){
   super(props);

   this.state = {
     name: null
   };

   this.handleNameChange = this.handleNameChange.bind(this);
   this.createGame = this.createGame.bind(this);
 }
  componentDidMount() {
    const games = database.ref('games');
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  createGame(e) {
    e.preventDefault();
    setupGame(this.state.name);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createGame}>
          <input type="text" name="name" onChange={this.handleNameChange} placeholder="Name" />
          <button type="submit">Create New Game</button>
        </form>
        <h1>Join Games</h1>
      </div>
    )
  }
}