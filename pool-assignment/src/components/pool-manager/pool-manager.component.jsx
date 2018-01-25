import React from 'react';
import update from 'immutability-helper';
import PlayerPocket from './player-pocket/player-pocket.component';
import OnTable from './on-table/on-table.component';
require('./pool-manager.component.scss');
export default class PoolManager extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPlayerTurn: null,
            poolBalls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        }
    }

    initializeGame() {
        this.props.players.forEach(player => { if (!player.bag) player.bag = [] })
    }

    pocketBall(ball) {
        let currentPlayer = this.getCurrentPlayer();
        currentPlayer.bag.push(ball);

        let updatedPoolBalls = update(this.state.poolBalls, { $splice: [[this.state.poolBalls.indexOf(ball), 1]] })
        let updatedState = update(this.state, { $merge: { poolBalls: updatedPoolBalls } });
        this.setState(updatedState);
    }

    switchTurn() {
        let nextPlayer = this.getCurrentPlayer() == this.props.players[0] ? this.props.players[1] : this.props.players[0];
        let updatedState = update(this.state, { $merge: { currentPlayerTurn: nextPlayer } });
        this.setState(updatedState);
    }

    getCurrentPlayer() {
        let player1 = this.props.players[0];
        let player2 = this.props.players[1];
        const currentPlayer = !this.state.currentPlayerTurn ? player1 : this.state.currentPlayerTurn == player1 ? player1 : player2;

        if (!this.state.currentPlayerTurn) this.setState(update(this.state, { $merge: { currentPlayerTurn: currentPlayer } }));
        return currentPlayer;
    }

    declareWinner() {
        this.props.declareWinner(this.props.players);
    }

    getPlayersPockets() {
        return this.props.players.map((player, index) => <PlayerPocket key={index} player={player} />);
    }

    getPoolTable() {
        return <OnTable poolBalls={this.state.poolBalls} pocketBall={this.pocketBall.bind(this)} />;
    }

    render() {
        this.initializeGame();
        return (
            <div className="in-progress-container">
                <div className="players-container">
                    {this.getPlayersPockets()}
                </div>
                <div className="pool-balls-container">
                    {this.getPoolTable()}
                </div>
                <div className='buttons'>
                    <button className="btn" onClick={this.switchTurn.bind(this)}>Next Turn</button>
                    <button className="btn" onClick={this.declareWinner.bind(this)}>End Game</button>
                </div>
            </div>
        );
    }
}