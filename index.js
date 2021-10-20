require('dotenv').config()
const { Telegraf, session } = require("telegraf");
const stage = require('./scenes');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(session()); 
bot.use(stage.middleware());

bot.command(['/start', '/info'], ctx => ctx.reply(`Your name is ${ctx?.session?.name}\nYour age is ${ctx?.session?.age}`));
bot.command('/name', ctx => ctx.scene.enter('nameScene'));
bot.command('/age', ctx => ctx.scene.enter('ageScene'));


bot.launch().then(() => console.log('Bot launched!'));