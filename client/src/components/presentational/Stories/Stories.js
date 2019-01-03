import React, { Component } from "react";
import Story from "../Story/Story";

class Stories extends Component {
  render() {
    const { stories } = this.props;

    const levelStories = level => {
      return stories
        .filter(story => {
          return story.level === level;
        })
        .map((story, index) => {
          return <Story className="story-card" story={story} />;
        });
    };

    return (
      <div className="container">
        <h2>Level 3</h2>
        <section className="grid-container level3">{levelStories(3)}</section>
        <h2>Level 2</h2>
        <section className="grid-container level2">{levelStories(2)}</section>
        <h2>Level 1</h2>
        <section className="grid-container level1">{levelStories(1)}</section>
      </div>
    );
  }
}

export default Stories;
