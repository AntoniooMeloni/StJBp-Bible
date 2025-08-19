import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Copy, CheckCircle, QrCode } from "lucide-react";

export default function DonationsPage() {
    const [pixKey] = useState("doxawound.com.br"); // Chave PIX padrão
    const [donationAmount, setDonationAmount] = useState("");
    const [copied, setCopied] = useState(false);
    const [qrCodeVisible, setQrCodeVisible] = useState(false);

    const copyPixKey = () => {
        navigator.clipboard.writeText(pixKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const generatePixQR = () => {
        // Em produção, você integraria com uma API para gerar QR Code PIX
        setQrCodeVisible(!qrCodeVisible);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30 p-6">
        <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-lg">
        <Heart className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
        Apoie Nossa Obra
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Sua contribuição ajuda a manter este espaço sagrado ativo e disponível para todos os fiéis católicos.
        </p>
        </div>

        {/* Missão */}
        <Card className="catholic-shadow border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
        <CardHeader>
        <CardTitle className="text-xl text-amber-800 text-center">
        Nossa Missão
        </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
        <p className="text-amber-900 leading-relaxed text-center">
        "Ide por todo o mundo e pregai o Evangelho a toda criatura" - Marcos 16:15
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="text-center p-4">
        <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-3">
        <Heart className="w-6 h-6 text-amber-700" />
        </div>
        <h3 className="font-semibold text-amber-800 mb-2">Evangelização</h3>
        <p className="text-sm text-amber-700">Levar a Palavra de Deus a todos</p>
        </div>
        <div className="text-center p-4">
        <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-3">
        <Heart className="w-6 h-6 text-amber-700" />
        </div>
        <h3 className="font-semibold text-amber-800 mb-2">Educação</h3>
        <p className="text-sm text-amber-700">Ensinar a doutrina católica</p>
        </div>
        <div className="text-center p-4">
        <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-3">
        <Heart className="w-6 h-6 text-amber-700" />
        </div>
        <h3 className="font-semibold text-amber-800 mb-2">Comunidade</h3>
        <p className="text-sm text-amber-700">Unir os fiéis em oração</p>
        </div>
        </div>
        </CardContent>
        </Card>

        {/* Doação via PIX */}
        <Card className="catholic-shadow border-slate-200">
        <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
        <CardTitle className="text-xl text-center text-slate-800 flex items-center justify-center gap-3">
        <QrCode className="w-6 h-6" />
        Doação via PIX
        </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
        {/* Chave PIX */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <label className="text-sm font-semibold text-slate-600 mb-2 block">
        Chave PIX:
        </label>
        <div className="flex items-center gap-3">
        <div className="flex-1 bg-white p-3 rounded-lg border font-mono text-lg">
        {pixKey}
        </div>
        <Button
        onClick={copyPixKey}
        variant="outline"
        className={`px-4 ${copied ? 'bg-green-50 border-green-300' : ''}`}
        >
        {copied ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
        </Button>
        </div>
        {copied && (
            <p className="text-green-600 text-sm mt-2">✓ Chave PIX copiada!</p>
        )}
        </div>

        {/* Valores Sugeridos */}
        <div>
        <label className="text-sm font-semibold text-slate-600 mb-3 block">
        Valores Sugeridos:
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {["10", "25", "50", "100"].map((value) => (
            <Button
            key={value}
            variant="outline"
            onClick={() => setDonationAmount(value)}
            className={`h-12 ${donationAmount === value ? 'bg-amber-50 border-amber-300 text-amber-700' : ''}`}
            >
            R$ {value}
            </Button>
        ))}
        </div>
        </div>

        {/* Valor Personalizado */}
        <div>
        <label className="text-sm font-semibold text-slate-600 mb-2 block">
        Ou insira outro valor:
        </label>
        <Input
        type="number"
        placeholder="R$ 0,00"
        value={donationAmount}
        onChange={(e) => setDonationAmount(e.target.value)}
        className="text-lg h-12"
        />
        </div>

        {/* Instruções */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-3">Como doar:</h3>
        <ol className="list-decimal list-inside space-y-2 text-blue-700 text-sm">
        <li>Copie a chave PIX acima</li>
        <li>Abra seu banco ou aplicativo de pagamento</li>
        <li>Escolha a opção "PIX" e "Transferir"</li>
        <li>Cole a chave PIX</li>
        <li>Insira o valor desejado e confirme</li>
        </ol>
        </div>

        {/* QR Code Placeholder */}
        {qrCodeVisible && (
            <div className="text-center p-8 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
            <QrCode className="w-32 h-32 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">
            QR Code seria gerado aqui<br />
            <span className="text-sm">(Funcionalidade em desenvolvimento)</span>
            </p>
            </div>
        )}

        <Button
        onClick={generatePixQR}
        className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg"
        >
        <QrCode className="w-5 h-5 mr-2" />
        {qrCodeVisible ? 'Ocultar QR Code' : 'Gerar QR Code PIX'}
        </Button>
        </CardContent>
        </Card>

        {/* Agradecimento */}
        <Card className="catholic-shadow border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
        <CardContent className="p-8 text-center">
        <h3 className="text-xl font-bold text-purple-800 mb-4">
        Que Deus abençoe sua generosidade!
        </h3>
        <p className="text-purple-700 leading-relaxed">
        "Cada um contribua segundo propôs no seu coração, não com tristeza ou por necessidade;
        porque Deus ama ao que dá com alegria." - 2 Coríntios 9:7
        </p>
        <div className="mt-6 p-4 bg-white/50 rounded-lg">
        <p className="text-sm text-purple-600 italic">
        Sua doação será utilizada para manter e melhorar este ministério digital,
        ajudando a levar a palavra de Deus a mais pessoas.
        </p>
        </div>
        </CardContent>
        </Card>
        </div>
        </div>
    );
}
