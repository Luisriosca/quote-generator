import { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox/QuoteBox';
import Quotes from './Quotes.json'



function App() {
  //*Código de javascript
  // console.log(Quotes.quotes[0])
  const generateRandomNumber = () => {
    const randNum = Math.ceil(Math.random() * 101);
    // console.log(randNum)
    return randNum
  }

  //*Uso de un estado para cambiar el indice del quote

  const [indexQuote, changeIndexQuote] = useState(generateRandomNumber());

  //!----------------------------------------------------
  const handleIndex = () => {
    changeIndexQuote(() => generateRandomNumber());
  }


  return (
    <div className="App">
      <QuoteBox quote={Quotes.quotes[indexQuote].quote} author={Quotes.quotes[indexQuote].author} handle={handleIndex}/>
    </div>
  );
}

export default App;
