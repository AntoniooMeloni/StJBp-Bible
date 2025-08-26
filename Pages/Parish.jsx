
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../src/components/ui/card";
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
        <div className="min-h-screen bg-crosses-css p-6">
        <div className="max-w-4xl mx-auto space-y-8">
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
                        Paróquia São João
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed text-medieval-black">
                        Este aplicativo é dedicado com carinho à nossa querida Paróquia São João,
                        lugar sagrado onde nossa fé cresce e nossa comunidade se fortalece.
                    </p>
                </div>

        {/* Imagem da Paróquia */}
        <Card className="catholic-shadow border-0 overflow-hidden">
        <img 
            src="https://arquidioceserp.org.br/wp-content/uploads/2020/12/paroquisaojoao-768x576.jpg" 
            alt="Paróquia São João" 
            className="h-64 md:h-96 w-full object-cover"
            onError={(e) => {
                e.target.src = "/PAROQUIA_SAO_JOAO.jpg";
                e.target.onerror = null;
            }}
        />
        </Card>

        {/* Informações */}
        <div className="grid md:grid-cols-2 gap-6">
        {/* História */}
        <Card className="bg-white shadow-xl border-2 border-medieval-gold">
        <CardHeader className="bg-gradient-to-r from-medieval-blue to-medieval-purple text-white">
        <CardTitle className="text-xl text-white flex items-center gap-3">
        <Heart className="w-6 h-6" />
        Nossa História
        </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
        <div className="space-y-4 text-medieval-black leading-relaxed">
        <p className="text-white">
        A Paróquia São João tem sido um farol de fé e esperança em nossa comunidade,
        guiando fiéis no caminho da salvação e do amor cristão.
        </p>
        <p className="text-white">
        Através dos anos, nossa paróquia tem sido um centro de oração, celebração
        dos sacramentos e obras de caridade, sempre fiel aos ensinamentos de
        Nosso Senhor Jesus Cristo.
        </p>
        <blockquote className="border-l-4 border-medieval-blue pl-4 italic text-medieval-blue bg-blue-50 p-3 rounded-r">
        "Donde estão dois ou três reunidos em meu nome,
        aí estou eu no meio deles." - Mateus 18:20
        </blockquote>
        </div>
        </CardContent>
        </Card>

        {/* Contato e Horários */}
        <Card className="bg-white shadow-xl border-2 border-medieval-gold">
        <CardHeader className="bg-gradient-to-r from-medieval-green to-emerald-600 text-white">
        <CardTitle className="text-xl text-white flex items-center gap-3">
        <MapPin className="w-6 h-6" />
        Informações Paroquiais
        </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
        {/* Horário de Missas */}
        <div>
        <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
        <Clock className="w-5 h-5 text-medieval-gold" />
        Horário das Missas
        </h3>
        <div className="space-y-2 text-white">
        <div className="flex justify-between">
        <span>Terça-feira:</span>
        <span>19h30</span>
        </div>
        <div className="flex justify-between">
        <span>Quinta-feira:</span>
        <span>19h30</span>
        </div>
        <div className="flex justify-between">
        <span>Sexta-feira:</span>
        <span>8h</span>
        </div>
        <div className="flex justify-between">
        <span>Sábado:</span>
        <span>19h</span>
        </div>
        <div className="flex justify-between">
        <span>Domingo:</span>
        <span>10h e 19h</span>
        </div>
        </div>
        </div>

        {/* Contato */}
        <div>
        <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
        <Phone className="w-5 h-5 text-medieval-gold" />
        Contato
        </h3>
        <div className="space-y-2 text-white">
        <div className="flex items-start gap-2">
        <Phone className="w-4 h-4 text-medieval-gold mt-1 flex-shrink-0" />
        <span className="text-sm">(16) 3945-8445</span>
        </div>
        <div className="flex items-start gap-2">
        <Phone className="w-4 h-4 text-medieval-gold mt-1 flex-shrink-0" />
        <span className="text-sm">(16) 9.9300-1852 (WhatsApp)</span>
        </div>
        <div className="flex items-start gap-2">
        <Mail className="w-4 h-4 text-medieval-gold mt-1 flex-shrink-0" />
        <span className="break-all text-sm">paroquiajoaobatistastz@gmail.com</span>
        </div>
        <div className="flex items-start gap-2">
        <MapPin className="w-4 h-4 text-medieval-gold mt-1 flex-shrink-0" />
        <span className="break-words text-sm">Praça Hélio Zanini, Sertãozinho - SP</span>
        </div>
        </div>
        </div>
        </CardContent>
        </Card>

        {/* Horários de Funcionamento da Secretaria */}
        <Card className="bg-white shadow-xl border-2 border-medieval-gold">
        <CardHeader className="bg-gradient-to-r from-medieval-red to-red-600 text-white">
        <CardTitle className="text-xl text-white flex items-center gap-3">
        <Clock className="w-6 h-6" />
        Horário de Funcionamento da Secretaria
        </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
        <div className="space-y-2 text-white">
        <div className="flex justify-between">
        <span>Segunda-feira:</span>
        <span>09:00-12:00 / 14:00-18:00</span>
        </div>
        <div className="flex justify-between">
        <span>Terça-feira:</span>
        <span>09:00-12:00 / 14:00-18:00</span>
        </div>
        <div className="flex justify-between">
        <span>Quarta-feira:</span>
        <span>09:00-12:00 / 14:00-18:00</span>
        </div>
        <div className="flex justify-between">
        <span>Quinta-feira:</span>
        <span>09:00-12:00 / 14:00-18:00</span>
        </div>
        <div className="flex justify-between">
        <span>Sexta-feira:</span>
        <span>09:00-12:00 / 14:00-18:00</span>
        </div>
        <div className="flex justify-between">
        <span>Sábado:</span>
        <span>09:00-12:00 / 14:00-18:00</span>
        </div>
        </div>
        </CardContent>
        </Card>
        </div>

        {/* Padroeiro */}
        <Card className="bg-white shadow-xl border-2 border-medieval-gold">
        <CardHeader className="text-center bg-gradient-to-r from-medieval-gold to-yellow-500 text-white">
        <CardTitle className="text-2xl text-white">
        São João Batista - Nosso Padroeiro
        </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Imagem do Santo */}
        <div className="w-48 h-64 rounded-lg flex-shrink-0 overflow-hidden border-2 border-medieval-gold">
        <img 
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-nx7tobEhW58%2FVYoGe6Vnq9I%2FAAAAAAAAFY0%2F3kSAyrx3O4M%2Fs1600%2FS_Joao_Batista.jpg&f=1&nofb=1&ipt=f9b8e1936b24abe9483c1f3c727eaf82fdee56492fae0b62aaaf2059a74afe30" 
            alt="São João Batista" 
            className="w-full h-full object-cover"
            onError={(e) => {
                e.target.src = "/SAO_JOAO_BATISTA.jpg";
                e.target.onerror = null;
            }}
        />
        </div>

        {/* Texto sobre o Santo */}
        <div className="flex-1 space-y-4">
        <p className="text-white leading-relaxed scripture-font text-lg">
        São João Batista, precursor de Cristo, é conhecido como o último dos profetas
        do Antigo Testamento e o primeiro mártir do Novo Testamento. Ele preparou o
            caminho para Jesus Cristo através da pregação e do batismo.
            </p>
            <p className="text-white leading-relaxed">
            Sua vida de austeridade, sua coragem em proclamar a verdade e seu amor pela
            justiça fazem dele um exemplo perfeito para nossa comunidade paroquial.
            </p>
            <blockquote className="border-l-4 border-medieval-gold pl-6 italic text-medieval-black bg-yellow-50 p-4 rounded-r-lg">
            "É necessário que ele cresça e que eu diminua." - João 3:30
            </blockquote>
            <div className="text-center mt-6">
            <p className="text-sm font-semibold text-medieval-black">
            Festa de São João Batista: 24 de Junho
            </p>
            </div>
            </div>
            </div>
            </CardContent>
            </Card>

            {/* Dedicação */}
            <Card className="bg-white shadow-xl border-2 border-medieval-gold">
            <CardContent className="p-8 text-center space-y-4">
            <Heart className="w-12 h-12 text-medieval-red mx-auto" />
            <h3 className="text-2xl font-bold text-white">
            Dedicação Especial
            </h3>
            <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Este aplicativo católico é dedicado com todo amor e respeito à Paróquia São João,
            aos nossos queridos párocos, e a todos os fiéis que fazem desta comunidade
            um verdadeiro lar espiritual.
            </p>
            <div className="mt-6 p-4 bg-gradient-to-r from-medieval-gold to-yellow-500 rounded-lg">
            <p className="text-white italic font-medium">
            "Que este espaço digital seja um instrumento de evangelização e
            crescimento espiritual para todos os membros da nossa paróquia."
            </p>
            </div>
            <div className="text-sm text-medieval-black mt-4">
            <p>Desenvolvido com fé por:</p>
            <p className="font-semibold">Davi Pereira Souza & Antonio A. Meloni</p>
            </div>
            </CardContent>
            </Card>
            </div>
            </div>
    );
}
