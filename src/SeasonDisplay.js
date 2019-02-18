import React from 'react';

const seasonConfig = {
  Summer: {
    seasonText: 'Let\'s hit the beach!',
    seasonIcon: 'sun'
  },
  Winter: {
    seasonText: 'Brrrr, it\'s chilly!',
    seasonIcon: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  } else {
    return lat > 0 ? 'Winter' : 'Summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {seasonText, seasonIcon} = seasonConfig[season]

  return(
    <div>
      <i className={`${seasonIcon} icon massive`} /> 
      <h1>{seasonText}</h1>
      <i className={`${seasonIcon} icon massive`} />
    </div>
  )

};

export default SeasonDisplay;