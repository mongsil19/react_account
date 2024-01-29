import React from 'react';
import BasicMenuStyle from './BasicMenu.css'

const BasicMenu = () => {
    return (
        <div id="menu" className='font-bold'>
            <ul className=''>
                <li><a href="#">Asset</a>
                    <ul>
                        <li><a href='/account/test'>Status Board</a></li>
                        <li><a href='/account/list'>Management</a></li>
                    </ul>
                </li>
                <li><a href="#">MENU2</a>
                    <ul>
                        <li><a href='#'>SUB1-1</a></li>
                        <li><a href='#'>SUB1-2</a></li>
                        <li><a href='#'>SUB1-3</a></li>
                    </ul>
                </li>
                <li><a href="#">MENU3</a>
                    <ul>
                        <li><a href='#'>SUB1-1</a></li>
                        <li><a href='#'>SUB1-2</a></li>
                        <li><a href='#'>SUB1-3</a></li>
                    </ul>
                </li>
            </ul>
            
        </div>
    );
};

export default BasicMenu;