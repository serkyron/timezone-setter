const { execFile } = require('child_process');
const os = require('os');

module.exports.setTimezone = function(timezone) {
	return new Promise((resolve, reject) => {
		if (os.platform() !== "win32") {
			reject(new Error("Platform not supported"));
		}

		if (!timezone) {
			reject(new Error("Invalid timezone"));
		}

		execFile(`./bin/win32/timezone.exe`, [timezone], {windowsHide: true}, (error, stdout, stderr) => {
			if (error) {
				reject(error);
			}

			resolve();
		});
	});
}

