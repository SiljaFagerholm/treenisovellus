﻿import React, { Component } from "react";
import checkbox from './checkbox.png';
import "./Style.css";
import './ActivityForm.css';


class ActivityForm extends Component {
    state = { Activityname: "", Weight: "", Reps: "", Rounds: "", Rest: "", Duration: "" };
    ActivityTallennus = e => {
        this.setState({ Activityname: e.target.value });
    };
    WeightTallennus = e => {
        this.setState({ Weight: e.target.value });
    };
    RepsTallennus = e => {
        this.setState({ Reps: e.target.value });
    };
    RoundsTallennus = e => {
        this.setState({ Rounds: e.target.value });
    };
    RestTallennus = e => {
        this.setState({ Rest: e.target.value });
    };
    DurationTallennus = e => {
        this.setState({ Duration: e.target.value });
    };
    laheta = e => {
        console.dir(this.props);
        e.preventDefault();
        this.props.saveActivity(this.state);
        this.setState({ Activityname: "", Weight: "", Reps: "", Rounds: "", Rest: "", Duration: "" });
    };


    render() {
        return (
            <div align="center">
                <form onSubmit={this.laheta}>
                    <h1 className="h1">Lisää uusi liike</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>Liikkeen nimi</td>
                                <td>
                                    <input className="form-control" value={this.state.Activityname} onChange={this.ActivityTallennus} placeholder="Liikkeen nimi"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Kuorma</td>
                                <td>
                                    <input className="form-control" value={this.state.Weight} onChange={this.WeightTallennus} placeholder="Painot/kg"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Toistot</td>
                                <td>
                                    <input className="form-control" value={this.state.Reps} onChange={this.RepsTallennus} placeholder="Toistot" />
                                </td>
                            </tr>
                            <tr>
                                <td>Kierrokset</td>
                                <td>
                                    <input className="form-control" value={this.state.Rounds} onChange={this.RoundsTallennus} placeholder="Sarjat" />
                                </td>
                            </tr>
                            <tr>
                                <td>Lepo</td>
                                <td>
                                    <input className="form-control" value={this.state.Rest} onChange={this.RestTallennus} placeholder="Lepo"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Kesto</td>
                                <td>
                                    <input className="form-control" value={this.state.Duration} onChange={this.DurationTallennus} placeholder="Kesto" />
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td >
                                    <input className="Checkbox" type="image" src={checkbox} alt="Lisää" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default ActivityForm;
