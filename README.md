# timeengine-react

<img src="http://timeengine.github.io/images/timeengine-logo.svg" width="200">


TimeEngine ( [timeengine](https://www.npmjs.com/package/timeengine) ) Extension for Stateless React programming without props and state

[david-dm-dev-image]:https://david-dm.org/kenokabe/timeengine/dev-status.svg

[https://www.npmjs.com/package/timeengine](https://www.npmjs.com/package/timeengine)

[https://www.npmjs.com/package/timeengine-react](https://www.npmjs.com/package/timeengine-react)

[https://github.com/TimeEngine/timeengine](https://github.com/TimeEngine/timeengine)

[https://github.com/TimeEngine/timeengine-react](https://github.com/TimeEngine/timeengine-react)

From version 5.0.0, the project repository has moved to the project page.

## See the Demo and Documentation of the project:

## [http://timeengine.github.io](http://timeengine.github.io)

# Before

[https://facebook.github.io/react/](https://facebook.github.io/react/)

### A Stateful Component

```js
var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});
```

# After

### A Stateless functional Element (Single statement code!!)

```js
// `.intervalSeq` is to map Immutable-js infinite Sequence
//                       on TimeEngine infinite Sequence
// map natural numbers sequence on intervalSeq(1000)
const TimerElement = () => __Element(__
    .intervalSeq(Immutable.Range(), 1000)
    .__((count) => (__.log.t = count)) //console.log
    .__((count) => (<div>{"Timer : "}{count}</div>)));
};
```

# Physics Equations
![](http://timeengine.github.io/images/formula.png)

```js
  const PhysicsElement = () => {
    //MKS system of units
    const V0 = 90.0; // m/s
    const DEG = 45; //degree
    const THETA = DEG / 180 * Math.PI; //radian
    const G = 9.8; //gravity const
    //t seconds elapsed 10msec time resolution
    const t = __
      .intervalSeq(Immutable.Range(), 10)
      .__((count) => (count * 10 / 1000));
    const x = __([t]).__(([t]) => V0 * Math.cos(THETA) * t);
    const y = __([t]).__(([t]) => V0 * Math.sin(THETA) * t - 1 / 2 * G * Math.pow(t, 2));
    //==================================
    const Drawscale = 1; //1 dot = 1 meter
    const __seqEl = __([x, y]) //atomic update
      .__(([x, y]) => (
      <div>
        <svg height = "250"  width = "100%">
            <circle r="2" fill="red"
        cx = {50 + x * Drawscale} cy = {250 - y * Drawscale}/>
        </svg>
      </div>));
    return __Element(__seqEl);
  };
```

See the live DEMO @
[http://timeengine.github.io](http://timeengine.github.io)
