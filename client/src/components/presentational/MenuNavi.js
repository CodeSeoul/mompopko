import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// function MenuNavi({menuName}){
//     return (
//         <_menuNaviStyle>
//             <div><span className="Home">Home / </span>{menuName}</div>
//         </_menuNaviStyle>
//     )
// }
//https://github.com/Microsoft/TypeScript/issues/24249 (wonder why..) 
//todo thyun.ahn :: after find this answer delete comments. 

class MenuNavi extends Component {
    
    render(){
        return (
            <_thStyle>
                <div><span className="Home"><Link to="/">Home / </Link></span>{this.props.menuName}</div>
            </_thStyle>
            
        );
    }
}

const _thStyle = styled.div`
    div{
        font-size: 24px;   
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 300;
    }

    span{

        font-size: 0.75em;
        color: #000;
        
    }

    a{
        color: #777;
        text-decoration: none!important;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;



export default MenuNavi;