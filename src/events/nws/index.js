import {ButtonBuilder, ButtonStyle,Events,GatewayIntentBits}from "discord.js"
const { ActivityType } = require('discord.js')
export const event = {
    name: Events.GuildMemberAdd,
}

export const action=(c) => {
    c.send(`${c.user} 你好`)
}

