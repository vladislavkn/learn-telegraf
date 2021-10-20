require('dotenv').config()
const { Telegraf, session, Scenes: {BaseScene, Stage} } = require("telegraf");

const nameScene = new BaseScene('nameScene');
nameScene.enter(ctx => ctx.reply('What is your name?'));
nameScene.on('text', ctx => {
  ctx.session.name = ctx.message.text;
  ctx.scene.leave();
});
nameScene.leave(ctx => ctx.reply('New name has been set'));

const ageScene = new BaseScene('ageScene');
ageScene.enter(ctx => ctx.reply('How old are you?'));
ageScene.on('text', ctx => {
  ctx.session.age = parseInt(ctx.message.text);
  ctx.scene.leave();
});
ageScene.leave(ctx => ctx.reply('New age has been set'));

const stage = new Stage([nameScene, ageScene])

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use(session()); 
bot.use(stage.middleware());
bot.command('/start', ctx => ctx.reply(`Your name is ${ctx?.session?.name}\nYour age is ${ctx?.session?.age}`));
bot.command('/name', ctx => ctx.scene.enter('nameScene'));
bot.command('/age', ctx => ctx.scene.enter('ageScene'));
bot.launch().then(() => console.log('Bot launched!'));