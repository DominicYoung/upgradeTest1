cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.ssgroup.sope.cordova.Upgrade/www/upgrade.js",
        "id": "org.ssgroup.sope.cordova.Upgrade.Upgrade",
        "clobbers": [
            "somai.upgrade"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "org.ssgroup.sope.cordova.Upgrade": "0.6.1"
}
// BOTTOM OF METADATA
});