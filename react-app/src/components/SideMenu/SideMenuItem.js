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

        if (this.props.item.submenu && this.props.item.submenu.length > 0) {
            newState = {subItems: true};
        }

        if (this.props.item.submenu) {
            this.props.item.submenu.forEach(function (subitem) {
                if (subitem.link === pathname) {
                    newState = Object.assign({}, {active: true, subItemActive: true})
                }
            });
        } else {
            if (this.props.item.link === pathname) {
                newState = Object.assign({}, {active: true, subItemActive: false})
            }
        }
        console.log("newState: ", newState);
        this.setState(newState);

    }

    handleClick(path) {
        if (path && path.length > 0) {
            window.location.href = path;
        } else {
            this.setState({active: !this.state.active});
        }
    }


    render() {
        let item = this.props.item;
        let subMenuClass = this.state.subItems ? 'has_submenu' : '';
        let activeClass = this.state.active ? 'section_active' : '';
        let subMenuVisible = this.state.active ? {display: 'block'} : {};
        return (
            <li key={item.id} className={`first_level ${subMenuClass} ${activeClass}`}>
                <div onClick={() => this.handleClick(item.link)}>
                    <div className={`side_menu_active principal ${activeClass}`}>
                        <span className={item.icon}></span>
                        <span className="menu-title">{item.title}</span>
                    </div>
                    {!item.submenu ? '' :
                        <ul style={subMenuVisible}>
                            <li className="submenu-title">{item.submenu_title}</li>
                            {item.submenu.map((subItem, i) => (
                                    <li key={i}>
                                        <Link className="submenu-link" to={subItem.link}>{subItem.title}</Link>
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
