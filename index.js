const user = require('./information');

const cowsay = require("cowsay");



console.log(cowsay.say({
    text : `Hello i'm ${user.name} form ${user.campus} campus`,
    e : "oO",
    T : "U "
}))
