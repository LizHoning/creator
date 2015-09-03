/*
* A character has:
* 1 race
*	races have features, traits etc.
* A collection of classes (jobs)
* 	- Classes have collections of levels
*/

"use strict";

class Character {
	constructor() {
		this.name = "";
		this.race = null;
		this.baseJob = null;
		this.jobs = null;
		// this.jobs should be a jobs collection
		this.level = 1;
		this.xp = 0;
		this._strength = 0;
		this._dexterity = 0;
		this._constitution = 0;
		this._intelligence = 0;
		this._wisdom = 0;
		this._charisma = 0;
	}
	get strength() {
		return this._strength + this.race.strength;
	}
	set strength(val) {
		this._strength = val;
	}
	get dexterity() {
		return this._dexterity + this.race.dexterity;
	}
	set dexterity(val) {
		this._dexterity = val;
	}
	get constitution() {
		return this._constitution + this.race.constitution;
	}
	set constitution(val) {
		this._constitution = val;
	}
	get intelligence() {
		return this._intelligence + this.race.intelligence;
	}
	set intelligence(val) {
		this._intelligence = val;
	}
	get wisdom() {
		return this._wisdom + this.race.wisdom;
	}
	set wisdom(val) {
		this._wisdom = val;
	}
	get charisma() {
		return this._charisma + this.race.charisma;
	}
	set charisma(val) {
		this._charisma = val;
	}

	getJob() {
		if (this.job) {
			return this.job;
		}
		return null;
	}

	getRace() {
		if (this.race) {
			return this.race;
		}
		return null;
	}

	setJob(job) {
		this.job = job;
	}

	setRace(race) {
		this.race = race;
	}

	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	addLevel() {
		this.level += 1;
	}
	removeLevel() {
		this.level -= 1;
	}
}

module.exports = Character;