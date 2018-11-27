'use strict';

// had enabled by egg
// exports.static = true;
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
};
exports.io = {
    enable: true,
    package: 'egg-socket.io'
};
exports.redis = {
    enable: true,
    package: 'egg-redis'
};
