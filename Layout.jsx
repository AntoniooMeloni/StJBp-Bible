
import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { createPageUrl } from "./utils";
import {
    Home, Book, Heart, Music, MessageCircle,
    DollarSign, BookOpen, Users, Cross,
    Sparkles, Calendar
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarProvider,
    SidebarTrigger,
} from "./src/components/ui/sidebar";

const navigationItems = [
    {
        title: "Início",
        url: "/",
        icon: Home,
    },
    {
        title: "Bíblia Sagrada",
        url: "/bible",
        icon: Book,
    },
    {
        title: "Orações & Devoções",
        url: "/prayer",
        icon: Heart,
    },
    {
        title: "Rosário & Mistérios",
        url: "/rosary",
        icon: Cross,
    },
    {
        title: "IA Católica",
        url: "/catholic-ai",
        icon: Sparkles,
    },
    {
        title: "Canto Gregoriano",
        url: "/music",
        icon: Music,
    },
    {
        title: "Diário Devocional",
        url: "/devotional",
        icon: Calendar,
    },
    {
        title: "Fórum Católico",
        url: "/forum",
        icon: MessageCircle,
    },
    {
        title: "Apoie a Obra",
        url: "/donations",
        icon: DollarSign,
    },
    {
        title: "Paróquia São João",
        url: "/parish",
        icon: Users,
    },
];

export default function Layout() {
    const location = useLocation();

    return (
        <SidebarProvider>
            <div className="min-h-screen flex w-full medieval-gradient-primary">
                {/* Sidebar - sempre visível em desktop, condicional em mobile */}
                <Sidebar className="border-r-2 border-medieval-gold w-64 min-w-64 max-w-64">
                    <SidebarHeader className="border-b-2 border-medieval-gold p-3 bg-stained-glass">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg overflow-hidden border-2 border-medieval-gold flex-shrink-0 bg-white p-1">
                                <img 
                                    src="/images/logo.png" 
                                    alt="Fé Católica Logo" 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h2 className="font-bold text-sm medieval-title-on-dark leading-tight">Fé Católica</h2>
                                <p className="text-xs text-medieval-white leading-tight">Paróquia São João</p>
                            </div>
                        </div>
                    </SidebarHeader>

                    <SidebarContent className="p-3">
                        <SidebarGroup>
                            <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider px-3 py-3 medieval-subtitle-on-dark">
                                Navegação
                            </SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu className="space-y-1">
                                    {navigationItems.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton
                                                className={`hover:text-medieval-gold transition-all duration-300 rounded-xl mb-1 group medieval-nav-item ${
                                                    location.pathname === item.url
                                                        ? 'font-semibold shadow-inner medieval-nav-active'
                                                        : ''
                                                }`}
                                                style={{
                                                    backgroundColor: location.pathname === item.url ? 'var(--theme-medieval-red)' : 'transparent',
                                                    color: location.pathname === item.url ? 'white' : 'var(--theme-medieval-white)'
                                                }}
                                            >
                                                <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                                                    <item.icon className={`w-5 h-5 transition-colors duration-300`} 
                                                        style={{
                                                            color: location.pathname === item.url ? 'white' : 'var(--theme-medieval-white)'
                                                        }}
                                                    />
                                                    <span className="font-medium text-sm">{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>

                    <SidebarFooter className="border-t-2 border-medieval-gold p-4 bg-white">
                        <div className="text-center space-y-3">
                            <div className="text-sm font-bold text-medieval-black">
                                Desenvolvido por:
                            </div>
                            <div className="text-sm font-semibold text-medieval-black">
                                Davi Pereira Souza
                            </div>
                            <div className="text-sm font-semibold text-medieval-black">
                                Antonio A. Meloni
                            </div>
                            <div className="text-sm mt-3 text-medieval-red font-bold">
                                Ad Majorem Dei Gloriam
                            </div>
                        </div>
                    </SidebarFooter>
                </Sidebar>

                {/* Main content - sem margem em mobile, com margem em desktop */}
                <main className="flex-1 flex flex-col w-full md:w-auto ml-0 md:ml-0">
                    <header className="backdrop-blur-sm border-b-2 border-medieval-gold px-6 py-4 md:hidden medieval-nav">
                        <div className="flex items-center gap-4">
                            <SidebarTrigger className="p-2 rounded-lg transition-colors duration-200 medieval-button-primary" />
                            <div className="flex items-center gap-3">
                                <img 
                                    src="/images/logo.png" 
                                    alt="Fé Católica Logo" 
                                    className="w-10 h-10 rounded-lg object-contain border-2 border-medieval-gold bg-white p-1 shadow-lg"
                                />
                                <h1 className="text-xl font-bold medieval-title-on-dark">Fé Católica</h1>
                            </div>
                        </div>
                    </header>

                    <div className="flex-1 overflow-auto bg-medieval-cream">
                        <Outlet />
                    </div>
                </main>
            </div>
        </SidebarProvider>
    );
}
