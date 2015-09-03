import Model from "ampersand-model";

let RaceModel = Model.extend({
	props: {
		id: "number",
		name: "string",
		size: "string",
		speed: "number",
		desc: "string",
		parent_id: "number",
		parent: "model",
		children: "array"
	},
	initialize() {
		this.children = [];
		this.parent = null;
	}
});

export default RaceModel;