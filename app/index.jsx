import React from 'react';
import {render} from 'react-dom';
import Washer from './components/washer.jsx';

class App extends React.Component {
    render () {
        return (
            <Washer/>
            )
    }
}

render(<App/>, document.getElementById('app'));