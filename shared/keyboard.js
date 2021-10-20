const { Markup } = require("telegraf");

exports.exitKeyboard = Markup.keyboard(['exit']).oneTime();
exports.removeKeyboard = Markup.removeKeyboard();

