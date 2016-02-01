import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
// FIX-ME: Please to get this
// import classnames from "classnames";
import Promise from "bluebird";

import RaceCollection from "./collections/races";
import JobCollection from "./collections/jobs";

import CharacterState from "./CharacterState";

import {
	RaisedButton,
	DropDownMenu,
	MenuItem,
	TextField,
	Tabs,
	Tab,
	Paper
} from "sp-components";

let races = new RaceCollection();
let jobs = new JobCollection();

CharacterState.jobs = new JobCollection();

/*
* App - initial class
*/

let App = React.createClass ({
	getInitialState() {
		return {
			page: "edit"
		}
	},
	_handlePageChange(page) {
		this.setState({page: page});
	},
	_selectPage() {
		switch(this.state.page) {
			case "edit":
			default:
				return <EditPage character={this.state.yourCharacter} />
			break;
			case "stats":
			break;
			case "display":
			break;
		}
	},
	render() {
		console.log("Rendering app");

		return (
			<div className="creator-shell">
				<Tabs selectedValue={this.state.page} onChange={this._handlePageChange}>
					<Tab value="edit" label="Edit Character"/>
					<Tab value="stats" label="Character Stats"/>
					<Tab value="display" label="Character Display"/>
				</Tabs>
				{this._selectPage()}
			</div>
		);
	}
});

/*
* Pages - different pages available for editing and viewing your Character
*/

/*
* Edit page - Page for editing basic information about your character
*/

let EditPage =  React.createClass({
	getInitialState() {
		CharacterState.on("change:name", function() {
			let name = CharacterState.name;
			this.setState({name});
		}.bind(this));

		CharacterState.on("change:race", function() {
			let race = CharacterState.race;
			this.setState({race});
		}.bind(this));

		CharacterState.on("change:baseJob", function() {
			let baseJob = CharacterState.baseJob;
			this.setState({baseJob});
		}.bind(this));

		return {
			jobs,
			races,
			characterBio: {
				name: CharacterState.name,
				baseJob: CharacterState.basejob,
				race: CharacterState.race,
				jobs: CharacterState.jobs
			}
		};
	},
	render() {
		console.log("Rendering edit page");

		let races = this.state.races;
		let jobs = this.state.jobs;

		let race = this.state.race || {name: "Human"};
		let job = this.state.baseJob || {name: "Peasant"};
		let name = this.state.name || "John Doe";

		return (
			<div className="creator-body">
				<DndCard title={name + ", the " + race.name + " " + job.name}>
					<CharacterNameEntry />
					<br/><br/>
					<JobBox jobSelect={this.jobSelect} jobs={this.state.jobs} />
					<br/><br/>
					<RaceBox raceSelect={this.raceSelect} races={this.state.races} />
				</DndCard>
			</div>
		);
	}
});

/*
* RaceBox - Holds race info. Allows user to view details of races. They can use this to select
* a race for their character.
*/

let RaceBox =  React.createClass({
	getInitialState() {
		let race = this.props.races.findByName("Human");

		return {race};
	},
	_raceHighlighted(raceID) {
		let race = this.props.races.findByID(raceID);
		this.setState({race});
	},
	_raceSelect() {
		let race = this.props.races.findByID(this.state.race.id);
		CharacterState.race = race;
	},
	_raceDesc(race) {
		if (race) {
			return (
				<div className="dnd-desc">
					<h2>{race.name}</h2>
					<h3>{race.desc}</h3>
				</div>
			);
		}
	},
	render() {
		console.log("Rendering racebox");
		let race = this.state.race || null;

		let races = this.props.races || null;

		let raceText, raceDesc;
		let raceName = (race) ? race.name : null;

		return (
			<div>
				<DropDownMenu selectedValue={race.id} onChange={this._raceHighlighted}>
				{
					races.map(function(race) {
						return (<MenuItem disabled={false} key={race.id} value={race.id} label={race.name} />);
					})
				}
				</DropDownMenu>
				{this._raceDesc(race)}
				<RaisedButton label="Select race" onClick={this._raceSelect} primary={true}/>
			</div>
		);
	}
});

/*
* JobBox
*/

