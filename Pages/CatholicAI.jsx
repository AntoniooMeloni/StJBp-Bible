import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../src/components/ui/card";
import { Button } from "../src/components/ui/button";
import { Input } from "../src/components/ui/input";
import { Sparkles, Send, Cross, User, Bot, BookOpen, Heart, Lightbulb } from "lucide-react";
import { InvokeLLM, generatePrayer, generateDevotional, generateBibleInsight, generateSpiritualGuidance } from "../Integrations/Core";

export default function CatholicAIPage() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("general");

    const categories = [
        { id: "general", name: "Geral", icon: Sparkles, description: "Perguntas gerais sobre fé" },
        { id: "prayer", name: "Orações", icon: Heart, description: "Geração de orações" },
        { id: "bible", name: "Bíblia", icon: BookOpen, description: "Análise bíblica" },
        { id: "guidance", name: "Orientação", icon: Lightbulb, description: "Conselhos espirituais" }
    ];

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = { role: "user", content: input, timestamp: new Date() };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            let response;
            const userInput = input.trim();

            switch (selectedCategory) {
                case "prayer":
                    response = await generatePrayer(userInput);
                    break;
                case "bible":
                    response = await generateBibleInsight(userInput, "Explique este versículo");
                    break;
                case "guidance":
                    response = await generateSpiritualGuidance(userInput);
                    break;
                default:
                    response = await InvokeLLM(`Como assistente católico, responda à seguinte pergunta de forma amorosa e baseada na doutrina católica: ${userInput}`);
                    break;
            }

            const aiMessage = {
                role: "assistant",
                content: response.text,
                timestamp: new Date(),
                category: selectedCategory
            };

            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("Erro na IA:", error);
            const errorMessage = {
                role: "assistant",
                content: "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.",
                timestamp: new Date(),
                isError: true
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setMessages([]);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const formatTimestamp = (timestamp) => {
        return timestamp.toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    };

    return (
        <div className="min-h-screen bg-crosses-css p-6">
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
                        IA Católica
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed text-medieval-black">
                        Assistente espiritual inteligente para sua jornada de fé
                    </p>
                </div>

                {/* Categorias */}
                <Card className="bg-white shadow-xl border-2 border-medieval-gold">
                    <CardHeader className="bg-gradient-to-r from-medieval-blue to-medieval-purple text-white">
                        <CardTitle className="text-white">Escolha uma Categoria</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {categories.map((category) => {
                                const Icon = category.icon;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => handleCategoryChange(category.id)}
                                        className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                                            selectedCategory === category.id
                                                ? 'border-medieval-gold bg-medieval-gold text-white'
                                                : 'border-medieval-gold hover:border-medieval-red hover:bg-medieval-cream/50'
                                        }`}
                                    >
                                        <div className="text-center space-y-2">
                                            <Icon className={`w-6 h-6 mx-auto ${
                                                selectedCategory === category.id ? 'text-white' : 'text-medieval-gold'
                                            }`} />
                                            <div>
                                                <div className="font-medium text-sm">{category.name}</div>
                                                <div className="text-xs text-medieval-black">{category.description}</div>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>

                {/* Chat Interface */}
                <Card className="bg-white shadow-xl border-2 border-medieval-gold h-96 flex flex-col">
                    <CardHeader className="border-b-2 border-medieval-gold bg-gradient-to-r from-medieval-green to-emerald-600 text-white">
                        <CardTitle className="text-white flex items-center gap-2">
                            <Bot className="w-5 h-5" />
                            Chat com IA Católica
                        </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col p-0">
                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.length === 0 ? (
                                <div className="text-center text-white py-8">
                                    <Sparkles className="w-12 h-12 mx-auto mb-4 text-medieval-gold" />
                                    <p>Inicie uma conversa espiritual com a IA Católica</p>
                                    <p className="text-sm mt-2">Escolha uma categoria e faça sua pergunta</p>
                                </div>
                            ) : (
                                messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg p-3 ${
                                                message.role === 'user'
                                                    ? 'bg-medieval-gold text-medieval-black'
                                                    : message.isError
                                                    ? 'bg-red-100 text-red-800 border border-red-200'
                                                    : 'bg-medieval-cream text-medieval-black'
                                            }`}
                                        >
                                            <div className="flex items-start gap-2">
                                                {message.role === 'user' ? (
                                                    <User className="w-4 h-4 mt-1 flex-shrink-0" />
                                                ) : (
                                                    <Bot className="w-4 h-4 mt-1 flex-shrink-0" />
                                                )}
                                                <div className="flex-1">
                                                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                                    <p className={`text-xs mt-2 ${
                                                        message.role === 'user' ? 'text-medieval-black' : 'text-medieval-black'
                                                    }`}>
                                                        {formatTimestamp(message.timestamp)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                            
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-100 rounded-lg p-3">
                                        <div className="flex items-center gap-2">
                                            <Bot className="w-4 h-4 text-gray-500" />
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="border-t-2 border-medieval-gold p-4">
                            <div className="flex gap-3">
                                <Input
                                    placeholder={`Faça sua pergunta sobre ${categories.find(c => c.id === selectedCategory)?.name.toLowerCase()}...`}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    className="flex-1 border-2 border-medieval-gold focus:ring-2 focus:ring-medieval-gold bg-white text-medieval-black placeholder-gray-500"
                                    disabled={isLoading}
                                />
                                <Button
                                    onClick={handleSend}
                                    disabled={isLoading || !input.trim()}
                                    className="bg-medieval-gold hover:bg-yellow-600 text-medieval-black font-bold"
                                >
                                    <Send className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Exemplos de Perguntas */}
                <Card className="bg-white shadow-xl border-2 border-medieval-gold">
                    <CardHeader className="bg-gradient-to-r from-medieval-red to-red-600 text-white">
                        <CardTitle className="text-white">Exemplos de Perguntas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <h4 className="font-medium text-white">Orações</h4>
                                <ul className="text-sm text-white space-y-1">
                                    <li>• "Gere uma oração para agradecer"</li>
                                    <li>• "Oração para momentos de dificuldade"</li>
                                    <li>• "Oração para a família"</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-medium text-white">Bíblia</h4>
                                <ul className="text-sm text-white space-y-1">
                                    <li>• "Explique João 3:16"</li>
                                    <li>• "O que significa amar ao próximo?"</li>
                                    <li>• "Como aplicar a fé na vida diária?"</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
