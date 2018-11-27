'use strict';

const moment = require('moment');

module.exports = app => {
    class Controller extends app.Controller {
        async mMiddle() {
            const { ctx } = this;
            const message = ctx.args[0];
            const uname = await app.redis.hget('chat-uname', ctx.socket.id);
            const now = moment().utcOffset(8).format('HH:mm:ss');
            await app.io.sockets.emit('chat message', uname + ` ${now}:<br>` + message);
        }
        async uname() {
            const { ctx } = this;
            const uname = await app.redis.hget('chat-uname', ctx.socket.id);
            await ctx.socket.emit('uname', uname);
        }
    }
    return Controller;
};
