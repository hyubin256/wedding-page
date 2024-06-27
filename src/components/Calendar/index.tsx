// components/Calendar.js

import React from 'react';

const Calendar = () => {
  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const month = 7; // Tháng 7
  const year = 2024;
  const days = daysInMonth(month, year);

  const startDay = new Date(year, month - 1, 1).getDay();
  const weeks = [];

  let currentDay = 1 - startDay;

  for (let week = 0; week < 6; week++) {
    let weekDays = [];
    for (let day = 0; day < 7; day++) {
      if (currentDay > 0 && currentDay <= days) {
        weekDays.push(currentDay);
      } else {
        weekDays.push(null);
      }
      currentDay++;
    }
    weeks.push(weekDays);
  }

  const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  return (
    <div className="text-center max-w-[600px] mx-auto text-black border-[4px] py-3 lg:py-5 px-5 lg:px-20 border-black bg-blue">
      <h2 className="text-xl font-bold mb-4">Tháng 7 / 2024</h2>
      <div className="grid grid-cols-7 gap-1">
        {dayNames.map((dayName) => (
          <div key={dayName} className="font-semibold">
            {dayName}
          </div>
        ))}
        {weeks.map((week, index) => (
          <React.Fragment key={index}>
            {week.map((day, idx) => (
              <div
                key={idx}
                className={`p-2 ${day ? '' : ''} ${day === 13 ? 'font-bold rounded-full bg-pink' : ''
                  }`}
              >
                {day}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
