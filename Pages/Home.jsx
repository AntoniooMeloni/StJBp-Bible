
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../src/components/ui/card";
import { Button } from "../src/components/ui/button";
import { Cross, Heart, Book, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { User } from "../Entities/User";
import { DevotionalEntry } from "../Entities/DevotionalEntry";
import { getDailyVerse } from "../utils";
import AudioPlayer from "../src/components/ui/audio-player";

export default function HomePage() {
    const [currentUser, setCurrentUser] = useState(null);
    const [todayVerse, setTodayVerse] = useState("");
    const [devotionalStreak, setDevotionalStreak] = useState(0);
    const [isLoadingVerse, setIsLoadingVerse] = useState(true);

    useEffect(() => {
        loadUserData();
        loadDailyVerse();
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

    const loadDailyVerse = async () => {
        try {
            setIsLoadingVerse(true);
            const verse = await getDailyVerse();
            setTodayVerse(verse);
        } catch (error) {
            console.error("Erro ao carregar versículo do dia:", error);
            setTodayVerse("Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. - João 3:16");
        } finally {
            setIsLoadingVerse(false);
        }
    };



    return (
        <div className="min-h-screen p-6 bg-crosses-css">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-28 h-28 rounded-full shadow-2xl mb-6 overflow-hidden border-4 border-medieval-gold bg-white p-0">
                        <img 
                            src="/images/logo.png" 
                            alt="Fé Católica Logo" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold medieval-title">
                        Bem-vindo à Fé Católica
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed text-on-light">
                        Um espaço sagrado para aprofundar sua fé, orar, estudar as Escrituras e crescer em comunidade católica.
                    </p>
                </div>

                {/* Versículo do Dia */}
                <Card className="medieval-container medieval-gradient-primary text-medieval-white overflow-hidden relative">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between text-xl text-medieval-white">
                            <span className="flex items-center gap-3">
                                <Book className="w-6 h-6 medieval-icon-on-dark" />
                                Versículo do Dia
                            </span>

                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLoadingVerse ? (
                            <div className="animate-pulse">
                                <div className="h-6 bg-medieval-blue rounded mb-2"></div>
                                <div className="h-4 bg-medieval-blue rounded w-3/4"></div>
                            </div>
                        ) : (
                            <>
                                <blockquote className="text-lg md:text-xl italic leading-relaxed text-medieval-white border-l-4 border-medieval-gold pl-6 mb-4">
                                    "{todayVerse}"
                                </blockquote>
                                <AudioPlayer 
                                    text={todayVerse} 
                                    language="pt-BR" 
                                    showControls={false}
                                    className="mt-4"
                                />
                            </>
                        )}
                    </CardContent>
                </Card>

                {/* Menu Principal */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Bíblia */}
                    <Card className="hover:scale-105 transition-all duration-300 border-2 border-medieval-gold text-white group cursor-pointer medieval-gradient-primary">
                        <Link to="/bible" className="block h-full">
                            <CardContent className="p-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-white/30 transition-colors border border-medieval-gold">
                                    <Book className="w-8 h-8 medieval-icon" />
                                </div>
                                <h3 className="text-xl font-bold">Bíblia Sagrada</h3>
                                <p className="text-white/80">Vulgata Católica completa com narração</p>
                            </CardContent>
                        </Link>
                    </Card>

                    {/* Orações */}
                    <Card className="hover:scale-105 transition-all duration-300 border-2 border-medieval-gold text-white group cursor-pointer medieval-gradient-accent">
                        <Link to="/prayer" className="block h-full">
                            <CardContent className="p-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-white/30 transition-colors border border-medieval-gold">
                                    <Heart className="w-8 h-8 medieval-icon" />
                                </div>
                                <h3 className="text-xl font-bold">Orações & Devoções</h3>
                                <p className="text-white/80">Coleção completa de orações católicas</p>
                            </CardContent>
                        </Link>
                    </Card>

                    {/* Rosário */}
                    <Card className="hover:scale-105 transition-all duration-300 border-2 border-medieval-gold text-white group cursor-pointer medieval-gradient-secondary">
                        <Link to="/rosary" className="block h-full">
                            <CardContent className="p-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-white/30 transition-colors border border-medieval-gold">
                                    <Cross className="w-8 h-8 medieval-icon" />
                                </div>
                                <h3 className="text-xl font-bold">Rosário & Mistérios</h3>
                                <p className="text-white/80">Medite os mistérios do Santo Rosário</p>
                            </CardContent>
                        </Link>
                    </Card>
                </div>

                {/* Recursos Adicionais */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="transition-all duration-300 medieval-container">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-on-dark">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-medieval-blue text-white border border-medieval-gold">
                                    <Calendar className="w-4 h-4" />
                                </div>
                                Recursos Espirituais
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Link to="/catholic-ai" className="block p-3 rounded-lg transition-colors bg-medieval-white hover:bg-medieval-cream border border-medieval-blue">
                                <div className="font-medium text-medieval-black">IA Católica</div>
                                <div className="text-sm text-on-light">Orientação espiritual personalizada</div>
                            </Link>
                            <Link to="/music" className="block p-3 rounded-lg transition-colors bg-medieval-white hover:bg-medieval-cream border border-medieval-blue">
                                <div className="font-medium text-medieval-black">Canto Gregoriano</div>
                                <div className="text-sm text-on-light">Música sacra para meditação</div>
                            </Link>
                            <Link to="/forum" className="block p-3 rounded-lg transition-colors bg-medieval-white hover:bg-medieval-cream border border-medieval-blue">
                                <div className="font-medium text-medieval-black">Fórum Católico</div>
                                <div className="text-sm text-on-light">Comunidade de fé e discussão</div>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="transition-all duration-300 medieval-container">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-on-dark">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-medieval-red text-white border border-medieval-gold">
                                    <Heart className="w-4 h-4" />
                                </div>
                                Apoie Nossa Missão
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-on-dark">
                                Ajude-nos a manter este espaço sagrado ativo e acessível para todos os fiéis católicos.
                            </p>
                            <Link to="/donations">
                                <Button variant="primary" className="w-full">
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
