import React from 'react';
import './Header.css';

export default ({black})=>{
    return(
        <header className={black ? 'black' : ''}>

            <div className="header--logo">
                <a href="/">
                    <img src="https://marcas-logos.net/wp-content/uploads/2019/11/Netflix-Logotipo.jpg" />
                    </a>
                </div>
            <div className="header--user">
            <a href="/">
                    <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"/>
                    </a>
                    </div>
        </header>
    )
}