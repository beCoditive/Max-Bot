"use strict";

Object.defineProperty(exports, "__esModule", {value: true});

const request = require('request')
const moment = require('moment')
const config = require("../../config")

const discord_akairo_1 = require("discord-akairo");
const {MessageEmbed} = require("discord.js");
const Discord = require('discord.js')

class ballCommand extends discord_akairo_1.Command {
    cod;

    constructor() {
        super('weather', {
            aliases: ['weather', 'forecast'],
            category: 'Search Commands',
            description: {
                content: 'Return current weather at specific location to user',
                usage: '[City Name]',
                examples: [
                    'weather Oslo',
                    'forecast California'
                ]
            },
            ratelimit: 3
        });
    }

    async exec(message, args) {
        let city = message.content.slice(9)
        if (!city) return message.channel.send('Please enter a valid city name! Example: `!weather Oslo`')

        let options = {
            'method': 'GET',
            'url': `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.WEATHER_API_KEY}`,
            'headers': {}
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);

            let body = JSON.parse(response.body)

            if (body.message) {
                return message.channel.send({
                    embed: {
                        color: 'RANDOM',
                        description: `There is something wrong`,
                        footer: {
                            text: `Error message: ${body.cod} ${body.message}`,
                        },
                    }
                });
            } else {
                // Get icon image matching the weather
                const weatherID = body.weather[0].icon;
                const image = `http://openweathermap.org/img/wn/${weatherID}@2x.png`

                // Get current weather description
                let weatherDescription = body.weather[0].description;
                weatherDescription = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)

                const kelvin = 273.15;

                // Convert kelvin to celsius
                const celsius = (body.main.temp - kelvin);
                const cTemp = Math.floor(celsius)

                // Convert kelvin to fahrenheit
                const fahrenheit = (cTemp * 1.8 + 32)
                const fTemp = Math.floor(fahrenheit)

                // Get how much cloud cover there is
                const clouds = body.clouds.all;

                // Get the speed of the wind
                const windSpeed = body.wind.speed;

                /**
                 * Get the sunrise from API
                 * @returns {string}
                 */
                function getSunrise() {
                    let sunriseTimestamp = body.sys.sunrise;

                    let sunriseDate = new Date(sunriseTimestamp * 1000);
                    // Hours part from the timestamp
                    let sunriseHours = '0' + sunriseDate.getHours();
                    // Minutes part from the timestamp
                    let sunriseMinutes = '0' + sunriseDate.getMinutes();

                    return sunriseHours + ':' + sunriseMinutes.substr(-2)
                }

                /**
                 * Get the sunset from API
                 * @returns {string}
                 */
                function getSunset() {
                    let sunsetTimestamp = body.sys.sunset;

                    let sunsetDate = new Date(sunsetTimestamp * 1000);
                    // Hours part from the timestamp
                    let sunsetHours = sunsetDate.getHours();
                    // Minutes part from the timestamp
                    let sunsetMinutes = "0" + sunsetDate.getMinutes();

                    return sunsetHours + ':' + sunsetMinutes.substr(-2)
                }

                return message.channel.send({
                    embed: {
                        color: 'ORANGE',
                        title: `${body.name}, ${body.sys['country']}`,
                        description: `Weather in ${body.name} is now`,
                        thumbnail: {
                            url: `${image}`,
                        },
                        fields: [
                            {
                                name: `Weather`,
                                value: `${weatherDescription}`,
                                inline: true,
                            },
                            {
                                name: `Temperature`,
                                value: `${cTemp}°C/${fTemp}°F`,
                                inline: true,
                            },
                            {
                                name: `Cloud cover`,
                                value: `${clouds}%`,
                                inline: true,
                            },
                            {
                                name: `Windspeed`,
                                value: `${windSpeed} km/h`,
                                inline: true,
                            },
                            {
                                name: `Sunrise time`,
                                value: `${getSunrise()}`,
                                inline: true,
                            },
                            {
                                name: `Sunset time`,
                                value: `${getSunset()}`,
                                inline: true,
                            },
                        ],
                    }
                })
            }
        });
    }
}

exports.default = ballCommand;