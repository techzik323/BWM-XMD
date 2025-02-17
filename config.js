const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OiOBj9L3mVGUGRi1VdtQheEAUVvG7NQ4AAEQgIAcUu//sWdnd1P+zM9vKUAnJyci7fKyAZLpGBGjB8BXmBa0hRu6RNjsAQjKogQAVggA8pBEMgTaueZp6cVBfcmkhnN43xZc5vF53toWtOZ8IxynyVnste/AIeDMgrN8HeHwBpftXCaH+omrUgYa3TkSbzDrLJKegqhX28o7SmG63WD+PsBTxaRIgLTMJxHqEUFTAxULOCuPge/b0xyfNc2KwXlhdPdMz6ztEKD6Ebs7myX/Putq5Vk1BnEn6P/vq0O4m78cjG0Kw6at+caWrJJq41OIvxNVq5zWU7TVM9I/Eb/RKHBPm6jwjFtPm27kfj1F1OsePYTpaXnU1n0FU3Ir0sJrv7Ru6o2hEGg1tvVkz57xFPQxsdezyH3TPyKfKvgrDleJEaNo66ijpPulmz8pX5PfS+El8VH1mJ/4/u/Aj2oGwO8Ck6bvhOFvHdhR3JVWPLNrkcadc4G1lPv0f97Hv0A9kqdztzUBl+onFRZzJvdnpp2PJGOdEpGd0jSQmvh0OH1T/pQ1oVf2IZUSWKXU3byYuD7cyPUbJf15t6X14Ec2lzt3Lb8D7HkTL1JEXsF4a7yLPJrmvP6rm+h9ambszGmO67kZIWg3NXOSmlprw8bxSjRvfBkHswoEAhLmkBKc5I+64vMQD6tY28AtGnusA5XK/76fwsSisc6jv1ZGnE6gYVt9mNbhRpdsg6LL1dS519AQzIi8xDZYn8GS5pVjRLVJYwRCUY/v2LAQTd6Jtvz9M4BgS4KOmWVHmSQf/D1I+P0POyilC7IZ7aLlABhuzna0QpJmHZylgRWHgRrpEaQVqCYQCTEj0Y4KMae6jFA+eLlJrherxxLmYYq6fItFUlbClHGXn7ReyzwgBC7gcriu4PnuvDH27Q7/0IAjTweJfjZVcGDMDvlWn3/NZBOwnNvhw0CEHezklfPRzgVfDqXfE2jt6kRwXywZAWFWKAC724yp0sRuQPuMubPbfr2WW0GW3vFkmDAZugQj3ly/AL7pulYPj6OabUzG/x+oveyHDMMWBA+kwgbm/eGwjigBM4UZSkoST/Vf68tkLCPP9JEG1x30Vvd/iIQpyUYAjUlT3vdJTJ2KinjchOp8o4VNRQAZ8mfYT9LU2C51ecfTktz4tIyDjhdLfcu37Pjr5Q9e29t72tCpa/cFq8ffkXkJa/H2j3897VuV1Xhe6SJwNVF3LDCg9G0tFvsmiOUr8TLJT9cWyFRjyT2XFTj5yu2awOypRrVBin0uUUd2WiFCKyttqzGR9h+XrYKI+3p6181o7j+o6M/jhfOhEJdcHAwjEnoXkjeGwpZ3zlVOucZ5OC3AVriumdP1grbjrSjpqRHM4VPIZY6Cv2+oyU9xo+x0DyPn7xsyGv79EKMHpOMwJbi/7LnK8pZx/MF4z3+fibJI0Qmbl0e0kdveHRxUSpd0+lZilMZ6igbEImS0eQLYOuBxPwePxiQJ5AGmRFCoYAEr/IsA8YkMCSKp9FdXCKSgrTHAw5sS+LoiD1BgxIGyXPbQrpR7+B0j6W7YHHPxjymlv6BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ZIK",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "256751617788",              
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
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
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

