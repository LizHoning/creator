import _ from "lodash";
import BaseCollection from "./base";
import RaceModel from "../models/race";

let RaceCollection = BaseCollection.extend({
	model: RaceModel,
	findByName(name) {
		return _.find(this.models, function(race) {
			return race.get("name") === name;
		});
	},
	findByID(id) {
		return _.find(this.models, function(race) {
			return race.get("id") == id;
		});
	},
	url() {
		return "http://localhost:3000/races/";
	},
	fetch() {
		let self = this;

		return new Promise(function(resolve, reject) {

			let success = function() {

				_.each(this.models, function(model) {
					if (model.parent !== null) {
						model.parent = this.models.findByID(model.parent);
					}
				}, this);
				resolve();
			}.bind(this);

			let error = function() {
				reject();
			};

			this.fetchData({
				success: success,
				error: error

			});
		}.bind(this));
	}
});

export default RaceCollection;