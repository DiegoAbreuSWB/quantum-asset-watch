import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  Download, 
  Eye, 
  Calendar,
  TrendingUp,
  BarChart3,
  PieChart,
  Users
} from "lucide-react"

const reports = [
  {
    id: 1,
    title: "Relatório Executivo - Janeiro 2024",
    type: "Executivo",
    description: "Visão geral mensal com métricas principais e recomendações estratégicas",
    generatedAt: "2024-01-31",
    pages: 8,
    format: "PDF",
    status: "Finalizado",
    insights: ["12 anomalias detectadas", "94.7% acurácia média", "3 equipamentos críticos"]
  },
  {
    id: 2,
    title: "Análise Técnica Detalhada - Turbinas",
    type: "Técnico",
    description: "Análise aprofundada dos dados de sensores e performance dos modelos ML",
    generatedAt: "2024-01-30",
    pages: 24,
    format: "PDF + Excel",
    status: "Finalizado",
    insights: ["Dados de 5 turbinas", "Análise de vibração", "Modelos comparados"]
  },
  {
    id: 3,
    title: "Performance Quantum Models",
    type: "Quantum",
    description: "Relatório especializado em modelos quânticos e vantagens obtidas",
    generatedAt: "2024-01-29",
    pages: 16,
    format: "PDF",
    status: "Em andamento",
    insights: ["QSVM: 96.3% acurácia", "23% vantagem quântica", "4 algoritmos testados"]
  },
  {
    id: 4,
    title: "Histórico de Manutenções",
    type: "Operacional",
    description: "Cronograma e efetividade das manutenções preventivas realizadas",
    generatedAt: "2024-01-28",
    pages: 12,
    format: "Excel",
    status: "Finalizado",
    insights: ["147 equipamentos", "23 manutenções", "98.7% disponibilidade"]
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Finalizado":
      return <Badge className="bg-success/20 text-success border-success/30">Finalizado</Badge>
    case "Em andamento":
      return <Badge className="bg-warning/20 text-warning border-warning/30">Em andamento</Badge>
    case "Pendente":
      return <Badge variant="secondary">Pendente</Badge>
    default:
      return <Badge variant="secondary">N/A</Badge>
  }
}

const getTypeBadge = (type: string) => {
  switch (type) {
    case "Executivo":
      return <Badge className="bg-primary/20 text-primary border-primary/30">Executivo</Badge>
    case "Técnico":
      return <Badge className="bg-accent/20 text-accent-foreground border-accent/30">Técnico</Badge>
    case "Quantum":
      return <Badge className="bg-quantum/20 text-quantum border-quantum/30">Quantum</Badge>
    case "Operacional":
      return <Badge variant="secondary">Operacional</Badge>
    default:
      return <Badge variant="secondary">N/A</Badge>
  }
}

export default function Relatorios() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
          Relatórios
        </h1>
        <p className="text-muted-foreground">
          Relatórios automáticos e análises personalizadas para gestão e equipe técnica
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Relatório Executivo</h3>
            <p className="text-sm text-muted-foreground">Visão estratégica e KPIs</p>
            <Button size="sm" className="mt-3 bg-gradient-primary hover:opacity-90">
              Gerar Agora
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Análise Técnica</h3>
            <p className="text-sm text-muted-foreground">Dados detalhados e modelos</p>
            <Button size="sm" className="mt-3 bg-gradient-primary hover:opacity-90">
              Gerar Agora
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-quantum/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <PieChart className="w-6 h-6 text-quantum" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Performance Quantum</h3>
            <p className="text-sm text-muted-foreground">Algoritmos quânticos</p>
            <Button size="sm" className="mt-3 bg-gradient-quantum hover:opacity-90">
              Gerar Agora
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Operacional</h3>
            <p className="text-sm text-muted-foreground">Manutenções e equipe</p>
            <Button size="sm" className="mt-3 bg-gradient-primary hover:opacity-90">
              Gerar Agora
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Reports List */}
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Relatórios Recentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {reports.map((report) => (
              <div
                key={report.id}
                className="border border-border/50 rounded-lg p-6 bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{report.title}</h3>
                      {getTypeBadge(report.type)}
                      {getStatusBadge(report.status)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{report.description}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(report.generatedAt).toLocaleDateString('pt-BR')}
                      </span>
                      <span>{report.pages} páginas</span>
                      <span>{report.format}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" className="gap-1">
                      <Eye className="w-4 h-4" />
                      Visualizar
                    </Button>
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90 gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </div>

                <div className="border-t border-border/50 pt-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Principais Insights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {report.insights.map((insight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {insight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Export Options */}
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="w-5 h-5 text-primary" />
            Opções de Exportação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="border border-border/50 rounded-lg p-4 text-center">
              <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-2">PDF Executivo</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Relatório resumido para gestores
              </p>
              <Button size="sm" variant="outline" className="w-full">
                Exportar PDF
              </Button>
            </div>

            <div className="border border-border/50 rounded-lg p-4 text-center">
              <BarChart3 className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-2">Excel Detalhado</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Dados brutos para análise técnica
              </p>
              <Button size="sm" variant="outline" className="w-full">
                Exportar Excel
              </Button>
            </div>

            <div className="border border-border/50 rounded-lg p-4 text-center">
              <PieChart className="w-8 h-8 text-quantum mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-2">Relatório Personalizado</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Configure métricas específicas
              </p>
              <Button size="sm" variant="outline" className="w-full">
                Personalizar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}