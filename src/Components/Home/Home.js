import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar'
import axios from 'axios'

class Home extends Component {

    constructor (){
        super();

        this.state = {
            champions: [],
        }
        
    }

      componentDidMount() {
    const results = axios.get(`https://api.pandascore.co/lol/champions?token=ZmN26B-c2uTVOTlstvBHbhPUgW1iM51nM7QbskMaGbu8tcWIVgE`)
      .then(res => res.data )
      .then((finalResult) => {  this.setState ({ champions: finalResult } );
        console.log(this.state)

 });
  
      }
 
  

    render() {
         console.log(this.state.heroes)
              var championStats = this.state.champions.map( (champion, i) => {
            return (
              <div key={i}>
                <div> {champion.name} Armor: {champion.armor}</div>
              </div>
            )
          })
        return (
            <div className="main">
                <Navbar title="Champions"/>
                 <SearchBar />
                  {championStats}
            <div>

        </div>
               


            </div>
        );
    }
}

export default Home;