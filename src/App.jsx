import React from "react";
import birthdays from "./data";
import BirthdayList from "./BirthdayList";

function App() {
  return (
    <main>
      <section className="container">
        <h1>Down To Clown Birthdays!</h1>
        <div>
          <BirthdayList birthdays={birthdays} />
        </div>
      </section>
    </main>
  );
}

export default App;
