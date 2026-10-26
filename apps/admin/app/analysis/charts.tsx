"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/**
 * Chart palette rides on the repository chart tokens (globals.css:
 * --chart-1 … --chart-5) so every chart rebrands with the site and adapts to
 * the dark scope. Never hardcode hex values here.
 */
const CHART_COLORS = Array.from(
  { length: 5 },
  (_, index) => `hsl(var(--chart-${index + 1}))`,
);

const truncateLabel = (value: string, maxLength = 24) => {
  if (!value) return "";
  return value.length > maxLength ? `${value.slice(0, maxLength)}...` : value;
};

const formatSeriesName = (key: string) =>
  key
    .replace(/-/g, "_")
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="rounded-lg border border-border bg-card/80 p-3 text-foreground backdrop-blur-sm">
        <p className="font-bold">{label || data.name || data.author}</p>
        {payload.map((p: any, i: number) => (
          <p
            key={`${p.name}-${i}`}
            style={{ color: p.color }}
          >{`${p.name}: ${p.value}`}</p>
        ))}
      </div>
    );
  }
  return null;
};

export const FilteredLineChart = ({
  data = [],
  keys = [],
  height = 400,
  showLegend = true,
  seriesNameFormatter = formatSeriesName,
}: {
  data?: { date: string; [key: string]: number | string }[];
  keys?: string[];
  height?: number;
  showLegend?: boolean;
  seriesNameFormatter?: (key: string) => string;
}) => (
  <ResponsiveContainer width="100%" height={height}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
      <XAxis
        dataKey="date"
        stroke="hsl(var(--muted-foreground))"
        fontSize={12}
      />
      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
      <Tooltip content={<CustomTooltip />} />
      {showLegend && <Legend />}
      {keys.map((key, index) => (
        <Line
          key={key}
          type="monotone"
          dataKey={key}
          name={seriesNameFormatter(key)}
          stroke={CHART_COLORS[index % CHART_COLORS.length]}
          strokeWidth={2}
          dot={false}
        />
      ))}
    </LineChart>
  </ResponsiveContainer>
);

export const SubmissionsLineChart = ({
  data = [],
}: {
  data?: { date: string; count: number }[];
}) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <defs>
        <linearGradient id="colorSubmissions" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
          <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
      <XAxis
        dataKey="date"
        stroke="hsl(var(--muted-foreground))"
        fontSize={12}
      />
      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
      <Tooltip content={<CustomTooltip />} />
      <Line
        type="monotone"
        dataKey="count"
        name="Submissions"
        stroke="hsl(var(--chart-1))"
        strokeWidth={2}
        fillOpacity={1}
        fill="url(#colorSubmissions)"
        dot={{ r: 4, fill: "hsl(var(--chart-1))" }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export const SubmissionsBarChart = ({
  data = [],
}: {
  data?: { serviceName: string; count: number }[];
}) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
      <XAxis
        dataKey="serviceName"
        stroke="hsl(var(--muted-foreground))"
        fontSize={12}
      />
      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
      <Tooltip content={<CustomTooltip />} />
      <Bar
        dataKey="count"
        name="Submissions"
        fill="hsl(var(--chart-1))"
        radius={[4, 4, 0, 0]}
      >
        {data.map((_entry, index) => (
          <Cell
            key={`cell-${_entry.serviceName}`}
            fill={CHART_COLORS[index % CHART_COLORS.length]}
          />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export const ContentBarChart = ({
  data = [],
}: {
  data?: { contentType: string; count: number }[];
}) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
      <XAxis
        type="number"
        stroke="hsl(var(--muted-foreground))"
        fontSize={12}
      />
      <YAxis
        dataKey="contentType"
        type="category"
        width={120}
        stroke="hsl(var(--muted-foreground))"
        fontSize={12}
      />
      <Tooltip content={<CustomTooltip />} />
      <Bar
        dataKey="count"
        name="Count"
        fill="hsl(var(--chart-4))"
        radius={[0, 4, 4, 0]}
      >
        {data.map((_entry, index) => (
          <Cell
            key={`cell-${_entry.contentType}`}
            fill={CHART_COLORS[index % CHART_COLORS.length]}
          />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export const BlogViewsChart = ({
  data = [],
}: {
  data?: { title: string; views: number }[];
}) => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
      <XAxis
        type="number"
        stroke="hsl(var(--muted-foreground))"
        fontSize={12}
      />
      <YAxis
        dataKey="title"
        type="category"
        width={110}
        stroke="hsl(var(--muted-foreground))"
        fontSize={10}
        interval={0}
        tickFormatter={(value) => truncateLabel(String(value), 18)}
      />
      <Tooltip content={<CustomTooltip />} />
      <Bar
        dataKey="views"
        name="Views"
        fill="hsl(var(--chart-2))"
        radius={[0, 4, 4, 0]}
      >
        {data.map((_entry, index) => (
          <Cell
            key={`cell-${_entry.title}`}
            fill={CHART_COLORS[index % CHART_COLORS.length]}
          />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export const SubmissionStatusPieChart = ({
  data = [],
}: {
  data?: { status: string; count: number }[];
}) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        dataKey="count"
        nameKey="status"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      >
        {data.map((_entry, index) => (
          <Cell
            key={`cell-${_entry.status}`}
            fill={CHART_COLORS[index % CHART_COLORS.length]}
          />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

export const SubmissionsByServicePieChart = ({
  data = [],
}: {
  data?: { serviceName: string; count: number }[];
}) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        dataKey="count"
        nameKey="serviceName"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      >
        {data.map((_entry, index) => (
          <Cell
            key={`cell-${_entry.serviceName}`}
            fill={CHART_COLORS[index % CHART_COLORS.length]}
          />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

export const BlogViewsLineChart = ({
  data = [],
  keys = ["views"],
}: {
  data?: { date: string; [key: string]: number | string }[];
  keys?: string[];
}) => <FilteredLineChart data={data} keys={keys} height={300} />;

export const CombinedActivityChart = ({
  data = [],
  keys = [],
}: {
  data?: { date: string; [key: string]: number | string }[];
  keys?: string[];
}) => <FilteredLineChart data={data} keys={keys} height={400} />;
