import React from 'react';
import Player from  '../player/player.component';

require('./selected-players.component.scss');

export default class SelectedPlayers extends React.Component {
    getSelectedPlayers(players) {
        return players.map((player, index) => <Player key={index} player={player} selectPlayer={this.selectPlayer.bind(this)} />)
    }

    selectPlayer(player){
        this.props.selectPlayer(player)
    }
    render() {
        const players = this.props.players;
        return (
            <div className="selected-players">
                {this.getSelectedPlayers(players)}
            </div>
        )
    }
}