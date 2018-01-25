import React from 'react';
import update from 'immutability-helper';
import Modal from 'react-modal';
import axios from 'axios';

import SelectPlayers from './select-player/select-players.component';
import CreatePlayer from './create-player/create-player.component';
import Player from './player/player.component';
import PoolManager from './pool-manager/pool-manager.component';
import DeclareWinner from './declare-winner/declare-winner.component';
import SelectedPlayers from './selected-players/selected-players.component';
import LeaderBoard from './leaderboard/leaderboard.component';

require('./App.scss');

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            creatingNewPlayer: false,
            declaringWinner: false,
            loadingPlayers: true,
            gameInProgress: false,
            viewingLeaderboard: false,
            players: [
                { wins: 5, losses: 1, name: "Billy Bob", id: 1, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 4, losses: 1, name: "Gilly Bob", id: 2, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 3, losses: 1, name: "Jilly Bob", id: 3, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 2, losses: 1, name: "Killy Bob", id: 4, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 5, losses: 1, name: "Billy Bob", id: 1, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 4, losses: 1, name: "Gilly Bob", id: 2, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 3, losses: 1, name: "Jilly Bob", id: 3, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 2, losses: 1, name: "Killy Bob", id: 4, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 5, losses: 1, name: "Billy Bob", id: 1, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 4, losses: 1, name: "Gilly Bob", id: 2, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 3, losses: 1, name: "Jilly Bob", id: 3, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 2, losses: 1, name: "Killy Bob", id: 4, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 5, losses: 1, name: "Billy Bob", id: 1, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 4, losses: 1, name: "Gilly Bob", id: 2, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 3, losses: 1, name: "Jilly Bob", id: 3, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 2, losses: 1, name: "Killy Bob", id: 4, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 5, losses: 1, name: "Billy Bob", id: 1, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 4, losses: 1, name: "Gilly Bob", id: 2, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 3, losses: 1, name: "Jilly Bob", id: 3, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 2, losses: 1, name: "Killy Bob", id: 4, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 5, losses: 1, name: "Billy Bob", id: 1, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 4, losses: 1, name: "Gilly Bob", id: 2, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 3, losses: 1, name: "Jilly Bob", id: 3, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 2, losses: 1, name: "Killy Bob", id: 4, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 5, losses: 1, name: "Billy Bob", id: 1, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 4, losses: 1, name: "Gilly Bob", id: 2, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 3, losses: 1, name: "Jilly Bob", id: 3, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 2, losses: 1, name: "Killy Bob", id: 4, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 5, losses: 1, name: "Billy Bob", id: 1, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 4, losses: 1, name: "Gilly Bob", id: 2, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 3, losses: 1, name: "Jilly Bob", id: 3, brag: "\"I gets dem pool balls in dem dere holes\"" },
                { wins: 2, losses: 1, name: "Killy Bob", id: 4, brag: "\"I gets dem pool balls in dem dere holes\"" },
            ],
            selectedPlayers: []
        }
    }

    togglePlayerSelection() {
        const updatedState = update(this.state, { $merge: { creatingNewPlayer: !this.state.creatingNewPlayer } });
        this.setState(updatedState);
    }

    createNewPlayer(newPlayer) {
        let players = update(this.state.players, { $push: [newPlayer] });
        let updatedState = update(this.state, { $merge: { players: players, creatingNewPlayer: false } })
        this.setState(updatedState);
    }

    selectPlayer(player) {
        if (this.state.selectedPlayers.length < 2 && this.state.selectedPlayers.indexOf(player) < 0) {
            let selectedPlayers = update(this.state.selectedPlayers, { $push: [player] });
            let updatedState = update(this.state, { $merge: { selectedPlayers } });
            this.setState(updatedState);
        }
    }

    unSelectPlayer(player) {
        let selectedPlayers = update(this.state.selectedPlayers, { $splice: [[this.state.selectedPlayers.indexOf(player), 1]] })
        let updatedState = update(this.state, { $merge: { selectedPlayers } });
        this.setState(updatedState);
    }

    getSelectionView(players) {
        return this.state.creatingNewPlayer ?
            <CreatePlayer createNewPlayer={this.createNewPlayer.bind(this)} cancelCreatePlayer={this.togglePlayerSelection.bind(this)} /> :
            <SelectPlayers players={players} selectPlayer={this.selectPlayer.bind(this)} />;
    }

    getStartGameButton() {
        return this.state.selectedPlayers.length == 2 ? <button className="btn" onClick={this.startGame.bind(this)}>Start Game</button> : null;
    }

    startGame() {
        let updatedState = update(this.state, { $merge: { gameInProgress: true } });
        this.setState(updatedState);
    }

    getSelectedPlayers() {
        return this.state.selectedPlayers.length > 0 ? <SelectedPlayers players={this.state.selectedPlayers} selectPlayer={this.unSelectPlayer.bind(this)} /> : null;
    }

    getCurrentView() {
        return this.state.gameInProgress ?
            <PoolManager players={this.state.selectedPlayers} declareWinner={this.declareWinner.bind(this)} finishGame={this.finishGame.bind(this)} /> :
            this.getSelectionView(this.state.players);
    }
    getLeaderboardButton() {
        return this.state.creatingNewPlayer || this.state.gameInProgress ? null : <button className="btn" onClick={this.openLeaderBoard.bind(this)}>Leaderboard</button>
    }

    getButtons() {
        return this.state.gameInProgress ? null : (
            <div className="buttons">
                {this.state.creatingNewPlayer ? null : <button className="btn" onClick={this.togglePlayerSelection.bind(this)}>Create New Player</button>}
                {this.getStartGameButton()}
                {this.getLeaderboardButton()}
            </div>
        );
    }

    openLeaderBoard() {
        let updatedState = update(this.state, { $merge: { viewingLeaderboard: true } });
        this.setState(updatedState);
    }

    declareWinner() {
        let updatedState = update(this.state, { $merge: { declareWinner: true } });
        this.setState(updatedState);
    }

    finishGame() {
        let updatedState = update(this.state, { $merge: { declareWinner: false, gameInProgress: false, } });
        this.setState(updatedState)
    }

    getDeclareWinnerPopup(players) {
        return <DeclareWinner players={players} finishGame={this.finishGame.bind(this)} />
    }

    closeLeaderBoard() {
        let updatedState = update(this.state, { $merge: { viewingLeaderboard: false } });
        this.setState(updatedState);
    }



    componentWillMount() {
        Modal.setAppElement('body');
    }

    render() {
        return (
            <div className='app-container'>
                <h1 className='header'>Ozone Pool Manager</h1>
                <div className='game-container'>
                    <div className="selected-players">
                        {this.getSelectedPlayers()}
                    </div>
                    {this.getCurrentView()}
                    {this.getButtons()}
                </div>
                <Modal
                    isOpen={this.state.declareWinner}
                    className={{
                        base: 'declare-winner-modal',
                        afterOpen: 'declare-winner-modal',
                        beforeClose: 'declare-winner-modal'
                    }}>
                    {this.getDeclareWinnerPopup(this.state.selectedPlayers)}
                </Modal>
                <Modal
                    isOpen={this.state.viewingLeaderboard}
                    className={{
                        base: 'leaderboard-modal',
                        afterOpen: 'leaderboard-modal',
                        beforeClose: 'leaderboard-modal'
                    }}>
                    <LeaderBoard players={this.state.players} closeLeaderBoard={this.closeLeaderBoard.bind(this)} />
                </Modal>
            </div>
        )
    }
}