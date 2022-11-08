const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')


const jeopardyCategories = [
    {
        genre: "Avengers",
        questions: [
            {
                trivia: 'Where is Captain America from?',
                answers: ['Brooklyn', 'Queens'],
                correct: 'Brooklyn',
                difficulty: 'noob',
            },
            {
                trivia: 'What is the Name of Thors hamer?',
                answers: ['Jonathon', 'Mjolnir'],
                correct: 'Mjolnir', 
                difficulty: 'easy',
            },
            {
              trivia: 'What is the name of the AI Tony Stark invented to replace J.A.R.V.I.S?',
                answers: ['T.U.E.S.D.A.Y.', 'F.R.I.D.A.Y.'],
                correct: 'F.R.I.D.A.Y.',
                difficulty: 'fan',
            },
            {
                trivia: 'The Flerkens are a race of extremely dangerous aliens that resemble __',
                answers: ['Humans', 'Cats'],
                correct: 'Cats',
                difficulty: 'pro',
            },
        
        ],
    },
    {
        genre: 'MARVEL',
        questions: [
            {
                trivia: 'What  is the first Marvel movei to earn $1 Billion?',
                answers: ['The Avengers', 'The Avengers Endgame'],
                correct: 'The Avengers',
                difficulty: 'noob',
            },
            {
                trivia: 'There is a frog with the power of Thor',
                answers:['True', 'False'],
                correct: 'True',
                difficulty:'easy',
            },
            {
              trivia: 'Who Tried to buy Marvel Comics in the 90s?',
              answers:  ['Michael Jackson', 'Clint Eastwood'],
              correct: 'Michael Jackson',
              difficulty: 'fan',
            },
            {
            trivia: 'Marvel Originally was named ___',
            answers: ['Timely Comics', 'Ditco Comics'],
            correct: 'Timely Comics',
            difficulty: 'pro',
            },
        ],
    },
    {
        genre: 'Disney+',
        questions: [
            {
                trivia: 'After Loki Disappears from 2012 in Endgame, where does he end up?',
                answers: ['Mongolia', 'China'],
                correct:'Mongolia',
                difficulty: 'noob',
            },
            {
                trivia: 'What Egyptian God does Moon Knight Serve?',
                answers: ['Konshu', 'Horus'],
                correct: 'Konshu',
                difficulty: 'easy'
            },
            {
                trivia: 'What play did Hawkeye watch with his family?',
                answers: ['Rogers The Musical', 'The Wizard of Oz'],
                correct: 'Rogers The Musical',
                difficulty: 'fan',
            },
            {
                trivia: 'The First Episode of WandaVision was filmed in front of a Live Studio Audience',
                answers: ['True', 'False'],
                correct: 'True',
                difficulty: 'pro',
            },
        ],
    },
    {
        genre: 'Easter Eggs',
        questions: [
            {
                trivia: 'In Guardians of the Galaxy what character makes a quick cameo appearance?',
                answers: ['Cosmo the Dog', 'Mantis'],
                correct: 'Cosmo the Dog',
                difficulty: 'noob',
            },
            {
                trivia: 'Hawkeye assumes this identity after the events of Avengers Infinity War',
                answers: ['Ronin', 'Iron Fist'],
                correct: 'Ronin',
                difficulty: 'easy',
            },
            {
                trivia: 'In the MCU Spiderman is born on August 10th, why did they choose this date?',
                answers: ['First Comic Book Appearance', 'Tom Hollands Real Birthday'],
                correct: 'First Comic Book Appearance',
                difficulty: 'fan',
            },
            {
            trivia: 'The Infinity Gaunlet makes a stealth appearance in which marvel movie?',
            answers: ['Iron Man 3', 'Thor'],
            correct: 'Thor',
            difficulty: 'pro'
            },
        ]
    }
]

let score = 0

function addCategory(category) {
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = category.genre

    column.appendChild(genreTitle)
    game.append(column)

    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        if (question.difficulty === 'noob') {
            card.innerHTML = 200
        }
        if (question.difficulty === 'easy') {
            card.innerHTML = 400
        }
        if (question.difficulty === 'fan') {
            card.innerHTML = 600
        }
        if (question.difficulty === 'pro') {
            card.innerHTML = 800
        }

        card.setAttribute('data-question', question.trivia)
        card.setAttribute('data-answer-1', question.answers[0])
        card.setAttribute('data-answer-2', question.answers[1])
        card.setAttribute('data-correct', question.correct)
        card.setAttribute('data-value', card.getInnerHTML())

        card.addEventListener('click', flipCard)
    }) 

}

jeopardyCategories.forEach(category => addCategory(category))


function flipCard() {
    this.innerHTML = ""
    this.style.fontSize = "15px"
    this.style.lineHeight = "20px"
    this.style.position = "center"
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML = this.getAttribute('data-question')
    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')

    firstButton.classList.add('first-button')
    secondButton.classList.add('second-button')
    firstButton.innerHTML = this.getAttribute('data-answer-1')
    secondButton.innerHTML = this.getAttribute('data-answer-2')
    firstButton.addEventListener('click', getResult)
    secondButton.addEventListener('click', getResult)
    this.append(textDisplay, firstButton, secondButton)

    const allCards = Array.from(document.querySelector('.card'))
    allCards.forEach(card => card.removeEventListener('click', flipCard))
}



function getResult() {
   

    const cardOfButton = this.parentElement

    if (cardOfButton.getAttribute('data-correct') == this.innerHTML) {
        score = score + parseInt(cardOfButton.getAttribute('data-value'))
        scoreDisplay.innerHTML = score
        cardOfButton.classList.add('correct-answer')
        setTimeout(() => {
            while(cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')
        }, 100)
    } else {
        cardOfButton.classList.add('incorrect')
        setTimeout(() => {
            while(cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = 0
        }, 100)
    }
    cardOfButton.removeEventListener('click', flipCard)


}
