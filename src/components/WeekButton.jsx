import React from 'react';

const WeekButton = ({ week, selectedWeek, onSelectWeek }) => (
  <button
    className={`week-button ${selectedWeek === week ? 'selected' : ''}`}
    onClick={() => onSelectWeek(week)}
  >
    {week}
  </button>
);

export default WeekButton;
