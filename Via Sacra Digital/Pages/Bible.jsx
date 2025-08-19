
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Book, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";
import { bibleBooks } from "../components/data/bibleBooks";
import { InvokeLLM } from "@/integrations/Core";

export default function BiblePage() {
    const [selectedBook, setSelectedBook] = useState("gn");
    const [selectedChapter, setSelectedChapter] = useState(1);
    const [verses, setVerses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        loadChapter();
    }, [selectedBook, selectedChapter]);

    const loadChapter = async () => {
        if (!selectedBook || !selectedChapter) return;
        setIsLoading(true);
        setIsPlaying(false);
        if (typeof speechSynthesis !== 'undefined') {
            speechSynthesis.cancel();
        }

        const apiUrl = `https://www.abibliadigital.com.br/api/verses/acf/${selectedBook}/${selectedChapter}`;

        const bibleApiResponseSchema = {
            type: "object",
            properties: {
                verses: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            number: { type: "number" },
                            text: { type: "string" }
                        },
                        required: ["number", "text"]
                    }
                }
            },
            required: ["verses"]
        };

        try {
            const data = await InvokeLLM({
                prompt: `Por favor, acesse a URL ${apiUrl} e retorne estritamente o conteúdo JSON.`,
                add_context_from_internet: true,
                response_json_schema: bibleApiResponseSchema
            });

            if (data && data.verses) {
                setVerses(data.verses);
            } else {
                setVerses([{ number: 1, text: "Capítulo não encontrado ou a API da Bíblia está indisponível no momento." }]);
            }
        } catch (error) {
            console.error("Erro ao carregar capítulo via LLM:", error);
            setVerses([{ number: 1, text: "Falha ao carregar o capítulo. Por favor, verifique sua conexão ou tente novamente mais tarde." }]);
        }
        setIsLoading(false);
    };

    const speakChapter = () => {
        if ('speechSynthesis' in window) {
            if (isPlaying) {
                speechSynthesis.cancel();
                setIsPlaying(false);
            } else {
                const text = verses.map(v => v.text).join(' ');
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'pt-BR';
                utterance.rate = 0.8;
                utterance.onend = () => setIsPlaying(false);
                speechSynthesis.speak(utterance);
                setIsPlaying(true);
            }
        }
    };

    const navigateChapter = (direction) => {
        const currentBookInfo = bibleBooks.find(b => b.abbrev.pt === selectedBook);
        const currentChapterCount = currentBookInfo.chapters;
        if (direction === 'prev' && selectedChapter > 1) {
            setSelectedChapter(selectedChapter - 1);
        } else if (direction === 'next' && selectedChapter < currentChapterCount) {
            setSelectedChapter(selectedChapter + 1);
        }
    };

    const handleBookChange = (abbrev) => {
        setSelectedBook(abbrev);
        setSelectedChapter(1); // Reset to chapter 1 when book changes
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50/20 via-white to-slate-50/20 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-theme-accent to-blue-500 rounded-full shadow-lg">
        <Book className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-theme-text-dark to-blue-600 bg-clip-text text-transparent">
        Bíblia Sagrada
        </h1>
        <p className="text-lg text-theme-text-light">Almeida Corrigida Fiel</p>
        </div>

        {/* Controles */}
        <Card className="catholic-shadow border-theme-border sticky top-4 z-10 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex gap-4 flex-1 w-full">
        <Select value={selectedBook} onValueChange={handleBookChange}>
        <SelectTrigger className="flex-1">
        <SelectValue placeholder="Selecione o livro" />
        </SelectTrigger>
        <SelectContent>
        {bibleBooks.map((book) => (
            <SelectItem key={book.abbrev.pt} value={book.abbrev.pt}>{book.name}</SelectItem>
        ))}
        </SelectContent>
        </Select>

        <Select value={selectedChapter.toString()} onValueChange={(val) => setSelectedChapter(parseInt(val))}>
        <SelectTrigger className="w-32">
        <SelectValue placeholder="Cap." />
        </SelectTrigger>
        <SelectContent>
        {Array.from({length: bibleBooks.find(b => b.abbrev.pt === selectedBook)?.chapters || 1}, (_, i) => (
            <SelectItem key={i + 1} value={(i + 1).toString()}>
            Cap. {i + 1}
            </SelectItem>
        ))}
        </SelectContent>
        </Select>
        </div>

        <div className="flex gap-2">
        <Button variant="outline" size="icon" onClick={() => navigateChapter('prev')} disabled={selectedChapter <= 1}>
        <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={speakChapter} className="text-theme-accent">
        {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>
        <Button variant="outline" size="icon" onClick={() => navigateChapter('next')} disabled={selectedChapter >= (bibleBooks.find(b => b.abbrev.pt === selectedBook)?.chapters || 1)}>
        <ChevronRight className="w-4 h-4" />
        </Button>
        </div>
        </div>
        </CardContent>
        </Card>

        {/* Conteúdo */}
        <Card className="catholic-shadow border-theme-border">
        <CardHeader className="bg-theme-primary/50">
        <CardTitle className="text-2xl scripture-font text-theme-text-dark">
        {bibleBooks.find(b => b.abbrev.pt === selectedBook)?.name} - Capítulo {selectedChapter}
        </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
        {isLoading ? (
            <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-theme-accent mx-auto"></div>
            <p className="text-theme-text-light mt-4">Carregando capítulo...</p>
            </div>
        ) : (
            <div className="scripture-font text-lg leading-relaxed text-slate-800 space-y-4">
            {verses.map((verse) => (
                <p key={verse.number}>
                <span className="font-bold text-theme-accent mr-2">{verse.number}</span>
                {verse.text}
                </p>
            ))}
            </div>
        )}
        </CardContent>
        </Card>

        {/* Navegação Inferior */}
        <div className="flex justify-between items-center">
        <Button variant="outline" onClick={() => navigateChapter('prev')} disabled={selectedChapter <= 1} className="flex items-center gap-2">
        <ChevronLeft className="w-4 h-4" /> Anterior
        </Button>
        <div className="text-sm text-theme-text-light">
        Cap. {selectedChapter} de {bibleBooks.find(b => b.abbrev.pt === selectedBook)?.chapters}
        </div>
        <Button variant="outline" onClick={() => navigateChapter('next')} disabled={selectedChapter >= (bibleBooks.find(b => b.abbrev.pt === selectedBook)?.chapters || 1)} className="flex items-center gap-2">
        Próximo <ChevronRight className="w-4 h-4" />
        </Button>
        </div>
        </div>
        </div>
    );
}
