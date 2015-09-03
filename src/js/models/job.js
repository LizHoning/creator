import Model from "ampersand-model";

let JobModel = Model.extend({
	props: {
		id: "number",
		name: "string",
		hit_die: "number"
	}
});

export default JobModel;