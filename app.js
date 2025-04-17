// importo express
const express = require('express')
const app = express();

// definisco il numero di port
const port = 3000;

// importo il router
const postsRouter = require('./routers/posts.js')
app.use('/posts', postsRouter)

// importo la cartella public, che contiene file statici
app.use(express.static('public'));

// rotta base 
app.get('/', (req, res)=>{
    res.send('server del mio blog')
})

// imposto il server a rimanere sulla porta 3000
app.listen(port,()=>{
    console.log(port);
});  