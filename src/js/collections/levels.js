import _ from "lodash";
import Backbone from "backbone";

let model = require("../models/level");

let LevelCollection = Backbone.Collection.extend({
	model: model
});

module.exports = LevelCollection;
