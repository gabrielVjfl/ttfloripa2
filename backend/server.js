const port = 5800

let express = require('express')

const bodyparser = require('body-parser')

const app = express()

const cors = require('cors')

let leads = require('./mysql2')



app.use((req,res,next) => {
    // * permite tudo
  res.header('Access-Control-Allow-Origin', '*') // ou http://localhost:8080 ou o site .com.br

   res.header('Access-Control-Allow-Headers', 
       'Origin, X-Requested-With, Content-Type, Accept, Authorization')

      res.header('Access-Control-Allow-Methods', 'GET', 'PUT','POST','DELETE')

        app.use(cors())

        next()
})


app.use(express.static(__dirname + '/frontend'))

// BodyParser
app.use(bodyparser.urlencoded({
    extended: false,
}))


app.use(bodyparser.json())

// Flash





app.get('/home', (req,res) => {
           res.sendFile(__dirname + '/index.html')
})


app.post('/postar', (req,res) => {

    let err = {}

    if(!req.body.nome || typeof req.body.nome == undefined || typeof req.body.nome == null) {
        err.push({texto: "Não pode ficar vazio"})
    }

    if(!req.body.email || typeof req.body.email == undefined || typeof req.body.email == null) {
        err.push({texto: "Não pode ficar vazio"})
    }

    if(!req.body.telefone || typeof req.body.telefone == undefined || typeof req.body.telefone == null) {
        err.push({texto: "Não pode ficar vazio"})
    }

    if(req.body.nome.length < 3 ) {
        err.push({texto: 'Tem que ter mais de 3 caracteres!'})

    }

    if(req.body.email.length < 7 ) {
        err.push({texto: 'Tem que ter mais de 7 caracteres!'})
        
    }

    if(req.body.telefone.length < 9 ) {
        err.push({texto: 'Tem que ter mais de 9 números!'})
        
    }


    if(err.length > 0) { // se for maior que 0
        document.write('Não salvou os dados!')
    }
     // ver aquela coisa do email ja existente no mongo

    else {


    leads.create({
       nome: req.body.nome,
            email: req.body.email,
              telefone: req.body.telefone,
                 interesse1: req.body.interesse1,
                    interesse2: req.body.interesse2,
                           interesse3: req.body.interesse3,
                                   interesse4: req.body.interesse4,
                                           interesse5: req.body.interesse5
}).then(() => {
console.log('Sucesso')

}).catch((err) => {
console.log(err)

})
    }
})


    



app.listen(port, () => {
    console.log('rodando na porta', port)
})