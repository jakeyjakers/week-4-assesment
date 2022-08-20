const complimentBtn = document.getElementById("complimentButton")

const fortuneBtn = document.getElementById('fortune')

const ecouragementBtn = document.getElementById('encouragement')

const fruitBtn = document.getElementById('fruit')

const specsBtn = document.getElementById('specs')

const hobbyForm = document.getElementById('hobbies-form')

const addHobby = document.getElementById('add-hobby')

const nameOfHobbier = document.getElementById('hobby-name')

const hobbyBtn = document.getElementById('hobbies-btn')

// const addFortuneBtn = document.getElementById('add-fortune-btn')

// const addFortuneForm = document.getElementById('add-fortne-form')

// const addFortuneInput = document.getElementById('fortune-input')

const body = document.querySelector("body")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () =>{
    axios.get("http://localhost:4000/api/fortune/")
    .then((res) =>{

        ///ask jared why let {data} = res.data didn't work///
        let data = res.data
        console.log(data)
        const h4 = document.createElement('h4') 
        h4.textContent = data
        console.log(h4)
        body.appendChild(h4)
        
    })
}

fortuneBtn.addEventListener('click', getFortune)

const getEncouragement = () => {
    axios.get("http://localhost:4000/api/encouragement/")
    .then((res) =>{
        let data = res.data
        console.log(data)
        const h4 = document.createElement('h4')
        h4.textContent = data
        body.appendChild(h4)
        
        })
        .catch((error) => {
            console.log(error)
    })
}

ecouragementBtn.addEventListener('click', getEncouragement)

const getFruit = () => {
    axios.get("http://localhost:4000/api/fruit/")
    .then((res) =>{
        let data = res.data
        console.log(data)
        alert(`Here is your fruit: ${data}`)
    })
}

fruitBtn.addEventListener('click', getFruit)

const getSpecs = () => {
    axios.get("http://localhost:4000/api/specs/")
    .then((res) =>{
        let data = res.data
        console.log(data)
        alert(`Here is your spec: ${data}`)
    })
}

const addHobbies = (event) => {
    event.preventDefault()
    console.log("Is this working?")
    const body = {
        name: nameOfHobbier.value, 
        hobby: addHobby.value,
    }
    console.log(body)

    axios.post("http://localhost:4000/api/hobbies/", body)
    .then((res) => {
        let {name, hobby} = res.data
        console.log(name, hobby)
        const h4Name = document.createElement('h4')
        const newPara = document.createElement('p')
        h4Name.textContent = name
        newPara.textContent = hobby
        console.log(h4Name, newPara)
////// whoever grades this, I am not sure why these 2 variable will not append to the DOM
///It works on the other similar functions, and will even print to the console, but I can't seem
//// to get it to work. 
        body.appendChild(h4Name)
        body.appendChild(newPara)
        
        
    })
    .catch((error) =>{
        console.log(error)
    })
} 

hobbyBtn.addEventListener('click', addHobbies)

specsBtn.addEventListener('click', getSpecs)

// function submitHandler(event) {
//     event.preventDefault()

//     let  addFortuneInput = document.getElementById('fortune-input')

//     // let author = document.getElementById('author')

//     let bodyObj = {
        
//         fortune: addFortuneInput.value,

        
//     }

//     addFortune(bodyObj)

//     fortune.value = ''

    
// }

// const addFortune = () =>{
//     axios.post("http://localhost:4000/api/fortune", body)
//     .then((res) =>{
//         let data = res.data.fortune
//         console.log(data)
//         console.log(fortune)
//         alert(`${data}, has been added to the possible fortunes.`)
//     })
// }

// addFortuneBtn.addEventListener('submit', submitHandler)

