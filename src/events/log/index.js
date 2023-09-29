import {Events,EmbedBuilder} from "discord.js"
import { useAppStore } from "@/store/app"
import { TextChannel } from "discord.js"
export const event = {
    name: Events.MessageDelete,
}

export const action = async(c) =>{
    

    const exampleEmbed = new EmbedBuilder()
	.setColor(0xCE0000)
	.setAuthor({ name: 'ServerLog', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.addFields(
		{ name: '執行人員:  ', value: `1`,inline: true},
		{ name: '封鎖成員:  ', value: `2`, inline: true },
		{ name: '成員ID:', value: `3`, inline: true },
    { name: '封禁原因:', value: `4`, inline: true },
    { name: '移除訊息:', value:`5` , inline: true },
    { name: '證明:', value:`6` , inline: true},
	)
	.setTimestamp()
	.setFooter({ text: '管理日誌'});
  
   //ctx.reply({ embeds: [exampleEmbed]});

   console.log(c)
   const channel = c.guild.channels.cache.get(c.channelId)
   channel.send({embeds: [exampleEmbed]})


  }

