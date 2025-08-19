
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
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
} from "@/components/ui/sidebar";

const navigationItems = [
    {
        title: "Início",
        url: createPageUrl("Home"),
        icon: Home,
    },
{
    title: "Bíblia Sagrada",
    url: createPageUrl("Bible"),
    icon: Book,
},
{
    title: "Orações & Devoções",
    url: createPageUrl("Prayers"),
    icon: Heart,
},
{
    title: "Rosário & Mistérios",
    url: createPageUrl("Rosary"),
    icon: Cross,
},
{
    title: "IA Católica",
    url: createPageUrl("CatholicAI"),
    icon: Sparkles,
},
{
    title: "Canto Gregoriano",
    url: createPageUrl("Music"),
    icon: Music,
},
{
    title: "Diário Devocional",
    url: createPageUrl("Devotional"),
    icon: Calendar,
},
{
    title: "Fórum Católico",
    url: createPageUrl("Forum"),
    icon: MessageCircle,
},
{
    title: "Apoie a Obra",
    url: createPageUrl("Donations"),
    icon: DollarSign,
},
{
    title: "Paróquia São João",
    url: createPageUrl("Parish"),
    icon: Users,
},
];

export default function Layout({ children, currentPageName }) {
    const location = useLocation();

    return (
        <SidebarProvider>
        <style>{`
            :root {
                --theme-primary: #eef2ff;    /* Indigo-50 - Fundo de elementos sutil */
                --theme-secondary: #b0e0f7ff;  /* Amber-50 - Destaques secundários quentes */
                --theme-accent: #d97706;    /* Amber-600 - Dourado/Âmbar vibrante para acentos */
                --theme-accent-2: #3730a3;  /* Indigo-800 - Azul profundo para botões e links */
                --theme-text-dark: #1e1b4b; /* Indigo-950 - Texto principal quase preto */
                --theme-text-light: #475569;/* Slate-600 - Texto secundário */
                --theme-bg: #f8fafc;        /* Slate-50 - Fundo geral limpo */
                --theme-border: #e2e8f0;    /* Slate-200 - Bordas suaves */
            }

            body {
                font-family: 'Inter', sans-serif;
                background-color: var(--theme-bg);
                color: var(--theme-text-light);
            }

            .scripture-font {
                font-family: 'Crimson Text', 'Times New Roman', serif;
                line-height: 1.8;
            }

            .catholic-shadow {
                box-shadow: 0 4px 15px -3px rgba(30, 58, 138, 0.08), 0 4px 6px -2px rgba(30, 58, 138, 0.05);
            }
            `}</style>

            <div className="min-h-screen flex w-full bg-theme-bg">
            <Sidebar className="border-r border-theme-border bg-white/80 backdrop-blur-sm">
            <SidebarHeader className="border-b border-theme-border p-6">
            <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-theme-accent-2 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Cross className="w-7 h-7 text-white" />
            </div>
            <div>
            <h2 className="font-bold text-lg text-theme-text-dark">Fé Católica</h2>
            <p className="text-xs text-theme-text-light">Paróquia São João</p>
            </div>
            </div>
            </SidebarHeader>

            <SidebarContent className="p-3">
            <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-3">
            Navegação
            </SidebarGroupLabel>
            <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
            {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                asChild
                className={`hover:bg-theme-primary hover:text-theme-text-dark transition-all duration-300 rounded-xl mb-1 group ${
                    location.pathname === item.url
                    ? 'bg-theme-primary text-theme-accent-2 font-semibold shadow-inner'
                    : 'text-slate-700'
                }`}
                >
                <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                <item.icon className={`w-5 h-5 ${
                    location.pathname === item.url
                    ? 'text-theme-accent-2'
                    : 'text-slate-500 group-hover:text-theme-text-dark'
                } transition-colors duration-300`} />
                <span className="font-medium text-sm">{item.title}</span>
                </Link>
                </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
            </SidebarMenu>
            </SidebarGroupContent>
            </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-theme-border p-4 bg-slate-50/50">
            <div className="text-center space-y-2">
            <div className="text-xs text-slate-500 font-medium">
            Desenvolvido por:
            </div>
            <div className="text-xs text-indigo-800 font-semibold">
            Davi Pereira Souza
            </div>
            <div className="text-xs text-indigo-800 font-semibold">
            Antonio A. Meloni
            </div>
            <div className="text-xs text-slate-400 mt-2">
            Ad Majorem Dei Gloriam
            </div>
            </div>
            </SidebarFooter>
            </Sidebar>

            <main className="flex-1 flex flex-col">
            <header className="bg-white/70 backdrop-blur-sm border-b border-theme-border px-6 py-4 md:hidden">
            <div className="flex items-center gap-4">
            <SidebarTrigger className="hover:bg-theme-primary p-2 rounded-lg transition-colors duration-200" />
            <h1 className="text-xl font-bold text-theme-text-dark">Fé Católica</h1>
            </div>
            </header>

            <div className="flex-1 overflow-auto">
            {children}
            </div>
            </main>
            </div>
            </SidebarProvider>
    );
}
