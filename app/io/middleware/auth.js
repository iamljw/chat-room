'use strict';
module.exports = app => {
    return async (ctx, next) => {
        let online_num = Object.keys(app.io.engine.clients).length;
        app.io.sockets.emit('online_num_change', online_num);
        const nickName = ctx.helper.genNickName();
        await app.redis.hset('chat-uname', ctx.socket.id, nickName);
        app.io.sockets.emit('on/offline', `${nickName}加入了聊天室`);
        await next();
        // execute when disconnect.
        online_num = Object.keys(app.io.engine.clients).length;
        app.io.sockets.emit('online_num_change', online_num);
        await app.redis.hdel('chat-uname', ctx.socket.id);
        app.io.sockets.emit('on/offline', `${nickName}离开了聊天室`);
    };
};
