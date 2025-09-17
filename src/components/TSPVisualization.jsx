import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Play, RotateCcw } from 'lucide-react'

const cities = [
  { id: 0, name: 'Paulista', x: 100, y: 80 },
  { id: 1, name: 'Recife', x: 120, y: 150 },
  { id: 2, name: 'Jaboatão dos Guararapes', x: 180, y: 200 },
  { id: 3, name: 'Cabo de Santo Agostinho', x: 220, y: 280 }
]

const distances = {
  '0-1': 15, '1-0': 15,
  '1-2': 19, '2-1': 19,
  '2-3': 25, '3-2': 25,
  '3-0': 51, '0-3': 51,
  '0-2': 34, '2-0': 34,
  '1-3': 35, '3-1': 35
}

// Todas as rotas possíveis para 4 cidades (começando e terminando em Paulista)
const allRoutes = [
  [0, 1, 2, 3, 0], // Paulista → Recife → Jaboatão → Cabo → Paulista
  [1, 0, 3, 2, 0], // Recife → Paulista → Cabo → Jaboatão → Paulista
  [0, 2, 1, 3, 0], // Paulista → Jaboatão → Recife → Cabo → Paulista
  [0, 2, 3, 1, 0], // Paulista → Jaboatão → Cabo → Recife → Paulista
  [0, 3, 1, 2, 0], // Paulista → Cabo → Recife → Jaboatão → Paulista
  [0, 3, 2, 1, 0]  // Paulista → Cabo → Jaboatão → Recife → Paulista
]

function calculateRouteDistance(route) {
  let total = 0
  for (let i = 0; i < route.length - 1; i++) {
    const key = `${route[i]}-${route[i + 1]}`
    total += distances[key] || 0
  }
  return total
}

