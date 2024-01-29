import React from 'react';
import DashBoardStyle from './DashBoard.css'
import AccountList from './AccountList';
import {getAccountList} from "../api/accountApi"

const DashBoard = () => {

    const onClick = (e) => {
            e.currentTarget.classList.toggle("active")
        
            document.querySelectorAll(".dbContent").forEach(el => {
                if (el.style.maxHeight){
                    el.style.maxHeight = null;
                  } else {
                    el.style.maxHeight = el.scrollHeight + "px";
                  } 
            })
    }

    getAccountList().then(
        account => {
            console.log(account)
        }
    )
    
    return (

        <div className='border-2 border-gray-700 rounded-xl px-3 py-1 my-1 mx-1'>
                <div className="dbSummury" onClick={onClick}>타이틀</div>
                <AccountList />
                <AccountList />
        </div>
    );
};

export default DashBoard;