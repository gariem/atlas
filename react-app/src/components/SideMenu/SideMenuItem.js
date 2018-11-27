import React from 'react';
import {Link} from 'react-router-dom';

class SideMenuItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            subItems: false,
            active: false,
            pathname: this.props.location.pathname,
            subItemActive: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let newState;
        let pathname = this.state.pathname;
        let state = this.state;

        if (this.props.item.submenu && this.props.item.submenu.length > 0) {
            newState = Object.assign({}, state, {subItems: true})
        }

        if (this.props.item.submenu) {
            this.props.item.submenu.forEach(function (subItem) {
                if (subItem.link === pathname) {
                    newState = Object.assign({}, state, newState, {active: true, subItemActive: true})
                }
            });
        } else {
            if (this.props.item.link === pathname) {
                newState = Object.assign({}, state, newState, {active: true, subItemActive: false})
            }
        }
        this.setState(newState);

    }

    handleClick(path, level) {
        if (!this.state.subItems) {
            window.location.href = path;
        } else {
            if (level === 1) {
                this.setState({active: !this.state.active});
            }
        }
    }


    render() {
        let item = this.props.item;
        let subMenuClass = this.state.subItems ? 'has_submenu' : '';
        let activeClass = this.state.active ? 'section_active' : '';
        let subMenuVisible = this.state.active ? {display: 'block'} : {};
        return (
            <li key={item.id} className={`first_level ${subMenuClass} ${activeClass}`}>
                <div>
                    <div onClick={() => this.handleClick(item.link, 1)}
                         className={`side_menu_active principal ${activeClass}`}>
                        <span className={item.icon}></span>
                        <span className="menu-title"> {item.title}</span>
                    </div>
                    {!item.submenu ? '' :
                        <ul style={subMenuVisible}>
                            <li className="submenu-title">{item.submenu_title}</li>
                            {item.submenu.map((subItem, i) => (
                                    <li key={i}>
                                        <Link onClick={() => this.handleClick(subItem.link, 2)} className="submenu-link"
                                              to={subItem.link}>{subItem.title}</Link>
                                    </li>
                                )
                            )}
                        </ul>
                    }
                </div>
            </li>
        )
    }
}

export default SideMenuItem;
