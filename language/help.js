/* ubah kalau mau // bebas // kalau eror tanggung sendiri dek
*/

// Menu
exports.menu = (salam, pushname) =>{
	return`hai kak👋^_^

⎙ jika ada bug atau eror silahkan hubungi owner biar segera di fix
✆ wa.me/6283808840711

*⊹ 🧚🏻‍♀️  ̖́- silahkan baca peraturan dulu sebelum memakai bot.*

*-Note ꢁ*
*֗ ៵ ⌗: beri jeda 5-10 detik*
*֗ ៵ ⌗: no sepam bot*
*֗ ៵ ⌗: no telepon / vc*
`
} 


// All Menu
exports.allmenu = (prefix) => {
return`
┌── 「 *Group Menu* 」
├ ${prefix}linkgroup
├ ${prefix}ephemeral [option]
├ ${prefix}setppgc [image]
├ ${prefix}setname [text]
├ ${prefix}setdesc [text]
├ ${prefix}group [option]
├ ${prefix}editinfo [option]
├ ${prefix}add @user
├ ${prefix}kick @user
├ ${prefix}hidetag [text]
├ ${prefix}tagall [text]
├ ${prefix}antilink [on/off]
├ ${prefix}mute [on/off]
├ ${prefix}promote @user
├ ${prefix}demote @user
├ ${prefix}vote [text]
├ ${prefix}devote
├ ${prefix}upvote
├ ${prefix}cekvote
├ ${prefix}hapusvote
└───────

┌── 「 *Downloader Menu* 」
├ ${prefix}tiktoknowm [url]
├ ${prefix}tiktokwm [url]
├ ${prefix}tiktokmp3 [url]
├ ${prefix}instagram [url]
├ ${prefix}twitter [url]
├ ${prefix}twittermp3 [url]
├ ${prefix}facebook [url]
├ ${prefix}pinterestdl [url]
├ ${prefix}ytmp3 [url]
├ ${prefix}ytmp4 [url]
├ ${prefix}getmusic [query]
├ ${prefix}getvideo [query]
├ ${prefix}umma [url]
├ ${prefix}joox [query]
├ ${prefix}soundcloud [url]
└───────

┌── 「 *Search Menu* 」
├ ${prefix}play [query]
├ ${prefix}yts [query]
├ ${prefix}google [query]
├ ${prefix}gimage [query]
├ ${prefix}pinterest [query]
├ ${prefix}wallpaper [query]
├ ${prefix}wikimedia [query]
├ ${prefix}ytsearch [query]
├ ${prefix}ringtone [query]
├ ${prefix}stalk [option] [query]
└───────

┌── 「 *Random Menu* 」
├ ${prefix}coffe
├ ${prefix}quotesanime
├ ${prefix}motivasi
├ ${prefix}dilanquote
├ ${prefix}bucinquote
├ ${prefix}katasenja
├ ${prefix}puisi
├ ${prefix}couple
├ ${prefix}anime
├ ${prefix}waifu
├ ${prefix}husbu
├ ${prefix}neko
├ ${prefix}shinobu
├ ${prefix}waifus (nsfw)
├ ${prefix}nekos (nsfw)
├ ${prefix}trap (nsfw)
├ ${prefix}blowjob (nsfw)
└───────

┌── 「 *Text Pro Menu* 」
├ ${prefix}3dchristmas
├ ${prefix}3ddeepsea
├ ${prefix}americanflag
├ ${prefix}3dscifi
├ ${prefix}3drainbow
├ ${prefix}3dwaterpipe
├ ${prefix}halloweenskeleton
├ ${prefix}sketch
├ ${prefix}bluecircuit
├ ${prefix}space
├ ${prefix}metallic
├ ${prefix}fiction
├ ${prefix}greenhorror
├ ${prefix}transformer
├ ${prefix}berry
├ ${prefix}thunder
├ ${prefix}magma
├ ${prefix}3dcrackedstone
├ ${prefix}3dneonlight
├ ${prefix}impressiveglitch
├ ${prefix}naturalleaves
├ ${prefix}fireworksparkle
├ ${prefix}matrix
├ ${prefix}dropwater
├ ${prefix}harrypotter
├ ${prefix}foggywindow
├ ${prefix}neondevils
├ ${prefix}christmasholiday
├ ${prefix}3dgradient
├ ${prefix}blackpink
├ ${prefix}gluetext
└───────

┌── 「 *Photo Oxy Menu* 」
├ ${prefix}shadow
├ ${prefix}romantic
├ ${prefix}smoke
├ ${prefix}burnpapper
├ ${prefix}naruto
├ ${prefix}lovemsg
├ ${prefix}grassmsg
├ ${prefix}lovetext
├ ${prefix}coffecup
├ ${prefix}butterfly
├ ${prefix}harrypotter
├ ${prefix}retrolol
└───────

┌── 「 *Ephoto Menu* 」
├ ${prefix}ffcover
├ ${prefix}crossfire
├ ${prefix}galaxy
├ ${prefix}glass
├ ${prefix}neon
├ ${prefix}beach
├ ${prefix}blackpink
├ ${prefix}igcertificate
├ ${prefix}ytcertificate
└───────

┌── 「 *Sticker Effect Menu* 」
├ wasted
├ fisheye
├ invert
├ pixelate
├ roundimage
├ 1977 
├ aden
├ clarendon
├ gingham
├ hudson 
├ inkwell 
├ earlybird 
├ kelvin 
├ lark
├ lofi 
├ maven 
├ mayfair 
├ moon 
├ nashville 
├ perpetua 
├ reyes 
├ rise 
├ slumber 
├ stinson 
├ toaster 
├ valencia 
├ walden 
├ willow 
├ xpro2
├ jail
├ rainbow
├ rip 
├ sepia
└───────

┌── 「 *Fun Menu* 」
├ ${prefix}halah
├ ${prefix}hilih
├ ${prefix}huluh
├ ${prefix}heleh
├ ${prefix}holoh
├ ${prefix}jadian
├ ${prefix}jodohku
├ ${prefix}delttt
├ ${prefix}tictactoe
├ ${prefix}family100
├ ${prefix}tebak [option]
├ ${prefix}math [mode]
├ ${prefix}suitpvp [@tag]
└───────

┌── 「 *Primbon Menu* 」
├ ${prefix}nomorhoki
├ ${prefix}artimimpi
├ ${prefix}artinama
├ ${prefix}ramaljodoh
├ ${prefix}ramaljodohbali
├ ${prefix}suamiistri
├ ${prefix}ramalcinta
├ ${prefix}cocoknama
├ ${prefix}pasangan
├ ${prefix}jadiannikah
├ ${prefix}sifatusaha
├ ${prefix}rezeki
├ ${prefix}pekerjaan
├ ${prefix}nasib
├ ${prefix}penyakit
├ ${prefix}tarot
├ ${prefix}fengshui
├ ${prefix}haribaik
├ ${prefix}harisangar
├ ${prefix}harisial
├ ${prefix}nagahari
├ ${prefix}arahrezeki
├ ${prefix}peruntungan
├ ${prefix}weton
├ ${prefix}karakter
├ ${prefix}keberuntungan
├ ${prefix}memancing
├ ${prefix}masasubur
├ ${prefix}zodiak
├ ${prefix}shio
└───────

┌── 「 *Convert Menu* 」
├ ${prefix}toimage
├ ${prefix}removebg
├ ${prefix}sticker
├ ${prefix}emojimix
├ ${prefix}tovideo
├ ${prefix}togif
├ ${prefix}tourl
├ ${prefix}tovn
├ ${prefix}tomp3
├ ${prefix}toaudio
├ ${prefix}ebinary
├ ${prefix}dbinary
├ ${prefix}styletext
├ ${prefix}smeme
└───────

┌── 「 *Main Menu* 」
├ ${prefix}ping
├ ${prefix}owner
├ ${prefix}menu
├ ${prefix}delete
├ ${prefix}infochat
├ ${prefix}quoted
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}listonline
└───────

┌── 「 *Database Menu* 」
├ ${prefix}setcmd
├ ${prefix}listcmd
├ ${prefix}delcmd
├ ${prefix}lockcmd
├ ${prefix}addmsg
├ ${prefix}listmsg
├ ${prefix}getmsg
├ ${prefix}delmsg
└───────

┌── 「 *Anonymous Menu* 」
├ ${prefix}anonymous
├ ${prefix}start
├ ${prefix}next
├ ${prefix}keluar
├ ${prefix}sendkontak
└───────

┌── 「 *Islamic Menu* 」
├ ${prefix}iqra
├ ${prefix}hadist
├ ${prefix}alquran
├ ${prefix}juzamma
├ ${prefix}tafsirsurah
└───────

┌── 「 *Voice Changer* 」
├ ${prefix}bass
├ ${prefix}blown
├ ${prefix}deep
├ ${prefix}earrape
├ ${prefix}fast
├ ${prefix}fat
├ ${prefix}nightcore
├ ${prefix}reverse
├ ${prefix}robot
├ ${prefix}slow
├ ${prefix}tupai
└───────

┌── 「 *Owner Menu* 」
├ ${prefix}react [emoji]
├ ${prefix}chat [option]
├ ${prefix}join [link]
├ ${prefix}leave
├ ${prefix}block @user
├ ${prefix}unblock @user
├ ${prefix}bcgroup [text]
├ ${prefix}bcall [text]
├ ${prefix}setppbot [image]
├ ${prefix}setexif
└───────
`
}

