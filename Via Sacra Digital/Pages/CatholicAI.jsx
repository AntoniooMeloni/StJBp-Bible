import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Send, Cross, User, Bot } from "lucide-react";
import { InvokeLLM } from "@/integrations/Core";

export default function CatholicAIPage() {
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Paz e bem! Sou sua assistente católica, criada para ajudá-lo em sua jornada de fé. Posso conversar sobre doutrina, Escrituras, santos, orações e qualquer dúvida espiritual que tenha. Como posso ajudá-lo hoje?"
        }
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async () => {
        if (!inputMessage.trim() || isLoading) return;

        const userMessage = inputMessage.trim();
        setInputMessage("");

        // Adicionar mensagem do usuário
        setMessages(prev => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await InvokeLLM({
                prompt: `Você é uma assistente de IA católica especializada, com conhecimento profundo da doutrina, tradição, escrituras e ensinamentos da Igreja Católica. Suas respostas devem ser:

                1. SEMPRE baseadas na doutrina católica oficial
                2. Respeitosas à tradição e aos ensinamentos papais
                3. Fundamentadas nas Escrituras e no Catecismo
                4. Caridosas e pastorais no tom
                5. Se houver divergências denominacionais, apresente a posição católica com caridade mas firmeza
                6. Cite santos, padres da Igreja e documentos oficiais quando apropriado
                7. Seja conversacional e amigável, mas mantenha a reverência ao sagrado

                Pergunta do usuário: "${userMessage}"

                Responda de forma clara, pastoral e fundamentada na fé católica. Se for um tema complexo, pode citar fontes católicas confiáveis.`
            });

            setMessages(prev => [...prev, { role: "assistant", content: response }]);
        } catch (error) {
            setMessages(prev => [...prev, {
                role: "assistant",
                content: "Perdão, houve um problema ao processar sua mensagem. Por favor, tente novamente. Que Deus o abençoe!"
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full shadow-lg">
        <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-900 to-blue-600 bg-clip-text text-transparent">
        IA Católica
        </h1>
        <p className="text-lg text-slate-600">Orientação espiritual baseada na doutrina católica</p>
        </div>

        {/* Chat Container */}
        <Card className="catholic-shadow border-slate-200 min-h-[500px] flex flex-col">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
        <CardTitle className="flex items-center gap-3 text-purple-900">
        <Cross className="w-6 h-6" />
        Conversa Espiritual
        </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-[400px]">
        {messages.map((message, index) => (
            <div key={index} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {message.role === 'assistant' && (
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
                </div>
            )}

            <div className={`max-w-[80%] p-4 rounded-2xl ${
                message.role === 'user'
                ? 'bg-blue-600 text-white ml-12'
                : 'bg-slate-100 text-slate-800 mr-12'
            }`}>
            <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
            </div>

            {message.role === 'user' && (
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-white" />
                </div>
            )}
            </div>
        ))}

        {isLoading && (
            <div className="flex gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-slate-100 p-4 rounded-2xl mr-12">
            <div className="flex space-x-1">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
            </div>
            </div>
        )}
        </div>

        {/* Input */}
        <div className="border-t p-4">
        <div className="flex gap-3">
        <Input
        placeholder="Digite sua pergunta sobre fé, doutrina, escrituras..."
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={isLoading}
        className="flex-1"
        />
        <Button
        onClick={sendMessage}
        disabled={!inputMessage.trim() || isLoading}
        className="bg-purple-600 hover:bg-purple-700 px-6"
        >
        <Send className="w-4 h-4" />
        </Button>
        </div>
        </div>
        </CardContent>
        </Card>

        {/* Sugestões */}
        <Card className="catholic-shadow border-slate-200">
        <CardHeader>
        <CardTitle className="text-lg text-slate-800">Perguntas Sugeridas</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
            "Explique a doutrina da Santíssima Trindade",
            "Como rezar o Rosário corretamente?",
            "Qual a diferença entre católicos e protestantes?",
            "O que significa a Eucaristia para nós?",
            "Como crescer na vida espiritual?",
            "Quais são os mandamentos da Igreja?"
        ].map((suggestion, index) => (
            <Button
            key={index}
            variant="outline"
            onClick={() => setInputMessage(suggestion)}
            className="text-left justify-start h-auto p-3 text-slate-600 hover:text-purple-700 hover:border-purple-300"
            >
            {suggestion}
            </Button>
        ))}
        </div>
        </CardContent>
        </Card>
        </div>
        </div>
    );
}
