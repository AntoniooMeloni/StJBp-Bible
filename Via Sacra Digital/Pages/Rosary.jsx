import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Cross, ChevronLeft, ChevronRight } from 'lucide-react';

const mysteries = {
    joyful: {
        name: "Mistérios Gozosos",
        days: "(Segundas e Sábados)",
        color: "blue",
        items: [
            "A Anunciação do Anjo a Maria",
            "A Visitação de Maria a Isabel",
            "O Nascimento de Jesus em Belém",
            "A Apresentação de Jesus no Templo",
            "A Perda e o Encontro de Jesus no Templo"
        ]
    },
    luminous: {
        name: "Mistérios Luminosos",
        days: "(Quintas-feiras)",
        color: "yellow",
        items: [
            "O Batismo de Jesus no Rio Jordão",
            "A Auto-revelação de Jesus nas Bodas de Caná",
            "O Anúncio do Reino de Deus",
            "A Transfiguração de Jesus",
            "A Instituição da Eucaristia"
        ]
    },
    sorrowful: {
        name: "Mistérios Dolorosos",
        days: "(Terças e Sextas-feiras)",
        color: "red",
        items: [
            "A Agonia de Jesus no Horto das Oliveiras",
            "A Flagelação de Jesus",
            "A Coroação de Espinhos",
            "Jesus Carrega a Cruz no Caminho do Calvário",
            "A Crucificação e Morte de Jesus"
        ]
    },
    glorious: {
        name: "Mistérios Gloriosos",
        days: "(Quartas-feiras e Domingos)",
        color: "purple",
        items: [
            "A Ressurreição de Jesus",
            "A Ascensão de Jesus ao Céu",
            "A Vinda do Espírito Santo sobre os Apóstolos",
            "A Assunção de Maria ao Céu",
            "A Coroação de Maria como Rainha do Céu e da Terra"
        ]
    }
};

const rosarySteps = [
    "Faça o Sinal da Cruz e reze o Credo.",
"Reze um Pai Nosso.",
"Reze três Ave Marias.",
"Reze um Glória ao Pai.",
"Anuncie o primeiro mistério do dia e reze um Pai Nosso.",
"Reze dez Ave Marias meditando sobre o mistério.",
"Reze um Glória ao Pai e a Oração de Fátima.",
"Anuncie o próximo mistério e repita os passos 5 a 7 para todos os 5 mistérios.",
"Ao final, reze a Salve Rainha e as orações finais.",
"Faça o Sinal da Cruz para concluir."
];

export default function RosaryPage() {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, rosarySteps.length -1));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50/20 via-white to-rose-50/20 p-6">
        <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-rose-500 rounded-full shadow-lg">
        <Cross className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-800 to-rose-600 bg-clip-text text-transparent">
        Santo Rosário
        </h1>
        <p className="text-lg text-theme-text-light max-w-2xl mx-auto">
        Medite os mistérios da vida de Nosso Senhor com a Virgem Maria.
        </p>
        </div>

        <Card className="catholic-shadow border-theme-border">
        <CardHeader>
        <CardTitle className="text-theme-text-dark">Como Rezar o Terço</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
        <div className="bg-theme-primary/50 p-6 rounded-lg text-xl font-semibold text-theme-text-dark transition-all duration-300">
        {currentStep + 1}. {rosarySteps[currentStep]}
        </div>
        <div className="flex justify-between items-center">
        <Button onClick={prevStep} disabled={currentStep === 0} variant="outline"><ChevronLeft className="w-4 h-4 mr-2" /> Anterior</Button>
        <span className="text-sm text-theme-text-light">Passo {currentStep + 1} de {rosarySteps.length}</span>
        <Button onClick={nextStep} disabled={currentStep === rosarySteps.length - 1} variant="outline">Próximo <ChevronRight className="w-4 h-4 ml-2" /></Button>
        </div>
        </CardContent>
        </Card>

        <Tabs defaultValue="joyful" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
        <TabsTrigger value="joyful">Gozosos</TabsTrigger>
        <TabsTrigger value="luminous">Luminosos</TabsTrigger>
        <TabsTrigger value="sorrowful">Dolorosos</TabsTrigger>
        <TabsTrigger value="glorious">Gloriosos</TabsTrigger>
        </TabsList>
        {Object.entries(mysteries).map(([key, mystery]) => (
            <TabsContent key={key} value={key}>
            <Card className={`catholic-shadow border-${mystery.color}-200`}>
            <CardHeader className={`bg-${mystery.color}-50`}>
            <CardTitle className={`text-${mystery.color}-800`}>{mystery.name}</CardTitle>
            <p className={`text-sm text-${mystery.color}-600`}>{mystery.days}</p>
            </CardHeader>
            <CardContent className="p-6">
            <ol className="list-decimal list-inside space-y-3 text-lg text-theme-text-dark">
            {mystery.items.map((item, index) => <li key={index}>{item}</li>)}
            </ol>
            </CardContent>
            </Card>
            </TabsContent>
        ))}
        </Tabs>
        </div>
        </div>
    );
}