// sewa bot
exports.sewabot  = (ownernomer) => {
	return`
┌── 「 *Sewa Bot* 」
├ Sewa 15k/manen
├ Sewa 5k/Minggu
├ sewa 10k/bulan
└───────

┌── 「 *Jadi Bot* 」
├ Jadi Bot 30k/bln
├ Jadi Bot + Owner 35k
├ Jasa Run Bot 20k
└───────

Contact person Owner :
wa.me/6283808840711
`
}

// Simple Menu
exports.groupmenu = (prefix) => {
	return`
┌── 「 *Group Menu* 」
├ ${prefix}linkgroup
├ ${prefix}ephemeral [option]
├ ${prefix}setppgc [image]
├ ${prefix}setname [text]
├ ${prefix}setdesc [text]
├ ${prefix}group [option]
├ ${prefix}editinfo [option]
├ ${prefix}add @user
├ ${prefix}kick @user
├ ${prefix}hidetag [text]
├ ${prefix}tagall [text]
├ ${prefix}antilink [on/off]
├ ${prefix}mute [on/off]
├ ${prefix}promote @user
├ ${prefix}demote @user
├ ${prefix}vote [text]
├ ${prefix}devote
├ ${prefix}upvote
├ ${prefix}cekvote
├ ${prefix}hapusvote
└───────
`
}

