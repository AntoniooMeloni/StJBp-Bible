
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MapPin, Clock, Phone, Mail, Heart, ImageOff } from "lucide-react";

const ImgWithFallback = ({ src, alt, className, ...props }) => {
    return (
        <div className={`relative ${className}`} {...props}>
        <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover absolute top-0 left-0"
        onError={(e) => {
            e.target.style.display = 'none';
            if (e.target.nextSibling) {
                e.target.nextSibling.style.display = 'flex';
            }
        }}
        />
        <div
        className="w-full h-full bg-gray-200 items-center justify-center text-gray-500 flex-col gap-2 p-4"
        style={{display: 'none'}}
        >
        <ImageOff className="w-12 h-12" />
        <span className="text-xs text-center px-2">Adicione a imagem:<br/>{src.substring(1)}</span>
        </div>
        </div>
    );
};


export default function ParishPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-amber-50/30 p-6">
        <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full shadow-lg">
        <Users className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-amber-600 bg-clip-text text-transparent">
        Paróquia São João
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Este aplicativo é dedicado com carinho à nossa querida Paróquia São João,
        lugar sagrado onde nossa fé cresce e nossa comunidade se fortalece.
        </p>
        </div>

        {/* Imagem da Paróquia */}
        <Card className="catholic-shadow border-0 overflow-hidden">
        <ImgWithFallback src="/PAROQUIA_SAO_JOAO.jpg" alt="Paróquia São João" className="h-64 md:h-96" />
        </Card>

        {/* Informações */}
        <div className="grid md:grid-cols-2 gap-6">
        {/* História */}
        <Card className="catholic-shadow border-blue-100">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
        <CardTitle className="text-xl text-blue-900 flex items-center gap-3">
        <Heart className="w-6 h-6" />
        Nossa História
        </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
        <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
        A Paróquia São João tem sido um farol de fé e esperança em nossa comunidade,
        guiando fiéis no caminho da salvação e do amor cristão.
        </p>
        <p>
        Através dos anos, nossa paróquia tem sido um centro de oração, celebração
        dos sacramentos e obras de caridade, sempre fiel aos ensinamentos de
        Nosso Senhor Jesus Cristo.
        </p>
        <blockquote className="border-l-4 border-blue-400 pl-4 italic text-blue-800">
        "Donde estão dois ou três reunidos em meu nome,
        aí estou eu no meio deles." - Mateus 18:20
        </blockquote>
        </div>
        </CardContent>
        </Card>

        {/* Contato e Horários */}
        <Card className="catholic-shadow border-amber-100">
        <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
        <CardTitle className="text-xl text-amber-800 flex items-center gap-3">
        <MapPin className="w-6 h-6" />
        Informações Paroquiais
        </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
        {/* Horário de Missas */}
        <div>
        <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
        <Clock className="w-5 h-5 text-amber-600" />
        Horário das Missas
        </h3>
        <div className="space-y-2 text-slate-700">
        <div className="flex justify-between">
        <span>Segunda a Sexta:</span>
        <span>7h00 e 18h00</span>
        </div>
        <div className="flex justify-between">
        <span>Sábado:</span>
        <span>18h00</span>
        </div>
        <div className="flex justify-between">
        <span>Domingo:</span>
        <span>8h00, 10h00 e 18h00</span>
        </div>
        </div>
        </div>

        {/* Contato */}
        <div>
        <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
        <Phone className="w-5 h-5 text-amber-600" />
        Contato
        </h3>
        <div className="space-y-2 text-slate-700">
        <div className="flex items-center gap-2">
        <Phone className="w-4 h-4 text-slate-500" />
        <span>(00) 0000-0000</span>
        </div>
        <div className="flex items-center gap-2">
        <Mail className="w-4 h-4 text-slate-500" />
        <span>paroquia@saojoao.org.br</span>
        </div>
        <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-slate-500" />
        <span>Endereço da Paróquia</span>
        </div>
        </div>
        </div>
        </CardContent>
        </Card>
        </div>

        {/* Padroeiro */}
        <Card className="catholic-shadow border-slate-200">
        <CardHeader className="text-center bg-gradient-to-r from-blue-50 via-white to-amber-50">
        <CardTitle className="text-2xl text-slate-800">
        São João Batista - Nosso Padroeiro
        </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Imagem do Santo */}
        <div className="w-48 h-64 rounded-lg flex-shrink-0 overflow-hidden">
        <ImgWithFallback src="/SAO_JOAO_BATISTA.jpg" alt="São João Batista" className="w-full h-full" />
        </div>

        {/* Texto sobre o Santo */}
        <div className="flex-1 space-y-4">
        <p className="text-slate-700 leading-relaxed scripture-font text-lg">
        São João Batista, precursor de Cristo, é conhecido como o último dos profetas
        do Antigo Testamento e o primeiro mártir do Novo Testamento. Ele preparou o
            caminho para Jesus Cristo através da pregação e do batismo.
            </p>
            <p className="text-slate-700 leading-relaxed">
            Sua vida de austeridade, sua coragem em proclamar a verdade e seu amor pela
            justiça fazem dele um exemplo perfeito para nossa comunidade paroquial.
            </p>
            <blockquote className="border-l-4 border-amber-400 pl-6 italic text-amber-800 bg-amber-50 p-4 rounded-r-lg">
            "É necessário que ele cresça e que eu diminua." - João 3:30
            </blockquote>
            <div className="text-center mt-6">
            <p className="text-sm font-semibold text-slate-600">
            Festa de São João Batista: 24 de Junho
            </p>
            </div>
            </div>
            </div>
            </CardContent>
            </Card>

            {/* Dedicação */}
            <Card className="catholic-shadow border-purple-200 bg-gradient-to-r from-purple-50 via-blue-50 to-amber-50">
            <CardContent className="p-8 text-center space-y-4">
            <Heart className="w-12 h-12 text-purple-600 mx-auto" />
            <h3 className="text-2xl font-bold text-purple-800">
            Dedicação Especial
            </h3>
            <p className="text-lg text-purple-700 max-w-3xl mx-auto leading-relaxed">
            Este aplicativo católico é dedicado com todo amor e respeito à Paróquia São João,
            aos nossos queridos párocos, e a todos os fiéis que fazem desta comunidade
            um verdadeiro lar espiritual.
            </p>
            <div className="mt-6 p-4 bg-white/50 rounded-lg">
            <p className="text-purple-600 italic">
            "Que este espaço digital seja um instrumento de evangelização e
            crescimento espiritual para todos os membros da nossa paróquia."
            </p>
            </div>
            <div className="text-sm text-purple-600 mt-4">
            <p>Desenvolvido com fé por:</p>
            <p className="font-semibold">Davi Pereira Souza & Antonio A. Meloni</p>
            </div>
            </CardContent>
            </Card>
            </div>
            </div>
    );
}
