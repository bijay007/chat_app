const path = require("path");
const appDirectory = path.resolve(__dirname, "../");

module.exports = {
	platform: 'web',
	includes: [
		path.resolve(appDirectory, "index.web.js"),
		path.resolve(appDirectory, "src"),

		// These modules are not compiled to ES5 during publication (till now), so they specifically
		// be included to be compiled by the babel-loader
		path.resolve(appDirectory, "node_modules/@react-navigation"),
		path.resolve(appDirectory, "node_modules/react-navigation"),
		path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
		path.resolve(appDirectory, "node_modules/react-native-tab-view"),
		path.resolve(appDirectory, "node_modules/react-native-safe-area-view"),
		path.resolve(appDirectory, "node_modules/react-native-gesture-handler"),
		path.resolve(appDirectory, "node_modules/react-native-vector-icons"),
		path.resolve(appDirectory, "node_modules/react-native-easy-grid"),
		path.resolve(appDirectory, "node_modules/react-native-keyboard-aware-scroll-view"),
		path.resolve(appDirectory, "node_modules/react-native-web"),
    path.resolve(appDirectory, "node_modules/react-native-tab-view"),
		path.resolve(appDirectory, "node_modules/react-native-drawer"),
    path.resolve(appDirectory, "node_modules/native-base-shoutem-theme")
	],
	alias: {
		"react-native$": "react-native-web",
		"react-native-svg": "svgs",
		"antd-mobile-rn": "antd-mobile"
	}
};