import { NavLink, useLocation } from "react-router-dom"
import { 
  BarChart3, 
  FileInput, 
  Settings, 
  Brain, 
  Atom, 
  FileText,
  Activity
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const items = [
  { title: "Visão Geral", url: "/", icon: BarChart3 },
  { title: "Nova Análise", url: "/nova-analise", icon: FileInput },
  { title: "Equipamentos", url: "/equipamentos", icon: Settings },
  { title: "ML", url: "/ml", icon: Brain },
  { title: "QML", url: "/qml", icon: Atom },
  { title: "Relatórios", url: "/relatorios", icon: FileText },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const isCollapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-primary text-primary-foreground font-medium shadow-glow" 
      : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-all duration-200"

  return (
    <Sidebar
      className={`${isCollapsed ? "w-16" : "w-64"} bg-gradient-card border-border/50 backdrop-blur-xl`}
      collapsible="icon"
    >
      <SidebarContent className="p-4">
        <div className="mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-quantum rounded-lg flex items-center justify-center animate-glow">
            <Activity className="w-5 h-5 text-quantum-foreground" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-lg font-bold bg-gradient-accent bg-clip-text text-transparent">
                PredictML
              </h1>
              <p className="text-xs text-muted-foreground">Quantum Analytics</p>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
            {!isCollapsed && "Dashboard"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-lg">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}