exports.downloadermenu = (prefix) => {
	return`
┌── 「 *Downloader Menu* 」
├ ${prefix}tiktoknowm [url]
├ ${prefix}tiktokwm [url]
├ ${prefix}tiktokmp3 [url]
├ ${prefix}instagram [url]
├ ${prefix}twitter [url]
├ ${prefix}twittermp3 [url]
├ ${prefix}facebook [url]
├ ${prefix}pinterestdl [url]
├ ${prefix}ytmp3 [url]
├ ${prefix}ytmp4 [url]
├ ${prefix}getmusic [query]
├ ${prefix}getvideo [query]
├ ${prefix}umma [url]
├ ${prefix}joox [query]
├ ${prefix}soundcloud [url]
└───────
`
}

exports.searchmenu = (prefix) => {
	return`
┌── 「 *Search Menu* 」
├ ${prefix}play [query]
├ ${prefix}yts [query]
├ ${prefix}google [query]
├ ${prefix}gimage [query]
├ ${prefix}pinterest [query]
├ ${prefix}wallpaper [query]
├ ${prefix}wikimedia [query]
├ ${prefix}ytsearch [query]
├ ${prefix}ringtone [query]
├ ${prefix}stalk [option] [query]
└───────
`
}

exports.randommenu = (prefix) => {
	return`
┌── 「 *Random Menu* 」
├ ${prefix}coffe
├ ${prefix}quotesanime
├ ${prefix}motivasi
├ ${prefix}dilanquote
├ ${prefix}bucinquote
├ ${prefix}katasenja
├ ${prefix}puisi
├ ${prefix}couple
├ ${prefix}anime
├ ${prefix}waifu
├ ${prefix}husbu
├ ${prefix}neko
├ ${prefix}shinobu
├ ${prefix}waifus (nsfw)
├ ${prefix}nekos (nsfw)
├ ${prefix}trap (nsfw)
├ ${prefix}blowjob (nsfw)
└───────
`
}

