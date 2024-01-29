import React from 'react';
import AccountListStyle from './AccountList.css'

const AccountList = () => {
    return (
        <div className='flex accountList'>
            <div>계좌명</div>
            <div>계좌번호</div>
            <div>잔여금액</div>
            <div>증감</div>
            <button>수정</button>
        </div>
    );
};

export default AccountList;