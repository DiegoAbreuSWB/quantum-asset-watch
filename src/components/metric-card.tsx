import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  description?: string
  trend?: "up" | "down" | "stable"
  trendValue?: string
  variant?: "default" | "success" | "warning" | "destructive" | "quantum"
  className?: string
}

export function MetricCard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  trendValue,
  variant = "default",
  className
}: MetricCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "success":
        return "border-success/30 bg-success/5 shadow-[0_0_20px_hsl(var(--success)/0.1)]"
      case "warning":
        return "border-warning/30 bg-warning/5 shadow-[0_0_20px_hsl(var(--warning)/0.1)]"
      case "destructive":
        return "border-destructive/30 bg-destructive/5 shadow-[0_0_20px_hsl(var(--destructive)/0.1)]"
      case "quantum":
        return "border-quantum/30 bg-quantum/5 shadow-quantum"
      default:
        return "border-primary/20 bg-gradient-card shadow-card"
    }
  }

  const getIconClasses = () => {
    switch (variant) {
      case "success":
        return "text-success"
      case "warning":
        return "text-warning"
      case "destructive":
        return "text-destructive"
      case "quantum":
        return "text-quantum"
      default:
        return "text-primary"
    }
  }

  return (
    <Card className={cn(
      "transition-all duration-300 hover:scale-105 hover:shadow-lg border backdrop-blur-sm",
      getVariantClasses(),
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={cn("h-5 w-5", getIconClasses())} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">
          {value}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
        )}
        {trend && trendValue && (
          <div className="flex items-center space-x-1 text-xs mt-2">
            <span className={cn(
              "font-medium",
              trend === "up" ? "text-success" : 
              trend === "down" ? "text-destructive" : 
              "text-muted-foreground"
            )}>
              {trend === "up" ? "↗" : trend === "down" ? "↘" : "→"} {trendValue}
            </span>
            <span className="text-muted-foreground">vs período anterior</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}