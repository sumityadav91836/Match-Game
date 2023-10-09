import './index.css'

const Navbar = props => {
  const {score, timer} = props

  return (
    <>
      <li className="nav-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="nav-logo-img"
        />
      </li>
      <li className="score-and-time-container">
        <p className="score-text">
          Score:<span>{score}</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="time-in-sec">{timer} sec</p>
        </div>
      </li>
    </>
  )
}

export default Navbar
