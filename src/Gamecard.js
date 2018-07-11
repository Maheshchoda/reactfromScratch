import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gamelist from './Gamelist';
import sortBy from 'lodash';

class  Gamecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Games: [
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
      ],
    };
  }

  sortHandler = () => {
    alert('hello');
      //    this.setState({
      //     arraySort(Games, 'title');
      // })
    };

  render () {
    return (
      <div >
      {
      this.state.Games.map(games => {
        return (
          <div className ='container'>
             <div className='ui four cards'>
               <Gamelist sorted = {this.sortHandler} games= {games} key = {games.id}/>
               
             </div>
          </div>

        );
      })
    }
  </div>
    );
  }
};

Gamecard.propTypes = {
  title: PropTypes.string,
};

export default Gamecard;
