

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { setInterval, clearInterval } from 'timers';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }


    render() {
        return (
            <div>
                <h1> Clock Component </h1>
                <h2> It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}


ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);


