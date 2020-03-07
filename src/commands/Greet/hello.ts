import { Command, CommandStore, KlasaClient } from 'klasa'
import {randomChoice} from "../../utils/random";

module.exports = class extends Command {
  constructor(
    client: KlasaClient,
    store: CommandStore,
    file: string[],
    directory: string
  ) {
    super(client, store, file, directory, {
      description: 'ランダムな挨拶を返すぞ'
    })
  }

  async run(message) {
    const helloMessages = [
      '私は「ソフィア」。人の良き友人だ。',
      'よ。',
      'めんそーれ だ。',
      '何か買うのか？'
    ]
    return message.sendMessage(randomChoice(helloMessages))
  }
}
