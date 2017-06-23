import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import SearchBar from '../SearchBar/SearchBar'
import Navbar from '../Navbar/Navbar';
import ChampionStats from './ChampionStats/ChampionStats'
import './home.css'

class Home extends Component {
    constructor() {
        super();

        this.state = {
            champions: [],
            userinput: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
       
    }

    componentDidMount() {
        const results = axios.get(`https://api.pandascore.co/lol/champions?token=ZmN26B-c2uTVOTlstvBHbhPUgW1iM51nM7QbskMaGbu8tcWIVgE`)
            .then(res => res.data)
            .then((finalResult) => {
                this.setState({
                    champions: finalResult
                });
                console.log(this.state)
            });
    }

    handleInputChange(ev) {
        this.setState({
            userinput: ev.target.value
        })
    }

 


        render() {
            
            const championStats = this.state.champions.filter(
                (champion) =>{
                    return champion.name.indexOf(this.state.userinput) !== -1 
                } 
            )
            .map((champion, i) => {
                return <ChampionStats
                            image = {champion.image_url}
                            name = {champion.name}
                            health = {champion.hp}
                            armor = {champion.armor}
                            attack = {champion.attackdamage}
                            magic = {champion.mp}
                            range = {champion.attackrange}
                            speed = {champion.movespeed}
                            key={i}
                />                
            }) 

            return ( 
                <div className = "main">
                    <Navbar title = "Champions" />
                    <SearchBar change={this.handleInputChange}/> 
                    <h4 className="stats-text"> Level 1 stats  from {this.state.userinput} </h4> 
                    { championStats} 
                </div>
            );
        }
    }

    export default Home;