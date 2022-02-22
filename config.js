let fs = require('fs')

global.owner = ['6285890617231'] // Put your number here
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  bear: 'https://apikey-bear.herokuapp.com',
  bear2: 'https://apikey-bear2.herokuapp.com',
  bear3: 'https://apikey-bear3.herokuapp.com',
  vinco: 'https://viko-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '5370e1ce20d22ca2',
  'https://api.lolhuman.xyz': 'd08f6ffd9e5da0025aa3c644',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'ExmcANilHMTTL7KTkdJIA6Gv6oi',
  'https://pencarikode.xyz': 'pais',
  'https://apikey-bear3.herokuapp.com': 'https://pastelink.net/v20Md',
  'https://viko-api.herokuapp.com': 'vinko',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'd08f6ffd9e5da0025aa3c644'
zekskey = 'ExmcANilHMTTL7KTkdJIA6Gv6oi'
xteamkey = '5370e1ce20d22ca2'
leyskey = 'dappakntlll'
bearkey = 'https://pastelink.net/v20Md'
ApiiKey = 'https://pastelink.net/v20Md'
vinkey = 'vinko'

namabot = 'Alif Bot'
namalu = 'Alif Ananta Ulya'
footer = '\n©Alif Ananta Ulya'
kasihcaption = `Nih Sayang`

// Sticker WM
global.stiker_wait = '_*Tunggu Sebentar...*_'
global.packname = 'AlifBot Multi device'
global.author = 'Alif Ananta Ulya'
global.email = 'alifananta5@gmail.com'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wm = '©Alif Ananta Ulya Bot-Md'
global.media = 'https://telegra.ph/file/5d45a3d1e12726d98c5e4.jpg'

global.wait = '_*Tunggu Sebentar Sedang Di Proses...*_'
global.eror = '_*Server Error*_'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
