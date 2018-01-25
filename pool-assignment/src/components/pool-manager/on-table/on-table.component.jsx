import React from 'react';
import PoolBall from '../pool-ball/pool-ball.component';

require('./on-table.component.scss');

export default class OnTable extends React.Component {

    getPoolBalls() {
        return this.props.poolBalls.map((ball, index) => <PoolBall key={index} ballNumber={ball} pocketBall={this.props.pocketBall.bind(this)} />);
    }
    render() {
        let remainingPoolBalls = this.props.poolBalls;

        return (
            <div className="on-pool-table">
                {this.getPoolBalls()}
            </div>
        );
    }
}