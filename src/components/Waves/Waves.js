import "./Waves.css";

export const Waves = () => {
  return (
    <div className="waves-container">
      <svg
        className="waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            // gold: 212, 175, 55,
            // silver: 192, 192, 192,
            fill="rgba(192, 192, 192, 0.6)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(192, 192, 192, 0.4)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(192, 192, 192, 0.2)"
          />
        </g>
      </svg>
    </div>
  );
};
