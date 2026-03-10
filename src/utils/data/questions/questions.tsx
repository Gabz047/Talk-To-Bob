type ALLOWED_MOODS = "happy" | "ok" | "angry";

export interface Answer {
    id: number;
    text: string;
    moodEffect: ALLOWED_MOODS;
    bobAnswer: string;
    pointsToQuestion: number | null; // null pode ser o fim do jogo
}

export interface Question {
    id: number;
    question: string;
    answers: Answer[];
}

// Usando o seu tipo genérico adaptado
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
                pointsToQuestion: 2, // Vai para o caminho da amizade
            },
            {
                id: 2,
                text: 'Está... aceitável.',
                moodEffect: 'ok',
                bobAnswer: 'É, eu imaginei que você diria algo morno assim.',
                pointsToQuestion: 3, // Vai para o caminho neutro/irritado
            },
            {
                id: 3,
                text: 'Que coisa horrorosa é essa?',
                moodEffect: 'angry',
                bobAnswer: 'Nossa... Eu passei horas me arrumando. Grosso!',
                pointsToQuestion: 4, // Vai para o caminho da briga
            }
        ]
    },
    // CAMINHO HAPPY (ID 2)
    {
        id: 2,
        question: 'Já que você gostou, quer ir tomar um sorvete para comemorar?',
        answers: [
            {
                id: 4,
                text: 'Com certeza, por minha conta!',
                moodEffect: 'happy',
                bobAnswer: 'VOCÊ É O MELHOR HUMANO DO MUNDO!',
                pointsToQuestion: null,
            },
            {
                id: 5,
                text: 'Só se for agora!',
                moodEffect: 'happy',
                bobAnswer: 'Então vamos nessa!',
                pointsToQuestion: null,
            }
        ]
    },
    // CAMINHO OK / NEUTRO (ID 3)
    {
        id: 3,
        question: 'Você parece meio entediado. Quer fazer alguma coisa ou vai ficar aí parado?',
        answers: [
            {
                id: 6,
                text: 'Tanto faz, você escolhe.',
                moodEffect: 'ok',
                bobAnswer: 'Que animação, hein? Credo.',
                pointsToQuestion: 4,
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
    // CAMINHO ANGRY (ID 4)
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
                pointsToQuestion: 3,
            }
        ]
    }
];