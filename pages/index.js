import logo from "../public/logo.svg";
import Image from "next/image";
const style = {
  height: "400px",
};
export default function Home() {
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  let dayBars = [];
  for (let day of days) {
    let height = { height: `${Math.floor(Math.random()*100) + 10}px` };
    dayBars.push(
      <div className="graph-day-section" key={day}>
        <div className="graph-bar" style={height}></div>
        <p className="graph-day-label">{day}</p>
      </div>
    );
  }
  return (
    <div className="container">
      <section className="balance-section">
        <div className="balance-title-wrapper">
          <p className="balance-section-title">My Balance</p>
          <h3 className="balance-amount">$921.48</h3>
        </div>
        <Image src={logo} alt="" />
      </section>

      <section className="spending-section">
        <h3 className="spending-section-title">Spending - Last 7 days</h3>
        <div className="graph-section">{dayBars}</div>
        <div className="section-line"></div>

        <div className="total-spending-section">
          <div className="total-spending-wrapper">
            <p className="total-spending-section-title">Total this month</p>
            <h2 className="total-spending-amount">$478.33</h2>
          </div>
          <div className="total-spending-wrapper">
            <p className="spending-change">+2.4%</p>
            <p className="total-spending-section-title">from last month</p>
          </div>
        </div>
      </section>
    </div>
  );
}
