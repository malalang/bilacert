'use client';

import {
  Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Cell, Pie, PieChart
} from "recharts";

const COLORS = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white/80 backdrop-blur-sm p-3 border border-slate-200 rounded-lg shadow-lg text-slate-700">
        <p className="font-bold">{label || data.name || data.author}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} style={{ color: p.color }}>{`${p.name}: ${p.value}`}</p>
        ))}
      </div>
    );
  }
  return null;
};

export const DetailedSubmissionsChart = ({ data = [], serviceKeys = [], statusKeys = [] }: { data?: any[], serviceKeys?: string[], statusKeys?: string[] }) => {
    const allKeys = ["total", ...serviceKeys, ...statusKeys];
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="date" stroke="#888" fontSize={12} />
          <YAxis stroke="#888" fontSize={12} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {allKeys.map((key, index) => (
            <Line 
              key={key} 
              type="monotone" 
              dataKey={key} 
              name={key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')} 
              stroke={COLORS[index % COLORS.length]} 
              strokeWidth={2} 
              dot={false} 
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  };

export const SubmissionsLineChart = ({ data = [] }: { data?: { date: string, count: number }[] }) => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <defs>
          <linearGradient id="colorSubmissions" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="date" stroke="#888" fontSize={12} />
        <YAxis stroke="#888" fontSize={12} />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="count" name="Submissions" stroke="#8884d8" strokeWidth={2} fillOpacity={1} fill="url(#colorSubmissions)" dot={{ r: 4, fill: "#8884d8" }} />
      </LineChart>
    </ResponsiveContainer>
  );
  
  export const SubmissionsBarChart = ({ data = [] }: { data?: { service_name: string, count: number }[] }) => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="service_name" stroke="#888" fontSize={12} />
        <YAxis stroke="#888" fontSize={12} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="count" name="Submissions" fill="#82ca9d" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
  
  export const ContentBarChart = ({ data = [] }: { data?: { contentType: string, count: number }[] }) => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis type="number" stroke="#888" fontSize={12} />
        <YAxis dataKey="contentType" type="category" width={120} stroke="#888" fontSize={12} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="count" name="Count" fill="#ffc658" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
  
  export const BlogViewsChart = ({ data = [] }: { data?: { title: string, views: number }[] }) => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis type="number" stroke="#888" fontSize={12} />
        <YAxis dataKey="title" type="category" width={150} stroke="#888" fontSize={10} interval={0} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="views" name="Views" fill="#ff8042" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
  
  export const TurnaroundTimeChart = ({ data = [] }: { data?: { service_name: string, average_days: number }[] }) => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis type="number" stroke="#888" fontSize={12} />
        <YAxis dataKey="service_name" type="category" width={150} stroke="#888" fontSize={12} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="average_days" name="Avg. Days" fill="#a234b6" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
  
  export const SubmissionStatusPieChart = ({ data = [] }: { data?: { status: string, count: number }[] }) => (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="count" nameKey="status" cx="50%" cy="50%" outerRadius={100} label>
            {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );

export const CombinedActivityChart = ({ data = [], keys = [] }: { data?: { date: string; [key: string]: number | string }[], keys?: string[] }) => (
    <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="date" stroke="#888" fontSize={12} />
            <YAxis stroke="#888" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            {keys.map((key, index) => (
                <Line 
                    key={key} 
                    type="monotone" 
                    dataKey={key} 
                    name={key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')} 
                    stroke={COLORS[index % COLORS.length]} 
                    strokeWidth={2} 
                    dot={false} 
                />
            ))}
        </LineChart>
    </ResponsiveContainer>
);