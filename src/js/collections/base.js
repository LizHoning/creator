import Collection from "ampersand-collection";
import RestMixin from "ampersand-collection-rest-mixin";
import LodashMixin from "ampersand-collection-lodash-mixin";
import Promise from "bluebird";

let BaseCollection = Collection.extend(RestMixin, LodashMixin, {
	initialize(){
		this.fetchData = RestMixin.fetch;
	},
	fetch() {
		let self = this;
		return new Promise(function(resolve, reject) {
			let success = function() {
				resolve();
			};

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

export default BaseCollection;