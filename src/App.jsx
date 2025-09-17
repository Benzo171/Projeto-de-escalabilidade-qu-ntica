import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Calculator, TrendingUp, MapPin, Zap, Brain, Building2 } from 'lucide-react'
import { PortfolioScalingChart, TSPScalingChart } from './components/ScalingChart.jsx'
import { TSPVisualization } from './components/TSPVisualization.jsx'
import './App.css'

// Componente para a página principal
function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-black shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-right space-x-3">
              <Zap className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-white ">Escalabilidade Quântica</h1>
            </div>
            <nav className="flex space-x-6">
              <Link to="/formulas" className="text-white hover:text-purple-600 transition-colors">
                Fórmulas Matemáticas
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Computação Quântica vs Clássica
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore como as soluções quânticas escalam em comparação com suas contrapartes clássicas 
            através de exemplos práticos em finanças e otimização.
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              <Building2 className="w-4 h-4 mr-2" />
              Instituições Financeiras
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              <MapPin className="w-4 h-4 mr-2" />
              Problema do Caixeiro Viajante
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="finance" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="finance" className="text-lg py-3">
                <Building2 className="w-5 h-5 mr-2" />
                Aplicações Financeiras
              </TabsTrigger>
              <TabsTrigger value="tsp" className="text-lg py-3">
                <MapPin className="w-5 h-5 mr-2" />
                Caixeiro Viajante
              </TabsTrigger>
            </TabsList>

            <TabsContent value="finance">
              <FinanceSection />
            </TabsContent>

            <TabsContent value="tsp">
              <TSPSection />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

// Componente para a seção de finanças
function FinanceSection() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Computação Quântica em Instituições Financeiras
        </h3>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          A computação quântica oferece vantagens significativas para problemas complexos 
          enfrentados por instituições financeiras, desde otimização de portfólio até detecção de fraudes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
              Otimização de Portfólio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Algoritmos quânticos podem analisar milhares de variáveis simultaneamente 
              para otimizar alocação de ativos.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Clássico:</span>
                <span className="text-sm font-medium">O(n³)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Quântico:</span>
                <span className="text-sm font-medium text-purple-600">O(n²)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="w-5 h-5 mr-2 text-blue-600" />
              Detecção de Fraudes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Identificação de padrões anômalos em transações com maior precisão 
              e velocidade.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Precisão Clássica:</span>
                <span className="text-sm font-medium">85-90%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Precisão Quântica:</span>
                <span className="text-sm font-medium text-purple-600">95-98%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="w-5 h-5 mr-2 text-orange-600" />
              Gestão de Riscos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Simulação de cenários complexos para avaliação de risco em tempo real.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Tempo Clássico:</span>
                <span className="text-sm font-medium">Horas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Tempo Quântico:</span>
                <span className="text-sm font-medium text-purple-600">Minutos</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de escalabilidade */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Comparação de Escalabilidade: Otimização de Portfólio</CardTitle>
          <CardDescription>
            Tempo de processamento vs número de ativos no portfólio (escala logarítmica)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PortfolioScalingChart />
        </CardContent>
      </Card>
    </div>
  )
}

