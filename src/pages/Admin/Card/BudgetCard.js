import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { purple } from '@mui/material/colors';

const BudgetCard = () => {
  return (
    <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="overline" color="textSecondary">
          BUDGET
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            $24k
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              ml: 1,
              color: 'green',
            }}
          >
            <ArrowUpwardIcon fontSize="small" />
            <Typography variant="body2">12%</Typography>
          </Box>
        </Box>
        <Typography color="textSecondary" variant="body2" sx={{ mt: 1 }}>
          Since last month
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: purple[500],
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ color: 'white', fontSize: 20 }}>
            $
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BudgetCard;
