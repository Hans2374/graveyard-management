import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const BarChart = () => {

    const data = [
        { month: 'Tháng 1', lastYear: 30, thisYear: 50  },
        { month: 'Tháng 2', lastYear: 20, thisYear: 40 },
        { month: 'Tháng 3', lastYear: 50, thisYear: 70 },
        { month: 'Tháng 4', lastYear: 40, thisYear: 60 },
        { month: 'Tháng 5', lastYear: 70, thisYear: 90 },
        { month: 'Tháng 6', lastYear: 60, thisYear: 80 },
        { month: 'Tháng 7', lastYear: 90, thisYear: 100 },
        { month: 'Tháng 8', lastYear: 80, thisYear: 120 },
        { month: 'Tháng 9', lastYear: 100, thisYear: 140 },
        { month: 'Tháng 10', lastYear: 110, thisYear: 150 },
        { month: 'Tháng 11', lastYear: 120, thisYear: 170 },
        { month: 'Tháng 12', lastYear: 140, thisYear: 200 },
    ];

    const processedData = data.map(({ month, lastYear, thisYear }) => ({
        month,
        lastYear,
        thisYear,
    }));

    return (
        <div style={{ height: '420px', width:"765px"}}>
            <ResponsiveBar
                data={processedData}
                keys={['thisYear']}

                xField="month"
                yField={['lastYear', 'thisYear']}
                indexBy="month"

                margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
                padding={0.3}
                colors= "var(--primary-color)"
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e => `${e.id}: ${e.formattedValue} in ${e.indexValue}`}
            />
        </div>
    );
};

export default BarChart;