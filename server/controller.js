const fortunes = ['You will cure cancer', 'You will go to the moon.', 'You will win the lottery.', 'Your happiness is right under your nose', 'Those with you are your closest allies.'] 

const encouragement = ['You\'ll get there, dont\'t worry.', 'Keep your head up', "This is your lifes dream, keep going", '']


const fruits = ['apple', 'bannana', 'jackfruit', 'strawberry', 'pear']

const specs = ['webdev', 'cybersecurity', 'data-analytics', 'ux-design', 'ios-developement']
// const fortunes = [

//     {
//         "fortune": 'You will cure cancer',
//         "id" : 1

//     },

//     {
//         "fortune": 'You will go to the moon.',
//         "id" : 2
//     },

//     {
//         "fortune" : 'Your happiness is right under your nose',
//         "id" : 3
//     },
//     {
//         "fortune" : 'You will win the lottery.',
//         "id" : 4
//     },
//     {
//         "fortune" : 'Those with you are your closest allies.',
//         "id" : 5
//     }

// ]

// let globalId = 6

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        
        res.status(200).send(randomFortune)
    },
    getEncouragement: (req, res) => {
        let randomIndex = Math.floor(Math.random() * encouragement.length)
        let randomEncouragement = encouragement[randomIndex]

        res.status(200).send(randomEncouragement)
    },

    getFruit: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fruits.length)
        let randomFruit = fruits[randomIndex]

        res.status(200).send(randomFruit)
    },
    getSpecs: (req, res) => {
        let randomIndex = Math.floor(Math.random() * specs.length)
        let randomSpecs = specs[randomIndex]

        res.status(200).send(randomSpecs)
    }
    
    // addFortune: (req, res) => {
    //     let {fortune} = req.body


    //     let newFortune = {
    //         id: globalId,
    //         fortune
    //     }
    //     fortunes.push(newFortune)
    //     res.status(200).send(newFortune.fortune)
    //     globalId++
    
    // }
    
}