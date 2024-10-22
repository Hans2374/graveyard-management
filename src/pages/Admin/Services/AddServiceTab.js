import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ServiceTable from "../../../components/TableData/ServiceTable";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function AddServiceTab() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

        <IconButton
          sx={{
            backgroundColor: "var(--primary-color)",
            position: "absolute",
            marginLeft: "1040px",
          }}
          onClick={handleClickOpen}
        >
          <AddIcon />
        </IconButton>

        <Dialog
          open={open}
          onClose={handleClose}
          sx={{
            backgroundColor: "var(--primary-color)",
            backdropFilter: "blur(5px)",
          }}
        >
          <DialogTitle
            sx={{
              backgroundColor: "var(--primary-color)",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Thông tin chi tiết
          </DialogTitle>
          <DialogContent sx={{ width: "400px" }}>
            <Typography sx={{ padding: "10px 10px 0 0" }}>
              Tên dịch vụ
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <ArrowDropDownIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography sx={{ padding: "10px 10px 0 0" }}>Mô tả</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  height: "200px",
                },
              }}
            />
            <Typography sx={{ padding: "10px 10px 0 0" }}>Hình ảnh</Typography>
            <Box
              sx={{
                maxWidth: "100%",
                marginLeft: "40px",
                marginRight: "40px",
                marginTop: "50px",
              }}
            >
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              sx={{
                backgroundColor: "var(--primary-color)",
                color: "black",
                borderRadius: "10px",
                padding: "5px 20px 5px 20px",
                textTransform: "none",
                left: "0px",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              Thêm
            </Button>

            <Button
              onClick={handleClose}
              sx={{
                backgroundColor: "var(--primary-color)",
                color: "black",
                borderRadius: "10px",
                padding: "5px 20px 5px 20px",
                textTransform: "none",
              }}
            >
              Đặt lại
            </Button>

            <Button
              onClick={handleClose}
              sx={{
                backgroundColor: "var(--primary-color)",
                color: "black",
                borderRadius: "10px",
                padding: "5px 20px 5px 20px",
                textTransform: "none",
              }}
            >
              Hủy
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box
        sx={{
          maxWidth: "100%",
          marginLeft: "50px",
          marginTop: "50px",
          height: "404px",
        }}
      >
        <ServiceTable />
      </Box>
    </>
  );
}

export default AddServiceTab;
