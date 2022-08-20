const fortunes = ['You will cure cancer', 'You will go to the moon.', 'You will win the lottery.', 'Your happiness is right under your nose', 'Those with you are your closest allies.'] 

const encouragement = ['You\'ll get there, dont\'t worry.', 'Keep your head up', "This is your lifes dream, keep going",]


const fruits = ['apple', 'bannana', 'jackfruit', 'strawberry', 'pear']

const specs = ['webdev', 'cybersecurity', 'data-analytics', 'ux-design', 'ios-developement']

const hobbiesArr = [
    {
        hobby: 'climbing',
        name: 'Bob'
    },
    {
        hobby: 'Snowbaording',
        name: 'Laura'
    },
]


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
    },
    addHobbies: (req, res) =>{
        let {name, hobby} = req.body

        let newHobbiest = {
            name: name,
            hobby: hobby,
        }
        hobbiesArr.push(newHobbiest)
        console.log(hobbiesArr)
        res.status(200).send(newHobbiest)
        
    },
    
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