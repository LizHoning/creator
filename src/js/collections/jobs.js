import _ from "lodash";
import BaseCollection from "./base";
import JobModel from "../models/job";

let JobCollection = BaseCollection.extend({
	model: JobModel,
	findByName(name) {
		return _.find(this.models, function(job) {
			return job.get("name") === name;
		});
	},
	findByID(id) {
		return _.find(this.models, function(job) {
			return job.get("id") == id;
		});
	},
	url() {
		return "http://localhost:3000/jobs/";
	}
});

export default JobCollection;
