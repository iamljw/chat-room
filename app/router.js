'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    // or app.io.of('/')
    const { router, controller, io } = app;
    // chat room page
    router.get('/', controller.room.index);
    // events
    io.route('chat message', io.controller.chat.mMiddle);
    // uname
    io.route('uname', io.controller.chat.uname);
};
