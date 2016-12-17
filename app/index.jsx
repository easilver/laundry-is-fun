import React from 'react';
import {render} from 'react-dom';
import Washer from './components/washer.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Laundry is Fun!</h1>
            <Washer/>
            </div>
            )
    }
}

render(<App/>, document.getElementById('app'));