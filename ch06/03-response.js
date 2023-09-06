const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

// the following is needed to use views
//it can also be done using 
//cosnt t =  exphbs.create({defaultLayout:'main'})
//app.engine('handlebars' , t.engine)
app.engine('handlebars', exphbs.create({ defaultLayout: 'main' }).engine)
app.set('view engine', 'handlebars')


app.get('/about', (req, res) => {
  res.render('about')
})

app.get('*', (req, res) => res.send('Click here "<a href="/about">About</a>" page!'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}/about\n`))
