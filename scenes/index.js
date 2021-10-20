const { Scenes: { Stage }} = require('telegraf');
const nameScene = require('./nameScene');
const ageScene = require('./ageScene');

const stage = new Stage([nameScene, ageScene])

module.exports = stage;