'use strict';

const Readline = require('readline');
const r1 = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const matcher = require('./matcher');
const weather = require("./weather");

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
                    console.log('%cHello to you too !','color: blue;');
                    r1.setPrompt('> ');
                    r1.prompt();
                    break;
                }
                case 'Exit':
                {
                    console.log('%cGood bye. See you soon !','color: blue;');
                    r1.setPrompt('> ');
                    r1.prompt();
                    break;
                }
                case 'Mood':
                {
                    console.log('%cI\'m fine. Thanks for asking.','color: blue;');
                    r1.setPrompt('> ');
                    r1.prompt();
                    break;
                }
                case 'CurrentWeather':
                {
                    weather(cb.entities.City).then(function(weatherConditions)
                    {
                        var temp = weatherConditions.current.temp_c;
                        if (temp < 5)
                        {
                            console.log('%cIt is very cold in ' + weatherConditions.location.name + ', ' + weatherConditions.location.country +'. With ' + temp + ' degrees Celsius.','color: white; background-color: blue;');
                        }
                        else
                        {
                            if (temp < 20)
                            {
                                console.log('%cIt is warm in ' + weatherConditions.location.name + ', ' + weatherConditions.location.country + '. With ' + temp + ' degrees Celsius.','color: white; background-color: green;');
                            }
                            else
                            {
                                console.log('%cIt is hot in ' + weatherConditions.location.name + ', ' + weatherConditions.location.country + '. With ' + temp + ' degrees Celsius.','color: white; background-color: red;');
                            }
                        }
                        r1.setPrompt('> ');
                        r1.prompt();
                    }
                    );
                    break;
                }
                case 'CurrentTime':
                {
                    weather(cb.entities.City).then(function(result)
                    {
                        var localTime = String(result.location.localtime).split(' ')[1];
                        console.log('The current time in ' + cb.entities.City + ' is : %c' + localTime,'color: red;');
                        r1.setPrompt('> ');
                        r1.prompt();
                    })
                    break;
                }
                case 'CurrentWeatherStatus':
                {
                    weather(cb.entities.City).then(function(result)
                    {
                        var weather = result.current.condition.text;
                        console.log('The current weather in ' + result.location.name + ' is: %c' + weather,'color: red;');
                        r1.setPrompt('> ');
                        r1.prompt();
                    })
                    break;
                }
                case 'ForecastWeatherStatus':
                {
                    if (cb.entities.ForecastTime > 10)
                    {
                        console.log('I am sorry. That day is out of my prediction range. I can only predict the weather up to 10 days.');
                    }
                    else
                    {
                        weather(cb.entities.City).then(function(result)
                        {
                            try
                            {
                                var weather = result.forecast.forecastday[cb.entities.ForecastTime].day.condition.text;
                                if (String(cb.entities.Weather).toUpperCase() === weather.toUpperCase())
                                {
                                    console.log('Yes. The weather in ' + result.location.name + ' in ' + cb.entities.ForecastTime + ' days will be: %c' + String(weather).toLowerCase(),'color: red;');
                                }
                                else
                                {
                                    console.log('No. The weather in ' + result.location.name + ' in ' + cb.entities.ForecastTime + ' days will be: %c' + String(weather).toLowerCase(),'color: red;');
                                }
                            
                            }
                            catch
                            {
                                console.log('I am sorry. I was unable to get the prediction for that day.');
                            }
                            r1.setPrompt('> ');
                            r1.prompt();
                        })
                    }
                    break;
                }
                default:
                {
                    console.log('I am sorry. I didn\'t understand what you just said.');
                    r1.setPrompt('> ');
                    r1.prompt();
                }
            }
        });
});