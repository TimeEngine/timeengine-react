/*global React __ Immutable __Component*/
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
        var timeseq = __seqEl
          .tMap((val) => {
            this.setState({
              seqEl: val
            });
          });
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
