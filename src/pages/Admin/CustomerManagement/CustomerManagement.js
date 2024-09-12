import React, { useState } from "react";
import {
  Typography,
  Box,
  IconButton,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import CustomerTable from "../../../components/TableData/CustomerTable";

function CustomerManagement() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          maxWidth: "100%",
          marginLeft: "50px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Tìm kiếm khách hàng"
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

        <Button
          variant="outlined"
          size="small"
          sx={{
            borderRadius: "20px",
            padding: "6px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            minWidth: "200px",
            borderColor: "rgba(0, 0, 0, 0.23)",
            color: "rgba(0, 0, 0, 0.87)",
            textTransform: "none",
            "&:hover": {
              borderColor: "rgba(0, 0, 0, 0.87)",
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          }}
          startIcon={<FilterListIcon />}
        >
          Thêm điều kiện lọc
        </Button>
      </Box>
      <Box
        sx={{
          maxWidth: "100%",
          marginLeft: "50px",
          marginTop: "50px",
        }}
      >
        <CustomerTable />
      </Box>
    </>
  );
}

export default CustomerManagement;