// Componente para a seção do TSP
function TSPSection() {
  const cities = [
    { name: 'Paulista', lat: -7.9406, lng: -34.8728 },
    { name: 'Recife', lat: -8.0476, lng: -34.8770 },
    { name: 'Jaboatão dos Guararapes', lat: -8.1120, lng: -35.0149 },
    { name: 'Cabo de Santo Agostinho', lat: -8.2914, lng: -35.0349 }
  ]

  const distances = {
    'Paulista-Recife': 15,
    'Recife-Jaboatão dos Guararapes': 19,
    'Jaboatão dos Guararapes-Cabo de Santo Agostinho': 25,
    'Cabo de Santo Agostinho-Paulista': 51,
    'Paulista-Jaboatão dos Guararapes': 34,
    'Recife-Cabo de Santo Agostinho': 35
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Problema do Caixeiro Viajante
        </h3>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Demonstração prática usando 4 cidades da região metropolitana do Recife: 
          Paulista, Recife, Jaboatão dos Guararapes e Cabo de Santo Agostinho.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Cidades e Distâncias</CardTitle>
            <CardDescription>
              Distâncias aproximadas entre as cidades (em km)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">{city.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 space-y-2">
              <h4 className="font-semibold text-gray-900">Matriz de Distâncias:</h4>
              {Object.entries(distances).map(([route, distance]) => (
                <div key={route} className="flex justify-between text-sm">
                  <span className="text-gray-600">{route.replace('-', ' ↔ ')}</span>
                  <span className="font-medium">{distance} km</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Complexidade Computacional</CardTitle>
            <CardDescription>
              Comparação entre abordagens clássica e quântica
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">Abordagem Clássica</h4>
                <p className="text-sm text-red-700 mb-2">
                  Força bruta: (n-1)! possibilidades
                </p>
                <p className="text-sm text-red-600">
                  Para 4 cidades: 3! = 6 rotas possíveis
                </p>
                <p className="text-sm text-red-600">
                  Para 10 cidades: 9! = 362.880 rotas
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">Abordagem Quântica</h4>
                <p className="text-sm text-purple-700 mb-2">
                  QAOA (Quantum Approximate Optimization Algorithm)
                </p>
                <p className="text-sm text-purple-600">
                  Explora múltiplas soluções simultaneamente
                </p>
                <p className="text-sm text-purple-600">
                  Escalabilidade potencialmente exponencial
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Visualização do TSP */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Visualização Interativa do TSP</CardTitle>
          <CardDescription>
            Demonstração da busca pela rota ótima entre as 4 cidades
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TSPVisualization />
        </CardContent>
      </Card>

      {/* Gráfico de escalabilidade do TSP */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Escalabilidade do Problema do Caixeiro Viajante</CardTitle>
          <CardDescription>
            Comparação de tempo de execução vs número de cidades (escala logarítmica)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TSPScalingChart />
        </CardContent>
      </Card>
    </div>
  )
}

// Componente para a página de fórmulas
function FormulasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Calculator className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">Fórmulas Matemáticas</h1>
            </div>
            <nav className="flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                Voltar ao Início
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fundamentos Matemáticos
            </h2>
            <p className="text-lg text-gray-600">
              Fórmulas e conceitos matemáticos por trás da computação quântica e otimização clássica
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Problema do Caixeiro Viajante (TSP)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Função Objetivo:</h4>
                  <p className="font-mono text-lg">min Σ(i,j) d_ij * x_ij</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Onde d_ij é a distância entre as cidades i e j, e x_ij é 1 se a aresta (i,j) está na rota, 0 caso contrário.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Restrições:</h4>
                  <div className="space-y-2 font-mono">
                    <p>Σ_j x_ij = 1, ∀i (cada cidade é visitada exatamente uma vez)</p>
                    <p>Σ_i x_ij = 1, ∀j (cada cidade é deixada exatamente uma vez)</p>
                    <p>Σ_(i,j∈S) x_ij ≤ |S| - 1, ∀S ⊂ V, |S| ≥ 2 (eliminação de subciclos)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Algoritmo QAOA para TSP</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Hamiltoniano de Custo:</h4>
                  <p className="font-mono text-lg">H_C = Σ_(i,j) d_ij * (1 - Z_i * Z_j) / 2</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Onde Z_i são operadores Pauli-Z aplicados aos qubits representando as cidades.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Hamiltoniano Mixer:</h4>
                  <p className="font-mono text-lg">H_M = Σ_i X_i</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Operadores Pauli-X que permitem transições entre estados quânticos.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Estado Final QAOA:</h4>
                  <p className="font-mono text-lg">|ψ(β,γ)⟩ = e^(-iβH_M) e^(-iγH_C) |+⟩^⊗n</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Onde β e γ são parâmetros variacionais otimizados classicamente.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Otimização de Portfólio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Modelo de Markowitz:</h4>
                  <p className="font-mono text-lg">max μ^T w - (λ/2) w^T Σ w</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Onde μ é o vetor de retornos esperados, w são os pesos do portfólio, Σ é a matriz de covariância e λ é o parâmetro de aversão ao risco.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Restrições:</h4>
                  <div className="space-y-2 font-mono">
                    <p>Σ_i w_i = 1 (soma dos pesos = 1)</p>
                    <p>w_i ≥ 0, ∀i (sem vendas a descoberto)</p>
                    <p>w_i ≤ w_max, ∀i (limite máximo por ativo)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Complexidade Computacional</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Algoritmos Clássicos</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-mono">TSP (força bruta):</span> O((n-1)!)</p>
                      <p><span className="font-mono">TSP (Held-Karp):</span> O(n²2^n)</p>
                      <p><span className="font-mono">Portfólio (QP):</span> O(n³)</p>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Algoritmos Quânticos</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-mono">QAOA:</span> O(poly(n))</p>
                      <p><span className="font-mono">VQE:</span> O(poly(n))</p>
                      <p><span className="font-mono">Quantum Annealing:</span> O(poly(n))</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// Componente principal da aplicação
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formulas" element={<FormulasPage />} />
      </Routes>
    </Router>
  )
}

export default App

