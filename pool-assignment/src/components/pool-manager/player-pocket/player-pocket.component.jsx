import React from 'react';
import PoolBall from '../pool-ball/pool-ball.component';
require('./player-pocket.component.scss');

export default class PlayerPocket extends React.Component {

    getPlayerBag(playerBag) {
        return playerBag.map((ballNumber, index) => <PoolBall key={index} ballNumber={ballNumber} />)
    }
    render() {
        const playerBag = this.props.player.bag;
        return (
            <div className="player-bag">
                {this.getPlayerBag(playerBag)}
            </div>
        )
    }
}