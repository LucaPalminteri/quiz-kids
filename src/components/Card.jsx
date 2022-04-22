import { useState, useEffect } from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'
import Data from '../data/data.json'
// https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple

function Card(props) {

    const [data,setData] = useState(Data.questions)
    const [api,setApi] = useState(false)
    const [random,setRandom] = useState(Math.floor(Math.random()*Data.questions.length))
    const [answer,setAnswer] = useState('')
    useEffect(()=>{
      },[])

    function toggle() {
        setAnswer('correct')
        reset()
    }

    function noToggle() {
        setAnswer('incorrect')
        reset()
    }

    function reset() {
        setTimeout(()=>{
            setRandom(Math.floor(Math.random()*50))
            setAnswer('')
        },2000)
    }

    const buttons = [
            <button key={nanoid()} onClick={noToggle}>{data[random].incorrect_answers[1]}</button>,
            <button key={nanoid()} onClick={noToggle}>{data[random].incorrect_answers[0]}</button>,
            <button key={nanoid()} onClick={toggle}>{data[random].correct_answer}</button>,
            <button key={nanoid()} onClick={noToggle}>{data[random].incorrect_answers[2]}</button>
    ].sort(() => (Math.random() > .5) ? 1 : -1);

  return (
    <>
    <div className="card">
      <h2>{data[random].category}</h2>
      <div className='card--badge'>
        <h3>{data[random].question}</h3>
        <div className='card--btns'>
            {buttons}
        </div>
      </div>
    </div>
    {answer === 'correct' ? 
    <div className='message green'>Correct</div> 
    : 
    answer === 'incorrect' ? 
    <>
    <div className='message'>Incorect - {data[random].correct_answer}</div> 
    </>
    : <></>}
    </>
  )
}

export default Card
