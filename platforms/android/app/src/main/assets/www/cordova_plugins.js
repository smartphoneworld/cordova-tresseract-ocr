cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-tesseract.TesseractPlugin",
      "file": "plugins/cordova-plugin-tesseract/www/tesseractPlugin.js",
      "pluginId": "cordova-plugin-tesseract",
      "clobbers": [
        "TesseractPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-tesseract": "0.0.1"
  };
});