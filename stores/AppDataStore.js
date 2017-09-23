const electron = require('electron');
const path = require('path');
const fs = require('fs');
const log = require('electron-log');

class AppDataStore {
  /**
   * Start a new store(will have its own file in app data)
   * @constructor
   * @param {object} opts - options to initialize store
   * @param {string} opts.configName - name of the configuration file
   * @param {object} opts.defaults - defaults for the configuration
   * */
  constructor(opts) {
    const userDataPath = (electron.app || electron.remote.app).getPath('userData');
    this.path = path.join(userDataPath, opts.configName + '.json');
    this.data = parseDataFile(this.path, opts.defaults);
  }

  /**
   * Get a part of data from store
   * @param {string} key - Name of the key in store
   * */
  get(key) {
    return this.data[key]
  }

  /**
   * Set data in store
   * @param {string} key - Name of the key in store
   * @param {object, string, array, number} val - Value to be set
   * */
  set(key, val) {
    this.data[key] = val;
    fs.writeFileSync(this.path, JSON.stringify(this.data));
  }
}

/**
 * parse the data file for the store
 * @param {string} filePath - Path of file to read and parse
 * @param {object} defaults - Default configuration
 * */
function parseDataFile(filePath, defaults) {
  try {
    /** + "" just to satisfy type warnings apparently argument type buffer not assignable to parameter type string, who knew*/
    return JSON.parse(fs.readFileSync(filePath) + "");
  } catch (e) {
    log.error('Error: ', e);
    return defaults;
  }
}

module.exports = AppDataStore;