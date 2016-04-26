import React from 'react';

// PSA: This looks much more workable if you remove all the comments.

// This is what REACT looks like!
// A react component has two kinds of variables: props and state.
// Props are things passed down from the parent element. Like nameOfFriend!
// State is kind of like an internal variable. You set it yourself!

class App extends React.Component {
  // you probably know what this does
  constructor(props){
    super(props);
  }

  // Some people try to tell you that state is bad, and to use things like flux or redux instead
  // You COULD do that, but when it comes down to it, we're casual and that's way overkill.
  state = {numOfClicks: 0};
  
  // You'll notice _handleClick declared a little differently than the render or constructor things
  // That's because of something called binding. Basically if you don't declare it 
  // using the () => {} notation, the 'this' variable isn't set to the component itself. Javascript!
  // This isn't the case for the react functions, like constructor or render, because they
  // do the binding for you!
  _handleClick = () => {
    this.setState({numOfClicks: this.state.numOfClicks + 1 })
  };

  // React calls this every time (props) or (state) are updated.
  // This has your fancy html. It kind of speaks for itself. This is one of the many "lifetime" 
  // functions react provides. Don't worry too much about it. When you need something, you'll either
  // ask me or google it. 
  render() {
    return(
      <article onClick={this._handleClick.bind(this)}>
        <h1>Hi, {this.props.nameOfFriend}</h1>
        <h2>You have clicked this text this many times: {this.state.numOfClicks}</h2>
      </article>
    );
  }
}

export default App;