import React from 'react';
import firebase from 'firebase';
import database from '../../firebase'

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: null
        }
    }

    componentDidMount() {
        database.ref().on('value', snapshot => {
            // console.log('sapshot val', snapshot.val())
            this.setState({test: snapshot.val()})
        })
    }

    render() {
        return (
            <h1>{this.state.test}</h1>
        )
    }
}