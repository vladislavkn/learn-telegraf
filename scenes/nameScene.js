const { Scenes: { BaseScene }} = require('telegraf');
const { exitKeyboard, removeKeyboard } = require('../shared/keyboard');

const nameScene = new BaseScene('nameScene');
nameScene.enter(ctx => ctx.reply('What is your name?', exitKeyboard));
nameScene.on('text', ctx => {
  ctx.session.name = ctx.message.text;
  ctx.reply('New name has been set', removeKeyboard);
  return ctx.scene.leave();
});
nameScene.leave(ctx => ctx.reply("Exiting scene"));

module.exports = nameScene;