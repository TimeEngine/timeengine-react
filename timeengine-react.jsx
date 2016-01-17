/*global React __ Immutable __Component*/

//this file need to bre transpiled to js
//npm test
(() => {
  'use strict';

  //var React = require('react');
  //var __ = require('timeengine');

  //***React state with life cycle is stateless sequence*****
  const __Component = (__seqEl) => {

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
    module.exports = __Component;
  } else {
    window.__Component = __Component;
  }

})();
