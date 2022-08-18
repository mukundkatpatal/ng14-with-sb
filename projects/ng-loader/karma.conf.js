/*
 *  Copyright © 2022 - present Boeing. All rights reserved.
 */

const libName = require('path').basename(__dirname);

module.exports = function (config) {
  require('../../karma.conf')(config, libName);
};
