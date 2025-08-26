import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../src/components/ui/card";
import { Button } from "../src/components/ui/button";
import { Input } from "../src/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../src/components/ui/tabs";
import { Heart, Search, BookOpen, Languages } from "lucide-react";
import { Prayer } from "../Entities/Prayer";
import AudioPlayer from "../src/components/ui/audio-player";

export default function PrayersPage() {
    const [prayers, setPrayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("tradicional");
    const [showLatin, setShowLatin] = useState(false);

    useEffect(() => {
        loadPrayers();
    }, []);

    const loadPrayers = async () => {
        const prayersList = await Prayer.list();
        setPrayers(prayersList);
    };



    const filteredPrayers = prayers.filter(prayer =>
        prayer.category === selectedCategory &&
        (prayer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prayer.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (prayer.contentLatin && prayer.contentLatin.toLowerCase().includes(searchTerm.toLowerCase())))
    );

    return (
        <div className="min-h-screen p-6 bg-crosses-css">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Header */}
                <div className="text-center space-y-4 mb-8">
                                                    <div className="inline-flex items-center justify-center w-28 h-28 rounded-full shadow-2xl mb-6 overflow-hidden border-4 border-medieval-gold bg-white p-0">
                                    <img 
                                        src="/images/logo.png" 
                                        alt="Fé Católica Logo" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                                    <h1 className="text-4xl md:text-5xl font-bold medieval-title">
                                    Orações & Devoções
                                </h1>
                                <p className="text-lg max-w-2xl mx-auto leading-relaxed medieval-title">
                                    Coleção de orações católicas tradicionais e do Opus Dei
                                </p>
                </div>

                {/* Botão para alternar idioma */}
                <div className="flex justify-center">
                    <Button
                        onClick={() => setShowLatin(!showLatin)}
                        variant="outline"
                        className="bg-white hover:bg-gray-50 border-2 border-medieval-gold text-medieval-black px-8 py-3 text-lg flex items-center gap-2 transition-colors"
                    >
                        <Languages className="w-5 h-5 text-medieval-gold" />
                        {showLatin ? "Ver em Português" : "Ver em Latim"}
                    </Button>
                </div>

                {/* Busca */}
                <Card className="bg-white shadow-lg border-2 border-medieval-gold">
                    <CardContent className="p-4">
                        <div className="flex gap-3">
                            <Input
                                placeholder="Buscar orações..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="flex-1 border-2 border-medieval-gold focus:ring-2 focus:ring-medieval-gold bg-white text-medieval-black placeholder-gray-500"
                            />
                            <Button 
                                variant="outline"
                                className="border-2 border-medieval-gold text-medieval-black hover:bg-gray-50 transition-colors"
                            >
                                <Search className="w-4 h-4 text-medieval-gold" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Categorias */}
                <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                    <TabsList className="flex flex-wrap w-full bg-white border-2 border-medieval-gold rounded-lg overflow-hidden">
                        <TabsTrigger 
                            value="tradicional"
                            className="flex-1 min-w-0 px-3 py-2 data-[state=active]:bg-medieval-gold data-[state=active]:text-black font-bold text-black hover:bg-gray-50 transition-colors text-center"
                        >
                            Tradicionais
                        </TabsTrigger>
                        <TabsTrigger 
                            value="devocional"
                            className="flex-1 min-w-0 px-3 py-2 data-[state=active]:bg-medieval-gold data-[state=active]:text-black font-bold text-black hover:bg-gray-50 transition-colors text-center"
                        >
                            Devocionais
                        </TabsTrigger>
                        <TabsTrigger 
                            value="oracao_diaria"
                            className="flex-1 min-w-0 px-3 py-2 data-[state=active]:bg-medieval-gold data-[state=active]:text-black font-bold text-black hover:bg-gray-50 transition-colors text-center"
                        >
                            Diárias
                        </TabsTrigger>
                        <TabsTrigger 
                            value="rosario"
                            className="flex-1 min-w-0 px-3 py-2 data-[state=active]:bg-medieval-gold data-[state=active]:text-black font-bold text-black hover:bg-gray-50 transition-colors text-center"
                        >
                            Rosário
                        </TabsTrigger>
                        <TabsTrigger 
                            value="novena"
                            className="flex-1 min-w-0 px-3 py-2 data-[state=active]:bg-medieval-gold data-[state=active]:text-black font-bold text-black hover:bg-gray-50 transition-colors text-center"
                        >
                            Novenas
                        </TabsTrigger>
                        <TabsTrigger 
                            value="ladainha"
                            className="flex-1 min-w-0 px-3 py-2 data-[state=active]:bg-medieval-gold data-[state=active]:text-black font-bold text-black hover:bg-gray-50 transition-colors text-center"
                        >
                            Ladainhas
                        </TabsTrigger>
                    </TabsList>

                    {/* Conteúdo das Orações */}
                    <div className="space-y-4 mt-6">
                        {filteredPrayers.length > 0 ? (
                            filteredPrayers.map((prayer) => (
                                <Card key={prayer.id} className="bg-white shadow-lg border-2 border-medieval-gold hover:border-medieval-red transition-all">
                                    <CardHeader>
                                        <CardTitle className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <BookOpen className="w-5 h-5 text-medieval-gold" />
                                                <span className="text-white font-bold text-lg">{prayer.name}</span>
                                                {prayer.contentLatin && (
                                                                                                    <span className="text-xs bg-medieval-gold text-black px-2 py-1 rounded-full font-bold">
                                                    {showLatin ? "Latim" : "Português"}
                                                </span>
                                                )}
                                            </div>
                                            <div className="flex gap-2">
                                                {prayer.contentLatin && (
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => setShowLatin(!showLatin)}
                                                        className="text-medieval-blue hover:bg-gray-50 border border-medieval-gold"
                                                        title={showLatin ? "Ver em Português" : "Ver em Latim"}
                                                    >
                                                        <Languages className="w-4 h-4" />
                                                    </Button>
                                                )}
                                                <AudioPlayer
                                                    text={showLatin && prayer.contentLatin ? prayer.contentLatin : prayer.content}
                                                    language={showLatin ? 'la' : 'pt-BR'}
                                                    showControls={false}
                                                    className="text-medieval-red hover:bg-gray-50"
                                                />
                                            </div>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="scripture-font text-lg leading-relaxed text-white font-medium whitespace-pre-line">
                                            {showLatin && prayer.contentLatin ? prayer.contentLatin : prayer.content}
                                        </div>
                                        {prayer.contentLatin && (
                                            <div className="mt-4 p-3 bg-medieval-blue/20 rounded-lg border-l-4 border-medieval-blue">
                                                <p className="text-sm text-white font-medium">
                                                    <strong>Fonte:</strong> Orações do Opus Dei - {showLatin ? "Versão em Latim" : "Versão em Português"}
                                                </p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <Card className="bg-white shadow-lg border-2 border-medieval-gold">
                                <CardContent className="p-12 text-center">
                                    <Heart className="w-16 h-16 text-medieval-gold mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-black mb-2">
                                        Nenhuma oração encontrada
                                    </h3>
                                    <p className="text-black font-medium">
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
