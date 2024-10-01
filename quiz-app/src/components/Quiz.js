import "../App.css"
import { Questions } from "../helpers/Questions"
import { useState } from "react"


function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen,setOptionChosen] = useState("");

    function chooseOption(option){
        setOptionChosen(option);
    }

    function nextQuestion(){
        if(Questions[currentQuestion].answer == optionChosen){
            console.log("correct")
        }
        else{
            console.log("incorrect")
        }

        setCurrentQuestion(currentQuestion + 1);

    }




    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="questions">
                <button onClick={() => {chooseOption("optionA")}}>{Questions[currentQuestion].optionA}</button>
                <button onClick={() => {chooseOption("optionB")}}>{Questions[currentQuestion].optionB}</button>
                <button onClick={() => {chooseOption("optionC")}}>{Questions[currentQuestion].optionC}</button>
                <button onClick={() => {chooseOption("optionD")}}>{Questions[currentQuestion].optionD}</button>
            </div>
            <button onClick={(nextQuestion)}>Next question</button>

        </div>
    )

}

export default Quiz;