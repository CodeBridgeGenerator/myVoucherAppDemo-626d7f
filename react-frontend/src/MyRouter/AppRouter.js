import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

import SingleUserDetailsPage from "../components/app_components/UserDetailsPage/SingleUserDetailsPage";
import UserDetailProjectLayoutPage from "../components/app_components/UserDetailsPage/UserDetailProjectLayoutPage";
import SingleVoucherDetailsPage from "../components/app_components/VoucherDetailsPage/SingleVoucherDetailsPage";
import VoucherDetailProjectLayoutPage from "../components/app_components/VoucherDetailsPage/VoucherDetailProjectLayoutPage";
//  ~cb-add-import~

const AppRouter = () => {
    return (
        <Routes>
            {/* ~cb-add-unprotected-route~ */}
<Route path="/userDetails/:singleUserDetailsId" exact element={<SingleUserDetailsPage />} />
<Route path="/userDetails" exact element={<UserDetailProjectLayoutPage />} />
<Route path="/voucherDetails/:singleVoucherDetailsId" exact element={<SingleVoucherDetailsPage />} />
<Route path="/voucherDetails" exact element={<VoucherDetailProjectLayoutPage />} />
            <Route element={<ProtectedRoute redirectPath={'/login'} />}>{/* ~cb-add-protected-route~ */}</Route>
        </Routes>
    );
};

const mapState = (state) => {
    const { isLoggedIn } = state.auth;
    return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(AppRouter);
