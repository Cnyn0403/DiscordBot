import{SlashCommandBuilder,PermissionFlagsBits,EmbedBuilder,AttachmentBuilder,ActionRowBuilder, ButtonBuilder, ButtonStyle} from'discord.js'
import { timeStamp } from 'node:console'
const wait = require('node:timers/promises').setTimeout
const fs = require("fs")
const path = require("path")
const request = require('request')
let sleep = async (ms) => await new Promise(r => setTimeout(r,ms));

export const command = new SlashCommandBuilder().setName('踢人').setDescription('踢出伺服器')
.addUserOption(option =>option
    .setName('target')
    .setDescription('欲封鎖使用者ID')
    .setRequired(true))
.addStringOption(option =>option
    .setName('reason')
    .setDescription('理由')
    .setRequired(true))
.addNumberOption(option =>option //
    .setName('delete_messages')
    .setDescription('刪除訊息時間')
    .addChoices(
      { name: '過去1小時內', value: 1 },
      { name: '過去3小時內', value: 3 },
      { name: '過去1天內', value: 24 },
      { name: '過去3天內', value: 72 },
      { name: '過去7天內', value: 168 },)
    .setRequired(false))
.addAttachmentOption(option =>option
    .setName('prove')
    .setDescription('證明'))

.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
.setDMPermission(false)





export const action = async(ctx) => {
  const target = ctx.options.getUser('target');
  const reason = ctx.options.getString('reason') ?? 'No reason provided';
  const deleteHours = ctx.options.getNumber('delete_messages')?? '';
  const image = ctx.options.getAttachment('prove')??0
  if(image!=0){
    const imgSrc = [{
    src: `${image.url}`,
    }]

    imgSrc.map(async item =>{
      request(item.src).pipe(
      fs.createWriteStream(`src/commands/ban/data/${target.id}_${reason}_${new Date().getFullYear()}${(new Date().getMonth())+1}${new Date().getDate()}${image.name.substr(-4,4)}`)
      )
    })
    var img = '是'
  }
  else{
    var img = '否'
  }
  


    // ctx.reply(`已將成員: ${target.username} ID:${target.id}封禁，理由: ${reason}，操作者為<@${ctx.member.id}>`);
    //await ctx.guild.members.ban(target);

  if (deleteHours) {
    var gg = '是'
    const deleteTime = deleteHours * 60 * 60 * 1000;
    const now = new Date();
    const messages = await ctx.channel.messages.fetch({ limit: 100 });

    for (const message of messages.values()) {
      if (message.author.id === target.id && now - message.createdAt < deleteTime) {
        await message.delete();
      }
    }
  }
  else{
    var gg = '否'
  }
  if (deleteHours>=24){
     var cc = ","+deleteHours/24+"天";
  }
  else if(deleteHours>0){
     var cc = ","+deleteHours+"小時";
  }
  else{
    var cc ="";
  }







  if(img=="是"){
  const file = new AttachmentBuilder(`src/commands/ban/data/${target.id}_${reason}_${new Date().getFullYear()}${(new Date().getMonth())+1}${new Date().getDate()}${image.name.substr(-4,4)}`);
  await sleep(1500)
  const exampleEmbed = new EmbedBuilder()
	.setColor(0xCE0000)
	//.setTitle('管理操作')
	.setAuthor({ name: '管理操作_封禁成員', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	//.setDescription('成員封禁')
	.addFields(
		{ name: '執行人員:  ', value: `<@${ctx.member.id}>`,inline: true},
		{ name: '封鎖成員:  ', value: `${target.tag}`, inline: true },
		{ name: '成員ID:', value: `${target.id}`, inline: true },
    { name: '封禁原因:', value: `${reason}`, inline: true },
    { name: '移除訊息:', value:`${gg}${cc}` , inline: true },
    { name: '證明:', value:`${img}` , inline: true},
	)
	.setTimestamp()
  .setImage(`attachment://${target.id}_${reason}_${new Date().getFullYear()}${(new Date().getMonth())+1}${new Date().getDate()}${image.name.substr(-4,4)}`)
	.setFooter({ text: '管理日誌'});
  
   ctx.reply({ embeds: [exampleEmbed],files: [file]});
  }


  else{
    const exampleEmbed = new EmbedBuilder()
	.setColor(0xCE0000)
	//.setTitle('管理操作')
	.setAuthor({ name: '管理操作_封禁成員', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	//.setDescription('成員封禁')
	.addFields(
		{ name: '執行人員:  ', value: `<@${ctx.member.id}>`,inline: true},
		{ name: '封鎖成員:  ', value: `${target.tag}`, inline: true },
		{ name: '成員ID:', value: `${target.id}`, inline: true },
    { name: '封禁原因:', value: `${reason}`, inline: true },
    { name: '移除訊息:', value:`${gg}${cc}` , inline: true },
    { name: '證明:', value:`${img}` , inline: true},
	)
	.setTimestamp()
	.setFooter({ text: '管理日誌'});
  
   ctx.reply({ embeds: [exampleEmbed]});
  }

  
}