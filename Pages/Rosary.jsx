import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../src/components/ui/card';
import { Button } from '../src/components/ui/button';
import { ChevronDown, ChevronUp, Volume2, VolumeX } from 'lucide-react';
import AudioPlayer from '../src/components/ui/audio-player';

const RosaryPage = () => {
    const [expandedSections, setExpandedSections] = useState({
        oracoesIniciais: false,
        misteriosGozosos: false,
        misteriosDolorosos: false,
        misteriosGloriosos: false,
        misteriosLuminosos: false,
        oracoesFinais: false
    });

    const [isSpeaking, setIsSpeaking] = useState(false);

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const speakPrayer = (text) => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'pt-BR';
            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
            setIsSpeaking(true);
        }
    };

    // Componente para renderizar um mistério completo
    const MysteryComponent = ({ title, meditation, colorClass, borderColor }) => (
        <div className={`${colorClass} p-4 rounded-lg`}>
            <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
            <p className="text-white mb-4">{meditation}</p>
            
            <div className="space-y-4">
                <div className={`bg-medieval-white/20 p-3 rounded border border-medieval-gold`}>
                    <h4 className="font-semibold mb-2 text-white">Pai Nosso:</h4>
                    <p className="text-sm text-white">Pai nosso que estais nos céus, santificado seja o Vosso nome; venha a nós o Vosso reino; seja feita a Vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.</p>
                </div>
                
                <div className={`bg-medieval-white/20 p-3 rounded border border-medieval-gold`}>
                    <h4 className="font-semibold mb-2 text-white">10 Ave-Marias:</h4>
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <div key={num} className="mb-2">
                            <p className="text-xs font-medium text-white">Ave-Maria {num}:</p>
                            <p className="text-sm text-white">Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.</p>
                        </div>
                    ))}
                </div>
                
                <div className={`bg-medieval-white/20 p-3 rounded border border-medieval-gold`}>
                    <h4 className="font-semibold mb-2 text-white">Glória ao Pai:</h4>
                    <p className="text-sm text-white">Glória ao Pai, ao Filho e ao Espírito Santo, como era no princípio, agora e sempre. Amém.</p>
                </div>
                
                <div className={`bg-medieval-white/20 p-3 rounded border border-medieval-gold`}>
                    <h4 className="font-semibold mb-2 text-white">Oração de Fátima:</h4>
                    <p className="text-sm text-white">Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o Céu e socorrei principalmente as que mais precisarem da Vossa misericórdia.</p>
                </div>
            </div>
        </div>
    );

    // Dados dos mistérios
    const mysteriesData = {
        gozosos: [
            {
                title: "1. A Anunciação do Anjo Gabriel a Maria",
                meditation: "Contemplamos a humildade da Virgem Maria ao receber a mensagem do Anjo Gabriel e sua resposta de fé: 'Eis aqui a serva do Senhor, faça-se em mim segundo a vossa palavra.'"
            },
            {
                title: "2. A Visitação de Maria a Isabel",
                meditation: "Meditamos na caridade de Maria ao visitar sua prima Isabel e no cântico de louvor que brota de seu coração: 'A minha alma engrandece ao Senhor.'"
            },
            {
                title: "3. O Nascimento de Jesus em Belém",
                meditation: "Contemplamos a pobreza e simplicidade do nascimento de Jesus, o Salvador do mundo, na gruta de Belém."
            },
            {
                title: "4. A Apresentação de Jesus no Templo",
                meditation: "Meditamos na obediência de Maria e José à Lei de Moisés e na profecia de Simeão sobre a espada de dor."
            },
            {
                title: "5. A Perda e o Encontro do Menino Jesus no Templo",
                meditation: "Contemplamos a angústia de Maria e José ao perder Jesus e sua alegria ao encontrá-lo no Templo, ensinando aos doutores da Lei."
            }
        ],
        dolorosos: [
            {
                title: "1. A Agonia de Jesus no Horto das Oliveiras",
                meditation: "Contemplamos a angústia de Jesus no Getsêmani, quando suou sangue e rezou: 'Pai, se for possível, afaste de mim este cálice, mas não se faça a minha vontade, e sim a vossa.'"
            },
            {
                title: "2. A Flagelação de Jesus",
                meditation: "Meditamos no sofrimento de Jesus ao ser flagelado pelos soldados romanos, cumprindo a profecia: 'Por suas chagas fomos curados.'"
            },
            {
                title: "3. A Coroação de Espinhos",
                meditation: "Contemplamos a humilhação de Jesus ao ser coroado com espinhos pelos soldados que zombavam dele, proclamando-o 'Rei dos Judeus'."
            },
            {
                title: "4. Jesus Carrega a Cruz até o Calvário",
                meditation: "Meditamos no caminho doloroso de Jesus carregando a cruz, encontrando sua Mãe e recebendo a ajuda de Simão de Cirene."
            },
            {
                title: "5. A Crucifixão e Morte de Jesus",
                meditation: "Contemplamos Jesus crucificado, suas últimas palavras: 'Pai, em vossas mãos entrego o meu espírito', e sua morte redentora por amor a todos os homens."
            }
        ],
        gloriosos: [
            {
                title: "1. A Ressurreição de Jesus",
                meditation: "Contemplamos a vitória de Jesus sobre a morte, sua ressurreição gloriosa e as aparições aos discípulos, confirmando que Ele é verdadeiramente o Filho de Deus."
            },
            {
                title: "2. A Ascensão de Jesus ao Céu",
                meditation: "Meditamos na ascensão de Jesus aos céus, onde está sentado à direita do Pai, e na promessa do Espírito Santo que viria sobre os discípulos."
            },
            {
                title: "3. A Vinda do Espírito Santo em Pentecostes",
                meditation: "Contemplamos a descida do Espírito Santo sobre os Apóstolos, transformando-os em corajosos pregadores do Evangelho e fundadores da Igreja."
            },
            {
                title: "4. A Assunção de Nossa Senhora",
                meditation: "Meditamos na assunção de Maria ao céu em corpo e alma, como coroação de sua vida de pureza e fidelidade ao projeto de Deus."
            },
            {
                title: "5. A Coroação de Maria como Rainha do Céu e da Terra",
                meditation: "Contemplamos Maria coroada como Rainha do Céu e da Terra, intercedendo por todos os seus filhos e servindo como modelo de santidade para todos os cristãos."
            }
        ],
        luminosos: [
            {
                title: "1. O Batismo de Jesus no Jordão",
                meditation: "Contemplamos Jesus sendo batizado por João Batista, quando o Espírito Santo desce sobre Ele e a voz do Pai proclama: 'Este é o meu Filho amado, em quem me comprazo.'"
            },
            {
                title: "2. O Milagre de Caná",
                meditation: "Meditamos no primeiro milagre de Jesus, transformando água em vinho nas bodas de Caná, revelando sua glória e a intercessão amorosa de Maria."
            },
            {
                title: "3. O Anúncio do Reino de Deus",
                meditation: "Contemplamos Jesus pregando o Reino de Deus, convidando à conversão e anunciando as bem-aventuranças como caminho para a felicidade verdadeira."
            },
            {
                title: "4. A Transfiguração de Jesus",
                meditation: "Meditamos na transfiguração de Jesus no Monte Tabor, onde sua divindade brilha através da humanidade, confirmando aos discípulos que Ele é o Filho de Deus."
            },
            {
                title: "5. A Instituição da Eucaristia",
                meditation: "Contemplamos Jesus instituindo a Eucaristia na Última Ceia, dando-se como alimento espiritual e estabelecendo o sacerdócio para perpetuar este sacramento de amor."
            }
        ]
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl bg-crosses-css min-h-screen">
            <div className="text-center space-y-4 mb-8">
                                                                    <div className="inline-flex items-center justify-center w-28 h-28 rounded-full shadow-2xl mb-6 overflow-hidden border-4 border-medieval-gold bg-white p-0">
                                    <img 
                                        src="/images/logo.png" 
                                        alt="Fé Católica Logo" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                <h1 className="text-4xl md:text-5xl font-bold medieval-title">
                    Santo Rosário Completo
                </h1>
                <p className="text-lg max-w-2xl mx-auto leading-relaxed text-on-light">
                    Medite nos mistérios da nossa redenção através da oração do Santo Rosário
                </p>
            </div>

            {/* Orações Iniciais */}
            <Card className="medieval-container mb-6">
                <CardHeader 
                    className="cursor-pointer hover:bg-medieval-cream/50 transition-colors"
                    onClick={() => toggleSection('oracoesIniciais')}
                >
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-white text-2xl">Orações Iniciais</CardTitle>
                        {expandedSections.oracoesIniciais ? (
                            <ChevronUp className="w-6 h-6 text-medieval-red" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-medieval-red" />
                        )}
                    </div>
                    <p className="text-white">Sinal da Cruz, Oferecimento, Credo, Pai Nosso, Ave-Marias e Glória - Clique para expandir</p>
                </CardHeader>
                {expandedSections.oracoesIniciais && (
                    <CardContent className="space-y-6">
                        <div className="bg-medieval-white/20 p-4 rounded-lg border border-medieval-gold">
                            <h3 className="text-lg font-semibold text-white mb-3">Sinal da Cruz</h3>
                            <p className="text-white mb-4">Em nome do Pai, do Filho e do Espírito Santo. Amém.</p>
                            <Button 
                                onClick={() => speakPrayer("Em nome do Pai, do Filho e do Espírito Santo. Amém.")}
                                variant="outline" 
                                size="sm"
                                className="text-medieval-red border-medieval-gold"
                            >
                                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                Ouvir
                            </Button>
                        </div>

                        <div className="bg-medieval-white/20 p-4 rounded-lg border border-medieval-gold">
                            <h3 className="text-lg font-semibold text-white mb-3">Oferecimento</h3>
                            <p className="text-white mb-4">
                                Divino Jesus, nós vos oferecemos este Rosário que vamos rezar, contemplando os mistérios da nossa redenção. 
                                Concedei-nos, pela intercessão de Maria, vossa Mãe Santíssima, as virtudes que nos são necessárias para bem rezá-lo 
                                e a graça de ganharmos as indulgências desta santa devoção.
                            </p>
                        </div>

                        <div className="bg-medieval-white/20 p-4 rounded-lg border border-medieval-gold">
                            <h3 className="text-lg font-semibold text-white mb-3">Credo</h3>
                            <p className="text-white mb-4">
                                Creio em Deus Pai Todo-Poderoso, Criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; 
                                que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos; foi crucificado, 
                                morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus; está sentado à direita 
                                de Deus Pai Todo-Poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo; na Santa Igreja 
                                Católica; na comunhão dos santos; na remissão dos pecados; na ressurreição da carne; na vida eterna. Amém.
                            </p>
                        </div>

                        <div className="bg-medieval-white/20 p-4 rounded-lg border border-medieval-gold">
                            <h3 className="text-lg font-semibold text-white mb-3">Pai Nosso</h3>
                            <p className="text-white mb-4">
                                Pai nosso que estais nos céus, santificado seja o Vosso nome; venha a nós o Vosso reino; seja feita a Vossa vontade, 
                                assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós 
                                perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.
                            </p>
                        </div>

                        <div className="bg-medieval-white/20 p-4 rounded-lg border border-medieval-gold">
                            <h3 className="text-lg font-semibold text-white mb-3">Ave-Marias (3x)</h3>
                            <p className="text-white mb-4">
                                Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, 
                                Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.
                            </p>
                            <p className="text-sm text-white mb-4">(Rezar 3 vezes)</p>
                        </div>

                        <div className="bg-medieval-white/20 p-4 rounded-lg border border-medieval-gold">
                            <h3 className="text-lg font-semibold text-white mb-3">Glória ao Pai</h3>
                            <p className="text-white mb-4">
                                Glória ao Pai, ao Filho e ao Espírito Santo, como era no princípio, agora e sempre. Amém.
                            </p>
                        </div>
                    </CardContent>
                )}
            </Card>

            {/* Mistérios Gozosos */}
            <Card className="medieval-container mb-6">
                <CardHeader 
                    className="cursor-pointer hover:bg-medieval-cream/50 transition-colors"
                    onClick={() => toggleSection('misteriosGozosos')}
                >
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-white text-2xl">Mistérios Gozosos (Segunda e Sábado)</CardTitle>
                        {expandedSections.misteriosGozosos ? (
                            <ChevronUp className="w-6 h-6 text-medieval-red" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-medieval-red" />
                        )}
                    </div>
                    <p className="text-white">1. A Anunciação • 2. A Visitação • 3. O Nascimento • 4. A Apresentação • 5. A Perda e Encontro - Clique para expandir</p>
                </CardHeader>
                {expandedSections.misteriosGozosos && (
                    <CardContent className="space-y-6">
                        {mysteriesData.gozosos.map((mystery, index) => (
                            <MysteryComponent 
                                key={index}
                                title={mystery.title}
                                meditation={mystery.meditation}
                                colorClass="bg-medieval-white/20"
                                borderColor="border-l-4 border-medieval-gold"
                            />
                        ))}
                    </CardContent>
                )}
            </Card>

            {/* Mistérios Dolorosos */}
            <Card className="medieval-container mb-6">
                <CardHeader 
                    className="cursor-pointer hover:bg-medieval-cream/50 transition-colors"
                    onClick={() => toggleSection('misteriosDolorosos')}
                >
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-white text-2xl">Mistérios Dolorosos (Terça e Sexta)</CardTitle>
                        {expandedSections.misteriosDolorosos ? (
                            <ChevronUp className="w-6 h-6 text-medieval-red" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-medieval-red" />
                        )}
                    </div>
                    <p className="text-white">1. A Agonia • 2. A Flagelação • 3. A Coroação • 4. A Cruz • 5. A Crucifixão - Clique para expandir</p>
                </CardHeader>
                {expandedSections.misteriosDolorosos && (
                    <CardContent className="space-y-6">
                        {mysteriesData.dolorosos.map((mystery, index) => (
                            <MysteryComponent 
                                key={index}
                                title={mystery.title}
                                meditation={mystery.meditation}
                                colorClass="bg-medieval-white/20"
                                borderColor="border-l-4 border-medieval-gold"
                            />
                        ))}
                    </CardContent>
                )}
            </Card>

            {/* Mistérios Gloriosos */}
            <Card className="medieval-container mb-6">
                <CardHeader 
                    className="cursor-pointer hover:bg-medieval-cream/50 transition-colors"
                    onClick={() => toggleSection('misteriosGloriosos')}
                >
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-white text-2xl">Mistérios Gloriosos (Quarta e Domingo)</CardTitle>
                        {expandedSections.misteriosGloriosos ? (
                            <ChevronUp className="w-6 h-6 text-medieval-red" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-medieval-red" />
                        )}
                    </div>
                    <p className="text-white">1. A Ressurreição • 2. A Ascensão • 3. Pentecostes • 4. A Assunção • 5. A Coroação - Clique para expandir</p>
                </CardHeader>
                {expandedSections.misteriosGloriosos && (
                    <CardContent className="space-y-6">
                        {mysteriesData.gloriosos.map((mystery, index) => (
                            <MysteryComponent 
                                key={index}
                                title={mystery.title}
                                meditation={mystery.meditation}
                                colorClass="bg-medieval-white/20"
                                borderColor="border-l-4 border-medieval-gold"
                            />
                        ))}
                    </CardContent>
                )}
            </Card>

            {/* Mistérios Luminosos */}
            <Card className="medieval-container mb-6">
                <CardHeader 
                    className="cursor-pointer hover:bg-medieval-cream/50 transition-colors"
                    onClick={() => toggleSection('misteriosLuminosos')}
                >
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-white text-2xl">Mistérios Luminosos (Quinta-feira)</CardTitle>
                        {expandedSections.misteriosLuminosos ? (
                            <ChevronUp className="w-6 h-6 text-medieval-red" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-medieval-red" />
                        )}
                    </div>
                    <p className="text-white">1. O Batismo • 2. Caná • 3. O Reino • 4. A Transfiguração • 5. A Eucaristia - Clique para expandir</p>
                </CardHeader>
                {expandedSections.misteriosLuminosos && (
                    <CardContent className="space-y-6">
                        {mysteriesData.luminosos.map((mystery, index) => (
                            <MysteryComponent 
                                key={index}
                                title={mystery.title}
                                meditation={mystery.meditation}
                                colorClass="bg-medieval-white/20"
                                borderColor="border-l-4 border-medieval-gold"
                            />
                        ))}
                    </CardContent>
                )}
            </Card>

            {/* Orações Finais */}
            <Card className="medieval-container mb-6">
                <CardHeader 
                    className="cursor-pointer hover:bg-medieval-cream/50 transition-colors"
                    onClick={() => toggleSection('oracoesFinais')}
                >
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-white text-2xl">Orações Finais</CardTitle>
                        {expandedSections.oracoesFinais ? (
                            <ChevronUp className="w-6 h-6 text-medieval-red" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-medieval-red" />
                        )}
                    </div>
                    <p className="text-on-dark">Salve Rainha e Sinal da Cruz Final - Clique para expandir</p>
                </CardHeader>
                {expandedSections.oracoesFinais && (
                    <CardContent className="space-y-6">
                        <div className="bg-medieval-white/20 p-4 rounded-lg border border-medieval-gold">
                            <h3 className="text-lg font-semibold text-on-dark mb-3">Salve Rainha</h3>
                            <p className="text-on-dark mb-4">
                                Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva; 
                                a vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos 
                                a nós volvei. E, depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce 
                                sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.
                            </p>
                        </div>

                        <div className="bg-medieval-white/20 p-4 rounded-lg border border-medieval-gold">
                            <h3 className="text-lg font-semibold text-on-dark mb-3">Sinal da Cruz Final</h3>
                            <p className="text-on-dark mb-4">
                                Em nome do Pai, do Filho e do Espírito Santo. Amém.
                            </p>
                        </div>
                    </CardContent>
                )}
            </Card>

            {/* Instruções de Uso */}
            <Card className="medieval-container">
                <CardHeader>
                    <CardTitle className="text-on-dark text-xl">Como Rezar o Santo Rosário</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4 text-on-dark">
                        <p><strong>1.</strong> Comece com as Orações Iniciais (Sinal da Cruz, Oferecimento, Credo, Pai Nosso, 3 Ave-Marias, Glória)</p>
                        <p><strong>2.</strong> Escolha o conjunto de mistérios do dia:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li><strong>Segunda e Sábado:</strong> Mistérios Gozosos</li>
                            <li><strong>Terça e Sexta:</strong> Mistérios Dolorosos</li>
                            <li><strong>Quarta e Domingo:</strong> Mistérios Gloriosos</li>
                            <li><strong>Quinta-feira:</strong> Mistérios Luminosos</li>
                        </ul>
                        <p><strong>3.</strong> Para cada mistério: Pai Nosso, 10 Ave-Marias, Glória ao Pai, Oração de Fátima</p>
                        <p><strong>4.</strong> Termine com as Orações Finais (Salve Rainha, Sinal da Cruz)</p>
                        <p><strong>5.</strong> Use os botões de áudio para ouvir as orações enquanto reza</p>
                    </div>
                </CardContent>
            </Card>


        </div>
    );
};

export default RosaryPage;