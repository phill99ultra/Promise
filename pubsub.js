const events = require('events');
const {EventEmitter} = require('events');
const d = new Date()
// console.log(events, EventEmitter)

// create my class what extends logic of EventEmitter
class NewsPublisher extends EventEmitter {
    constructor(name) {
        super() // initiem logica de baza prin constructor superior
        this.name = name
    }
}

const news_point = new NewsPublisher('Simpals Point Project');
// subscribe
news_point.on('sport', (data) => {
    console.log(`${data.title} ${data.datetime} ${data.author}`)
})
news_point.on('politic', (data) => {
    console.log(`${data.title} ${data.datetime} ${data.author}`)
})
// console.log(news_point)

// simulam aparitia evenimentelor
setTimeout(() => {
    news_point.emit('sport', 
    {title: 'Drugs detected in moldavian sportsmen', datetime: d, author: news_point.name})
}, 3000)
setTimeout(() => {
    news_point.emit('politic', 
    {title: 'New Elections expected', datetime: d, author: news_point.name})
}, 2000)
// published: date
setTimeout(() => {}, 24*60*60*6000)
// console.log(news_point)