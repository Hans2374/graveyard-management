import * as React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Icon,
  Divider,
  Stack,
  MenuItem,
  Paper,
  Avatar,
} from "@mui/material";
import BarChart from "../../components/BarChart";
import PieChartComponent from "../../components/PieChart";
import styles from "./Service.module.css";
import BarChartComponent from "../../components/BarChart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import RefreshIcon from "@mui/icons-material/Refresh";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AddIcon from "@mui/icons-material/Add";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

const data = [
  { service: "Mai táng", sales: 220 },
  { service: "Cúng định kỳ", sales: 80 },
  { service: "An táng", sales: 200 },
  { service: "Bảo trì mộ", sales: 140 },
  { service: "Hỗ trợ tâm lý", sales: 10 },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  maxWidth: 750,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support.`;

const totalSales = data.reduce((acc, item) => acc + item.sales, 0);

function Dashboard() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          marginTop: "45px",
          maxWidth: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box className={styles.box}>
          <Typography color="textSecondary">NGÂN SÁCH</Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold", m: "10px 0 0 0" }}>
            $24B VND
          </Typography>
          <Typography sx={{ m: "10px 0 0 0" }}>
            <span style={{ color: "limegreen" }}>
              <ArrowUpwardIcon sx={{ fontSize: "15px" }} />
              12%
            </span>{" "}
            Kể từ tháng trước
          </Typography>
          <Box className={styles.icon_box}>
            <AttachMoneyIcon className={styles.icon} />
          </Box>
        </Box>

        <Box className={styles.box}>
          <Typography color="textSecondary">KHÁCH HÀNG</Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold", m: "10px 0 0 0" }}>
            1.6K
          </Typography>
          <Typography sx={{ m: "10px 0 0 0" }}>
            <span style={{ color: "red" }}>
              <ArrowDownwardIcon sx={{ fontSize: "15px" }} />
              16%
            </span>{" "}
            Kể từ tháng trước
          </Typography>
          <Box className={styles.icon_box}>
            <PeopleIcon className={styles.icon} />
          </Box>
        </Box>
        <Box className={styles.box}>
          <Typography color="textSecondary">TIẾN TRÌNH</Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold", m: "10px 0 0 0" }}>
            75.5%
          </Typography>
          <BorderLinearProgress
            variant="determinate"
            value={75.5}
            sx={{ height: "5px", m: "20px 0 0 0" }}
          />
          <Box className={styles.icon_box}>
            <FormatListBulletedIcon className={styles.icon} />
          </Box>
        </Box>
        <Box className={styles.box}>
          <Typography color="textSecondary">TỔNG LỢI NHUẬN</Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold", m: "10px 0 0 0" }}>
            $15B VND
          </Typography>
          <Box className={styles.icon_box}>
            <LocalAtmIcon className={styles.icon} />
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", width: "100%" }}>
        <Box
          sx={{
            m: "5px 10px 0 5px",
            backgroundColor: "white",
            border: "2px solid #EEEEEE",
            borderRadius: "15px",
            p: "10px",
            height: "545px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                textAlign: "start",
                m: "5px 0 0 20px",
                p: "10px",
                fontWeight: "bold",
              }}
              variant="h6"
            >
              Bán hàng
            </Typography>
            <Button
              sx={{
                p: "0 20px 0 20px",
                borderRadius: "20px",
                textTransform: "capitalize",
                color: "GrayText",
                boxSizing: "border-box",
                m: "15px 10px 0 0",
              }}
            >
              <RefreshIcon fontSize="small" sx={{ marginRight: "5px" }} />
              Đồng bộ
            </Button>
          </Box>
          <Box>
            <BarChartComponent />
          </Box>
          <Divider />
          <Box sx={{ textAlign: "end" }}>
            <Button
              sx={{
                m: "15px 10px 0 0",
                p: "0px 20px 0px 20px",
                borderRadius: "20px",
                textTransform: "capitalize",
                color: "GrayText",
                boxSizing: "border-box",
              }}
            >
              Tổng quan
              <ArrowForwardIcon fontSize="small" sx={{ marginLeft: "5px" }} />
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            m: "5px 0 0 5px",
            backgroundColor: "white",
            border: "2px solid #EEEEEE",
            borderRadius: "15px",
            p: "10px",
            width: "400px",
            height: "800px",
          }}
        >
          <Typography
            sx={{
              textAlign: "start",
              marginLeft: "25px",
              fontWeight: "bold",
              p: "10px 0 10px 0",
              marginTop: "5px",
            }}
            variant="h6"
          >
            Gói dịch vụ
          </Typography>

          <Box sx={{ textAlign: "start", marginLeft: "25px" }}>
            {data.map((item) => (
              <div key={item.service}>
                <Typography sx={{ m: "20px 0 0px 0", fontWeight: "550" }}>
                  {item.service}
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={(item.sales / totalSales) * 100} // Tính phần trăm
                  sx={{ width: "90%" }}
                />
              </div>
            ))}
          </Box>

          <Box sx={{ m: "50px 0 0 0" }}>
            <PieChartComponent />
          </Box>
        </Box>
        <Box
          sx={{
            m: "0px 0px 0 5px",
            backgroundColor: "white",
            border: "2px solid #EEEEEE",
            borderRadius: "15px",
            height: "244px",
            width: "810px",
            position: "absolute",
            top: "805px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                textAlign: "start",
                m: "10px 0 0 20px",
                p: "10px",
                fontWeight: "bold",
              }}
              variant="h6"
            >
              Ghi chú
            </Typography>

            <IconButton sx={{ m: "10px 15px 0 20px", p: "10px" }}>
              <AddIcon />
            </IconButton>
          </Box>

          <Box>
            <Item sx={{ m: "15px 0 0 30px" }}>
              <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
                <Avatar>W</Avatar>
                <Typography noWrap>{message}</Typography>
              </Stack>
            </Item>
            <Item sx={{ m: "20px 0 0 30px" }}>
              <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
                <Stack>
                  <Avatar>W</Avatar>
                </Stack>
                <Stack sx={{ minWidth: 0 }}>
                  <Typography noWrap>{message}</Typography>
                </Stack>
              </Stack>
            </Item>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
