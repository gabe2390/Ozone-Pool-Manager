import React from 'react';
require('./leaderboard.component.scss');

export default class Leaderboard extends React.Component {

    getAllRows(players) {
        return players.map((player, index) => (
            <tr key={index}>
                <td>{player.name}</td>
                <td>{player.wins}</td>
                <td>{player.losses}</td>
            </tr>
        ));
    }

    closeLeaderBoard() {
        this.props.closeLeaderBoard();
    }

    render() {
        const players = this.props.players.slice(0, 15).sort((p1, p2) => p2.wins - p1.wins);

        return (
            <div className="leaderboard-container">
                <h1 className="leaderboard-title">Ozone Pool Champions</h1>
                <div className="leaderboard">
                    <table className="leaderboard-table">
                        <tr className="leaderboard-header-row">
                            <th>Name</th>
                            <th>Wins</th>
                            <th>Losses</th>
                        </tr>
                        {this.getAllRows(players)}
                    </table>
                </div>
                <div className="buttons">
                    <button className="btn" onClick={this.closeLeaderBoard.bind(this)}>Close</button>
                </div>
            </div>
        );

    }
}