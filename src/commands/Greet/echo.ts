import { Command, CommandStore, KlasaClient } from 'klasa'

module.exports = class extends Command {
    constructor(
        client: KlasaClient,
        store: CommandStore,
        file: string[],
        directory: string
    ) {
        super(client, store, file, directory, {
            description: 'やまびこを返すぞ',
            usage: '<req:string>' // https://klasa.js.org/#/docs/klasa/master/Getting%20Started/UnderstandingUsageStrings
        })
    }

    async run(message, req) {
        return message.sendMessage(req)
    }
}
