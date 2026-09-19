import {useState} from 'react'

const Button = (props) => (
  <button onClick = {props.onClick}>{props.text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const RandomNumber = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const nextAnecdotes = () => {
    RandomNumber()
  }

  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const mostVotes = () => {
    let maxIndex = 0;
    for (let i = 1;i < votes.length;i++){
      if (votes[i] > votes[maxIndex]){
        maxIndex = i
      }
    }

    return maxIndex
  }

  return (
    <main>
      <div>
        <h1>{anecdotes[selected]}</h1>
        <p>has {votes[selected]} votes</p>
      </div>

      <div className="container">
        <Button onClick={vote} text="vote" />
        <Button onClick={nextAnecdotes} text="next anecdotes" />
      </div>

      <div>
        <h1>Anecdote with most votes </h1>
        <p>{anecdotes[mostVotes()]} has {votes[mostVotes()]}</p>
      </div>
    </main>
  )
}

export default App



// import { useState } from 'react'

// // 定义模版
// const Button = (props) => (
//   <button onClick = {props.onClick}>{props.text}</button>
// )

// const StatisticLine = (props) => (
//   <p>{props.text} {props.value}</p>
// )

// // 定义状态
// const Statistics = ({good,neutral,bad}) => {
//   // (
//   // good + neutral + bad === 0
//   // ? <p>No feedback given</p>
//   // : <div>
//   //     <StatisLine text='good' value={good} />
//   //     <StatisLine text='neutral' value={neutral} />
//   //     <StatisLine text='bad' value={bad} />
//   //   </div>
//   // )
  
//   if (good + neutral + bad === 0) {
//     return <p>No feedback given</p>
//   }

//   return (
//     <div>
//       <StatisticLine text='good' value={good} />
//       <StatisticLine text='neutral' value={neutral} />
//       <StatisticLine text='bad' value={bad} />
//       <StatisticLine text='active' value={good/(good + neutral + bad)} />
//     </div>
//   )
// }

// const App = () => {
//   const [good,setGood] = useState(0)
//   const [neutral,setNeutral] = useState(0)
//   const [bad,setBad] = useState(0)

// // 事件处理函数
//   const handleGood = () => {
//     setGood(good + 1)
//   }

//   const handleNeutral = () => {
//     setNeutral(neutral + 1)
//   }

//   const handleBad = () => {
//     setBad(bad + 1)
//   }

//   return (
//     <div>
//       <section>
//         <h1>give feedback</h1>
//         <Button onClick={handleGood} text='good' />
//         <Button onClick={handleNeutral} text='neutral' />
//         <Button onClick={handleBad} text='bad' />
//       </section>
      
//       <section>
//         <h1>Statistics</h1>
//         <Statistics good={good} neutral={neutral} bad={bad} />
//       </section>
//     </div>
//   )
// }

// export default App


// import { useState } from 'react'

// const Button = (props) => (
//   <button onClick={props.onClick}>
//     {props.text}
//   </button>
// )

// const StatisticLine = (props) => (
//   <p>{props.text} {props.value}</p>
// )

// const App = () => {
//   const [good,setGood] = useState(0)
//   const [neutral,setNeutral] = useState(0)
//   const [bad,setBad] = useState(0)

//   const Statistics = () => {
//     if (good + neutral + bad === 0) {
//       return <p className="empty-state">No feedback given</p>
//     }

//     return (
//       <div className="statistics-list">
//         <StatisticLine text="good" value={good} />
//         <StatisticLine text="neutral" value={neutral} />
//         <StatisticLine text="bad" value={bad} />
//         <StatisticLine text="active" value={good/(good + neutral + bad)} />
//       </div>
//     )
//   }

//   const handleGoodClick = () => {
//     setGood(good + 1)
//   }

//   const handleNeutralClick = () => {
//     setNeutral(neutral + 1)
//   }
    
//   const handleBadClick = () => {
//     setBad(bad + 1)
//   }

//   return (
//     <main>
//       <section>
//         <h1>give feedback</h1>
//         <div className="feedback-actions">
//           <Button onClick={handleGoodClick} text="good" />
//           <Button onClick={handleNeutralClick} text="neutral" />
//           <Button onClick={handleBadClick} text="bad" />
//         </div>
//       </section>

//       <section className="statistics">
//         <h1>statistics</h1>
//         {Statistics()}
//       </section>
//     </main>
//   )
// }

// export default App



// // const History = (props) => {
// //   if (props.allClicks.length === 0) {
// //     return (
// //       <div>
// //         the app is used by pressing the buttons
// //       </div>
// //     )
// //   }

// //   return (
// //     <div>
// //       button presss history: {props.allClicks.join(' ')}
// //     </div>
// //   )
// // }


// // const Button = (props) => (
// //   <button onClick={props.onClick}>
// //     {props.text}
// //   </button>
// // )
// // // 箭头函数隐式返回一个对象(表达式)时，需要在对象外面加上括号，否则会被解析为函数体而不是对象字面量。

// // const App = () => {
// //   const [value, setValue] = useState(10)
  
// //   const [left, setLeft] = useState(0)
// //   const [right, setRight] = useState(0)
// //   const [allClicks, setAll] = useState([])

// //   const setToValue = (newValue) => {
// //     console.log('value now', newValue)
// //     setValue(newValue)
// //   }

// //   const handleLeftClick = () => {
// //     setAll(allClicks.concat('L'))
// //     setLeft(left + 1)
// //   }

// //   const handleRightClick = () => {
// //     setAll(allClicks.concat('R'))
// //     setRight(right + 1)
// //   } 
  
// //   return (
// //     <div>
// //       {value}
// //       <Button onClick={() =>setToValue(1000)} text="thousand"/>
// //       <Button onClick={() => setToValue(0)} text="reset"/>
// //       <Button onClick={() => setToValue(value + 1)} text="increment"/>
// //     </div>
// //   ) // onClick 最终需要接收一个函数。如果写成函数调用，React 会先执行这个调用；如果调用的返回值恰好是一个函数，那么这个返回的函数仍然可以作为事件处理函数。
// // }
// // // const Display = ({counter}) => <div>{counter}</div>

// // // const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>

// // // const App = () => {
// // //   const [counter, setCounter] = useState(0)

// // //   console.log('rendering with counter value', counter)

// // //   const increaseByOne = () => {

// // //     console.log('increasing, value before', counter)
// // //     setCounter(counter + 1)
// // //   }

// // //   const decreaseByOne = () => { 

// // //     console.log('decreasing, value before', counter)
// // //     setCounter(counter - 1)
// // //   }

// // //   const setToZero = () => {

// // //     console.log('resetting to zero, value before', counter)
// // //     setCounter(0)
// // //   }

// // //   return (
// // //     <div>
// // //       <Display counter={counter} />
// // //       <Button onClick={increaseByOne} text="plus" />
// // //       <Button onClick={setToZero} text="zero" />
// // //       <Button onClick={decreaseByOne} text="minus" />
// // //     </div>
// // //   )
// // // } 

// // export default App
