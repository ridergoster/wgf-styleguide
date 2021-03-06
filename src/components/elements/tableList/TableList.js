'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var TableList = React.createClass({
  displayName: 'TableList',
  propTypes: {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    className: PropTypes.string,
    /**
     * Define column separate with coma `10%;auto;20px`
     */
    colWidth: PropTypes.string
  },

  getInitialState: function() {
    return {
      colWidth: ''
    };
  },

  buildColGroup: function(colWidth) {
    var cols;
    if (!colWidth || !colWidth.length) {
      return null;
    }

    cols = colWidth.split(';').map(function(width) {
      return (
        <col width={width}/>
      );
    });

    return (
      <colgroup>
        {cols}
      </colgroup>
    );
  },

  render: function() {
    var classString = 'TableList';
    var {className, colWidth, ...other} = this.props;

    if (className) {
      classString += ' ' + className;
    }

    return (
      <table {...other} className={classString}>
        {this.buildColGroup(colWidth)}
        {this.props.children}
      </table>
    );
  }

});

module.exports = TableList;
