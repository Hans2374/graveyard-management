import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { KeyboardArrowRight as KeyboardArrowRightIcon } from "@mui/icons-material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Box,
  IconButton,
  TextField,
  Typography,
  Button,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LinkIcon from "@mui/icons-material/Link";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function createData(
  stt,
  madon,
  trangthai,
  phancong,
  ngaytao,
  thanhtoan,
  khachhang,
  tongtien
) {
  return {
    stt,
    madon,
    trangthai,
    phancong,
    ngaytao,
    thanhtoan,
    khachhang,
    tongtien,
  };
}

const rows = [
  createData(
    1,
    "BRY6573VT",
    "Đang thực hiện",
    "STAFF01",
    "01/07/2024\n7:00",
    "Đã thanh toán",
    "CUSTOMER01",
    1500000
  ),
  createData(
    2,
    "BRY6573VT",
    "Chưa phân công",
    "Chưa phân công",
    "10/06/2024\n14:30",
    "Chưa thanh toán",
    "CUSTOMER22",
    1500000
  ),
  createData(
    3,
    "BRY6573VT",
    "Yêu cầu hủy",
    "Chưa phân công",
    "09/09/2024\n8:00",
    "Chưa thanh toán",
    "CUSTOMER2",
    1500000
  ),
];

export default function ServiceListTable() {
  const [page, setPage] = React.useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = React.useState(5); // Items per page
  const [open, setOpen] = React.useState(false); // Dialog open state
  const [selectedRow, setSelectedRow] = React.useState(null); // Selected order details
  const [selectedYear, setSelectedYear] = React.useState("2024"); // Default selected year
  const [anchorEl, setAnchorEl] = React.useState(null); // Menu anchor
  const [value, setValue] = React.useState(0);
  const [reportText, setReportText] = React.useState("");

  const handleTextChange = (e) => {
    if (e.target.value.length <= 1000) {
      // Limit to 1000 characters
      setReportText(e.target.value);
    }
  };

  const [items, setItems] = React.useState([
    { id: 1, name: "Vật dụng a", quantity: 1 },
    { id: 2, name: "Vật dụng b", quantity: 14 },
    { id: 3, name: "Vật dụng c", quantity: 3 },
  ]);

  // Thêm vật dụng mới
  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1,
      name: `Vật dụng ${String.fromCharCode(97 + items.length)}`,
      quantity: 1,
    };
    setItems([...items, newItem]);
  };

  // Xóa vật dụng
  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Thay đổi số lượng
  const handleQuantityChange = (id, newQuantity) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Thay đổi tên vật dụng
  const handleNameChange = (id, newName) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Real date values to display in tabs
  const realDates = [
    "th6, 01/07",
    "th3, 01/08",
    "th5, 01/09",
    "th5, 01/10",
    "th4, 01/11",
    "th2, 01/12",
    "th2, 05/01",
    "th6, 14/02",
    "th3, 07/03",
    "th5, 21/04",
    "th7, 12/05",
    "CN, 25/06",
    "th4, 16/07",
    "th5, 03/08",
    "th3, 29/09",
    "th2, 18/10",
    "th6, 10/11",
    "th5, 23/12",
    "th3, 11/02",
    "th4, 28/03",
    "CN, 06/04",
    "th7, 19/05",
  ];

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when rows per page changes
  };

  // Handle open dialog
  const handleOpenDialog = (row) => {
    setSelectedRow(row); // Set the selected row data
    setOpen(true); // Open the dialog
  };

  // Handle close dialog
  const handleCloseDialog = () => {
    setOpen(false); // Close the dialog
    setSelectedRow(null); // Reset selected row
  };

  // Handle dropdown menu opening
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget); // Set anchor for menu
  };

  // Handle menu close
  const handleCloseMenu = () => {
    setAnchorEl(null); // Close menu
  };

  // Handle year change
  const handleYearChange = (year) => {
    setSelectedYear(year); // Update selected year
    handleCloseMenu(); // Close the menu after selecting
  };

  return (
    <Box sx={{ position: "relative", width: "1080px" }}>
      <TableContainer
        component={Paper}
        sx={{ width: "1200px", maxWidth: "100%", height: "360px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  p: 1,
                  borderRight: "1px solid #ddd",
                }}
              >
                STT
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  p: 1,
                  borderRight: "1px solid #ddd",
                }}
              >
                Mã đơn
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  fontWeight: "bold",
                  p: 1,
                  borderRight: "1px solid #ddd",
                }}
              >
                Trạng thái
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  p: 1,
                  borderRight: "1px solid #ddd",
                }}
              >
                Phân công
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  p: 1,
                  borderRight: "1px solid #ddd",
                }}
              >
                Ngày tạo
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  p: 1,
                  borderRight: "1px solid #ddd",
                }}
              >
                Thanh toán
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  fontWeight: "bold",
                  p: 1,
                  borderRight: "1px solid #ddd",
                }}
              >
                Khách hàng
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  p: 1,
                  borderRight: "1px solid #ddd",
                }}
              >
                Tổng tiền
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={`${row.stt}-${row.madon}`}
                  sx={{ borderBottom: "1px solid #ddd" }}
                >
                  <TableCell
                    align="center"
                    scope="row"
                    sx={{ borderRight: "1px solid #ddd", p: "5px" }}
                  >
                    {row.stt}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      p: "5px",
                      "&:hover": {
                        color: "blue",
                        cursor: "pointer",
                        textDecoration: "underline",
                      },
                    }}
                    onClick={() => handleOpenDialog(row)}
                  >
                    {row.madon}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ borderRight: "1px solid #ddd", p: "5px" }}
                  >
                    {row.trangthai}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ borderRight: "1px solid #ddd", p: "5px" }}
                  >
                    {row.phancong}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ borderRight: "1px solid #ddd", p: "5px", whiteSpace: "pre-wrap" }}
                  >
                    {row.ngaytao}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "1px solid #ddd", p: "5px" }}
                  >
                    {row.thanhtoan}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      borderRight: "1px solid #ddd",
                      p: "5px",
                    }}
                  >
                    {row.khachhang}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd", p: "5px"
                    }}
                  >
                    {row.tongtien}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Table Pagination */}
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5]}
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          paddingRight: "16px",
        }}
      />

      {/* Dialog for showing order details */}
      <Dialog
        open={open}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleCloseDialog(); // Only close dialog when the reason is not backdrop click
          }
        }}
        maxWidth="lg" // Optional: Adjust the maximum width
        fullWidth // Makes the dialog take up full width
        PaperProps={{
          sx: {
            height: "100vh", // Full viewport height
            maxHeight: "100vh", // Prevents the dialog from exceeding viewport height
            display: "flex", // Ensures flex behavior for the content
            flexDirection: "column", // Arrange content vertically
            width: "970px",
          },
        }}
      >
        <DialogTitle
          sx={{
            backgroundColor: "var(--primary-color)",
            fontWeight: "bold",
            textAlign: "center",
            color: "white"
          }}
        >
          Báo Cáo Đơn Hàng
        </DialogTitle>
        <DialogContent>
          {selectedRow && (
            <div>
              <Box sx={{ width: "100%", p: "0px 24px" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Nội dung công việc chung của dịch vụ:
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Ghi chú đặc biệt:
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                {/* Year selection */}
                <Box
                  sx={{ display: "flex", alignItems: "center", mt: 3, mb: -1 }}
                >
                  <span>Năm {selectedYear}</span>
                  <IconButton onClick={handleOpenMenu}>
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </Box>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                >
                  <MenuItem onClick={() => handleYearChange("2022")}>
                    2022
                  </MenuItem>
                  <MenuItem onClick={() => handleYearChange("2023")}>
                    2023
                  </MenuItem>
                  <MenuItem onClick={() => handleYearChange("2024")}>
                    2024
                  </MenuItem>
                  <MenuItem onClick={() => handleYearChange("2025")}>
                    2025
                  </MenuItem>
                </Menu>
              </Box>
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable" // Allows scrolling for tabs
                  scrollButtons="auto" // Shows scroll buttons automatically
                  aria-label="scrollable tabs"
                  sx={{
                    width: "100%", // Ensures full-width for tabs container
                    "& .MuiTabs-flexContainer": {
                      // Target the flex container inside the Tabs
                      justifyContent: "space-around", // Space around each tab
                    },
                  }}
                >
                  {realDates.map((tab, index) => (
                    <Tab
                      label={tab}
                      key={index}
                      {...a11yProps(index)}
                      sx={{
                        minWidth: 0, // Ensure tabs can shrink
                        flexGrow: 1, // Make each tab grow equally
                        textAlign: "center", // Center-align the label text
                      }}
                    />
                  ))}
                </Tabs>

                {realDates.map((tab, index) => (
                  <TabPanel value={value} index={index} key={index}>
                    {/* Text and Filter Section */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        Vật dụng
                      </Typography>
                      <IconButton
                        aria-label="filter"
                        sx={{
                          marginRight: "450px",
                          border: "1px solid", // Adds a solid border
                          borderRadius: "8px", // Adds border radius
                          padding: "4px", // Optional: Adds padding for a more spacious look
                          borderColor: "gray", // Optional: Sets border color (customize as needed)
                        }}
                      >
                        <FilterListIcon />
                        <Typography sx={{ ml: 1 }}>Lọc vật dụng</Typography>
                      </IconButton>
                      <Typography sx={{ marginRight: "74px" }}>
                        Số lượng
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      {items.map((item) => (
                        <Box
                          key={item.id}
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          {/* TextField for item name (editable) */}
                          <TextField
                            value={item.name}
                            onChange={(e) =>
                              handleNameChange(item.id, e.target.value)
                            }
                            placeholder="Nhập tên vật dụng"
                            size="small"
                            sx={{ flexGrow: 1 }}
                          />
                          <IconButton
                            onClick={() =>
                              handleQuantityChange(
                                item.id,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                          >
                            -
                          </IconButton>
                          <TextField
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.id,
                                parseInt(e.target.value) || 1
                              )
                            }
                            size="small"
                            sx={{ width: "55px" }}
                            inputProps={{
                              min: 1,
                              style: { textAlign: "center" },
                              inputMode: "numeric", // Only allows numeric input
                              pattern: "[0-9]*", // Restricts input to digits
                            }}
                            // CSS to hide arrows in number input (spinner)
                            InputProps={{
                              inputProps: {
                                style: {
                                  MozAppearance: "textfield", // Removes spinner in Firefox
                                  WebkitAppearance: "none", // Removes spinner in Chrome
                                  appearance: "textfield", // General removal of spinner
                                },
                              },
                            }}
                          />
                          <IconButton
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </IconButton>
                          <IconButton
                            onClick={() => handleRemoveItem(item.id)}
                            aria-label="delete"
                            color="error"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      ))}
                      <Button
                        variant="outlined"
                        onClick={handleAddItem}
                        startIcon={<AddIcon />}
                      >
                        Thêm vật dụng
                      </Button>
                    </Box>
                  </TabPanel>
                ))}
              </Box>
              <Box sx={{ width: "100%", p: 2 }}>
                <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                  Báo cáo công việc
                </Typography>

                {/* Grouped box for icons and text field */}
                <Box sx={{ bgcolor: "#f5f5f5", p: 2, borderRadius: 2 }}>
                  {/* Icons for formatting */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <IconButton aria-label="bold">
                      <FormatBoldIcon />
                    </IconButton>
                    <IconButton aria-label="italic">
                      <FormatItalicIcon />
                    </IconButton>
                    <IconButton aria-label="underline">
                      <FormatUnderlinedIcon />
                    </IconButton>
                    <IconButton aria-label="add image">
                      <InsertPhotoIcon />
                    </IconButton>
                    <IconButton aria-label="add link">
                      <LinkIcon />
                    </IconButton>
                  </Box>

                  {/* Report Text Field */}
                  <TextField
                    value={reportText}
                    onChange={handleTextChange}
                    multiline
                    rows={10} // Adjust this value based on how large you want the text area
                    placeholder="Nhập báo cáo công việc..."
                    fullWidth
                    variant="outlined"
                    inputProps={{
                      maxLength: 1000, // Limit the input to 1000 characters
                    }}
                    helperText={`${reportText.length}/1000 ký tự`}
                  />
                </Box>
              </Box>
            </div>
          )}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={handleCloseDialog}
              sx={{
                backgroundColor: "var(--primary-color)",
                color: "black",
                borderRadius: "10px",
                padding: "5px 100px 5px 100px",
                textTransform: "none",
                margin: "0 15px",
              }}
            >
              Lưu
            </Button>
            <Button
              onClick={handleCloseDialog}
              sx={{
                backgroundColor: "var(--primary-color)",
                color: "black",
                borderRadius: "10px",
                padding: "5px 100px 5px 100px",
                margin: "0 15px",
                textTransform: "none",
              }}
            >
              Đóng
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
