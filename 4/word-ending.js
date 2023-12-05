import wordEnding from './word-ending.module.js'

const wordsMessage = ['сообщение', 'сообщения', 'сообщений']
const wordsUser = ['пользователь', 'пользователя', 'пользователей']
console.log(wordEnding.setWordEnding(15, wordsMessage));
console.log(wordEnding.setWordEnding(15, wordsUser));