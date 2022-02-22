const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;KingOfBear;;;'
                    + 'FN:KingOfBear\n' // full name
                    + 'ORG:Owner AlifBot;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6285890617231:+6285890617231\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'King Of Bear', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler