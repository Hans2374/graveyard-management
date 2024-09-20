import React from "react";
import {
    Box,
    IconButton,
    TextField,
    InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from '@mui/icons-material/FilterList';
import styles from "../Admin/Service.module.css"
import OrderListTable from "../../components/TableData/OrderListTable";
import { useState } from "react";

function StaffOrderList() {
    const [filter, setFilter] = useState("All");

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <>
            <Box
                sx={{
                    marginTop: "54px",
                    backgroundColor: "white",
                    maxWidth: "100%",
                    display: "flex",
                }}
            >
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <a
                            href="#home"
                            className={styles.a}
                            onClick={() => handleFilterChange("Tất cả")}
                        >
                            Tất cả đơn hàng
                        </a>
                    </li>
                    <li className={styles.li}>
                        <a
                            href="#news"
                            className={styles.a}
                            onClick={() => handleFilterChange("Chờ xử lý")}
                        >
                            Đang thực hiện
                        </a>
                    </li>
                    <li className={styles.li}>
                        <a
                            href="#contact"
                            className={styles.a}
                            onClick={() => handleFilterChange("Đã xử lý")}
                        >
                            Hoàn thành
                        </a>
                    </li>
                    <li className={styles.li}>
                        <a
                            href="#about"
                            className={styles.a}
                            onClick={() => handleFilterChange("Chưa thanh toán")}
                        >
                            Chưa thanh toán
                        </a>
                    </li>
                    <li className={styles.li}>
                        <a
                            href="#about"
                            className={styles.a}
                            onClick={() => handleFilterChange("Đã thanh toán")}
                        >
                            Đã thanh toán
                        </a>
                    </li>
                </ul>
            </Box>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, marginTop: "3px", backgroundColor: "white" }}
            >
                <Box
                    sx={{
                        display: "flex",
                        maxWidth: "100%",
                        marginLeft: "50px",
                    }}
                >
                    <TextField
                        variant="outlined"
                        placeholder="Tìm kiếm gói dịch vụ"
                        size="small"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "20px",
                                width: "500px",
                                margin: "0 20px 0 -0",
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        variant="outlined"
                        placeholder="Thêm điều kiện lọc"
                        size="small"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "20px",
                            },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton>
                                        <FilterListIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        maxWidth: "100%",
                        marginLeft: "50px",
                        marginTop: "50px",
                        height:"430px"
                    }}
                >
                    <OrderListTable filter={filter} />
                </Box>
            </Box>
        </>
    );
}

export default StaffOrderList;
