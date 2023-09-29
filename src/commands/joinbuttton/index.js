import{SlashCommandBuilder,EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, AttachmentBuilder} from'discord.js'
const wait = require('node:timers/promises').setTimeout
import {emojiCharacters} from '@/events/emojiCharacters.js'

export const command = new SlashCommandBuilder().setName('jbt').setDescription('jbt')

export const action = async(ctx) => {
        // data: new SlashCommandBuilder()...
            const target = ctx.options.getUser('target');
            const reason = ctx.options.getString('reason') ?? 'No reason provided';
    
            const confirm = new ButtonBuilder()
                .setCustomId('ping')
                .setLabel('ping')
                .setStyle(ButtonStyle.Danger);
    
            const cancel = new ButtonBuilder()
                .setCustomId('cancel')
                .setLabel('Cancel')
                .setStyle(ButtonStyle.Secondary);
    
            const row = new ActionRowBuilder()
                .addComponents(cancel, confirm);
    
            await ctx.reply({
                content: `Are you sure you want to ban ${target} for reason: ${reason}?`,
                components: [row],
            });
  }