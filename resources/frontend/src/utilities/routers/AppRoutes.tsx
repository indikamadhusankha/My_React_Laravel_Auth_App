import React from 'react';
import {Route, Routes} from "react-router";
import SignIn from "../../components/signIn/SignIn.tsx";

const AppRoutes: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<SignIn/>}/>
            </Routes>
        </div>
    );
};

export default AppRoutes;
