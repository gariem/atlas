import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import Header from '../Header';
import './Layout.css';
import SideMenu from "../SideMenu";

const menuItems = [
    {
        id: 0,
        title: 'Home',
        icon: 'icon_house_alt first_level_icon',
        link: '/'
    },
    {
        id: 1,
        title: 'Models',
        icon: 'icon_lightbulb_alt first_level_icon',
        submenu_title: 'Models',
        submenu: [
            {title: 'CNNs', link: '#'},
            {title: 'LSTMs', link: '#'},
            {title: 'RNNs', link: '#'},
        ]
    },
    {
        id: 2,
        title: 'Tools',
        icon: 'icon_toolbox_alt first_level_icon',
        submenu_title: 'Image Tools',
        submenu: [
            {title: 'Simple tagging', link: '#'},
            {title: 'Patch generation', link: '#'},
            {title: 'Masks / Regions', link: '#'},
        ]
    },
    {
        id: 3,
        title: 'Catalogs',
        icon: 'icon_folder-alt first_level_icon',
        badge: true,
        submenu_title: 'Pages',
        submenu: [
            {title: 'Raw Catalogs', link: '/catalogs/raw'},
            {title: 'Refined Catalogs', link: '/catalogs/refined'}
        ]
    }];

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuExpanded: true
        }
        this.changeMenuSate = this.changeMenuSate.bind(this);
    }

    changeMenuSate() {
        this.setState({menuExpanded: !this.state.menuExpanded});
    }

    render() {
        let menu_expanded_class = this.state.menuExpanded ? "side_menu_expanded" : "side_menu_collapsed";
        return (
            <div className={`App side_menu_active ${menu_expanded_class}`}>
                <Header/>
                <SideMenu onToggle={this.changeMenuSate} expanded={this.state.menuExpanded}
                          items={menuItems} location={this.props.location}/>

                <div id="main_wrapper">
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

}

export default Layout;