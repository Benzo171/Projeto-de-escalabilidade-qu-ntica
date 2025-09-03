import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Dados simulados para demonstrar a escalabilidade
const portfolioData = [
  { assets: 10, classical: 0.1, quantum: 0.05 },
  { assets: 50, classical: 2.5, quantum: 0.8 },
  { assets: 100, classical: 10, quantum: 2.1 },
  { assets: 200, classical: 80, quantum: 6.5 },
  { assets: 500, classical: 1250, quantum: 35 },
  { assets: 1000, classical: 10000, quantum: 120 },
  { assets: 2000, classical: 80000, quantum: 400 }
]

const tspData = [
  { cities: 4, classical: 0.001, quantum: 0.001 },
  { cities: 6, classical: 0.12, quantum: 0.05 },
  { cities: 8, classical: 5.04, quantum: 0.2 },
  { cities: 10, classical: 362.88, quantum: 0.8 },
  { cities: 12, classical: 39916.8, quantum: 3.2 },
  { cities: 15, classical: 87178291.2, quantum: 12.8 },
  { cities: 20, classical: 121645100408832, quantum: 204.8 }
]

export function PortfolioScalingChart() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={portfolioData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="assets" 
            label={{ value: 'Número de Ativos', position: 'insideBottom', offset: -10 }}
          />
          <YAxis 
            scale="log"
            domain={['dataMin', 'dataMax']}
            label={{ value: 'Tempo (segundos)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            formatter={(value, name) => [
              `${value}s`, 
              name === 'classical' ? 'Algoritmo Clássico' : 'Algoritmo Quântico'
            ]}
            labelFormatter={(label) => `${label} ativos`}
          />
          <Legend 
            formatter={(value) => value === 'classical' ? 'Algoritmo Clássico' : 'Algoritmo Quântico'}
          />
          <Line 
            type="monotone" 
            dataKey="classical" 
            stroke="#ef4444" 
            strokeWidth={3}
            dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="quantum" 
            stroke="#a855f7" 
            strokeWidth={3}
            dot={{ fill: '#a855f7', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function TSPScalingChart() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={tspData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="cities" 
            label={{ value: 'Número de Cidades', position: 'insideBottom', offset: -10 }}
          />
          <YAxis 
            scale="log"
            domain={['dataMin', 'dataMax']}
            label={{ value: 'Tempo (segundos)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            formatter={(value, name) => [
              `${value}s`, 
              name === 'classical' ? 'Algoritmo Clássico' : 'Algoritmo Quântico'
            ]}
            labelFormatter={(label) => `${label} cidades`}
          />
          <Legend 
            formatter={(value) => value === 'classical' ? 'Algoritmo Clássico' : 'Algoritmo Quântico'}
          />
          <Line 
            type="monotone" 
            dataKey="classical" 
            stroke="#ef4444" 
            strokeWidth={3}
            dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="quantum" 
            stroke="#a855f7" 
            strokeWidth={3}
            dot={{ fill: '#a855f7', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

