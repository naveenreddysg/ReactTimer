var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
    render: function (){
        return (
            <div className="top-bar">
                 <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Time App
                        </li>
                        <li>
                            <Link to="/timer" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</Link>
                        </li>
                        <li>
                            <Link to="/countdown" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>CountDown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="/" target="_blank"> Naveen</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Navigation;