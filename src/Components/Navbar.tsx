import { Menu } from "antd";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, useNavigate } from 'react-router-dom';
import "../Components/Navbar.css"
const Navbar: React.FC = () => {
    const navigate=useNavigate();
    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    const items = [
        'element1',
        'element2',
        'element3',
        'logout'
    ];

    return (
        <Menu mode="horizontal" className="custum-menu">
            {items.map((item, index) => (
                item === 'logout' ? (
                    <Menu.Item key={index} onClick={handleLogout}>{item}</Menu.Item>
                ) : (
                    <Menu.Item key={index}>{item}</Menu.Item>
                )
            ))}
        </Menu>
        
    );
}

export default Navbar;
