function ClockDate() {
  const date = new Date();
  const options = { year: "numeric", month: "short", day: "numeric" };
  return (
    <div className="clock__date">
      <span>{date.toLocaleDateString("en-gb", options)}</span>
    </div>
  );
}

export default ClockDate;
