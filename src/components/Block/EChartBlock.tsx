import * as React from 'react';
import * as echarts from 'echarts';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface EChartBlockProps {
  chart: any;
  hidden?: boolean;
}

export default function EChartBlock(props: any) {
  const { chart, hidden } = props;
  const chartRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!chartRef.current) return;
    if (!chart) return;
    const chartInstance = echarts.init(chartRef.current);
    chartInstance.setOption(chart);
    const resize = () => {
      chartInstance.resize();
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      chartInstance.dispose();
    };
  }, [chart]);

  if (!chart)
    return (
      <Box display={hidden ? 'none' : 'block'}>
        <Typography>Charts temporarily unavailable.</Typography>
        <Typography>Please switch to Table and view results.</Typography>
      </Box>
    );

  return (
    <Box
      component="div"
      width="100%"
      height="30rem"
      ref={chartRef}
      display={hidden ? 'none' : 'block'}
    ></Box>
  );
}

// Chart
// PieChart
// LineChart
// BarChart
// NumberCard
export function generateChartOptionByType(
  type: string,
  rows: any[],
  meta: any
) {
  switch (type) {
    case 'PieChart':
      return generatePieChartOption(rows, meta);
    case 'LineChart':
      return generateLineOrBarChartOption('line', rows, meta);
    case 'BarChart':
      return generateLineOrBarChartOption('bar', rows, meta);
    // case 'NumberCard':
    //   return generateNumberCardOption(rows);
    default:
      return null;
  }
}

export function generatePieChartOption(
  rows: any[],
  meta: {
    title: string;
    label?: string;
    value: string;
  }
) {
  const { label, value } = meta;
  const data = label
    ? rows.map((row) => {
        return {
          name: row[label],
          value: row[value],
        };
      })
    : {
        name: 'default',
        value: rows[0][value],
      };
  const option = {
    title: {
      text: meta.title,
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  return option;
}

export function generateLineOrBarChartOption(
  type: 'line' | 'bar',
  rows: any[],
  meta: {
    title: string;
    x: string;
    y: string | string[];
  }
) {
  const { x, y } = meta;

  const flattenY = Array.isArray(y) ? y : [y];

  const option = {
    xAxis: {
      type: 'category',
      data: rows.map((row) => row[x]),
    },
    yAxis: {
      type: 'value',
    },
    // series: [
    //   {
    //     data: rows.map((row) => row[y]),
    //     type: type,
    //   },
    // ],
    series: flattenY.map((y) => {
      return {
        data: rows.map((row) => row[y]),
        type: type,
      };
    }),
  };

  return option;
}
