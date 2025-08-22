import { MetricCard } from "@/components/metric-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Activity, 
  AlertTriangle, 
  Target, 
  Cpu, 
  TrendingUp,
  Clock,
  Wrench,
  Shield
} from "lucide-react"

export default function Overview() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
          Visão Geral
        </h1>
        <p className="text-muted-foreground">
          Dashboard principal com métricas de equipamentos e modelos preditivos
        </p>
      </div>

      {/* Main Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Equipamentos Monitorados"
          value="147"
          icon={Activity}
          description="Ativos em tempo real"
          trend="up"
          trendValue="+3"
          variant="default"
        />
        
        <MetricCard
          title="Anomalias Detectadas"
          value="12"
          icon={AlertTriangle}
          description="Últimas 24h"
          trend="down"
          trendValue="-8"
          variant="warning"
        />
        
        <MetricCard
          title="Taxa de Acurácia"
          value="94.7%"
          icon={Target}
          description="Modelos ativos"
          trend="up"
          trendValue="+2.3%"
          variant="success"
        />
        
        <MetricCard
          title="Modelos Ativos"
          value="8"
          icon={Cpu}
          description="ML + Quantum"
          trend="stable"
          trendValue="0"
          variant="quantum"
        />
      </div>

      {/* Status Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Equipment Health Status */}
        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Shield className="w-5 h-5 text-primary" />
              Status de Saúde dos Ativos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Baixo Risco</span>
                <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                  89 equipamentos
                </Badge>
              </div>
              <Progress value={60} className="h-2 bg-muted" />
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Médio Risco</span>
                <Badge variant="secondary" className="bg-warning/20 text-warning border-warning/30">
                  42 equipamentos
                </Badge>
              </div>
              <Progress value={29} className="h-2 bg-muted" />
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Alto Risco</span>
                <Badge variant="destructive" className="bg-destructive/20">
                  16 equipamentos
                </Badge>
              </div>
              <Progress value={11} className="h-2 bg-muted" />
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <TrendingUp className="w-5 h-5 text-primary" />
              Performance Operacional
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">MTBF Médio</span>
                <span className="text-lg font-semibold text-foreground">2,847h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">MTTR Médio</span>
                <span className="text-lg font-semibold text-foreground">4.2h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Disponibilidade</span>
                <span className="text-lg font-semibold text-success">98.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Eficiência Global</span>
                <span className="text-lg font-semibold text-quantum">91.4%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Clock className="w-5 h-5 text-primary" />
              Atividade Recente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-foreground">Anomalia detectada</p>
                  <p className="text-xs text-muted-foreground">Turbina #34 - Há 2 horas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-foreground">Manutenção programada</p>
                  <p className="text-xs text-muted-foreground">Bomba #12 - Há 4 horas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-foreground">Modelo atualizado</p>
                  <p className="text-xs text-muted-foreground">Random Forest v2.1 - Há 6 horas</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-quantum rounded-full mt-2"></div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-foreground">QSVM treinado</p>
                  <p className="text-xs text-muted-foreground">Precisão: 96.3% - Há 8 horas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Model Performance */}
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Wrench className="w-5 h-5 text-primary" />
            Performance dos Modelos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">Random Forest</div>
              <div className="text-sm text-muted-foreground mb-2">Acurácia</div>
              <div className="text-lg font-semibold text-success">92.8%</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">SVM</div>
              <div className="text-sm text-muted-foreground mb-2">Acurácia</div>
              <div className="text-lg font-semibold text-primary">89.4%</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">XGBoost</div>
              <div className="text-sm text-muted-foreground mb-2">Acurácia</div>
              <div className="text-lg font-semibold text-success">94.1%</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">QSVM</div>
              <div className="text-sm text-muted-foreground mb-2">Acurácia</div>
              <div className="text-lg font-semibold text-quantum">96.3%</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}