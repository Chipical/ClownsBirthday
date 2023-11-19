import React, { useState } from "react";
const BirthdayList = ({ birthdays }) => {
  const [filteredMonth, setFilteredMonth] = useState(null);

  const handleChange = (e) => {
    setFilteredMonth(e.target.value);
  };

  const filteredBirthdays = filteredMonth
    ? birthdays.filter(
        (birthday) => birthday.month === parseInt(filteredMonth, 10)
      )
    : birthdays;

  return (
    <div>
      <label className="monthFilter">
        Filter by Month:
        <select onChange={handleChange}>
          <option value="">All Months</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </label>
      <div className="bdaycontainer">
        {filteredBirthdays.map((birthday) => (
          <div className="bdaylist" key={birthday.id}>
            <img src={birthday.image} alt={birthday.name} className="bdayimg" />
            <div>{birthday.name}</div>
            <div>{birthday.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayList;
