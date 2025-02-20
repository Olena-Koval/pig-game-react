import './Player.css';

const Player = ({ name, score, current, isActive }) => {
  return (
    <div className={`player ${isActive ? 'active' : ''}`}>
      <h2>{name}</h2>
      <p className="score">Score: {score}</p>
      <p className="current">Current: {current}</p>
    </div>
  );
};

export default Player;
