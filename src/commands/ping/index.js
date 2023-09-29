import{SlashCommandBuilder} from'discord.js'
const wait = require('node:timers/promises').setTimeout
const fs = require('fs')
const data = require('../../../server_info.json')
import {emojiCharacters} from '@/events/emojiCharacters.js'
import {readData,writeData} from '@/RD.js'

export const command = new SlashCommandBuilder().setName('ping').setDescription('ping command')

export const action = async(ctx) => {


//test1
  // const uva = {
  //   name: "johc",
  //   fuck: "fuckyou",
  // }

  


  const sent = await ctx.reply({ content: 'Pinging...', fetchReply: true,ephemeral: true })
  await ctx.editReply(`目前延遲為: ${sent.createdTimestamp - ctx.createdTimestamp}ms`);
  await wait(5000)
  await ctx.deleteReply()


  writeData("server2","igjioasgjioawjgiojasiogjsaiogjaiosg")
//   const updatedData = JSON.stringify(uva, null, 2)
//   fs.writeFile('@/../server_info.json', updatedData, 'utf8', (err) => {
//     if (err) {
//       console.error('写入文件时发生错误：', err);
//       return;
//     }
//     console.log('数据已成功写入到文件。');
// })
}