import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuNaviStyle from "../../styles/container/MenuNaviStyle/MenuNaviStyle";

class MenuNavi extends Component {
    
    render(){
        return (
            <MenuNaviStyle>
                <div><span className="Home"><Link to="/">Home / </Link></span>{this.props.menuName}</div>
            </MenuNaviStyle>
            
        );
    }
}
export default MenuNavi;