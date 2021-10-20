const { Scenes: { BaseScene }} = require('telegraf');

const ageScene = new BaseScene('ageScene');
ageScene.enter(ctx => ctx.reply('How old are you?'));
ageScene.on('text', ctx => {
  ctx.session.age = parseInt(ctx.message.text);
  ctx.scene.leave();
});
ageScene.leave(ctx => ctx.reply('New age has been set'));

module.exports = ageScene; 