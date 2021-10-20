const { Scenes: { BaseScene }} = require('telegraf');

const nameScene = new BaseScene('nameScene');
nameScene.enter(ctx => ctx.reply('What is your name?'));
nameScene.on('text', ctx => {
  ctx.session.name = ctx.message.text;
  ctx.scene.leave();
});
nameScene.leave(ctx => ctx.reply('New name has been set'));

module.exports = nameScene;