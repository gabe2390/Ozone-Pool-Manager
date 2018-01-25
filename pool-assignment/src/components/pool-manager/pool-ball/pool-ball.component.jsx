import React from 'react';
require('./pool-ball.component.scss');

export default class PoolBall extends React.Component {
    pocketBall(ballNumber) {
        this.props.pocketBall(ballNumber);
    }
    render() {
        const ballNumber = this.props.ballNumber;
        return <div className="pool-ball" onClick={() => { this.pocketBall(ballNumber) }}>{ballNumber}</div>;
    }
}