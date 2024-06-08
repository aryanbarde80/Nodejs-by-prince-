const express = require('express')
const app = express() // app is a notation we can use aryan, prince, etc.jjhj

// app is here instance/blueprint/naksa of expressjs.

app.get('/', function (req, res) {
  res.send('Welcome to my hotel... How can I help you ? , we have list of menus')
})
// req means request and res means response
// slash(/) is used then it will get us the message

/*app.listen(3000) //3000 is the port no.*/

//To run it ->>
// terminal ->> node server.js -<<- file is rinned
// browser adress bar ->> localhost:3000/ enter -<<- check this way

app.get('/chicken', (req, res) => {
    res.send('Sure sir , I would love to serve chicken')
  })

  // localhost:3000/chicken

  //try->> localhost:3000/idli

// whenever we make changes in server we need to restart it or re-run it. Thus its good to use nodemon here...

app.get('/idli', (req, res) => {
    var customized_idli = {
        name: 'rava idli',
        size: '10 cm diameter',
        is_sambhar: true,
        is_chutney: false
    }
    // res.send('Welcome to south india and would love to serve IDLI')
    res.send(customized_idli) //We need to give customized data to server to understand it
  })

  // ->> browser ->> localhost:3000/idli

  // localhost:3000/daal

 //app.listen(3000) 

 /*Now how to know server is live or not... */

 app.listen(3000, ()=>{
    console.log('listening on port 3000')
 })

 //to make server dead ctrl+c on terminal and now refresh on browser

/* Question:- We made changes in the file but why server is not running properly?

 Answer:- For this we have to save the file and re-run it, we have to re-run the server again when the code in the file changes...*/

