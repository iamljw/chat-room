'use strict';

const Controller = require('egg').Controller;

class RoomController extends Controller {
    async index() {
        const { ctx, app } = this;
        const online_num = Object.keys(app.io.engine.clients).length + 1;
        await ctx.render('room', { online_num });
    }
}

module.exports = RoomController;
