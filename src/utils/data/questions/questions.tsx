type ALLOWED_MOODS = "happy" | "ok" | "angry";

export interface Answer {
    id: number;
    text: string;
    moodEffect: ALLOWED_MOODS;
    bobAnswer: string;
    pointsToQuestion: number | null;
}

export interface Question {
    id: number;
    question: string;
    answers: Answer[];
}

type typeQuestions<T> = T[];

export const Questions: typeQuestions<Question> = [
{
id: 1,
question: 'Ei! Você finalmente chegou. O que achou do meu novo visual?',
answers: [
{
id: 1,
text: 'Você está incrível, Bob!',
moodEffect: 'happy',
bobAnswer: 'Sério? Ah, você sempre sabe como me deixar animado!',
pointsToQuestion: 2,
},
{
id: 2,
text: 'Está... aceitável.',
moodEffect: 'ok',
bobAnswer: 'É, eu imaginei que você diria algo morno assim.',
pointsToQuestion: 3,
},
{
id: 3,
text: 'Que coisa horrorosa é essa?',
moodEffect: 'angry',
bobAnswer: 'Nossa... Eu passei horas me arrumando. Grosso!',
pointsToQuestion: 4,
}
]
},

// CAMINHO HAPPY
{
id: 2,
question: 'Já que você gostou, quer ir tomar um sorvete para comemorar?',
answers: [
{
id: 4,
text: 'Com certeza, por minha conta!',
moodEffect: 'happy',
bobAnswer: 'VOCÊ É O MELHOR HUMANO DO MUNDO!',
pointsToQuestion: 5,
},
{
id: 5,
text: 'Só se for agora!',
moodEffect: 'happy',
bobAnswer: 'Então vamos nessa!',
pointsToQuestion: 5,
}
]
},

// HAPPY CONTINUA
{
id: 5,
question: 'O sorvete estava ótimo! Quer fazer outra coisa agora?',
answers: [
{
id: 10,
text: 'Vamos jogar videogame.',
moodEffect: 'happy',
bobAnswer: 'Finalmente alguém com bom gosto!',
pointsToQuestion: 6
},
{
id: 11,
text: 'Vou precisar ir embora.',
moodEffect: 'ok',
bobAnswer: 'Ah... já? Tudo bem, foi legal te ver.',
pointsToQuestion: null
}
]
},

{
id: 6,
question: 'Qual jogo você quer jogar?',
answers: [
{
id: 12,
text: 'Algo competitivo.',
moodEffect: 'happy',
bobAnswer: 'Prepare-se para perder!',
pointsToQuestion: null
},
{
id: 13,
text: 'Algo cooperativo.',
moodEffect: 'happy',
bobAnswer: 'Boa! Trabalho em equipe!',
pointsToQuestion: null
}
]
},

// CAMINHO OK
{
id: 3,
question: 'Você parece meio entediado. Quer fazer alguma coisa ou vai ficar aí parado?',
answers: [
{
id: 6,
text: 'Tanto faz, você escolhe.',
moodEffect: 'ok',
bobAnswer: 'Que animação, hein? Credo.',
pointsToQuestion: 7,
},
{
id: 7,
text: 'Desculpa, tive um dia longo. Vamos recomeçar?',
moodEffect: 'happy',
bobAnswer: 'Tudo bem, eu te perdoo.',
pointsToQuestion: 2,
}
]
},

{
id: 7,
question: 'Bom... eu estava pensando em ver um filme.',
answers: [
{
id: 14,
text: 'Pode ser.',
moodEffect: 'ok',
bobAnswer: 'Pelo menos você concordou com algo.',
pointsToQuestion: null
},
{
id: 15,
text: 'Filme é chato.',
moodEffect: 'angry',
bobAnswer: 'Você reclama de tudo!',
pointsToQuestion: 4
}
]
},

// CAMINHO ANGRY
{
id: 4,
question: 'Olha, se for pra me tratar assim, é melhor nem conversarmos!',
answers: [
{
id: 8,
text: 'Ótimo, eu já estava indo embora mesmo.',
moodEffect: 'angry',
bobAnswer: 'Pois vá! Não faça falta!',
pointsToQuestion: null,
},
{
id: 9,
text: 'Calma, Bob. Eu estava só brincando.',
moodEffect: 'ok',
bobAnswer: 'Suas brincadeiras têm um gosto bem duvidoso...',
pointsToQuestion: 8,
}
]
},

{
id: 8,
question: 'Tá... talvez eu tenha exagerado. Você ainda quer conversar?',
answers: [
{
id: 16,
text: 'Claro, vamos recomeçar.',
moodEffect: 'happy',
bobAnswer: 'Ok, mas dessa vez sem grosseria.',
pointsToQuestion: 2
},
{
id: 17,
text: 'Não muito.',
moodEffect: 'angry',
bobAnswer: 'Então acabou por aqui.',
pointsToQuestion: null
}
]
}
];