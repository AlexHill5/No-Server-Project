import React, {Component} from 'react';
// import Modals from '../Modale/Modale'
// import Modal, {closeStyle} from 'simple-react-modal'
import "./ChampionStats.css"
import Modale from '../Modale/Modale';
import {button} from 'react-bootstrap'






class ChampionStats extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


    render(){

    return (
        <div className="wrapper">
            <div className="champion-display"> 
             <img onClick={this.toggleModal} className="thumbnail zoom"  src={this.props.image}/> 
                
                <h1 onClick={this.toggleModal} className="champ-name" > {this.props.name}</h1> 
                            <div className="App">


                                <Modale show={this.state.isOpen}
                                onClose={this.toggleModal}>
                                    <img className="nav-gif" src="https://media.giphy.com/media/UHF73yPwq4ABW/giphy.gif" />
                                </Modale>
                            </div>

           <div className="icon-helper"> <p>  Health: {this.props.health} </p> <img className="icons" src={require("./icons/heart-icon.png")} />  </div>
            <div className="icon-helper"> <p> Armor: {this.props.armor}</p> <img className="icons" src={require("./icons/red-shield.png")} /> </div>
             <div className="icon-helper"><p>  Attack-Damage: {this.props.attack}</p>  <img className="icons" src={require("./icons/color-swords.png")}/> </div>
             <div className="icon-helper"><p>  Magic-Power: {this.props.magic}</p>  <img className="icons" src={require("./icons/orange-flame.png")} /></div>
             <div className="icon-helper"><p> Attack-Range: {this.props.range}  </p> <img className="icons" src={require("./icons/binoculars.png")} /></div>
             <div className="icon-helper"><p> Movement-Speed: {this.props.speed}</p>  <img className="icons" src={require("./icons/urgency-color.png")} /></div>
            </div>
        </div>
    );
    }
}

export default ChampionStats;