import { Box } from "@mui/material";
import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { service: "Mai táng", sales: 220 },
  { service: "Cúng định kỳ", sales: 80 },
  { service: "An táng", sales: 200 },
  { service: "Bảo trì mộ", sales: 140 },
  { service: "Hỗ trợ tâm lý", sales: 10 },
];

const COLORS = [
  "var(--primary-color)",
  "#635BFF",
  "#FFBB28",
  "#FF8042",
  "#15B79F",
];

const PieChartComponent = () => {

  const handleClick = () => {

};

  return (
    <Box sx={{ width: "100%", height: "300px", m:"20px 0 0 0" }}>
      <ResponsiveContainer>
        <PieChart >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={100}
            outerRadius={150}
            paddingAngle={3}
            dataKey="sales"
            nameKey="service"
            onClick={handleClick}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PieChartComponent;
