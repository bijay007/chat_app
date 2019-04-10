import * as asyncExecute from 'async-execute';
const checkForMac = () => {
	return new Promise((resolve, reject) => {
		if (/darwin/i.test(process.platform)) {
			resolve();
		} else {
			reject();
		}
	}).catch(() => {
		throw new Error(
			"Feature/command only supported on macOSX. iOS/tvOS commands are only for macOSX."
		);
	});
};

const runiOS = () => {
	return checkForMac().then(() => {
		console.log("Running iOS");
		return asyncExecute("react-native", [
			"run-ios",
			"--project-path",
			"platforms/ios",
			"--simulator",
			"iPhone 6"
		]);
	});
};

export default runiOS;
