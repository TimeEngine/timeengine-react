/*global React timeengine __ Immutable __Element*/

//this file need to be transpiled to js
//npm test
(() => {
  'use strict';

  let React;
  let ReactDOM;
  let __;
  if (typeof module !== 'undefined' && module.exports) {
    React = require("react");
    ReactDOM = require("react-dom");
    __ = require("timeengine");
  } else {
    React = window.React;
    ReactDOM = window.ReactDOM;
    __ = window.__;
  }
  //***React state with life cycle is stateless sequence*****
  const __Element = (__seqEl, f = () => 0) => {

    class SeqComponent extends React.Component {
      constructor() {
        super();
        this.state = {
          seqEl: __seqEl.t
        };
        var timeseq = __seqEl.__((val) => {
          this.setState({
            seqEl: val
          });
          f(ReactDOM.findDOMNode(this).children[0]);
        });
      }
      componentWillUnmount() {
        __seqEl.done = 1;
      }
      render() {
        return (<span>{this.state.seqEl}</span>);
      };
    }
    return (<SeqComponent/>);
  };
  //------------------

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = __Element;
  } else {
    window.__Element = __Element;
  }

})();
