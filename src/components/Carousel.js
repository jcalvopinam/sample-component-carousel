import React, {useState} from 'react';

const Carousel = (props) => {

  const {children} = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (currentIndex, children) => {
    if (currentIndex === children.length - 1)
      setCurrentIndex(0)
    else
      setCurrentIndex(currentIndex + 1);
  };

  const handlePrevious = (currentIndex, children) => {
    if (currentIndex === 0)
      setCurrentIndex(children.length - 1)
    else
      setCurrentIndex(currentIndex - 1);
  };

  return (
      <div className='row'>
        <div className='column left'>
          <button onClick={() => handlePrevious(currentIndex, children)}>Previous</button>
        </div>

        <div className='column middle'>
          {children[currentIndex]}
          <br/> <br/>
          {currentIndex} - {children[currentIndex].props.name}
        </div>

        <div className='column right'>
          <button onClick={() => handleNext(currentIndex, children)}>Next</button>
        </div>
      </div>
  );
}

export default Carousel;