import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Search, Volume2, VolumeX, BookOpen } from "lucide-react";
import { Prayer } from "@/entities/Prayer";

export default function PrayersPage() {
    const [prayers, setPrayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("oracao_diaria");

    useEffect(() => {
        loadPrayers();
    }, []);

    const loadPrayers = async () => {
        const prayersList = await Prayer.list();
        setPrayers(prayersList);
    };

    const speakPrayer = (prayer) => {
        if ('speechSynthesis' in window) {
            if (currentlyPlaying === prayer.id) {
                speechSynthesis.cancel();
                setCurrentlyPlaying(null);
            } else {
                speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(prayer.content);
                utterance.lang = 'pt-BR';
                utterance.rate = 0.7;
                utterance.onend = () => setCurrentlyPlaying(null);
                speechSynthesis.speak(utterance);
                setCurrentlyPlaying(prayer.id);
            }
        }
    };

    const filteredPrayers = prayers.filter(prayer =>
    prayer.category === selectedCategory &&
    (prayer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prayer.content.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50/50 via-white to-purple-50/30 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full shadow-lg">
        <Heart className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-700 to-purple-600 bg-clip-text text-transparent">
        Orações & Devoções
        </h1>
        <p className="text-lg text-slate-600">Coleção de orações católicas tradicionais</p>
        </div>

        {/* Busca */}
        <Card className="catholic-shadow border-rose-100">
        <CardContent className="p-4">
        <div className="flex gap-3">
        <Input
        placeholder="Buscar orações..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1"
        />
        <Button variant="outline">
        <Search className="w-4 h-4" />
        </Button>
        </div>
        </CardContent>
        </Card>

        {/* Categorias */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
        <TabsTrigger value="oracao_diaria">Diárias</TabsTrigger>
        <TabsTrigger value="rosario">Rosário</TabsTrigger>
        <TabsTrigger value="novena">Novenas</TabsTrigger>
        <TabsTrigger value="ladainha">Ladainhas</TabsTrigger>
        <TabsTrigger value="tradicional">Tradicionais</TabsTrigger>
        <TabsTrigger value="devocional">Devocionais</TabsTrigger>
        </TabsList>

        {/* Conteúdo das Orações */}
        <div className="space-y-4 mt-6">
        {filteredPrayers.length > 0 ? (
            filteredPrayers.map((prayer) => (
                <Card key={prayer.id} className="catholic-shadow border-slate-200 hover:border-rose-300 transition-all">
                <CardHeader>
                <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-rose-600" />
                <span className="text-slate-800">{prayer.name}</span>
                </div>
                <Button
                variant="ghost"
                size="icon"
                onClick={() => speakPrayer(prayer)}
                className="text-rose-600 hover:bg-rose-50"
                >
                {currentlyPlaying === prayer.id ?
                    <VolumeX className="w-5 h-5" /> :
                    <Volume2 className="w-5 h-5" />
                }
                </Button>
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="scripture-font text-lg leading-relaxed text-slate-700 whitespace-pre-line">
                {prayer.content}
                </div>
                </CardContent>
                </Card>
            ))
        ) : (
            <Card className="catholic-shadow border-slate-200">
            <CardContent className="p-12 text-center">
            <Heart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">
            Nenhuma oração encontrada
            </h3>
            <p className="text-slate-500">
            {searchTerm ? 'Tente uma busca diferente' : 'Esta categoria ainda não possui orações cadastradas'}
            </p>
            </CardContent>
            </Card>
        )}
        </div>
        </Tabs>
        </div>
        </div>
    );
}
