//DADOS 
const proffys = [
    {
        name: "Daniele F",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "7788888888", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Quimica",
        cost: "20,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Maria",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "7788888888", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Quimica",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Maria",
        avatar: "https://avatars2.githubusercontent.com/u/14251143?s=460&u=340ed1d854bbacc22b9a3210a18a1f589a28bc40&v=4", 
        whatsapp: "7788888888", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Quimica",
        cost: "20",
        weekday: [2],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matématica",
    "Portugues",
    "Quimica",
]

const weekdays = [
    "Domingo", 
    "Segunda-feira", 
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira", 
    "Sexta-feira",
    "Sabado",
]

//FUNCIONALIDADES
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}




function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    //ADICIONAR DADOS AO PROFFYS
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        
        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", { subjects, weekdays})
}

//SERVIDOR
const express = require('express')
const server = express()

//CONFIGURAÇÃO DO NUNJUCKS 
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server, 
    noCache: true,
})

server.use(express.static("public"))

//ROTAS DA APLICAÇÃO
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)