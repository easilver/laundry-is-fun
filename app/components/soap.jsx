import React from 'react';

class Soap extends React.Component {

    constructor(props){
        super(props);
        this.addSoap = this.addSoap.bind(this);
    }

    //sets new number of soap when user chooses an amount
    addSoap (e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
          <div>
              Add Soap
              <select label="addedSoap" onChange={this.addSoap}>
                  <option value="0">Please Choose</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
              </select>
          </div>
        );
    }


}

export default Soap;