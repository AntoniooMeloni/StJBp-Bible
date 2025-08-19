
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Sparkles, ImageOff } from 'lucide-react';
import { InvokeLLM } from '@/integrations/Core';

export default function SaintOfTheDay({ saint }) {
    const [prayer, setPrayer] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const imageUrl = `/${saint.image_slug}.jpg`;

    useEffect(() => {
        if (saint && saint.name) {
            generatePrayer();
        }
    }, [saint]);

    const generatePrayer = async () => {
        setIsLoading(true);
        try {
            const response = await InvokeLLM({
                prompt: `Gere uma oração curta (cerca de 4-6 linhas) para ${saint.name}, baseada em sua vida e virtudes. A oração deve ser em português e ter um tom reverente e católico.`
            });
            setPrayer(response);
        } catch (error) {
            console.error("Erro ao gerar oração:", error);
            setPrayer("Oração não disponível no momento.");
        }
        setIsLoading(false);
    };

    return (
        <Card className="catholic-shadow border-theme-border bg-white flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/3">
        <img
        src={imageUrl}
        alt={saint.name}
        className="w-full h-48 md:h-full object-cover"
        onError={(e) => {
            e.target.style.display = 'none';
            if (e.target.nextSibling) {
                e.target.nextSibling.style.display = 'flex';
            }
        }}
        />
        <div
        className="w-full h-48 md:h-full bg-gray-200 items-center justify-center text-gray-500 flex-col gap-2"
        style={{display: 'none'}}
        >
        <ImageOff className="w-12 h-12" />
        <span className="text-xs text-center px-2">Adicione a imagem:<br/>{saint.image_slug}.jpg</span>
        </div>
        </div>
        <div className="md:w-2/3 flex flex-col">
        <CardHeader>
        <CardTitle className="flex items-center gap-3 text-theme-text-dark">
        <Sparkles className="w-6 h-6 text-theme-accent" />
        Santo do Dia: {saint.name}
        </CardTitle>
        <p className="text-sm text-theme-text-light">{saint.description}</p>
        </CardHeader>
        <CardContent className="flex-grow">
        <div className="bg-theme-primary/40 p-4 rounded-lg space-y-2 h-full">
        <h4 className="font-semibold text-theme-text-dark">Oração:</h4>
        {isLoading ? (
            <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            </div>
        ) : (
            <p className="text-theme-text-dark italic whitespace-pre-wrap">{prayer}</p>
        )}
        </div>
        </CardContent>
        </div>
        </Card>
    );
}
