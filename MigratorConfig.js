var config = require('./core/server/config'),
    ghostVersion = require('./core/server/lib/ghost-version');

/**
 * knex-migrator can be used via CLI or within the application
 * when using the CLI, we need to ensure that our global overrides are triggered
 */
require('./core/server/overrides');

module.exports = {
    currentVersion: ghostVersion.safe,
    database: config.get('ghostDB'),
    migrationPath: config.get('paths:ghostdb.clya5zyvv4rs.us-west-2.rds.amazonaws.com
')
};
