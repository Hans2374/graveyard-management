import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from ".";
import { ToastContainer } from "react-toastify";

//import file js (element), cẩn thận nhầm viết hoa với ko viết hoa nha ; )
import { CustomerProfile } from "./pages/Customer/CustomerProfile";

export default function AppRoute() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <ToastContainer />
            <Routes>

                {/* routes   cẩn thận nhầm viết hoa với ko viết hoa nha ; )  */}
                <Route path={routes.customerProfile} element={<CustomerProfile />} />

            </Routes>
        </Box>
    );
}


// nếu thêm id: <Route path={`${routes.customerProfile}}/:id`} element={<CustomerProfile />} />

// gắn link trong các trang khác: <Link to={routes.customerProfile}/> ai làm trang nào nhớ tự sửa nha ;v

