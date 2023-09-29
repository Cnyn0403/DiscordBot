import{SlashCommandBuilder,EmbedBuilder} from'discord.js'
const wait = require('node:timers/promises').setTimeout
import {emojiCharacters} from '@/events/emojiCharacters.js'
const moment = require('moment');

export const command = new SlashCommandBuilder().setName('取得資訊_伺服器').setDescription('serverinfo')

export const action = async(ctx) => {
    let createdAt = moment(ctx.guild.createdAt);
    //let dateFormated = createdAt.format('YYYY年MM月DD日');
    let dateFormated = Math.floor(createdAt/1000)
    let owner = await ctx.guild.fetchOwner();


    //console.log(ctx.guild.createdAt)
    const exampleEmbed = new EmbedBuilder()
	.setColor(0x00A600)
	.setTitle(ctx.guild.name)
	.addFields(
		{ name: '<:B04_Jett:980534589867065435>ID', value: `${ctx.guild.id}`,inline: true},
		{ name: '成員', value: `${ctx.guild.memberCount}`, inline: true },
		{ name: '加成狀態', value: `3`, inline: true },
    { name: '創建時間', value: `<t:${dateFormated}:F>(<t:${dateFormated}:R>)`, inline: true },
    { name: '擁有者', value:`${owner}` , inline: true },
	)
	.setTimestamp()
   ctx.reply({ embeds: [exampleEmbed]});
  }