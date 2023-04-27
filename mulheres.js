const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333;

const mulheres = [
    {
        nome: "Giulia Bordignon",
        image: "https://media.licdn.com/dms/image/D4D03AQGGhkw_6vsqww/profile-displayphoto-shrink_800_800/0/1675271125950?e=1687996800&v=beta&t=EAxnyoltZY0rfQAVjWbz6Fsvle3ytfLR1VEkhLCAWNc",
        minibio: "Desenvolvedora Back-end, e criadora de conteúdo digital"
    },
    {
        nome: "Simara Conceição",
        image: "https://media.licdn.com/dms/image/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_800_800/0/1563116714583?e=1687996800&v=beta&t=aTIGSJRaoe538gP-CvOaaAdwXqHOwGIyHo9w6r9hAtU",
        minibio: "Desenvolvedora FullStack e instrutora"
    },
    {
        nome: "Iana Chan",
        image: "https://media.licdn.com/dms/image/C4D03AQE-aD7nj2W_0Q/profile-displayphoto-shrink_800_800/0/1563383651406?e=1687996800&v=beta&t=f2NCre8pRfROBebkmW8CzzRKqwAHXygFHqMVwAk5bfs",
        minibio: "Fundadora da PrograMaria"
    }
]

function mostrarMulheres (request ,response){
    response.json(mulheres)
}

function mostrarPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostrarMulheres))
app.listen(porta, mostrarPorta)