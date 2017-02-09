var Discord = require('discord.js');
var rollerBot = new Discord.Client();
var rollerToken = 'Mjc5MDY3Njc1OTk1NjY4NDgw.C31djA.dkUaf8thdp-h5IAlKouHfgElL2Y';
var diceResult = 0;



//Rollbot, tell them you're ready!
rollerBot.on('reader', message => {
  message.channel.sendMessage('Ready to roll!');
});

//The user specifies what dice they'd like rolled and rollerBot makes a random number!
rollerBot.on('message', message => {
    if(message.content === 'd20'){
     diceResult = 1+Math.floor(Math.random() * (20+1)); //The +1 occurs  because standard dice do not have 0's on them
      message.channel.sendMessage('You rolled a ' + diceResult);
    }
    else if(message.content === 'd12'){
      diceResult = 1+Math.floor(Math.random() * (12+1));
       message.channel.sendMessage('You rolled a ' + diceResult);
    }
    else if(message.content === 'd10'){
      diceResult = Math.floor(Math.random() * (10+1)); //D10 is unique as dice sets use 0 in order to do percentages
       message.channel.sendMessage('You rolled a ' + diceResult);
    }
    else if(message.content === 'd8'){
      diceResult = 1+Math.floor(Math.random() * (8+1));
       message.channel.sendMessage('You rolled a ' + diceResult);
    }
    else if(message.content === 'd6'){
      diceResult = 1+Math.floor(Math.random() * (6+1));
       message.channel.sendMessage('You rolled a ' + diceResult);
    }
    else if(message.content === 'd4'){
      diceResult = 1+Math.floor(Math.random() * (4+1));
       message.channel.sendMessage('You rolled a ' + diceResult);
    }
});

rollerBot.login(rollerToken);
