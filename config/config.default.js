'use strict';

const path = require('path');

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1543297219912_699';

    // add your config here
    config.middleware = [];

    // 模板文件
    config.view = {
        root: [
            path.join(appInfo.baseDir, 'app/view')
            // path.join(appInfo.baseDir, 'path/to/another')
        ].join(','),
        // mapping: {
        //   '.nj': 'nunjucks',
        // },
        defaultViewEngine: 'nunjucks',
        defaultExtension: '.htm'
    };

    // socket.io
    config.io = {
        namespace: {
            '/': {
                connectionMiddleware: ['auth'],
                packetMiddleware: []
            }
        }
    };

    // redis
    config.redis = {
        client: {
            port: 6379, // Redis port
            host: '127.0.0.1', // Redis host
            password: null,
            db: 0
        }
    };

    return config;
};
