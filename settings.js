const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

//buy apikey premium 0887435047326
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'ilaJNKsnHIXWG9S', // 👉 login https://api.zeeoneofc.my.id to get apikey
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "7227794454:AAE7tjW5T5ncj1P3lSLknb_hSPmd6var7Lg" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "ོYaIniBot" //your bot name
global.OWNER_NAME = "YASA" //your name
global.OWNER_NUMBER = "6281333941785" //your telegram number
global.OWNER = ["https://t.me/yakhsyaa23", "https://t.me/zeeone_ofc"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./image/donasi.jpg" // foto donasi di folder image
global.lang = language //don't change
