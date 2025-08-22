import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Settings, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Eye,
  Wrench
} from "lucide-react"

const equipments = [
  {
    id: "TUR-001",
    name: "Turbina Eólica #1",
    location: "Setor A - Norte",
    status: "Operacional",
    lastMaintenance: "2024-01-15",
    riskLevel: "baixo",
    confidence: "94%",
    nextMaintenance: "2024-03-15"
  },
  {
    id: "BOM-034",
    name: "Bomba Centrífuga #34",
    location: "Setor B - Sul",
    status: "Atenção",
    lastMaintenance: "2024-01-10",
    riskLevel: "medio",
    confidence: "87%",
    nextMaintenance: "2024-02-10"
  },
  {
    id: "MOT-078",
    name: "Motor Elétrico #78",
    location: "Setor C - Leste",
    status: "Crítico",
    lastMaintenance: "2023-12-20",
    riskLevel: "alto",
    confidence: "91%",
    nextMaintenance: "Imediato"
  },
  {
    id: "COM-156",
    name: "Compressor #156",
    location: "Setor A - Centro",
    status: "Operacional", 
    lastMaintenance: "2024-01-20",
    riskLevel: "baixo",
    confidence: "96%",
    nextMaintenance: "2024-04-20"
  },
  {
    id: "TUR-002",
    name: "Turbina Eólica #2",
    location: "Setor A - Norte",
    status: "Manutenção",
    lastMaintenance: "2024-01-22",
    riskLevel: "baixo",
    confidence: "92%",
    nextMaintenance: "2024-07-22"
  }
]

const getRiskBadge = (risk: string) => {
  switch (risk) {
    case "baixo":
      return <Badge className="bg-success/20 text-success border-success/30">Baixo</Badge>
    case "medio":
      return <Badge className="bg-warning/20 text-warning border-warning/30">Médio</Badge>
    case "alto":
      return <Badge variant="destructive" className="bg-destructive/20">Alto</Badge>
    default:
      return <Badge variant="secondary">N/A</Badge>
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Operacional":
      return <Badge className="bg-success/20 text-success border-success/30">Operacional</Badge>
    case "Atenção":
      return <Badge className="bg-warning/20 text-warning border-warning/30">Atenção</Badge>
    case "Crítico":
      return <Badge variant="destructive" className="bg-destructive/20">Crítico</Badge>
    case "Manutenção":
      return <Badge className="bg-primary/20 text-primary border-primary/30">Manutenção</Badge>
    default:
      return <Badge variant="secondary">N/A</Badge>
  }
}

export default function Equipamentos() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
          Equipamentos
        </h1>
        <p className="text-muted-foreground">
          Monitoramento e gestão de ativos industriais
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">127</p>
                <p className="text-sm text-muted-foreground">Operacionais</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-warning/20 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">14</p>
                <p className="text-sm text-muted-foreground">Em Atenção</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-destructive/20 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">4</p>
                <p className="text-sm text-muted-foreground">Críticos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-sm text-muted-foreground">Em Manutenção</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Equipment List */}
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-primary" />
            Lista de Equipamentos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {equipments.map((equipment) => (
              <div
                key={equipment.id}
                className="border border-border/50 rounded-lg p-6 bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="grid gap-4 md:grid-cols-6 items-center">
                  <div className="md:col-span-2">
                    <h3 className="font-semibold text-foreground">{equipment.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {equipment.location}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">ID: {equipment.id}</p>
                  </div>

                  <div className="text-center">
                    {getStatusBadge(equipment.status)}
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Risco Preditivo</p>
                    {getRiskBadge(equipment.riskLevel)}
                    <p className="text-xs text-muted-foreground mt-1">
                      Confiança: {equipment.confidence}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center">
                      <Clock className="w-3 h-3" />
                      Última Manutenção
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {new Date(equipment.lastMaintenance).toLocaleDateString('pt-BR')}
                    </p>
                  </div>

                  <div className="text-center">
                    <Button size="sm" variant="outline" className="gap-1">
                      <Eye className="w-4 h-4" />
                      Detalhes
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}