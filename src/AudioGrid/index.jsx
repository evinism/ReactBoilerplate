import React, {PropTypes} from 'react';

// The 'real' JS way is to not write any code no matter how easy it is to write yourself.
// So let's import it from a large functional library!
// (in all honesty I love this library and think coding like this is really effective)
import {times} from 'ramda';

// If I were to implement it, I'd separate out my Audio Engine
// import AudioEngine from './audioEngine'

class AudioGrid extends React.Component {
  constructor(props){
    super(props);
  }
  // Since this component has no state, it's called a "stateless" or "pure" component.
  // It corresponds to what people call a "dumb" view layer, aka, not mixing presentation
  // with state of the app. In an app where one uses redux or flux, all view layers are dumb
  // (with a little fudge factor. But don't tell the purists the fudge is there!)
  // state = {};
  
  //These are both builtin to react, you can guess sort of what they do. 
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
  }
  
  static defaultProps = {
    width: 10,
    height: 10
  };
  
  
  render() {
    // Because we wouldn't be "cool" if we didn't use the fancy destructuring syntax!
    let {width, height} = this.props;
    
    // Then again, we're not using curry() so how "cool" can we be?
    // (fun game: try to figure out how to surpress that 'unique key' warning we get in chrome's console)
    // (hint: your solution might actually end up currying one of those inner functions!)
    let row = times(() => (<span>[ ]</span>), width);
    let rows = times(() => (<div>{row}</div>), height);

    // Surprisingly, this isn't as bad performance-wise as you might suspect!
    // Because React does something called virtualizing the DOM, it doesn't
    // rerender every element on the page. Only the differing ones!
    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default AudioGrid;
