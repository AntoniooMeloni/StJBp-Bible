import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Youtube } from 'lucide-react';

const gregorianChants = [
    { title: "Salve Regina", videoId: "dytVvB6kY4o" },
{ title: "Ave Maria (Canto Gregoriano)", videoId: "L6z_4cm2614" },
{ title: "Pange Lingua Gloriosi", videoId: "uA_29gaI_fA" },
{ title: "Veni Creator Spiritus", videoId: "qr54dC_2sA0" },
{ title: "Tantum Ergo Sacramentum", videoId: "G2y11bY2j0Q" },
{ title: "O Sanctissima", videoId: "9J2LI3i7gso" }
];

export default function MusicPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50/20 via-white to-blue-50/20 p-6">
        <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full shadow-lg">
        <Music className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-800 to-blue-600 bg-clip-text text-transparent">
        Canto Gregoriano
        </h1>
        <p className="text-lg text-theme-text-light max-w-2xl mx-auto">
        Eleve sua alma com a beleza atemporal da música sacra.
        </p>
        </div>

        <Card className="catholic-shadow border-theme-border">
        <CardHeader>
        <CardTitle className="flex items-center gap-3 text-green-800">
        <Youtube className="w-6 h-6" />
        Seleção de Cantos para Oração e Meditação
        </CardTitle>
        </CardHeader>
        <CardContent>
        <div className="text-sm text-theme-text-light bg-green-50/50 p-4 rounded-lg border border-green-200 mb-6">
        <p className="font-semibold text-green-800">Nota do Desenvolvedor:</p>
        <p>Esta seção usa vídeos do YouTube. A funcionalidade de upload de arquivos de música pode ser adicionada através do painel de dados da sua aplicação. Fale com o suporte para mais detalhes sobre como gerenciar sua própria lista de músicas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gregorianChants.map((chant) => (
            <Card key={chant.videoId} className="catholic-shadow overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="aspect-video">
            <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${chant.videoId}`}
            title={chant.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
            </div>
            <div className="p-4 bg-white">
            <h3 className="font-semibold text-theme-text-dark">{chant.title}</h3>
            </div>
            </Card>
        ))}
        </div>
        </CardContent>
        </Card>
        </div>
        </div>
    );
}
