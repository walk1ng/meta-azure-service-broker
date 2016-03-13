/*
 * Cloud Foundry Services Connector
 * Copyright (c) 2014 ActiveState Software Inc. All rights reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

'use strict';

var util = require('util');
var Net = require('net');
var Url = require('url');

/* Extends an objects properties with anothers */
module.exports.extend = function(target, source) {
  if (source) {
    for (var key in source) {
      var val = source[key];
      if (typeof val !== 'undefined') {
        target[key] = val;
      }
    }
  }
  return target;
};

module.exports.validateEnvironmentVariables = function() {
  var envs = [];
  if (!process.env['subscriptionID']) envs.push('subscriptionID');
  if (!process.env['tenantID']) envs.push('tenantID');
  if (!process.env['clientID']) envs.push('clientID');
  if (!process.env['clientSecret']) envs.push('clientSecret');
  if (envs.length > 0) {
    throw new Error(util.format('please set/export the following environment variables: %s', envs.toString()));
  }
}