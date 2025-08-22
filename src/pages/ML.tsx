import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Clock,
  Play,
  Settings,
  BarChart3
} from "lucide-react"

const models = [
  {
    name: "Random Forest",
    type: "Ensemble",
    accuracy: 92.8,
    precision: 94.1,
    recall: 91.5,
    f1Score: 92.8,
    status: "Ativo",
    lastTrained: "2024-01-20",
    trainTime: "12 min"
  },
  {
    name: "XGBoost",
    type: "Gradient Boosting",
    accuracy: 94.1,
    precision: 95.2,
    recall: 92.9,
    f1Score: 94.0,
    status: "Ativo",
    lastTrained: "2024-01-19",
    trainTime: "18 min"
  },
  {
    name: "SVM",
    type: "Support Vector Machine",
    accuracy: 89.4,
    precision: 88.7,
    recall: 90.1,
    f1Score: 89.4,
    status: "Treinando",
    lastTrained: "2024-01-18",
    trainTime: "25 min"
  },
  {
    name: "Logistic Regression",
    type: "Linear",
    accuracy: 87.2,
    precision: 85.9,
    recall: 88.5,
    f1Score: 87.2,
    status: "Inativo",
    lastTrained: "2024-01-15",
    trainTime: "3 min"
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Ativo":
      return <Badge className="bg-success/20 text-success border-success/30">Ativo</Badge>
    case "Treinando":
      return <Badge className="bg-warning/20 text-warning border-warning/30">Treinando</Badge>
    case "Inativo":
      return <Badge variant="secondary">Inativo</Badge>
    default:
      return <Badge variant="secondary">N/A</Badge>
  }
}

export default function ML() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
          Machine Learning
        </h1>
        <p className="text-muted-foreground">
          Modelos clássicos para detecção de falhas e análise preditiva
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">4</p>
                <p className="text-sm text-muted-foreground">Modelos Totais</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">94.1%</p>
                <p className="text-sm text-muted-foreground">Melhor Acurácia</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-warning/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-sm text-muted-foreground">Modelos Ativos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">14.5</p>
                <p className="text-sm text-muted-foreground">Tempo Médio (min)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Model Performance Comparison */}
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Comparação de Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {models.map((model, index) => (
              <div key={model.name} className="border border-border/50 rounded-lg p-6 bg-muted/30">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{model.name}</h3>
                    <p className="text-sm text-muted-foreground">{model.type}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    {getStatusBadge(model.status)}
                    <Button size="sm" variant="outline">
                      <Settings className="w-4 h-4 mr-2" />
                      Configurar
                    </Button>
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                      <Play className="w-4 h-4 mr-2" />
                      Treinar
                    </Button>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Acurácia</span>
                      <span className="text-sm font-medium text-foreground">{model.accuracy}%</span>
                    </div>
                    <Progress value={model.accuracy} className="h-2" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Precisão</span>
                      <span className="text-sm font-medium text-foreground">{model.precision}%</span>
                    </div>
                    <Progress value={model.precision} className="h-2" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Recall</span>
                      <span className="text-sm font-medium text-foreground">{model.recall}%</span>
                    </div>
                    <Progress value={model.recall} className="h-2" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">F1-Score</span>
                      <span className="text-sm font-medium text-foreground">{model.f1Score}%</span>
                    </div>
                    <Progress value={model.f1Score} className="h-2" />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                  <span>Último treinamento: {new Date(model.lastTrained).toLocaleDateString('pt-BR')}</span>
                  <span>Tempo de treinamento: {model.trainTime}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Training Actions */}
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            Ações de Treinamento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button className="h-20 bg-gradient-primary hover:opacity-90">
              <div className="text-center">
                <Play className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm">Treinar Todos</div>
              </div>
            </Button>

            <Button variant="outline" className="h-20">
              <div className="text-center">
                <Target className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm">Avaliar Performance</div>
              </div>
            </Button>

            <Button variant="outline" className="h-20">
              <div className="text-center">
                <Settings className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm">Otimizar Hiperparâmetros</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}