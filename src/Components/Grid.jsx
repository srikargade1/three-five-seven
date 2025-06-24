export default function Grid({ state, onCircleClick }) {
  const half = Math.ceil(state.length / 2);
  const top = state.slice(0, half);
  const bottom = state.slice(half);

  const classMap = {
    active: "circle",     // yellow
    selected: "selected", // white
    locked: "taken"       // green
  };

  return (
    <div className="grid">
      <div className="grid-top">
        {top.map((status, i) => (
          <button
            key={i}
            className={classMap[status]}
            onClick={() => onCircleClick(i)}
          />
        ))}
      </div>
      <div className="grid-bottom">
        {bottom.map((status, i) => (
          <button
            key={i + half}
            className={classMap[status]}
            onClick={() => onCircleClick(i + half)}
          />
        ))}
      </div>
    </div>
  );
}

