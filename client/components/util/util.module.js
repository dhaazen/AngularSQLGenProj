'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('angularSqlprojApp.util', [])
  .factory('Util', UtilService)
  .name;
