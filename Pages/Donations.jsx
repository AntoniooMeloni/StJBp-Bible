import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../src/components/ui/card";
import { Button } from "../src/components/ui/button";
import { Input } from "../src/components/ui/input";
import { Heart, Copy, CheckCircle, QrCode, Download, Gift, Shield, Users, BookOpen, Church, Star } from "lucide-react";
import QRCode from 'qrcode';

export default function DonationsPage() {
    const [pixKey] = useState("paroquiajoaobatistastz@gmail.com");
    const [donationAmount, setDonationAmount] = useState("");
    const [donationMessage, setDonationMessage] = useState("");
    const [copied, setCopied] = useState(false);
    const [qrCodeVisible, setQrCodeVisible] = useState(false);
    const [qrCodeDataUrl, setQrCodeDataUrl] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const qrCodeRef = useRef(null);

    const copyPixKey = () => {
        navigator.clipboard.writeText(pixKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const generatePixQR = async () => {
        if (qrCodeVisible) {
            setQrCodeVisible(false);
            return;
        }

        setIsGenerating(true);
        try {
            const pixPayload = generatePixPayload(pixKey, donationAmount, donationMessage);
            const dataUrl = await QRCode.toDataURL(pixPayload, {
                width: 256,
                margin: 2,
                color: {
                    dark: '#1f2937',
                    light: '#ffffff'
                }
            });

            setQrCodeDataUrl(dataUrl);
            setQrCodeVisible(true);
        } catch (error) {
            console.error('Erro ao gerar QR Code:', error);
            alert('Erro ao gerar QR Code. Tente novamente.');
        } finally {
            setIsGenerating(false);
        }
    };

    const generatePixPayload = (key, amount, message) => {
        const merchantName = "PAROQUIA SAO JOAO BATISTA";
        const merchantCity = "SERTAOZINHO";
        const amountStr = amount ? parseFloat(amount).toFixed(2) : "0.00";
        
        const defaultMessage = "Doação para Paróquia São João Batista - Sertãozinho - Que Deus abençoe sua generosidade! 🙏✨";
        const finalMessage = message.trim() ? `${message.trim()} - ${defaultMessage}` : defaultMessage;
        
        const payload = {
            pixKey: key,
            merchantName: merchantName,
            merchantCity: merchantCity,
            amount: amountStr,
            description: finalMessage
        };
        
        return JSON.stringify(payload);
    };

    const downloadQRCode = () => {
        if (qrCodeDataUrl) {
            const link = document.createElement('a');
            link.download = 'pix-paroquia-sao-joao.png';
            link.href = qrCodeDataUrl;
            link.click();
        }
    };

    const suggestedAmounts = [
        { value: "10", label: "R$ 10", icon: Heart, color: "bg-red-100 text-red-700 border-red-300" },
        { value: "25", label: "R$ 25", icon: Gift, color: "bg-green-100 text-green-700 border-green-300" },
        { value: "50", label: "R$ 50", icon: Star, color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
        { value: "100", label: "R$ 100", icon: Shield, color: "bg-blue-100 text-blue-700 border-blue-300" }
    ];

    return (
        <div className="min-h-screen bg-crosses-css p-6">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-6 mb-12">
                                                <div className="inline-flex items-center justify-center w-28 h-28 rounded-full shadow-2xl mb-6 overflow-hidden border-4 border-medieval-gold bg-white p-0">
                                <img 
                                    src="/images/logo.png" 
                                    alt="Fé Católica Logo" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                    <h1 className="text-5xl md:text-6xl font-bold medieval-title">
                        Apoie Nossa Paróquia
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed text-on-light font-medium">
                        Sua generosidade ajuda a manter nossa missão de evangelização e comunidade ativa para todos os fiéis de Sertãozinho e região.
                    </p>
                </div>

                {/* Missão e Valores */}
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-white shadow-xl border-2 border-medieval-gold">
                        <CardHeader className="bg-gradient-to-r from-medieval-blue to-medieval-purple text-white">
                            <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
                                <Church className="w-8 h-8" />
                                Nossa Missão
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-medieval-gold">
                                <p className="text-lg text-medieval-black font-medium italic">
                                    "Ide por todo o mundo e pregai o Evangelho a toda criatura"
                                </p>
                                <p className="text-sm text-medieval-black mt-2">- Marcos 16:15</p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-medieval-gold">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                        <Heart className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-medieval-black">Evangelização</h3>
                                        <p className="text-sm text-medieval-black">Levar a Palavra de Deus a todos</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-medieval-gold">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <BookOpen className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-medieval-black">Educação</h3>
                                        <p className="text-sm text-medieval-black">Ensinar a doutrina católica</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-medieval-gold">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Users className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-medieval-black">Comunidade</h3>
                                        <p className="text-sm text-medieval-black">Unir os fiéis em oração</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Doação via PIX */}
                    <Card className="bg-white shadow-xl border-2 border-medieval-gold">
                        <CardHeader className="bg-gradient-to-r from-medieval-green to-emerald-600 text-white">
                            <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
                                <QrCode className="w-8 h-8" />
                                Doação via PIX
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            {/* Chave PIX */}
                            <div className="bg-gradient-to-r from-gray-50 to-slate-100 p-5 rounded-xl border-2 border-medieval-gold">
                                <label className="text-sm font-bold text-medieval-black mb-4 block">
                                    🔑 Chave PIX:
                                </label>
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                    <div className="flex-1 bg-white p-3 rounded-lg border-2 border-medieval-gold font-mono text-base text-medieval-black shadow-sm break-all">
                                        {pixKey}
                                    </div>
                                    <Button
                                        onClick={copyPixKey}
                                        variant="outline"
                                        className={`px-4 py-3 border-2 border-medieval-gold text-medieval-black hover:bg-medieval-gold hover:text-white transition-all duration-200 flex-shrink-0 ${
                                            copied ? 'bg-green-100 border-green-500' : ''
                                        }`}
                                    >
                                        {copied ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
                                    </Button>
                                </div>
                                {copied && (
                                    <p className="text-green-600 text-sm mt-4 font-medium text-center">✓ Chave PIX copiada com sucesso!</p>
                                )}
                            </div>

                            {/* Valores Sugeridos */}
                            <div>
                                <label className="text-sm font-bold text-white mb-4 block">
                                    Valores Sugeridos:
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    {suggestedAmounts.map(({ value, label, icon: Icon }) => (
                                        <Button
                                            key={value}
                                            variant="outline"
                                            onClick={() => setDonationAmount(value)}
                                            className={`h-16 text-lg font-bold border-2 transition-all duration-200 ${
                                                donationAmount === value 
                                                    ? 'bg-medieval-gold text-medieval-black border-medieval-gold shadow-lg transform scale-105' 
                                                    : 'border-medieval-gold text-white hover:bg-medieval-gold hover:text-white hover:shadow-md'
                                            }`}
                                        >
                                            <Icon className="w-6 h-6 mr-3" />
                                            {label}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Valor Personalizado */}
                            <div>
                                <label className="text-sm font-bold text-white mb-3 block">
                                    Ou insira outro valor:
                                </label>
                                <Input
                                    type="number"
                                    placeholder="R$ 0,00"
                                    value={donationAmount}
                                    onChange={(e) => setDonationAmount(e.target.value)}
                                    className="text-lg h-14 border-2 border-medieval-gold focus:ring-2 focus:ring-medieval-gold bg-white text-medieval-black placeholder-gray-500 px-4"
                                />
                            </div>

                            {/* Mensagem Personalizada */}
                            <div>
                                <label className="text-sm font-bold text-white mb-3 block">
                                    Mensagem para o PIX (opcional):
                                </label>
                                <Input
                                    type="text"
                                    placeholder="Que Deus abençoe nossa paróquia! 🙏"
                                    maxLength="100"
                                    value={donationMessage}
                                    onChange={(e) => setDonationMessage(e.target.value)}
                                    className="text-lg h-14 border-2 border-medieval-gold focus:ring-2 focus:ring-medieval-gold bg-white text-medieval-black placeholder-gray-500 px-4"
                                />
                                <p className="text-xs text-white mt-2">
                                    Máximo 100 caracteres
                                </p>
                            </div>

                            {/* Instruções */}
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-medieval-blue">
                                <h3 className="font-bold text-medieval-blue mb-5 text-xl text-center">📱 Como doar via PIX:</h3>
                                <ol className="list-decimal list-inside space-y-3 text-medieval-black text-base leading-relaxed">
                                    <li className="pb-1">Copie a chave PIX acima</li>
                                    <li className="pb-1">Abra seu banco ou aplicativo de pagamento</li>
                                    <li className="pb-1">Escolha a opção "PIX" e "Transferir"</li>
                                    <li className="pb-1">Cole a chave PIX</li>
                                    <li className="pb-1">Insira o valor desejado</li>
                                    <li className="pb-1">Adicione uma mensagem personalizada (opcional)</li>
                                    <li className="pb-1">Confirme a transferência</li>
                                </ol>
                            </div>

                            {/* Botão Gerar QR Code */}
                            <div className="pt-4">
                                <Button
                                    onClick={generatePixQR}
                                    disabled={isGenerating}
                                    className="w-full bg-medieval-green hover:bg-emerald-700 h-16 text-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all duration-200 rounded-xl"
                                >
                                    {isGenerating ? (
                                        <>
                                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                                            Gerando QR Code...
                                        </>
                                    ) : (
                                        <>
                                            <QrCode className="w-6 h-6 mr-3" />
                                            {qrCodeVisible ? 'Ocultar QR Code' : 'Gerar QR Code PIX'}
                                        </>
                                    )}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* QR Code Gerado */}
                {qrCodeVisible && qrCodeDataUrl && (
                    <Card className="bg-white shadow-xl border-2 border-medieval-gold">
                        <CardContent className="p-8 text-center">
                            <div className="mb-6">
                                <img 
                                    ref={qrCodeRef}
                                    src={qrCodeDataUrl} 
                                    alt="QR Code PIX" 
                                    className="mx-auto border-2 border-medieval-gold rounded-xl shadow-lg"
                                />
                            </div>
                            <div className="space-y-4">
                                <p className="text-medieval-green text-xl font-bold">
                                    ✓ QR Code PIX gerado com sucesso!
                                </p>
                                <p className="text-medieval-black font-medium">
                                    Escaneie com seu banco ou aplicativo de pagamento
                                </p>
                                <Button
                                    onClick={downloadQRCode}
                                    variant="outline"
                                    className="bg-medieval-gold hover:bg-yellow-600 border-medieval-gold text-medieval-black font-bold px-8 py-3"
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    Baixar QR Code
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Agradecimento */}
                <Card className="bg-white shadow-xl border-2 border-medieval-gold">
                    <CardContent className="p-8 text-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-medieval-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Heart className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-medieval-black mb-6">
                            Que Deus abençoe sua generosidade!
                        </h3>
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-medieval-purple mb-6">
                            <p className="text-lg text-medieval-black font-medium leading-relaxed">
                                "Cada um contribua segundo propôs no seu coração, não com tristeza ou por necessidade;
                                porque Deus ama ao que dá com alegria."
                            </p>
                            <p className="text-medieval-black font-bold mt-3">- 2 Coríntios 9:7</p>
                        </div>
                        <div className="bg-gradient-to-r from-medieval-gold to-yellow-500 p-6 rounded-xl text-white">
                            <p className="text-lg font-medium">
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
