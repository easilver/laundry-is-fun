import React from 'react';
import Soap from './soap.jsx';
import Clothes from './clothes.jsx';

class Washer extends React.Component {

    constructor(props){
        super(props);
        this.state = {inUse: 'No', clothes: 0, soap: 0, likesCount:0, statusMessage: ''};
        this.onWash = this.onWash.bind(this);
        this.toggleInUse = this.toggleInUse.bind(this);
        this.updateClothes = this.updateClothes.bind(this);
        this.updateSoap = this.updateSoap.bind(this);
    }

    //toggles if the washer is currently in use
    toggleInUse(){
        if(this.state.inUse == 'No') {
            this.setState({inUse: 'Yes'})
        }else{
            this.setState({inUse: 'No'})
        }
    }

    onWash(){
        let soapNum = this.state.soap;
        let clothesNum = this.state.clothes;

        //checks for invalid ammounts
        if(clothesNum == 0){
            this.setState({statusMessage:"You didn't put in any clothes to wash!"});
        }
        else if((soapNum == 0) || (clothesNum/soapNum > 5)){
            this.setState({statusMessage: "You didn't use enough soap! You need 1 soap for 5 pieces of clothing."});
        }
        else {
            //otherwise start wash
            this.toggleInUse();
            this.setState({statusMessage:"Washing... "});
            setTimeout(function() {
                //end wash after 15 seconds
                this.toggleInUse();
                this.setState({statusMessage: "You washed " +
                this.state.clothes + " clothes, with "
                + this.state.soap + " soap."});
            }.bind(this), 15000);
        }
    }

    //sets new number of clothes when user chooses an amount
    updateClothes (e) {
        this.setState({clothes: e});
    }

    //sets new number of soap when user chooses an amount
    updateSoap (e) {
        this.setState({soap: e});
    }

    render() {
        return (
            <div className="content">
                <div className="washing-machine"></div>
                <p>Washer currently in use? {this.state.inUse}</p>
                <div className="options">
                    <Clothes onChange ={this.updateClothes}/>
                    <Soap onChange ={this.updateSoap}/>
                    <button onClick={this.onWash}>Start Washer</button>
                </div>
                <div className="status-message">{this.state.statusMessage}</div>
            </div>
        )
    }


}

export default Washer;