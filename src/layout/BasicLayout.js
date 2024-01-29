import React from "react";
import BasicMenu from "../components/BasicMenu";

const BasicLayout = ({children}) => {
    return (
        <React.Fragment>
            <header className='p-0 m-0'>
                <BasicMenu/>
            </header>
            <div className="bg-white w-full flex flex-row my-1">
                <main className="w-3/4 mr-1">
                    {children}
                </main>
                <aside className="bg-slate-500 w-1/4">
                    <div>
                    SideBar
                    </div>
                </aside>
            </div>

        </React.Fragment>
    )
}

export default BasicLayout;