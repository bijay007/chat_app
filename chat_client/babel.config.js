// global babel presets...for web-specific presets, add them in webpack.config.js file inside web folder
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      "root": ["./src"],
      "extensions": [".ios.js", ".android.js", ".web.js", ".json"],
      "alias": {
        "@components": "./src/components/",
        "@navigation": "./src/navigation/",
        "@views": "./src/views/"
      }
    }]
  ]
};
