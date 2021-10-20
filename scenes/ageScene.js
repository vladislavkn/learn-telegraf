const { Scenes: { BaseScene }} = require('telegraf');
const { exitKeyboard, removeKeyboard } = require('../shared/keyboard');

const ageScene = new BaseScene('ageScene');
ageScene.enter(ctx => ctx.reply('How old are you?', exitKeyboard));
ageScene.on('text', ctx => {
  ctx.session.age = parseInt(ctx.message.text);
  ctx.reply('New age has been set', removeKeyboard);
  return ctx.scene.leave();
});
ageScene.leave(ctx => ctx.reply("Exiting scene"));

module.exports = ageScene; 