import React from 'react';

class Washer extends React.Component {

    constructor(props){
        super(props);
        this.state = {inUse: 'No', clothes: 0, soap: 0, likesCount:0};
        this.onWash = this.onWash.bind(this);
        this.toggleInUse = this.toggleInUse.bind(this);
        this.addClothes = this.addClothes.bind(this);
        this.addSoap = this.addSoap.bind(this);
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
            alert("You didn't put in any clothes to wash!");
        }
        else if((soapNum == 0) || (clothesNum/soapNum > 5)){
            alert("You didn't use enough soap! You need 1 soap for 5 pieces of clothing.");
        }
        else {
            //otherwise start wash
            this.toggleInUse();
            console.log("washer started");
            setTimeout(function() {
                //end wash after 15 seconds
                this.toggleInUse();
                console.log("washer finished");
                console.log("You washed " + this.state.clothes + " clothes, with " + this.state.soap + " soap.");
            }.bind(this), 15000);
        }
    }

    //sets new number of clothes when user chooses an amount
    addClothes (e) {
        this.setState({clothes: e.target.value});
    }

    //sets new number of soap when user chooses an amount
    addSoap (e) {
        this.setState({soap: e.target.value});
    }

    render() {
        return (
            <div className="content">
                <div className="washing-machine"></div>
                <div className="optioins">
                    <p>Washer currently in use? {this.state.inUse}</p>
                    Add Clothes
                    <select label="addedClothes" onChange={this.addClothes}>
                        <option value="0">Please Choose</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    Add Soap
                    <select label="addedSoap" onChange={this.addSoap}>
                        <option value="0">Please Choose</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <div><button onClick={this.onWash}>Start Washer</button></div>
                </div>
            </div>
        )
    }


}

export default Washer;