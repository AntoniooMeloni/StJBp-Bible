import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../src/components/ui/card';
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
        <div className="min-h-screen bg-crosses-css p-6">
        <div className="max-w-6xl mx-auto space-y-8">
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
                        Canto Gregoriano
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed text-white">
                        Eleve sua alma com a beleza atemporal da música sacra.
                    </p>
                </div>

        <Card className="bg-white shadow-xl border-2 border-medieval-gold">
        <CardHeader className="bg-gradient-to-r from-medieval-green to-emerald-600 text-white">
        <CardTitle className="flex items-center gap-3 text-white">
        <Youtube className="w-6 h-6" />
        Seleção de Cantos para Oração e Meditação
        </CardTitle>
        </CardHeader>
        <CardContent>
        <div className="text-sm text-medieval-black bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-2 border-medieval-blue mb-6">
        <p className="font-bold text-medieval-blue">Nota do Desenvolvedor:</p>
        <p className="text-medieval-black">Esta seção usa vídeos do YouTube. A funcionalidade de upload de arquivos de música pode ser adicionada através do painel de dados da sua aplicação. Fale com o suporte para mais detalhes sobre como gerenciar sua própria lista de músicas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gregorianChants.map((chant) => (
            <Card key={chant.videoId} className="bg-white shadow-lg border-2 border-medieval-gold overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-xl">
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
            <div className="p-4 bg-gradient-to-r from-medieval-cream to-yellow-50">
            <h3 className="font-bold text-medieval-black text-center">{chant.title}</h3>
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
