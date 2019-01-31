
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
        intent: 'Current Weather'
    }
];

module.exports = patternDict;