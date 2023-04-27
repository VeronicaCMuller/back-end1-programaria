const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333;

function mostrarMulher (request,response){
    response.json({ nome: "Giulia Bordignon",
    image: "https://media.licdn.com/dms/image/D4D03AQGGhkw_6vsqww/profile-displayphoto-shrink_800_800/0/1675271125950?e=1687996800&v=beta&t=EAxnyoltZY0rfQAVjWbz6Fsvle3ytfLR1VEkhLCAWNc",
    minibio: "Desenvolvedora Back-end, e criadora de conteúdo digital"
    })
}

function mostrarPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostrarMulher ))
app.listen(porta, mostrarPorta)