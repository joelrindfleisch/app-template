import React, {Component} from 'react';
import './App.css';
import {getSomething} from "./services/service";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    async componentDidMount() {
        const data = await getSomething();
        this.setState({
            data
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>App Template</h1>
                </header>
                {
                    this.state.data && (
                        <p>{this.state.data}</p>
                    )
                }
            </div>
        );
    }
}

export default App;
