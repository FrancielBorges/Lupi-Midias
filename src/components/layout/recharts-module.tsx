import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

// Dados de orçamento
const budgetData = [
  { name: 'Google', budget: 12000, spent: 10800, conversions: 580 },
  { name: 'Facebook', budget: 8000, spent: 7600, conversions: 420 },
  { name: 'Instagram', budget: 6000, spent: 5800, conversions: 310 },
  { name: 'LinkedIn', budget: 4000, spent: 3200, conversions: 150 },
  { name: 'TikTok', budget: 2000, spent: 1700, conversions: 95 },
];

const COLORS = ['#FF6B6B', '#4ECDC4', '#FFD166', '#15552a'];

// Tipos de interfaces para o componente
interface RechartsModuleProps {
  type: 'line' | 'bar' | 'pie' | 'simplePie' | 'budgetBar';
  data?: any[];
}

// Componente que renderiza gráficos baseado no tipo solicitado
const RechartsModule: React.FC<RechartsModuleProps> = ({ type, data = [] }) => {
  switch (type) {
    case 'line':
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="name" 
              stroke="rgba(255,255,255,0.5)"
              tick={{ fill: '#ffffff', fontSize: 12 }}
              tickMargin={5}
            />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(18, 19, 27, 0.8)', backdropFilter: 'blur(10px)', borderColor: '#333', borderRadius: '8px', boxShadow: '0 0 10px rgba(84, 218, 87, 0.2)' }}
              labelStyle={{ color: '#fff' }}
            />
            <Line 
              type="monotone" 
              dataKey="conversoes" 
              stroke="#54da57" 
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2, fill: '#1a1a1a' }}
              activeDot={{ r: 6, fill: '#54da57' }}
            />
            <Line 
              type="monotone" 
              dataKey="ctr" 
              stroke="#888" 
              strokeDasharray="5 5" 
              strokeWidth={2} 
            />
          </LineChart>
        </ResponsiveContainer>
      );
    
    case 'bar':
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 50, left: 70, bottom: 5 }}
            barSize={30}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              type="number"
              stroke="rgba(255,255,255,0.5)" 
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis 
              dataKey="name" 
              type="category"
              stroke="rgba(255,255,255,0.7)"
              tick={{ fill: '#ffffff', fontSize: 12 }}
              tickLine={false}
              width={70}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(18, 19, 27, 0.8)', backdropFilter: 'blur(10px)', borderColor: '#333', borderRadius: '8px', boxShadow: '0 0 10px rgba(84, 218, 87, 0.2)' }}
              labelStyle={{ color: '#fff' }}
              formatter={(value) => [`${value}%`, 'Investimento']}
            />
            <Bar 
              dataKey="value" 
              name="Distribuição de Investimento"
              radius={[0, 4, 4, 0]} 
              label={{ 
                position: 'right', 
                fill: '#ffffff',
                fontSize: 12,
                formatter: (value: number) => `${value}%` 
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      );
    
    case 'pie':
      return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={65}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}%`}
              labelLine={true}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(18, 19, 27, 0.8)', backdropFilter: 'blur(10px)', borderColor: '#333', borderRadius: '8px', boxShadow: '0 0 10px rgba(84, 218, 87, 0.2)' }}
              labelStyle={{ color: '#fff' }}
              formatter={(value) => [`${value}%`]}
            />
          </PieChart>
        </ResponsiveContainer>
      );
    
    case 'simplePie':
      return (
        <ResponsiveContainer width="70%" height="70%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={55}
              fill="#8884d8"
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(18, 19, 27, 0.8)', backdropFilter: 'blur(10px)', borderColor: '#333', borderRadius: '8px', boxShadow: '0 0 10px rgba(84, 218, 87, 0.2)' }}
              labelStyle={{ color: '#fff' }}
              formatter={(value) => [`${value}%`]}
            />
          </PieChart>
        </ResponsiveContainer>
      );
    
    case 'budgetBar':
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={budgetData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(18, 19, 27, 0.8)', backdropFilter: 'blur(10px)', borderColor: '#333', borderRadius: '8px', boxShadow: '0 0 10px rgba(84, 218, 87, 0.2)' }}
              labelStyle={{ color: '#fff' }}
            />
            <Bar dataKey="budget" fill="#54da57" radius={[4, 4, 0, 0]} opacity={0.3} />
            <Bar dataKey="spent" fill="#54da57" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      );
    
    default:
      return null;
  }
};

export default RechartsModule; 