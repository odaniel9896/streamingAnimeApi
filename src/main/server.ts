/* eslint-disable no-console */
import app from './app';

(async () => {
	try {
		app.listen(3333, async () => {
			console.log(`running on port: ${3333}`);
		});
	} catch (error) {
		console.log(error);
	}
})();
