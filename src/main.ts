import { KlasaClient, KlasaClientOptions } from 'klasa'

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
};

new SophiaClient(config).login(token)
