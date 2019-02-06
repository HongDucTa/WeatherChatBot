
const patternDict = [
    {
        pattern: '\\b(Hi|Hello|Hey)\\b',
        intent: 'Hello'
    },
    {
        pattern: '\\b(bye|exit)\\b',
        intent: 'Exit'
    },
    {
        pattern: '\\b(how) (are|r) (you|u)\\b',
        intent: 'Mood'
    },
    {
        pattern: '\\b(how|what) (is) (the) (weather) (in) (?<City>([A-Z]\\w+) ?([A-Z]\\w+?))\\b',
        intent: 'CurrentWeather'
    },
    {
        pattern: '\\b(what) (is) (the) (time) (in) (?<City>(\\w+) ?(\\w+?))\\b',
        intent: 'CurrentTime'
    },
    {
        pattern: '\\b(is) (it) (?<Weather>([a-z]\\w+)) (in) (?<City>(\\w+) ?(\\w+?))\\b',
        intent: 'CurrentWeatherStatus'
    },
    {
        pattern: '\\b(will) (it) (be) (?<Weather>\\w+) (in) (?<City>(\\w+) ?(\\w+?))\\b ((in) (?<ForecastTime>\\d) (days?))',
        intent: 'ForecastWeatherStatus'
    }
];

module.exports = patternDict;