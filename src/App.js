import React, { Component } from 'react';
import Gamecard from './Gamecard';
const Games = [
  {
    id: 1,
    title: 'Destiny',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYM7Yv9YxRN4YUNTgmMjccVWgk4LhuXb07kLKI-p2sDCYV7k5RDQ',
    description: 'Destiny is an online-only multiplayer first-person shooter video game developed by Bungie and published by Activision.',
    price: 9999,
  },
  {
    id: 2,
    title: 'Assaian Creed',
    img: 'https://cdn.vox-cdn.com/thumbor/3oAZ2KO-UAk-aapnD0XoIalpwxU=/0x0:1020x638/1200x800/filters:focal(429x238:591x400)/cdn.vox-cdn.com/uploads/chorus_image/image/55576065/assassins_creed_3.0.jpg',
    description: 'Grand Theft Auto is an action-adventure video game series created by David Jones and Mike Dailly; the later titles of which were created by brothers Dan and Sam Houser, Leslie Benzies and Aaron Garbut.',
    price: 129999,
  },
];
class App extends Component {
  render() {
    return (
        <Gamecard Games = {Games} />
    );
  }
}

export default App;
