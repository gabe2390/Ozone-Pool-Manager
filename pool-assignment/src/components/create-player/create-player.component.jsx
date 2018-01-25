import React from 'react';

require('./create-player.component.scss');

export default class CreatePlayer extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            brag: ""
        }
    }
    updatePlayerInfo() {
        let player = { name: this.state.name, brag: this.state.brag };
        this.props.createNewPlayer(player);
    }

    cancelCreatePlayer() {
        this.props.cancelCreatePlayer();
    }

    updateName(event) {
        this.setState({ name: event.target.value, brag: this.state.brag });
    }

    updateBrag(event) {
        this.setState({ name: this.state.name, brag: event.target.value });
    }

    render() {
        return (
            <div className="create-player-container">
                <div className="input-container">
                    <input className="input" type="text" defaultValue={""} onChange={this.updateName.bind(this)} placeholder="Name" />
                    <input className="input" type="text" defaultValue={""} onChange={this.updateBrag.bind(this)} placeholder="Brag a bit?" />
                </div>
                <div className="buttons">
                    <button className="btn" onClick={() => { this.updatePlayerInfo() }}>Save Player</button>
                    <button className="btn" onClick={() => { this.props.cancelCreatePlayer() }}>Cancel Player</button>
                </div>
            </div>
        );
    }
}