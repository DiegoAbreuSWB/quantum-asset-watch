import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Upload, 
  FileSpreadsheet, 
  Database, 
  Activity,
  BarChart3,
  Info,
  CheckCircle,
  AlertCircle
} from "lucide-react"

export default function NovaAnalise() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
          Nova Análise
        </h1>
        <p className="text-muted-foreground">
          Upload de dados e análise exploratória automática
        </p>
      </div>

      {/* Upload Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 bg-gradient-card border-border/50 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-primary" />
              Upload de Dados
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileSpreadsheet className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-medium text-foreground">
                    Arraste seus arquivos CSV aqui
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    ou clique para selecionar
                  </p>
                </div>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Selecionar Arquivos
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Database className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Conexão IoT</p>
                      <p className="text-xs text-muted-foreground">
                        Conectar sensores em tempo real
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Activity className="w-8 h-8 text-quantum" />
                    <div>
                      <p className="font-medium text-foreground">API Integration</p>
                      <p className="text-xs text-muted-foreground">
                        Importar via REST API
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {uploadProgress > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Processando...</span>
                  <span className="text-sm font-medium text-foreground">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Última Análise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Dataset</span>
                <Badge variant="secondary">turbina_dados.csv</Badge>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Registros</span>
                <span className="font-medium text-foreground">20,847</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Features</span>
                <span className="font-medium text-foreground">12</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Valores Nulos</span>
                <span className="font-medium text-warning">3.2%</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Qualidade</span>
                <Badge className="bg-success/20 text-success border-success/30">
                  Excelente
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Results */}
      {analysisComplete && (
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Informações do Dataset
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Estrutura dos Dados</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• 20.847 linhas × 12 colunas</p>
                    <p>• Tipos: 8 numeric, 3 categorical, 1 datetime</p>
                    <p>• Memória utilizada: 2.1 MB</p>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Qualidade dos Dados</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Valores únicos: 98.7%</p>
                    <p>• Duplicatas: 23 registros (0.1%)</p>
                    <p>• Outliers detectados: 156 (0.7%)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                Validações Automáticas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm text-foreground">Schema válido</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm text-foreground">Timestamps consistentes</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-warning" />
                  <span className="text-sm text-foreground">Valores faltantes detectados</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm text-foreground">Distribuição normal</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm text-foreground">Correlações identificadas</span>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  Iniciar Análise Preditiva
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Mock trigger for demo */}
      <div className="flex justify-center">
        <Button 
          variant="outline" 
          onClick={() => {
            setUploadProgress(100)
            setTimeout(() => setAnalysisComplete(true), 1000)
          }}
          className="bg-muted/50 hover:bg-muted"
        >
          Simular Upload e Análise
        </Button>
      </div>
    </div>
  )
}