import React from 'react';
import database from '../../firebase';

export default class Lobby extends React.Component {
    constructor(props) {
        super(props)
        this.createGame = this.createGame.bind(this)
    }

    randomCard() {
        const colors = ['white', 'black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'multi'];
        const card = colors[Math.floor(Math.random() * 9)]
        return card;
    }

    createGame(e) {
        e.preventDefualt;
        const games = database.ref('games');
        const newGame = games.push();
        newGame.set({
            cards: {
                1: this.randomCard(),
                2: this.randomCard(),
                3: this.randomCard(),
                4: this.randomCard(),
                5: this.randomCard()
            },
            tracks: {
                1: {
                    cities: {
                        1: 'FiDi',
                        2: 'Battery Park City'
                    },
                    color: 'blue',
                    claimed: 'false'
                },
                2: {
                    cities: {
                        1: 'FiDi',
                        2: 'Chinatown'
                    },
                    color: 'red',
                    claimed: 'false'
                }
            }
        })
    }

    render() {
        return (
            <button onClick={this.createGame}>Create New Game</button>
        )
    }
}