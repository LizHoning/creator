import State from "ampersand-state";
import Character from "./classes/Character";

let CharacterState = State.extend({
	props: {
		character: "class",
		name: "string",
		race: "model",
		jobs: "collection",
		baseJob: "model"
	},

	init() {
	}
});

export default new CharacterState();