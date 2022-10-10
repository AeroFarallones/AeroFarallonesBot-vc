const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./jsconfig.json');

const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("faq")
        .setDescription("Send a FAQ question and answer in selected channel")
        .addChannelOption(channel => {
            channel
                .setName("channel")
                .setDescription("Channel you want to send the FAQ embed in")
                .setRequired(true)
        }),
    async execute (interaction) {
        await interaction.reply("Pong! :ping_pong:")
    }
}
const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);