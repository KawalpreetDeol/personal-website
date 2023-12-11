// Skills.js
import React from 'react';
import WordCloud from 'react-wordcloud';
import "d3-transition";
import { select } from "d3-selection";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const Skills = ({ skills }) => {
  const wordcloudOptions = {
    fontFamily: 'Arial, sans-serif',
    fontSizes: [20, 60],
    fontWeight: 'bold',
    rotations: 1,
    rotationAngles: [0]
  };

  const getCallback = (callback) => {
    return function (word, event) {
      const isActive = callback !== "onWordMouseOut";
      const element = event.target;
      const text = select(element);
      word.fontSize = word.fontSize ? word.fontSize : `${word.size*.95}px`;
      text
        .transition()
        .attr("background", "white")
        .attr("font-size", isActive ? "200%" : word.fontSize);
    };
  }
  const callbacks = {
    getwordColor: (word) => (word.value > 50 ? "orange" : "purple"),
    getWordTooltip: (word) => `${word.fullForm}`,
    onWordMouseOver: getCallback("onWordMouseOver"),
    onWordMouseOut: getCallback("onWordMouseOut")
  }

  return <WordCloud words={skills} callbacks={callbacks} options={wordcloudOptions} style={{maxWidth: '100vw', maxHeight: '100vh'}}/>;
};

export default Skills;