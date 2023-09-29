import { SlashCommandBuilder,PermissionFlagsBits } from 'discord.js';

export const command = new SlashCommandBuilder()
  .setName('unban')
  .setDescription('解封某个用户')
  .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
  .addStringOption(option => option
    .setName(`用戶id`)
    .setDescription('請輸入欲解封成員ID')
    .setRequired(true)
  );
  

export const action = async (ctx) => {
  const ID = ctx.options.getString(`用戶id`);
  try {
    await ctx.guild.members.unban(ID, '解封用户');
    return ctx.reply(`成員ID ${ID} 已成功解封。`);
  } catch (err) {
    console.error(err);
    return ctx.reply(`解封成員失敗，成員ID: ${ID} 原因：${err.message}`);
  }
};