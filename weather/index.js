"use strict";
const axios = require("axios");
const apikey = "241a4c5fc9ee42db870225236190302";

const getWeather = location =>
{
    return new Promise(async (resolve, reject) =>
    {
        try{
            const weatherConditions = await axios.get(
                "http://api.apixu.com/v1/forecast.json",
                {
                    params: {
                        key: apikey,
                        q: location,
                        days: 10
                    }
                }
            );
            resolve(weatherConditions.data);
        }
        catch(error)
        {
            reject(error);
        }
    });
}

module.exports = getWeather;