const questionNum = document.getElementById("order")
const questionNode = document.getElementById("question")
const ans1 = document.getElementById("ans1")
const answ1 = document.getElementById("answ1")
const answer1 = document.getElementById("answer1")
const ans2 = document.getElementById("ans2")
const answ2 = document.getElementById("answ2")
const answer2 = document.getElementById("answer2")
const ans3 = document.getElementById("ans3")
const answ3 = document.getElementById("answ3")
const answer3 = document.getElementById("answer3")
const allAns = document.getElementById("allAns")
const yes = document.getElementById("yes")
const no = document.getElementById("no")
const btnNode = document.getElementById("btn")
const result = document.getElementById("res")
const start = document.getElementById("start")
const end = document.getElementById("end")
const summary = document.getElementById("summary")
const radioButtons = document.querySelectorAll('input[name="ans"]');
const cheet = document.getElementById('cheetlist')
const activate = document.getElementById('activate')




const questions = [
    {
        question: "Название этой нелетающей птицы из Австралии состоит из двух нот. О какой птице идёт речь?",
        answers: ["Фифи", "Додо", "Мими"],
        correctAns: "2"
    },

    {
        question: "Где впервые появился аккордеон?",
        answers: ["В Загребe", "В Праге", "В Берлинe"],
        correctAns: "2"
    },
    
    {
        question: "С латинского языка название этого инструмента переводится как «дуновение». О каком инструменте идёт речь?",
        answers: ["Пианино", "Гитара", "Флейта"],
        correctAns: "3"
    },

    {
        question: "Из какого вечнозеленого дерева делают пианино и скрипки?",
        answers: ["Сосна", "Ель", "Берёза"],
        correctAns: "2"
    },
    
    {
        question: "Ф. Лист называл этот музыкальный инструмент «королем всех инструментов». О каком инструменте идёт речь?",
        answers: ["Рояль", "Дудка", "Скрипка"],
        correctAns: "1"
    },

    {
        question: "Какая страна первой запустила спутник?",
        answers: ["Америка", "Китай", "СССР"],
        correctAns: "3"
    },

    {
        question: "Как называется ближайшая к Солнцу планета?",
        answers: ["Меркурий", "Уран", "Венера"],
        correctAns: "1"
    },

    {
        question: "Какие планеты солнечной системы вращаются в направлении, противоположном Земле?",
        answers: ["Нептун и Марс", "Венера и Уран", "Луна и Нептун"],
        correctAns: "2"
    },

    {
        question: "Кто из футболистов утверждал, что \"играть надо ногами, а думать – головой\"?",
        answers: ["Месси", "Пеле", "Рональдиньо"],
        correctAns: "2"
    },

    {
        question: "Что такое \"удар в молоко\"?",
        answers: ["Удар во вратаря", "Удар в штангу", "Удар сильно выше ворот"],
        correctAns: "3"
    },

    {
        question: "Сколько очков получает команда за победу, а сколько за ничью в групповых этапах футбольных чемпионатов?",
        answers: ["3 и 1", "2 и 5", "3 и 7"],
        correctAns: "1"
    },

    {
        question: "Чем кроме флагов часто размахивают болельщики на трибунах?",
        answers: ["Майки", "Шарфы", "Перчатки"],
        correctAns: "2"
    },

    {
        question: "Из какого числа геометрических фигур состоит поверхность футбольного мяча?",
        answers: ["12 пятиугольников и 20 шестиугольников", "30 пятиугольников и 45 четырехугольников", "60 треугольников"],
        correctAns: "1"
    },

    {
        question: "Какая жидкость самая легкая?",
        answers: ["Углерод", "Кислород", "Сжиженный водород"],
        correctAns: "3"
    },

    {
        question: "Какое поле появляется вокруг любого предмета?",
        answers: ["Ядерное", "Магнитное", "Гравитационное"],
        correctAns: "3"
    }
]



let count = 0
let correct = 0


btnNode.addEventListener("click", ()=>{
    if (count===0){
        start.style.display="none"
        allAns.style.display="flex"
        btnNode.innerHTML="Ответить"
        questionNum.innerHTML = `Вопрос ${count+1}:`
        questionNode.innerHTML = questions[count].question
        ans1.innerHTML = questions[count].answers[0]
        ans2.innerHTML = questions[count].answers[1]
        ans3.innerHTML = questions[count].answers[2]
        count++
    } else if (allAns.style.display==="none" && count <= questions.length){
        yes.style.display="none"
        no.style.display="none"
        if (count!==questions.length){
            allAns.style.display="flex"
            btnNode.innerHTML="Ответить"
            questionNum.innerHTML = `Вопрос ${count+1}:`
                questionNode.innerHTML = questions[count].question
                ans1.innerHTML = questions[count].answers[0]
                ans2.innerHTML = questions[count].answers[1]
                ans3.innerHTML = questions[count].answers[2]
        } else{
            questionNum.innerHTML = "Конец!"
            questionNode.innerHTML = ""
            allAns.style.display = "none"
            summary.style.display = "block"
            if (correct>=0 && correct<=4){
                result.innerHTML = "К сожалению, это очень слабо("
            } else if (correct<=7){
                result.innerHTML = "Продолжайте практиковаться!"
            } else if (correct<=11){
                result.innerHTML = "Хороший показатель!"
            } else if (correct<=14){
                result.innerHTML = "Отлично!"
            } else {
                result.innerHTML = "У Вас лучший резкльтат! Поздравляем!"
            }
            end.innerHTML = `Ваш результат: ${correct}`
            btnNode.innerHTML = "Начать заново"
            count++
        }
            count++
    } else if (count <= questions.length){
        let variant;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    variant = radioButton.value;
                    radioButton.checked=false
                    break;
                }
            }
        if (variant){
            allAns.style.display="none"
            btnNode.innerHTML="Продолжить"
            if (variant === questions[count-1].correctAns){
                correct++
                yes.style.display="block"
            } else {
                no.style.display="block"
            }
        }
    } else {
        location.reload()
    }
})

answer1.addEventListener("click", ()=>{
    answ1.checked=true
})
answer2.addEventListener("click", ()=>{
    answ2.checked=true
})
answer3.addEventListener("click", ()=>{
    answ3.checked=true
})

activate.addEventListener("click", ()=>{
    if (cheet.style.display === 'block'){
        cheet.style.display = 'none'
    } else {
        cheet.style.display = 'block'
    }

})