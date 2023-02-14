import React from 'react';

class Carousel extends React.Component {

  state = {
    currentIndex: 0
  };

  handleNext = () => {
    const { children } = this.props;
    this.setState((currentState) => ({
      currentIndex: currentState.currentIndex === children.length - 1
        ? 0
        : currentState.currentIndex + 1
    }));
  };

  handlePreviuos = () => {
    const { children } = this.props;
    this.setState((currentState) => ({
      currentIndex: currentState.currentIndex === 0
        ? children.length - 1
        : currentState.currentIndex - 1
    }));
  };

  render() {
    const { children } = this.props;
    const { currentIndex } = this.state;

    return (
      <div class='row'>
        <div class='column left'>
          <button onClick={this.handlePreviuos}>Previuos</button>
        </div>

        <div class='column middle'>
          <p>{children[currentIndex]}</p>
          {currentIndex} - {children[currentIndex].props.name}
        </div>

        <div class='column right'>
          <button onClick={this.handleNext}>Next</button>
        </div>
      </div>
    );
  }
}

export default Carousel;