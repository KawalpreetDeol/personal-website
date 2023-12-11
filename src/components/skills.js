// Skills.js
import React from 'react';
import WordCloud from 'react-wordcloud';

const Skills = ({ skills }) => {
  const wordcloudOptions = {
    fontFamily: 'Arial, sans-serif',
    fontSizes: [20, 60],
    fontWeight: 'bold',
    rotations: 1,
    rotationAngles: [0],
  };
  const callbacks = {
    getwordColor: (word) => (word.value > 50 ? "orange" : "purple"),
    getWordTooltip: (word) => `${word.fullForm}`,
    // onWordMouseOver: (word) =>``,
    // onWordClick: (word) =>``
  }

  return <WordCloud words={skills} callbacks={callbacks} options={wordcloudOptions} style={{maxWidth: '100vw', maxHeight: '100vh'}}/>;
};

export default Skills;
