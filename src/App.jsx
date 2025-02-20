import { useState, useEffect } from 'react';
import Player from './components/Player';
import Dice from './components/Dice';
import Button from './components/Button';
import './App.css';

const App = () => {
  const [activePlayer, setActivePlayer] = useState(1);
  const [score, setScore] = useState([0, 0]);
  const [current, setCurrent] = useState(0);
  const [diceNumber, setDiceNumber] = useState(0);

  const handleRollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);
  };

  useEffect(() => {
    if (diceNumber === 1) {
      setActivePlayer((prev) => (prev === 1 ? 2 : 1));
      setCurrent(0);
    } else {
      setCurrent((prev) => prev + diceNumber);
    }
  }, [diceNumber]);

  const handleHold = () => {
    const newScore = [...score];
    newScore[activePlayer - 1] += current;
    setScore(newScore);
    setActivePlayer(activePlayer === 1 ? 2 : 1);
    setCurrent(0);
  };

  const handleNewGame = () => {
    setActivePlayer(1);
    setScore([0, 0]);
    setCurrent(0);
    setDiceNumber(0);
  };

  return (
    <main>
      <Player name="Player 1" score={score[0]} current={activePlayer === 1 ? current : 0} isActive={activePlayer === 1} />
      <Player name="Player 2" score={score[1]} current={activePlayer === 2 ? current : 0} isActive={activePlayer === 2} />
      
      <Dice number={diceNumber} />

      <Button onClick={handleNewGame}>🔄 New Game</Button>
      <Button onClick={handleRollDice}>🎲 Roll Dice</Button>
      <Button onClick={handleHold}>📥 Hold</Button>
    </main>
  );
};

export default App;
