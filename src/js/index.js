import _ from "lodash";
import React from "react";
import Promise from "bluebird";

import RaceCollection from "./collections/races";
import JobCollection from "./collections/jobs";

import CharacterState from "./CharacterState";

let races = new RaceCollection();
let jobs = new JobCollection();

CharacterState.jobs = new JobCollection();

/*
* App - initial class
*/

let App = React.createClass ({
	getInitialState() {
		return {
			jobs,
			races
		}
	},
	render() {
		console.log("Rendering app");

		let races = this.state.races;
		let jobs = this.state.jobs;

		return (
			<div className="creator-shell">
				<CharacterNameEntry />
				<br/><br/>
				<JobBox jobSelect={this.jobSelect} jobs={this.state.jobs} />
				<br/><br/>
				<RaceBox raceSelect={this.raceSelect} races={this.state.races} />
				<br/><br/>
				<CharacterDisplay />
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
	_raceHighlighted(e) {
		let race = this.props.races.findByID(e.target.value);
		this.setState({race});

	},
	_raceSelect() {
		let race = this.props.races.findByID(this.state.race.id);
		CharacterState.race = race;
	},
	render() {
		console.log("Rendering racebox");
		let race = this.state.race || null;

		let races = this.props.races || null;

		let raceText;
		let raceName = (race) ? race.name : null;

		if (race) {
			raceText = "Looking at " + race.name + ".";
		} else {
			raceText = "No race highlighted."
		}

		return (
			<div>
			<select defaultValue={race.id} onChange={this._raceHighlighted} className="dnd-select race-select">
			{
				races.map(function(race) {
					return (<option value={race.id} key={race.id}>{race.name}</option>);
				})
			}
			</select>
			<br />
			<div>{raceText}</div>
			<button onClick={this._raceSelect} >Select race</button>
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
	_jobHighlighted(e) {
		let job = this.props.jobs.findByID(e.target.value);
		this.setState({job});
	},
	_jobSelect() {
		let job = this.props.jobs.findByID(this.state.job.id);
		CharacterState.baseJob = job;
	},
	render() {
		console.log("Rendering jobbox");
		let jobs = this.props.jobs;
		let job = this.state.job;
		let jobText;

		if (job) {
			jobText = "Looking at " + job.name + ".";
		} else {
			jobText = "No class highlighted."
		}

		return (
			<div>
				<select value={job.id} onChange={this._jobHighlighted} className="dnd-select job-select">
				{
					jobs.models.map(function(job) {
						return (<option value={job.id} key={job.id}>{job.name}</option>);
					})
				}
				</select>
				<br />
				<div>{jobText}</div>
				<button onClick={this._jobSelect} >Select class</button>
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
			onNameChange: this.props.onNameChange
		};
	},
	_onNameChange(e) {
		e.preventDefault();
		CharacterState.name = e.target.value;
	},
	render() {
		console.log("Rendering char name entry");
		return (
			<input type="text" placeholder="Your name" onChange={this._onNameChange} className="dnd-input" ref="characterName" />)
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

// Oh man... move this?!
Promise.all([races.fetch(),jobs.fetch()]).then(function() {
	var bleh = document.getElementById("page");
	React.render(<App />, bleh);
});