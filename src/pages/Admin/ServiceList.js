import React, { useState } from "react";
import { Box, TextField, IconButton, InputAdornment, ThemeProvider, createTheme} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import styles from "./Service.module.css";
import ServiceListTable from "../../components/TableData/ServiceListTable";

function ServiceList() {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderTab = (label, tabKey) => (
    <li className={styles.li}>
      <a
        className={styles.a}
        onClick={() => handleTabClick(tabKey)}
        style={{
          color: selectedTab === tabKey ? "black" : "grey",
        }}
      >
        {label}
      </a>
    </li>
  );

  const theme = createTheme({
    components: {
        MuiBox: {
            styleOverrides: {
                noScroll: {
                    overflow: 'hidden',
                    height: '200px',
                    width: '300px',
                    border: '1px solid black',
                    padding: '16px',
                    position: 'relative',
                    backgroundColor: '#f5f5f5',
                },
            },
        },
    },
});

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          marginTop: "54px",
          backgroundColor: "white",
          maxWidth: "100%",
          display: "flex",
        }}
      >
        <ul className={styles.ul}>
          {renderTab("Tất cả đơn hàng", "allOrders")}
          {renderTab("Chưa phân công", "unassigned")}
          {renderTab("Đã phân công", "assigned")}
          {renderTab("Đang thực hiện", "inProgress")}
          {renderTab("Hoàn thành", "completed")}
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
          }}
        >
          <ServiceListTable />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ServiceList;
