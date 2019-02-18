import React from 'react';


const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  } else {
    return lat > 0 ? 'Winter' : 'Summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const seasonText = season === 'Winter' ? 'Brrr, it\'s chilly!' : 'Let\'s hit the beach!'

  return(
    <h1>{seasonText}</h1>
  )

};

export default SeasonDisplay;