export function TSPVisualization() {
  const [currentRoute, setCurrentRoute] = useState([])
  const [isAnimating, setIsAnimating] = useState(false)
  const [routeIndex, setRouteIndex] = useState(0)
  const [showOptimal, setShowOptimal] = useState(false)

  // Calcular a rota ótima
  const routesWithDistances = allRoutes.map(route => ({
    route,
    distance: calculateRouteDistance(route)
  }))
  
  const optimalRoute = routesWithDistances.reduce((best, current) => 
    current.distance < best.distance ? current : best
  )

  const startAnimation = () => {
    setIsAnimating(true)
    setShowOptimal(false)
    setRouteIndex(0)
    setCurrentRoute([])
    
    // Simular busca através de todas as rotas
    const interval = setInterval(() => {
      setRouteIndex(prev => {
        if (prev >= allRoutes.length - 1) {
          clearInterval(interval)
          setIsAnimating(false)
          setShowOptimal(true)
          setCurrentRoute(optimalRoute.route)
          return prev
        }
        setCurrentRoute(allRoutes[prev])
        return prev + 1
      })
    }, 800)
  }

  const reset = () => {
    setCurrentRoute([])
    setIsAnimating(false)
    setRouteIndex(0)
    setShowOptimal(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-center space-x-4">
        <Button onClick={startAnimation} disabled={isAnimating} className="bg-purple-600 hover:bg-purple-700">
          <Play className="w-4 h-4 mr-2" />
          {isAnimating ? 'Buscando...' : 'Iniciar Busca'}
        </Button>
        <Button onClick={reset} variant="outline">
          <RotateCcw className="w-4 h-4 mr-2" />
          Reiniciar
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Visualização do mapa */}
        <Card>
          <CardHeader>
            <CardTitle>Mapa das Cidades</CardTitle>
            <CardDescription>
              {isAnimating && `Testando rota ${routeIndex + 1} de ${allRoutes.length}`}
              {showOptimal && `Rota ótima encontrada: ${optimalRoute.distance} km`}
              {!isAnimating && !showOptimal && 'Clique em "Iniciar Busca" para começar'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-80 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg overflow-hidden">
              {/* Renderizar conexões da rota atual */}
              {currentRoute.length > 1 && (
                <svg className="absolute inset-0 w-full h-full">
                  {currentRoute.slice(0, -1).map((cityId, index) => {
                    const nextCityId = currentRoute[index + 1]
                    const city1 = cities[cityId]
                    const city2 = cities[nextCityId]
                    return (
                      <line
                        key={`${cityId}-${nextCityId}`}
                        x1={city1.x}
                        y1={city1.y}
                        x2={city2.x}
                        y2={city2.y}
                        stroke={showOptimal ? "#a855f7" : "#ef4444"}
                        strokeWidth={showOptimal ? "3" : "2"}
                        strokeDasharray={isAnimating ? "5,5" : "none"}
                        className={isAnimating ? "animate-pulse" : ""}
                      />
                    )
                  })}
                </svg>
              )}

              {/* Renderizar cidades */}
              {cities.map((city, index) => (
                <div
                  key={city.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: city.x, top: city.y }}
                >
                  <div className={`w-4 h-4 rounded-full ${
                    city.id === 0 ? 'bg-green-500' : 'bg-blue-500'
                  } border-2 border-white shadow-lg`} />
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <Badge variant="secondary" className="text-xs">
                      {city.name}
                    </Badge>
                  </div>
                </div>
              ))}

              {/* Indicador de direção */}
              {currentRoute.length > 1 && (
                <div className="absolute top-4 left-4">
                  <Badge variant={showOptimal ? "default" : "destructive"}>
                    {showOptimal ? "Rota Ótima" : `Rota ${routeIndex + 1}`}
                  </Badge>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Informações da busca */}
        <Card>
          <CardHeader>
            <CardTitle>Análise da Busca</CardTitle>
            <CardDescription>
              Comparação entre abordagem clássica e quântica
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Progresso da busca clássica */}
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Busca Clássica (Força Bruta)</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Rotas testadas:</span>
                  <span className="font-mono">{isAnimating ? routeIndex + 1 : (showOptimal ? allRoutes.length : 0)} / {allRoutes.length}</span>
                </div>
                <div className="w-full bg-red-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((isAnimating ? routeIndex + 1 : (showOptimal ? allRoutes.length : 0)) / allRoutes.length) * 100}%` }}
                  />
                </div>
                {currentRoute.length > 0 && (
                  <div className="text-sm">
                    <span>Distância atual: </span>
                    <span className="font-mono">{calculateRouteDistance(currentRoute)} km</span>
                  </div>
                )}
              </div>
            </div>

            {/* Resultado quântico simulado */}
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">Abordagem Quântica (QAOA)</h4>
              <div className="space-y-2 text-sm">
                <p className="text-purple-700">
                  • Explora múltiplas rotas simultaneamente
                </p>
                <p className="text-purple-700">
                  • Converge para solução ótima mais rapidamente
                </p>
                <p className="text-purple-700">
                  • Escalabilidade superior para problemas maiores
                </p>
                {showOptimal && (
                  <div className="mt-3 p-2 bg-purple-100 rounded">
                    <span className="font-semibold">Solução encontrada: </span>
                    <span className="font-mono">{optimalRoute.distance} km</span>
                  </div>
                )}
              </div>
            </div>

            {/* Lista de todas as rotas */}
            {showOptimal && (
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Todas as Rotas Possíveis</h4>
                <div className="space-y-1 text-sm max-h-32 overflow-y-auto">
                  {routesWithDistances
                    .sort((a, b) => a.distance - b.distance)
                    .map((item, index) => (
                      <div 
                        key={index} 
                        className={`flex justify-between p-1 rounded ${
                          item.distance === optimalRoute.distance ? 'bg-green-100 font-semibold' : ''
                        }`}
                      >
                        <span className="font-mono text-xs">
                          {item.route.slice(0, -1).map(id => cities[id].name.split(' ')[0]).join(' → ')}
                        </span>
                        <span className="font-mono">{item.distance} km</span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

