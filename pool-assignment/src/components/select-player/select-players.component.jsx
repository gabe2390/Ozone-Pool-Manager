import React from 'react';
import Player from '../player/player.component';

require('./select-players.component.scss');

export default class SelectPlayers extends React.Component {
    constructor() {
        super();
        this.state = {
            creatingNewPlayer: false
        };
    }
    toggleCreatePlayer() {
        this.setState({ creatingNewPlayer: !this.state.creatingNewPlayer });
    }

    getPlayerCards(players) {
        let cards = players.map((player, index) => <Player key={index} player={player} selectPlayer={this.props.selectPlayer.bind(this)} />);
        return (
            <div className="cards-container" >
                {cards}
            </div>);
    }

    selectPlayer(player) {
        this.props.selectPlayer(player)
    }
    render() {
        const players = this.props.players;

        return (
            <div className="player-select-container">
                <h2 className="select-header">Select Players</h2>
                <div className="cards-parent">
                    {this.getPlayerCards(players)}
                </div>
            </div>
        );
    }
}
