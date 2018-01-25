import React from 'react';

require('./player.component.scss');

export default class Player extends React.Component {
    selectPlayer(player) {
        this.props.selectPlayer(player);
    }

    render() {
        const player = this.props.player;
        return (
            <div className="player-card-container" onClick={() => { this.selectPlayer(player) }}>
                <label className="player-name">{player.name}</label>
                <label className="player-brag">{player.brag}</label>
                <span className="player-record">{player.wins} - {player.losses}</span>
            </div>
        );
    }
}