import React from 'react';
import Player from '../player/player.component';
require('./declare-winner.component.scss');

export default class DeclareWinner extends React.Component {
    getPlayers(players) {
        return players.map((player, index) => <Player key={index} player={player} selectPlayer={this.finishGame.bind(this)} />)
    }
    finishGame(player) {
        this.props.finishGame(player);
    }
    render() {
        let players = this.props.players;

        return (
            <div className="players-container">
                <h2 className="select-winner">Select Winner</h2>
                <div className="select-players">
                    {this.getPlayers(players)}
                </div>
            </div>
        );
    }
}