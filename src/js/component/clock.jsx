import React from 'react';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            currentTime: new Date()
        };
    }
    render() {
        setTimeout(() => this.setState({
            currentTime: new Date()
        }), 1000);
        return <div>{this.state.currentTime.toString()}</div>;
    }
};

export default Clock;