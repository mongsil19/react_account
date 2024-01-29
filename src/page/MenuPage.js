import React from 'react';
import MenuPageStyle from './MenuPage.css'

const MenuPage = () => {
    return (
        <div id="menu" className='font-bold'>
            <ul className=''>
                <li className='hover:bg-slate-400'><a href="#">Asset</a>
                    <ul>
                        <li><a href='#'>Status Board</a></li>
                        <li><a href='#'>Management</a></li>
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

export default MenuPage;