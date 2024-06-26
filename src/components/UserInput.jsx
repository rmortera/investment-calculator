function UserInput({ userInput, onChangeInput }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userInput;

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label> Initial Investment </label>
          <input
            type="number"
            required
            value={initialInvestment}
            onChange={(e) => onChangeInput("initialInvestment", e.target.value)}
          />
        </p>

        <p>
          <label> Annual Investment </label>
          <input
            type="number"
            required
            value={annualInvestment}
            onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label> Expected Return </label>
          <input
            type="number"
            required
            value={expectedReturn}
            onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
          />
        </p>

        <p>
          <label> Duration </label>
          <input
            type="number"
            required
            value={duration}
            onChange={(e) => onChangeInput("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