let JobBox = React.createClass({
	getInitialState() {
		let job = this.props.jobs.findByName("Fighter");

		return {job};
	},
	_jobHighlighted(jobID) {
		let job = this.props.jobs.findByID(jobID);
		this.setState({job});
	},
	_jobSelect() {
		let job = this.props.jobs.findByID(this.state.job.id);
		CharacterState.baseJob = job;
	},
	_jobDesc(job) {
		if (job) {
			return (
				<div className="dnd-desc">
					<h2>{job.name}</h2>
					<h3>{job.desc}</h3>
				</div>
			);
		}
	},
	render() {
		console.log("Rendering jobbox");
		let jobs = this.props.jobs;
		let job = this.state.job;

		return (
			<div>
				<DropDownMenu selectedValue={job.id} onChange={this._jobHighlighted}>
				{
					jobs.models.map(function(job) {
						return (<MenuItem disabled={false} key={job.id} value={job.id} label={job.name} />);
					})
				}
				</DropDownMenu>
				{this._jobDesc(job)}
				<RaisedButton label="Select class" onClick={this._jobSelect} primary={true}/>
			</div>
		);

	}
});

/*
* CharacterNameEntry - enter the character name.
* Currently this updates dynamically. Potentially it could update a hidden value, and
* use a button to "submit" the name, which is then updated in the character class.
*/

let CharacterNameEntry = React.createClass({
	getInitialState() {
		return {
			onNameChange: this.props.string
		};
	},
	_onNameChange(value) {
		this.setState({onNameChange: value});
	},
	_onNameSelect(e) {
		e.preventDefault();
		CharacterState.name = this.state.onNameChange;
		this.setState({onNameChange: ""});
	},
	render() {
		console.log("Rendering char name entry");
		return (
			<div>
				<TextField floatingLabelText="Your name" value={this.state.onNameChange} onChange={this._onNameChange}/>
				<RaisedButton label="Change name" onClick={this._onNameSelect} primary={true}/>
			</div>
		)
	}
});

/*
* CharacterDisplay - displays all current info for a character.
*/
let CharacterDisplay = React.createClass({
	getInitialState() {

		CharacterState.on("change:name", function() {
			let name = CharacterState.name;
			this.setState({name});
		}.bind(this));

		CharacterState.on("change:race", function() {
			let race = CharacterState.race;
			this.setState({race});
		}.bind(this));

		CharacterState.on("change:baseJob", function() {
			let baseJob = CharacterState.baseJob;
			this.setState({baseJob});
		}.bind(this));

		return {
			name: CharacterState.name,
			baseJob: CharacterState.basejob,
			race: CharacterState.race,
			jobs: CharacterState.jobs
		}
	},
	render() {
		console.log("Rendering char display");
		let jobText;
		let raceText;
		let race = this.state.race || null;
		let job = this.state.baseJob || null;
		let name = this.state.name || "";

		if (job) {
			jobText = "Your class is " + job.name + ".";
		} else {
			jobText = "You do not have a class."
		}

		if (race !== null) {
			raceText = "Your race is " + race.name + ".";
		} else {
			raceText = "You do not have a race."
		}

		let nameText = "Your character's name is " + name;

		return (
			<div>
				<div>{nameText}</div>
				<br />
				<div>{jobText}</div>
				<br />
				<div>{raceText}</div>
				<br />
			</div>
		);
	}
});

/*
* DnD Card
*/

let DndCard = React.createClass({
	getInitialState() {
		return {
			display: "expanded"
		}
	},
	_addHeader() {
		return (
			<div className="dnd-card-header" onClick={this._handleHeaderClick}>
				<h3>
					{this.props.title}
				</h3>
				<ContentCreateIcon />
			</div>
		);
	},
	_handleHeaderClick() {
		var newDisplay;
		if (this.state.display === "expanded") {
			newDisplay = "collapsed";
		} else {
			newDisplay = "expanded";
		}
		this.setState({ display: newDisplay });
	},
	render() {
		return (
			<Paper className="dnd-card">
				{this._addHeader()}
				<div className={"dnd-card-body " + this.state.display}>
					{this.props.children}
				</div>
			</Paper>
		)
	}
});

let ContentCreateIcon = React.createClass({
	render() {
		return (
			<SvgIcon {...this.props}>
				<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
			</SvgIcon>
		);
	}
});

let SvgIcon = React.createClass({
	render() {
		return (
			<svg
				{...this.props}
				className="sp-svg-icon"
				viewBox="0 0 24 24">
				{this.props.children}
			</svg>
		);
	}
});

// Oh man... move this?!
Promise.all([races.fetch(),jobs.fetch()]).then(function() {
	var bleh = document.getElementById("page");
	ReactDOM.render(<App />, bleh);
});