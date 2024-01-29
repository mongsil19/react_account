import React from 'react';
import BasicLayout from '../layout/BasicLayout'
import {getAccountList} from "../api/accountApi"
import DashBoard from '../components/DashBoard';

const AccountPage = () => {
    getAccountList().then(
        account => {
            console.log(account)
        }
    )
    return (
        <BasicLayout>
            <DashBoard />
            <DashBoard />

        </BasicLayout>
    );
};

export default AccountPage;