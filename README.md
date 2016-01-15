# timeengine-react
TimeEngine Extension for Stateless React programming without props and state

See
[http://timeengine.github.io](http://timeengine.github.io)


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

### A Stateless functional Component (1 line code!!)

```js
// `immutableSeqMap` is to map Immutable-js infinite Sequence
//                          onto TimeEngine infinite Sequence
// map natural numbers sequence onto intervalSeq(1000)
const TimerComponent = () => {
  return __Component(__ //timeengine immutable instance
    .time(__.INTERVAL, 1000) //1000msec time resolution
    .immutableSeqMap(Immutable.Range()) //natural numbers
    .tMap((count) => (__.log.t = count)) //console.log
    .tMap((count) => (<div>Timer : {count}</div>)));
};
```

# Physics Equations
![](http://timeengine.github.io/images/formula.png)

```js
  const PhysicsComponent = () => {
  //-------Physics-------------------------------
  //MKS system of units
  const V0 = 85.0; // m/s
  const DEG = 40; //degree
  const THETA = DEG / 180 * Math.PI; //radian
  const G = 9.8; //gravity const

  //10msec time resolution
  //t seconds elapsed since t0
  const t = __.time(__.INTERVAL, 10).tMap((tt, t0) => (tt - t0) / 1000);
  const x = t.tMap((t) => V0 * Math.cos(THETA) * t);
  const y = t.tMap((t) => V0 * Math.sin(THETA) * t - 1 / 2 * G * Math.pow(t, 2));
  //==============================================================
  const Drawscale = 2; //2 dot = 1 meter
  const __seqEl = __([x, y]) //atomic update
    .tMap(([x, y]) => (
    <div>
      <svg height = "100%"  width = "100%">
          <circle r="3" fill="red"
      cx = {50 + x * Drawscale} cy = {500 - y * Drawscale}/>
      </svg>
    </div>));

  return __Component(__seqEl);
};

```

See the live DEMO @
[http://timeengine.github.io](http://timeengine.github.io)
