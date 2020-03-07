import { KlasaClient, KlasaClientOptions } from 'klasa'
import { token } from '../config'

class SophiaClient extends KlasaClient {
  constructor(options: KlasaClientOptions) {
    super(options)
    // Add any properties to your Klasa Client
  }
  // Add any methods to your Klasa Client
}

const config: KlasaClientOptions = {
  prefix: '!',
  language: 'ja-JP'
}

if(process.env.BOT_TOKEN){
  new SophiaClient(config).login(process.env.BOT_TOKEN)
}else{
  new SophiaClient(config).login(token)
}

