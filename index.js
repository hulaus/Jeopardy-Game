const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre: "Avengers",
        questions: [
            {
                question: 'Where is Captain America from?',
                answers: ['Brooklyn', 'Queens'],
                correct: 'Brooklyn',
                difficulty: '200',
            },
            {
                question: 'What is the Name of Thors hamer?',
                answers: ['Jonathon', 'Mjolnir'],
                correct: 'Mjolnir', 
                difficulty: '400',
            },
            {
              question: 'What is the name of the AI Tony Stark invented to replace J.A.R.V.I.S?',
                answers: ['T.U.E.S.D.A.Y.', 'F.R.I.D.A.Y.'],
                correct: 'F.R.I.D.A.Y.',
                difficulty: '600',
            },
            {
                question: 'The Flerkens are a race of extremely dangerous aliens that resemble __',
                answers: ['Humans', 'Cats'],
                correct: 'Cats',
                difficulty: '800',
            },
        
        ],
    },
    {
        genre: 'MARVEL',
        questions: [
            {
                question: 'What  is the first Marvel movei to earn $1 Billion?',
                answers: ['The Avengers', 'The Avengers Endgame'],
                correct: 'The Avengers',
                difficulty: '200',
            },
            {
                question: 'There is a frog with the power of Thor',
                answers:['True', 'False'],
                correct: 'True',
                difficulty:'400',
            },
            {
              question: 'Who Tried to buy Marvel Comics in the 90s?',
              answers:  ['Michael Jackson', 'Clint Eastwood'],
              correct: 'Michael Jackson',
              difficulty: '600',
            },
            {
            questions: 'Marvel Originally was named ___',
            answers: ['Timely Comics', 'Ditco Comics'],
            correct: 'Timely Comics',
            difficulty: '800',
            },
        ],
    },
    {
        genre: 'Disney Plus Shows',
        questions: [
            {
                question: 'After Loki Disappears from 2012 in Endgame, where does he end up?',
                answers: ['Mongolia', 'China'],
                correct:'Mongolia',
                difficulty: '200',
            },
            {
                question: 'What Egyptian God does Moon Knight Serve?',
                answers: ['Konshu', 'Horus'],
                correct: 'Konshu',
                difficulty: '400'
            },
            {
                question: 'What play did Hawkeye watch with his family?',
                answers: ['Rogers The Musical', 'The Wizard of Oz'],
                correct: 'Rogers The Musical',
                difficulty: '600',
            },
            {
                question: 'The First Episode of WandaVision was filmed in front of a Live Studio Audience',
                answers: ['True', 'False'],
                correct: 'True',
                difficulty: '800',
            },
        ],
    },
    {
        genre: 'Easter Eggs',
        questions: [
            {
                question: 'In Guardians of the Galaxy what character makes a quick cameo appearance?',
                answers: ['Cosmo the Dog', 'Mantis'],
                correct: 'Cosmo the Dog',
                difficulty: '200',
            },
            {
                question: 'Hawkeye assumes this identity after the events of Avengers Infinity War',
                answers: ['Ronin', 'Iron Fist'],
                correct: 'Ronin',
                difficulty: '400',
            },
            {
                question: 'In the MCU Spiderman is born on August 10th, why did they choose this date?',
                answers: ['First Comic Book Appearance', 'Tom Hollands Real Birthday'],
                correct: 'First Comic Book Appearance',
                difficulty: '600',
            },
            {
            question: 'The Infinity Gaunlet makes a stealth appearance in which marvel movie?',
            answers: ['Iron Man 3', 'Thor'],
            correct: 'Thor',
            difficulty: '800'
            },
        ]
    }
]

function addCategory(category) {
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerText = category.genre

    column.appendChild(genreTitle)
    game.append(column)

    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        if (question.difficulty == '200') {
            innerText = 200
        }
        if (question.difficulty == '400') {
            innerText = 400
        }
        if (question.difficulty == '600') {
            innerText = 600
        }
        if (question.difficulty == '800') {
            innerText = 800
        }

        card.setAttribute('data-question', question.question)
    }) 

}

jeopardyCategories.forEach(category => addCategory(category))