import database from '../../firebase';

const randomCard = () => {
    const colors = ['white', 'black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'multi'];
    const card = colors[Math.floor(Math.random() * 9)]
    return card;
  }

const setupGame = name => {
  const games = database.ref('games');
  const newGame = games.push();

    newGame.set({
      status: 'pending',
      players: 'null',
      cards: {
        1: randomCard(),
        2: randomCard(),
        3: randomCard(),
        4: randomCard(),
        5: randomCard()
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
    }, () => {
      const admin = database.ref(`games/${newGame.key}`).child('players').push();
      admin.set({
        name,
        isAdmin: true
      })
    }).catch(error => {
      console.error(); 
    })
}

export default setupGame; 