import react from "react";
import BasicLayout from "../layout/BasicLayout";
import DashBoard from "../components/DashBoard";
import {getTest} from "../api/accountApi"
const ContentsPage = () => {
    getTest().then(
        data => {
            console.log(data);
        }
    );

    return (
        <BasicLayout>
            <DashBoard />
        </BasicLayout>
        
    )
}

export default ContentsPage;