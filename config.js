const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OiOBj9L3ltZxpEBa3qqkUugogXBGndmodAIkSuhoBil/99i75U98PObC9PKSAnJ+fyvYC8IBW2cAsmL6CkpIEMd0vWlhhMwLQ+HjEFPYAgg2ACQnuVBcFygPnGKk9XUdvahaLW2SwznQhuZT6Vd4epe4q88Ance6Csg5SEfwAMjpx8Uk3f4cXbTL6sZdU7cmM8NGrrEfd1VNnqcEB4J9eiJ3DvECGhJI+0MsYZpjC1cLuGhH6Pfr0+DY7SNT014dFI43W6ZBJtLo/j2PS2s8afYuFcCI5RGPb36AtQlFptZQzkkJCzQvelu3xorcCkznKWZoYWhM364Vl+4KU3+hWJcoxMhHNGWPtt3c0Vh/Xdg65uPPGE1WLa4OdRonPNYnDC6GJFYVuv9LK/e06+Rzznzs2jvp8iMc6n+YE8zvB6eovPZ0N4VJ9XbmAtHWV5roIk+Up8TT+ykvwf3TPNv/V92j9rbh+ezVQggiLPxrIlbG40myeWLIrhGCmpIH2Pvu1Yyt6QpYNIFBKwkYXa7FA4u9Cmq0u8XG0tG/rpgBGl+KQPWU3/xFLNp61dJGFyQUJlDfeO63Htgm8zjYnxMTvIzw07nTUj3bd2MeD9ZKRpFmddQ/ficWbfch628szj5gduf9MULsp4z5punl5vlODWRGDC33uA4ohUjEJGirx7Nxj3AETNFocUs1d1QRWdz0nAq4tjU1X7WKozK9Z3Q3bWR8O1uZRhfMmE204PdvIT6IGSFiGuKowMUrGCtjauKhjhCkz+/tUDOb6yN9+60wS+B46EVszL6zItIPow9eMjDMOiztm2zUOlW2AKJtzna8wYyaOqk7HOIQ1j0mAlhqwCkyNMK3zvAYQbEuIOD1hciJJwl21WK1ZpQ30kur4VdZTjIn/7ZQDHIxEL4Y9BKHE/BogXf0CEgh8Ic2MhxBzX54agB8h7Zbo9v3VwPFXXj/MNW46Q6jBPZJZP+SowuE316sKb9JhiBCaM1rgHAhgmdekWCc7/gItL6CNl7stjbZj5LQ1df7E4VdlJlL7gvlkKJi+fY0opUIfnj/2hu1z6oAey1wSS7ub94Ugc8iNeFCVpMhr9Vf28dELCsvyZY9bhvove7UCYQZJWYAKUxeiZPsiGNhfrJOBmM1mLZCWSwadJH2F/S9POu00HkePM1L03zReLVl7bmEvcdeM7/JqgbTDLXbNUoG4//QsImABZGRQouiJ22dDTpV9h6zBkm/mqEpuVe9sLcv1g2d7uNpRcxX90zqVV1XOR6shyMgO5+8Cpo2my2Vizq6Qr12QLj5zaNeMjLF8PW9WKnY7Wp/ZUOgsz92wbKoc2nc9pK7Yiyb1rQeAMCXEU+Kdwll30vaWoujlWhzfDTPeLZjMQDiY5G2o8PHluQw7C9PJWw9cxkL6PX/LakJf3aB0Jfp1mOews+i9zvqacu/e+YLzPx98kabrb2Rdsap4T9XX50LZSpN4MNtduIp8gd5B72bXkWmuTxS6433/1QJlCdixoBiYA5ogWBIEeSGHF5M+iuiTDFYNZCSa8KEiSwI9GXA9krVyWWwbZR7+B3D0rbIH7Py1se7P6BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ZIK",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

