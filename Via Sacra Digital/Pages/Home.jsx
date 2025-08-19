
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cross, Heart, Book, Calendar, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { User } from "@/entities/User";
import { DevotionalEntry } from "@/entities/DevotionalEntry";
import { getSaintOfTheDay } from "../components/data/saints"; // Corrected path
import SaintOfTheDay from "../components/home/SaintOfTheDay";

const dailyVerses = [
    "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. - João 3:16",
"Tudo posso naquele que me fortalece. - Filipenses 4:13",
"O Senhor é o meu pastor; nada me faltará. - Salmo 23:1",
"Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. - Provérbios 3:5",
"E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus. - Romanos 8:28"
];

export default function HomePage() {
    const [currentUser, setCurrentUser] = useState(null);
    const [todayVerse] = useState(dailyVerses[new Date().getDay()]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [devotionalStreak, setDevotionalStreak] = useState(0);
    const [saint, setSaint] = useState(null);

    useEffect(() => {
        loadUserData();
        setSaint(getSaintOfTheDay());
    }, []);

    const loadUserData = async () => {
        try {
            const user = await User.me();
            setCurrentUser(user);
            setDevotionalStreak(user.devotional_streak || 0);
        } catch (error) {
            console.log("Usuário não logado");
        }
    };

    const speakVerse = () => {
        if ('speechSynthesis' in window) {
            if (isPlaying) {
                speechSynthesis.cancel();
                setIsPlaying(false);
            } else {
                const utterance = new SpeechSynthesisUtterance(todayVerse);
                utterance.lang = 'pt-BR';
                utterance.rate = 0.8;
                utterance.onend = () => setIsPlaying(false);
                speechSynthesis.speak(utterance);
                setIsPlaying(true);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50/20 via-white to-amber-50/20 p-6">
        <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-theme-accent to-blue-500 rounded-full shadow-xl mb-4">
        <Cross className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-theme-text-dark via-blue-600 to-amber-600 bg-clip-text text-transparent">
        Bem-vindo à Fé Católica
        </h1>
        <p className="text-lg text-theme-text-light max-w-2xl mx-auto leading-relaxed">
        Um espaço sagrado para aprofundar sua fé, orar, estudar as Escrituras e crescer em comunidade católica.
        </p>
        </div>

        {/* Versículo do Dia e Santo do Dia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="catholic-shadow border-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-amber-900/20"></div>
        <CardHeader className="relative z-10">
        <CardTitle className="flex items-center justify-between text-xl">
        <span className="flex items-center gap-3">
        <Book className="w-6 h-6 text-amber-400" />
        Versículo do Dia
        </span>
        <Button
        variant="ghost"
        size="icon"
        onClick={speakVerse}
        className="text-amber-400 hover:bg-white/10"
        >
        {isPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </Button>
        </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
        <blockquote className="scripture-font text-lg md:text-xl italic leading-relaxed text-amber-50 border-l-4 border-amber-400 pl-6">
        "{todayVerse}"
        </blockquote>
        </CardContent>
        </Card>

        {saint && <SaintOfTheDay saint={saint} />}
        </div>

        {/* Status do Usuário */}
        {currentUser && (
            <Card className="catholic-shadow border-theme-border">
            <CardContent className="p-6">
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
            <h3 className="font-semibold text-theme-text-dark">Sua Jornada Espiritual</h3>
            <p className="text-theme-text-light">Sequência de devoção: {devotionalStreak} dias</p>
            </div>
            </div>
            <Link to={createPageUrl("Devotional")}>
            <Button className="bg-theme-accent hover:bg-blue-700">
            <Calendar className="w-4 h-4 mr-2" />
            Abrir Diário
            </Button>
            </Link>
            </div>
            </CardContent>
            </Card>
        )}

        {/* Menu Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Bíblia */}
        <Card className="catholic-shadow hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-blue-600 to-blue-700 text-white group cursor-pointer">
        <Link to={createPageUrl("Bible")} className="block h-full">
        <CardContent className="p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-white/30 transition-colors">
        <Book className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold">Bíblia Sagrada</h3>
        <p className="text-blue-100">Vulgata Católica completa com narração</p>
        </CardContent>
        </Link>
        </Card>

        {/* Orações */}
        <Card className="catholic-shadow hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-amber-500 to-amber-600 text-white group cursor-pointer">
        <Link to={createPageUrl("Prayers")} className="block h-full">
        <CardContent className="p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-white/30 transition-colors">
        <Heart className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold">Orações & Devoções</h3>
        <p className="text-amber-100">Coleção completa de orações católicas</p>
        </CardContent>
        </Link>
        </Card>

        {/* Rosário */}
        <Card className="catholic-shadow hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-purple-600 to-purple-700 text-white group cursor-pointer">
        <Link to={createPageUrl("Rosary")} className="block h-full">
        <CardContent className="p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-white/30 transition-colors">
        <Cross className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold">Rosário & Mistérios</h3>
        <p className="text-purple-100">Medite os mistérios do Santo Rosário</p>
        </CardContent>
        </Link>
        </Card>
        </div>

        {/* Recursos Adicionais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="catholic-shadow border-slate-200 hover:border-blue-300 transition-all duration-300">
        <CardHeader>
        <CardTitle className="text-slate-800 flex items-center gap-3">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
        <Calendar className="w-4 h-4 text-green-600" />
        </div>
        Recursos Espirituais
        </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
        <Link to={createPageUrl("CatholicAI")} className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
        <div className="font-medium text-slate-800">IA Católica</div>
        <div className="text-sm text-slate-600">Orientação espiritual personalizada</div>
        </Link>
        <Link to={createPageUrl("Music")} className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
        <div className="font-medium text-slate-800">Canto Gregoriano</div>
        <div className="text-sm text-slate-600">Música sacra para meditação</div>
        </Link>
        <Link to={createPageUrl("Forum")} className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
        <div className="font-medium text-slate-800">Fórum Católico</div>
        <div className="text-sm text-slate-600">Comunidade de fé e discussão</div>
        </Link>
        </CardContent>
        </Card>

        <Card className="catholic-shadow border-slate-200 hover:border-amber-300 transition-all duration-300">
        <CardHeader>
        <CardTitle className="text-slate-800 flex items-center gap-3">
        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
        <Heart className="w-4 h-4 text-amber-600" />
        </div>
        Apoie Nossa Missão
        </CardTitle>
        </CardHeader>
        <CardContent>
        <p className="text-slate-600 mb-4">
        Ajude-nos a manter este espaço sagrado ativo e acessível para todos os fiéis católicos.
        </p>
        <Link to={createPageUrl("Donations")}>
        <Button className="w-full bg-amber-600 hover:bg-amber-700">
        Fazer Doação
        </Button>
        </Link>
        </CardContent>
        </Card>
        </div>
        </div>
        </div>
    );
}