exports.textpromenu = (prefix) => {
	return`
┌── 「 *Text Pro Menu* 」
├ ${prefix}3dchristmas
├ ${prefix}3ddeepsea
├ ${prefix}americanflag
├ ${prefix}3dscifi
├ ${prefix}3drainbow
├ ${prefix}3dwaterpipe
├ ${prefix}halloweenskeleton
├ ${prefix}sketch
├ ${prefix}bluecircuit
├ ${prefix}space
├ ${prefix}metallic
├ ${prefix}fiction
├ ${prefix}greenhorror
├ ${prefix}transformer
├ ${prefix}berry
├ ${prefix}thunder
├ ${prefix}magma
├ ${prefix}3dcrackedstone
├ ${prefix}3dneonlight
├ ${prefix}impressiveglitch
├ ${prefix}naturalleaves
├ ${prefix}fireworksparkle
├ ${prefix}matrix
├ ${prefix}dropwater
├ ${prefix}harrypotter
├ ${prefix}foggywindow
├ ${prefix}neondevils
├ ${prefix}christmasholiday
├ ${prefix}3dgradient
├ ${prefix}blackpink
├ ${prefix}gluetext
└───────
`
}

exports.photooxymenu = (prefix) => {
	return`
┌── 「 *Photo Oxy Menu* 」
├ ${prefix}shadow
├ ${prefix}romantic
├ ${prefix}smoke
├ ${prefix}burnpapper
├ ${prefix}naruto
├ ${prefix}lovemsg
├ ${prefix}grassmsg
├ ${prefix}lovetext
├ ${prefix}coffecup
├ ${prefix}butterfly
├ ${prefix}harrypotter
├ ${prefix}retrolol
└───────
`
}

exports.ephotomenu = (prefix) => {
	return`
┌── 「 *Ephoto Menu* 」
├ ${prefix}ffcover
├ ${prefix}crossfire
├ ${prefix}galaxy
├ ${prefix}glass
├ ${prefix}neon
├ ${prefix}beach
├ ${prefix}blackpink
├ ${prefix}igcertificate
├ ${prefix}ytcertificate
└───────
`
}

exports.stickereffectmenu = (prefix) => {
	return`
┌── 「 *Sticker Effect Menu* 」
├ wasted
├ fisheye
├ invert
├ pixelate
├ roundimage
├ 1977 
├ aden
├ clarendon
├ gingham
├ hudson 
├ inkwell 
├ earlybird 
├ kelvin 
├ lark
├ lofi 
├ maven 
├ mayfair 
├ moon 
├ nashville 
├ perpetua 
├ reyes 
├ rise 
├ slumber 
├ stinson 
├ toaster 
├ valencia 
├ walden 
├ willow 
├ xpro2
├ jail
├ rainbow
├ rip 
├ sepia
├ wanted
└───────
`
}

exports.funmenu = (prefix) => {
	return`
┌── 「 *Fun Menu* 」
├ ${prefix}halah
├ ${prefix}hilih
├ ${prefix}huluh
├ ${prefix}heleh
├ ${prefix}holoh
├ ${prefix}jadian
├ ${prefix}jodohku
├ ${prefix}delttt
├ ${prefix}tictactoe
├ ${prefix}family100
├ ${prefix}tebak [option]
├ ${prefix}math [mode]
├ ${prefix}suitpvp [@tag]
└───────
`
}

