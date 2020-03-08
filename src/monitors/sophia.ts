import {KlasaClient, Monitor, MonitorStore} from 'klasa'

module.exports = class extends Monitor {
    constructor(client: KlasaClient, store: MonitorStore, file: string[], directory: string) {
        super(client, store, file, directory, {
            name: 'sophia',
            ignoreOthers: false,
            ignoreBots: true,
            ignoreSelf: true,
        })
    }

    async run(message) {
        if(message.content.includes('ソフィア') || message.content.includes('sophia')){
            await message.send('ん？呼んだか？')
        }
    }
}
