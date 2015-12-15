'use string';

var path = require('path'),
    fs = require('fs'),
    _ = require('lodash');

// load the user's configuration file, merge with the default one
function getConfig(dirname) {
    var fileConfigPath,
        fileStat,
        defaultConfig = require('../ressource/defaultConfig.json');

    if (!dirname)
        throw new Error('Send __dirname as parameter to init function');
    try {
        fileConfigPath = path.join(dirname, 'cub.json');
        fs.accessSync(fileConfigPath);
        return (_.merge(defaultConfig, require(fileConfigPath)));
    } catch(e) {
        if (e.code === 'ENOENT')
            return (defaultConfig);
        else
            throw (e);
    }
}

module.exports = getConfig;
