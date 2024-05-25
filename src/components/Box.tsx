// import hoverSnd from '/src/assets/peanut_drop.mp3'
export const Box: React.FC = () => {
  const hoverSnd = new Audio("/src/assets/peanut_drop.mp3");
  return (
    <div className="box" onMouseEnter={() => hoverSnd.play()}>
      <p>In progress...</p>
    </div>
  );
};
