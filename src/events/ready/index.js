import {Events}from "discord.js"
const { ActivityType } = require('discord.js')
export const event = {
    name: Events.ClientReady,
    once:true
}

export const action=(c) => {
    c.user.setActivity('你媽', { type: ActivityType.Watching })
    console.log(`Ready! Logged in as ${c.user.tag}`);
    c.users.send('329593921518698498', '測試機器人 已上線')
}

