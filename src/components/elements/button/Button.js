var React = require('react');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;

var Button = React.createClass({
  displayName: 'Button',
  propTypes: {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ])
  },
  render: function() {
    var classString = 'Button';

    if (this.props.className) {
      classString += ' ' + this.props.className;
    }

    if (this.props.to) {
      return (
        <Link {...this.props} className={classString}>{this.props.children}</Link>
      );
    }

    if (this.props.href) {
      return (
        <a {...this.props} className={classString}>{this.props.children}</a>
      );
    }

    return (
      <button {...this.props} className={classString}>
        {this.props.children}
      </button>
    );
  }

});

module.exports = Button;