exports.primbonmenu = (prefix) => {
	return`
┌── 「 *Primbon Menu* 」
├ ${prefix}nomorhoki
├ ${prefix}artimimpi
├ ${prefix}artinama
├ ${prefix}ramaljodoh
├ ${prefix}ramaljodohbali
├ ${prefix}suamiistri
├ ${prefix}ramalcinta
├ ${prefix}cocoknama
├ ${prefix}pasangan
├ ${prefix}jadiannikah
├ ${prefix}sifatusaha
├ ${prefix}rezeki
├ ${prefix}pekerjaan
├ ${prefix}nasib
├ ${prefix}penyakit
├ ${prefix}tarot
├ ${prefix}fengshui
├ ${prefix}haribaik
├ ${prefix}harisangar
├ ${prefix}harisial
├ ${prefix}nagahari
├ ${prefix}arahrezeki
├ ${prefix}peruntungan
├ ${prefix}weton
├ ${prefix}karakter
├ ${prefix}keberuntungan
├ ${prefix}memancing
├ ${prefix}masasubur
├ ${prefix}zodiak
├ ${prefix}shio
└───────
`
}

exports.convertmenu = (prefix) => {
	return`
┌── 「 *Convert Menu* 」
├ ${prefix}toimage
├ ${prefix}removebg
├ ${prefix}sticker
├ ${prefix}emojimix
├ ${prefix}tovideo
├ ${prefix}togif
├ ${prefix}tourl
├ ${prefix}tovn
├ ${prefix}tomp3
├ ${prefix}toaudio
├ ${prefix}ebinary
├ ${prefix}dbinary
├ ${prefix}styletext
└───────
`
}

exports.mainmenu = (prefix) => {
	return`
┌── 「 *Main Menu* 」
├ ${prefix}ping
├ ${prefix}owner
├ ${prefix}menu / ${prefix}help / ${prefix}?
├ ${prefix}delete
├ ${prefix}infochat
├ ${prefix}quoted
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}listonline
└───────
`
}

exports.databasemenu = (prefix) => {
	return`
┌── 「 *Database Menu* 」
├ ${prefix}setcmd
├ ${prefix}listcmd
├ ${prefix}delcmd
├ ${prefix}lockcmd
├ ${prefix}addmsg
├ ${prefix}listmsg
├ ${prefix}getmsg
├ ${prefix}delmsg
`
}

exports.anonymousmenu = (prefix) => {
	return`
┌── 「 *Anonymous Menu* 」
├ ${prefix}anonymous
├ ${prefix}start
├ ${prefix}next
├ ${prefix}keluar
├ ${prefix}sendkontak
└───────
`
}

exports.islamicmenu = (prefix) => {
	return`
┌── 「 *Islamic Menu* 」
├ ${prefix}iqra
├ ${prefix}hadist
├ ${prefix}alquran
├ ${prefix}juzamma
├ ${prefix}tafsirsurah
└───────
`
}

exports.voicechargermenu = (prefix) => {
	return`
┌── 「 *Voice Changer「 *
├ ${prefix}bass
├ ${prefix}blown
├ ${prefix}deep
├ ${prefix}earrape
├ ${prefix}fast
├ ${prefix}fat
├ ${prefix}nightcore
├ ${prefix}reverse
├ ${prefix}robot
├ ${prefix}slow
├ ${prefix}tupai
└───────
`
}

exports.ownermenu = (prefix) => {
	return`
┌── 「 *Owner Menu* 」
├ ${prefix}react [emoji]
├ ${prefix}chat [option]
├ ${prefix}join [link]
├ ${prefix}leave
├ ${prefix}block @user
├ ${prefix}unblock @user
├ ${prefix}bcgroup [text]
├ ${prefix}bcall [text]
├ ${prefix}setppbot [image]
├ ${prefix}setexif
└───────
`
}

exports.thanksto = () => {
	return`
┌── 「 *Thanks To* 」
├ DikaArdnt.
├ Zeeoneofc
├ FatihArridho
├ Sanzy
├ Kiki vz.
├ RiychDwayne
└───────
`
}
