import React from 'react';

class Clothes extends React.Component {

    constructor(props){
        super(props);
        this.addClothes = this.addClothes.bind(this);
    }

    //sets new number of soap when user chooses an amount
    addClothes (e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div className="clothes">
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
            </div>
        );
    }


}

export default Clothes;