const Dice = ({ number }) => {
    return number ? (
      <img src={`dice-${number}.png`} alt={`Dice ${number}`} className="dice" />
    ) : null;
  };
  
  export default Dice;
  