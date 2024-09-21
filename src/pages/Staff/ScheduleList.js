import React from "react";
import { Box, IconButton, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import StaffDataTable from "../../components/StaffDataTable";

function ScheduleList() {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "white",
          marginTop: "50px",
          maxWidth: "100%",
          maxHeight: '605px'
        }}
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
            marginTop: "45px",
            height: "494px",
          }}
        >
          <StaffDataTable />
        </Box>
      </Box>
    </>
  );
}

export default ScheduleList;
