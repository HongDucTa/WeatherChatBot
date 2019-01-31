'use strict';

const Readline = require('readline');
const r1 = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const matcher = require('./matcher');

r1.setPrompt('> ');
r1.prompt();
r1.on('line',reply => {
    matcher(reply, cb =>
        {
            //console.log(cb);
            switch (cb.intent)
            {
                case 'Hello':
                {
                    console.log('Hello you too !');
                    break;
                }
                case 'Exit':
                {
                    console.log('Good bye. See you soon !');
                    break;
                }
                case 'Mood':
                {
                    console.log('I\'m fine. Thanks for asking.');
                    break;
                }
                case 'Current Weather':
                {
                    console.log('Sorry I don\'t know the weather in ' + cb.entities.City);
                    break;
                }
                default:
                {
                    console.log('I am sorry. I didn\'t understand what you just said.');
                }
            }
        });
    r1.setPrompt('> ');
    r1.prompt();
});