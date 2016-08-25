'use strict';
/*eslint no-process-env:0*/

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip: process.env.OPENSHIFT_NODEJS_IP
    || process.env.ip
    || undefined,

  // Server port
  port: process.env.PORT
    || 8080,

  sequelize: {
    uri: JSON.parse(process.env.VCAP_SERVICES).elephantsql[0].credentials.uri
  }
};
