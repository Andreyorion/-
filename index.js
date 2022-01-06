const { Telegraf, Markup } = require('telegraf')
const my_const = require(`./const`)
const { Keyboard } = require('telegram-keyboard')

const bot = new Telegraf("5047037721:AAGHUH4lNHCoKdozlIBECZKrA0BcIn7KtOA")
bot.start((ctx) => ctx.reply(`Здравствуйте ${ctx.from.first_name}, для получения большей информации воспользуйтесь командой /help`))


bot.command('dish', (ctx) => ctx.reply('Выберите интересующий вас товар:\n\n\n /plate тарелка🍽\n\n/fork вилка🍴\n\n/spoon ложка🥄\n\n\n/help возврат в главное меню'))
bot.command('plate', (ctx) => ctx.replyWithPhoto({ source: '2.jpg' }, { caption: "Тарелка стоимость 50.000-сум\n\n/dish НАЗАД\n\n/help возврат в главное меню" }))
bot.command('fork', (ctx) => ctx.replyWithPhoto({ source: '3.jpg' }, { caption: "Вилка стоимость 15.000-сум\n\n/dish НАЗАД\n\n/help возврат в главное меню" }))
bot.command('spoon', (ctx) => ctx.replyWithPhoto({ source: '4.jpg' }, { caption: "Ложка стоимость 15.000-сум\n\n/dish НАЗАД\n\n/help возврат в главное меню" }))
bot.command('eat', (ctx) => ctx.reply('Выберите интерисующий вас товар:\n\n\n /pasta паста🍝 \n\n/lavash лаваш🌮 \n\n /salad салат🥗\n\n\n/help возврат в главное меню'))
bot.command('pasta', (ctx) => ctx.replyWithPhoto({ source: '5.jpeg' }, { caption: "Паста стоимость 30.000-сум\n\n/eat НАЗАД\n\n/help возврат в главное меню" }))
bot.command('lavash', (ctx) => ctx.replyWithPhoto({ source: '6.jpg' }, { caption: "Лаваш стоимость 20.000-сум\n\n/eat НАЗАД\n\n/help возврат в главное меню" }))
bot.command('salad', (ctx) => ctx.replyWithPhoto({ source: '7.jpg' }, { caption: "Салат оливье cтоимость 18.000-сум\n\n/eat НАЗАД\n\n/help возврат в главное меню" }))
bot.command('furniture', (ctx) => ctx.reply('Выберите интерисующий вас товар:\n\n\n /table стол📇 \n\n/chair стул🪑\n\n /sofa диван🛋 \n\n\n/help возврат в главное меню'))
bot.command('table', (ctx) => ctx.replyWithPhoto({ source: '8.jpg' }, { caption: "Стол стоимость 500.000-сум\n\n/furniture НАЗАД\n\n/help возврат в главное меню" }))
bot.command('chair', (ctx) => ctx.replyWithPhoto({ source: '9.jpg' }, { caption: "Стул стоимость 150.000-сум\n\n/furniture НАЗАД\n\n/help возврат в главное меню" }))
bot.command('sofa', (ctx) => ctx.replyWithPhoto({ source: '11.jpg' }, { caption: "Диван стоимость 800.000-сум\n\n/furniture НАЗАД\n\n/help возврат в главное меню" }))
bot.hears(`on`, (ctx) => ctx.replyWithPhoto ({source: "1.jpg"}))

bot.hears('Главное меню', (ctx) => ctx.reply(`Выберите интерисующий вас продукт: \n\n\n /dish посуда\n\n/eat еда\n\n/furniture мебель\n\n /developer Создатель бота\n\n/version Версия бота`))

bot.on('sticker', (ctx) => ctx.replyWithPhoto ({ url: 'https://picsum.photos/400/500/?random' }))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.on('message',(ctx) => ctx.reply('Команда не найдена\n\nвоспользуйтесь командой /help чтобы узнать о существующих командах'))
bot.launch()
