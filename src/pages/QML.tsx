import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Atom, 
  Zap, 
  Target, 
  Clock,
  Play,
  Settings,
  BarChart3,
  Cpu,
  Activity
} from "lucide-react"

const quantumModels = [
  {
    name: "QSVM",
    fullName: "Quantum Support Vector Machine",
    accuracy: 96.3,
    quantumAdvantage: "23%",
    qubits: 8,
    status: "Ativo",
    lastTrained: "2024-01-22",
    executionTime: "4.2 s",
    description: "Detecção de anomalias com vantagem quântica"
  },
  {
    name: "QNN",
    fullName: "Quantum Neural Network",
    accuracy: 94.7,
    quantumAdvantage: "18%",
    qubits: 12,
    status: "Treinando",
    lastTrained: "2024-01-21",
    executionTime: "6.8 s",
    description: "Análise de séries temporais complexas"
  },
  {
    name: "QAOA",
    fullName: "Quantum Approximate Optimization",
    accuracy: 91.2,
    quantumAdvantage: "31%",
    qubits: 16,
    status: "Ativo",
    lastTrained: "2024-01-20",
    executionTime: "8.1 s",
    description: "Otimização de agendamento de manutenção"
  },
  {
    name: "VQE",
    fullName: "Variational Quantum Eigensolver",
    accuracy: 89.8,
    quantumAdvantage: "27%",
    qubits: 10,
    status: "Desenvolvimento",
    lastTrained: "2024-01-18",
    executionTime: "12.3 s",
    description: "Simulação de falhas físicas em materiais"
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Ativo":
      return <Badge className="bg-quantum/20 text-quantum border-quantum/30">Ativo</Badge>
    case "Treinando":
      return <Badge className="bg-warning/20 text-warning border-warning/30">Treinando</Badge>
    case "Desenvolvimento":
      return <Badge className="bg-primary/20 text-primary border-primary/30">Desenvolvimento</Badge>
    default:
      return <Badge variant="secondary">N/A</Badge>
  }
}

export default function QML() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-quantum bg-clip-text text-transparent">
          Quantum Machine Learning
        </h1>
        <p className="text-muted-foreground">
          Algoritmos quânticos para detecção avançada de anomalias e otimização
        </p>
      </div>

      {/* Quantum Advantage Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="bg-gradient-card border-quantum/30 shadow-quantum">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-quantum/20 rounded-lg flex items-center justify-center animate-pulse-slow">
                <Atom className="w-5 h-5 text-quantum" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">4</p>
                <p className="text-sm text-muted-foreground">Modelos Quânticos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-quantum/30 shadow-quantum">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-quantum/20 rounded-lg flex items-center justify-center animate-pulse-slow">
                <Target className="w-5 h-5 text-quantum" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">96.3%</p>
                <p className="text-sm text-muted-foreground">Melhor Acurácia</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-quantum/30 shadow-quantum">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-quantum/20 rounded-lg flex items-center justify-center animate-pulse-slow">
                <Zap className="w-5 h-5 text-quantum" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">31%</p>
                <p className="text-sm text-muted-foreground">Vantagem Quântica</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-quantum/30 shadow-quantum">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-quantum/20 rounded-lg flex items-center justify-center animate-pulse-slow">
                <Cpu className="w-5 h-5 text-quantum" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">46</p>
                <p className="text-sm text-muted-foreground">Qubits Utilizados</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quantum Advantages */}
      <Card className="bg-gradient-card border-quantum/30 shadow-quantum">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-quantum" />
            Vantagens Quânticas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-6 border border-quantum/20 rounded-lg bg-quantum/5">
              <div className="w-12 h-12 bg-quantum/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-quantum" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Detecção Mais Rápida</h3>
              <p className="text-sm text-muted-foreground">
                Identificação de padrões complexos em tempo exponencialmente menor
              </p>
            </div>

            <div className="text-center p-6 border border-quantum/20 rounded-lg bg-quantum/5">
              <div className="w-12 h-12 bg-quantum/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-quantum" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Redução de Falsos Positivos</h3>
              <p className="text-sm text-muted-foreground">
                Precisão superior na distinção entre anomalias reais e ruído
              </p>
            </div>

            <div className="text-center p-6 border border-quantum/20 rounded-lg bg-quantum/5">
              <div className="w-12 h-12 bg-quantum/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-6 h-6 text-quantum" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Otimização Avançada</h3>
              <p className="text-sm text-muted-foreground">
                Agendamento otimizado de manutenção preventiva
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quantum Models */}
      <Card className="bg-gradient-card border-quantum/30 shadow-quantum">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-quantum" />
            Modelos Quânticos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {quantumModels.map((model, index) => (
              <div key={model.name} className="border border-quantum/20 rounded-lg p-6 bg-quantum/5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{model.name}</h3>
                    <p className="text-sm text-muted-foreground">{model.fullName}</p>
                    <p className="text-xs text-muted-foreground mt-1">{model.description}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    {getStatusBadge(model.status)}
                    <Button size="sm" variant="outline" className="border-quantum/30">
                      <Settings className="w-4 h-4 mr-2" />
                      Configurar
                    </Button>
                    <Button size="sm" className="bg-gradient-quantum hover:opacity-90">
                      <Play className="w-4 h-4 mr-2" />
                      Executar
                    </Button>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Acurácia</span>
                      <span className="text-sm font-medium text-quantum">{model.accuracy}%</span>
                    </div>
                    <Progress value={model.accuracy} className="h-2" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Vantagem Quântica</span>
                      <span className="text-sm font-medium text-quantum">+{model.quantumAdvantage}</span>
                    </div>
                    <Progress value={parseInt(model.quantumAdvantage)} className="h-2" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Qubits</span>
                      <span className="text-sm font-medium text-foreground">{model.qubits}</span>
                    </div>
                    <div className="flex space-x-1">
                      {Array.from({ length: model.qubits }).map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-quantum rounded-full animate-pulse-slow" style={{
                          animationDelay: `${i * 0.1}s`
                        }}></div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Tempo Execução</span>
                      <span className="text-sm font-medium text-foreground">{model.executionTime}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-quantum animate-pulse"></div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Badge className="bg-quantum/20 text-quantum border-quantum/30">
                      Quantum Powered
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                  <span>Último treinamento: {new Date(model.lastTrained).toLocaleDateString('pt-BR')}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Executado em: {model.executionTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quantum Actions */}
      <Card className="bg-gradient-card border-quantum/30 shadow-quantum">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Atom className="w-5 h-5 text-quantum" />
            Operações Quânticas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button className="h-20 bg-gradient-quantum hover:opacity-90">
              <div className="text-center">
                <Play className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm">Executar Circuito Quântico</div>
              </div>
            </Button>

            <Button variant="outline" className="h-20 border-quantum/30">
              <div className="text-center">
                <Target className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm">Verificar Entanglement</div>
              </div>
            </Button>

            <Button variant="outline" className="h-20 border-quantum/30">
              <div className="text-center">
                <Zap className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm">Benchmark Quântico</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}