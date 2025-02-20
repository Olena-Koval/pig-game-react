import './App.css'
import { useState, useEffect } from 'react'
import Player from './components/Player'
import Dice from './components/Dice'

const App = () => {
  const [activePlayer, setActivePlayer] = useState(1)
  const [score, setScore] = useState([0, 0])
  const [current, setCurrent] = useState(0)
  const [diceNumber, setDiceNumber] = useState(0)

  // Función para manejar el lanzamiento de los dados
  const handleRollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    setDiceNumber(randomNumber)
  }

  // Función para manejar el hold y cambiar el puntaje
  const handleHold = () => {
    const newScore = [...score]
    newScore[activePlayer - 1] += current
    setScore(newScore)

    // Cambiar de jugador
    setActivePlayer(activePlayer === 1 ? 2 : 1)
    setCurrent(0)
  }

  // Función para reiniciar el juego
  const handleNewGame = () => {
    setActivePlayer(1)
    setScore([0, 0])
    setCurrent(0)
    setDiceNumber(0)
  }

  // Lógica para manejar el cambio de jugador dependiendo del dado
  useEffect(() => {
    if (diceNumber === 1) {
      setActivePlayer((prev) => (prev === 1 ? 2 : 1))
      setCurrent(0)
    } else {
      setCurrent((prev) => prev + diceNumber)
    }
  }, [diceNumber])

  return (
    <main>
      {/* Componente Player para los jugadores */}
      <Player
        name="Player 1"
        score={score[0]}
        current={activePlayer === 1 ? current : 0}
        isActive={activePlayer === 1}
      />
      <Player
        name="Player 2"
        score={score[1]}
        current={activePlayer === 2 ? current : 0}
        isActive={activePlayer === 2}
      />

      {/* Mostrar el dado si se ha lanzado */}
      {diceNumber && (
        <Dice number={diceNumber} />
      )}

      {/* Botones para controlar el juego */}
      <button className="btn btn--new" onClick={handleNewGame}>
        🔄 New Game
      </button>
      <button className="btn btn--roll" onClick={handleRollDice}>
        🎲 Roll Dice
      </button>
      <button className="btn btn--hold" onClick={handleHold}>
        📥 Hold
      </button>
    </main>
  )
}

export default App
