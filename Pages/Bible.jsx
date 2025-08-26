
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../src/components/ui/card";
import { Button } from "../src/components/ui/button";
import { Textarea } from "../src/components/ui/textarea";

import { Book, ChevronLeft, ChevronRight, Search, Sparkles, Lightbulb, Loader2, Heart, MessageCircle } from "lucide-react";
import { bibleBooks } from "../Components/data/bibleBooks";
import { InvokeLLM } from "../Integrations/Core";
import AudioPlayer from "../src/components/ui/audio-player";

// API da Bíblia inline para teste
const bibleApi = {
    baseUrl: 'https://www.abibliadigital.com.br/api',
    version: 'aa',
    
    async getBooks() {
        try {
            const response = await fetch(`${this.baseUrl}/books`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Erro ao buscar livros:', error);
            throw error;
        }
    },
    
    async getVerses(bookAbbrev, chapter) {
        try {
            const response = await fetch(`${this.baseUrl}/verses/${this.version}/${bookAbbrev}/${chapter}`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar versículos:', error);
            
            // Fallback robusto com versículos reais para Gênesis 1
            if (bookAbbrev === 'gn' && chapter === '1') {
                return {
                    verses: [
                        { number: 1, text: "No princípio, criou Deus os céus e a terra." },
                        { number: 2, text: "A terra, porém, estava sem forma e vazia; havia trevas sobre a face do abismo, e o Espírito de Deus pairava sobre as águas." },
                        { number: 3, text: "Disse Deus: Haja luz; e houve luz." },
                        { number: 4, text: "Viu Deus que a luz era boa; e fez separação entre a luz e as trevas." },
                        { number: 5, text: "Chamou Deus à luz dia e às trevas, noite. Houve tarde e manhã, o primeiro dia." },
                        { number: 6, text: "Disse Deus: Haja um firmamento no meio das águas e separação entre águas e águas." },
                        { number: 7, text: "Fez, pois, Deus o firmamento e separação entre as águas que estavam debaixo do firmamento e as que estavam sobre o firmamento. E assim se fez." },
                        { number: 8, text: "E chamou Deus ao firmamento céus. Houve tarde e manhã, o segundo dia." },
                        { number: 9, text: "Disse Deus: Ajuntem-se as águas debaixo dos céus num só lugar, e apareça a porção seca. E assim se fez." },
                        { number: 10, text: "E chamou Deus à porção seca terra e ao ajuntamento das águas, mares. E viu Deus que isso era bom." },
                        { number: 11, text: "Disse Deus: Produza a terra relva, ervas que dêem semente, e árvores frutíferas que, segundo as suas espécies, dêem o seu fruto, cuja semente esteja nele, sobre a terra. E assim se fez." },
                        { number: 12, text: "A terra, pois, produziu relva, ervas que davam semente segundo as suas espécies, e árvores que davam fruto, cuja semente estava nele, segundo as suas espécies. E viu Deus que isso era bom." },
                        { number: 13, text: "Houve tarde e manhã, o terceiro dia." },
                        { number: 14, text: "Disse Deus: Haja luminares no firmamento dos céus, para fazerem separação entre o dia e a noite; e sejam eles para sinais, para estações, para dias e anos." },
                        { number: 15, text: "E sejam para luminares no firmamento dos céus, para alumiar a terra. E assim se fez." },
                        { number: 16, text: "Fez Deus os dois grandes luminares: o maior para governar o dia, e o menor para governar a noite; e fez também as estrelas." },
                        { number: 17, text: "E os colocou no firmamento dos céus para alumiar a terra," },
                        { number: 18, text: "para governar o dia e a noite e fazer separação entre a luz e as trevas. E viu Deus que isso era bom." },
                        { number: 19, text: "Houve tarde e manhã, o quarto dia." },
                        { number: 20, text: "Disse Deus: Povoem as águas de enxames de seres viventes; e voem as aves sobre a terra, sob o firmamento dos céus." },
                        { number: 21, text: "Criou, pois, Deus os grandes animais marinhos e todos os seres viventes que rastejam, os quais povoaram as águas, segundo as suas espécies; e todas as aves, segundo as suas espécies. E viu Deus que isso era bom." },
                        { number: 22, text: "E Deus os abençoou, dizendo: Sede fecundos, multiplicai-vos e enchei as águas dos mares; e, na terra, se multipliquem as aves." },
                        { number: 23, text: "Houve tarde e manhã, o quinto dia." },
                        { number: 24, text: "Disse Deus: Produza a terra seres viventes, segundo as suas espécies: animais domésticos, répteis e animais selvagens, segundo as suas espécies. E assim se fez." },
                        { number: 25, text: "E fez Deus os animais selvagens, segundo as suas espécies, e os animais domésticos, segundo as suas espécies, e todos os répteis da terra, segundo as suas espécies. E viu Deus que isso era bom." },
                        { number: 26, text: "Também disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; tenha ele domínio sobre os peixes do mar, sobre as aves dos céus, sobre os animais domésticos, sobre toda a terra e sobre todos os répteis que rastejam pela terra." },
                        { number: 27, text: "Criou Deus, pois, o homem à sua imagem, à imagem de Deus o criou; homem e mulher os criou." },
                        { number: 28, text: "E Deus os abençoou e lhes disse: Sede fecundos, multiplicai-vos, enchei a terra e sujeitai-a; dominai sobre os peixes do mar, sobre as aves dos céus e sobre todo animal que rasteja pela terra." },
                        { number: 29, text: "Eis que vos tenho dado todas as ervas que dão semente e se acham na superfície de toda a terra e todas as árvores em que há fruto que dê semente; isso vos será para mantimento." },
                        { number: 30, text: "E a todos os animais da terra, a todas as aves dos céus e a todos os répteis da terra, em que há fôlego de vida, toda erva verde lhes será para mantimento. E assim se fez." },
                        { number: 31, text: "Viu Deus tudo quanto fizera, e eis que era muito bom. Houve tarde e manhã, o sexto dia." }
                    ]
                };
            }
            
            // Fallback para Gênesis 2 com versículos sobre casamento (Easter Egg!)
            if (bookAbbrev === 'gn' && chapter === '2') {
                return {
                    verses: [
                        { number: 1, text: "Assim, pois, foram acabados os céus e a terra e todo o seu exército." },
                        { number: 2, text: "E havendo Deus acabado no dia sétimo a sua obra, que tinha feito, descansou no sétimo dia de toda a sua obra, que tinha feito." },
                        { number: 3, text: "E abençoou Deus o dia sétimo, e o santificou; porque nele descansou de toda a sua obra que Deus criara e fizera." },
                        { number: 4, text: "Estas são as origens dos céus e da terra, quando foram criados; no dia em que o SENHOR Deus fez a terra e os céus." },
                        { number: 5, text: "E toda planta do campo que ainda não estava na terra, e toda erva do campo que ainda não brotava; porque ainda o SENHOR Deus não tinha feito chover sobre a terra, e não havia homem para lavrar a terra." },
                        { number: 6, text: "Um vapor, porém, subia da terra, e regava toda a face da terra." },
                        { number: 7, text: "E formou o SENHOR Deus o homem do pó da terra, e soprou em suas narinas o fôlego da vida; e o homem foi feito alma vivente." },
                        { number: 8, text: "E plantou o SENHOR Deus um jardim no Éden, do lado oriental; e pôs ali o homem que tinha formado." },
                        { number: 15, text: "E tomou o SENHOR Deus o homem, e o pôs no jardim do Éden para o lavrar e o guardar." },
                        { number: 18, text: "E disse o SENHOR Deus: Não é bom que o homem esteja só; far-lhe-ei uma ajudadora idônea para ele." },
                        { number: 21, text: "Então o SENHOR Deus fez cair um sono pesado sobre Adão, e este adormeceu; e tomou uma das suas costelas, e cerrou a carne em seu lugar." },
                        { number: 22, text: "E da costela que o SENHOR Deus tomou do homem, formou uma mulher, e trouxe-a a Adão." },
                        { number: 23, text: "E disse Adão: Esta é agora osso dos meus ossos, e carne da minha carne; esta será chamada mulher, porquanto do homem foi tomada." },
                        { number: 24, text: "Portanto deixará o varão o seu pai e a sua mãe, e apegar-se-á à sua mulher, e serão ambos uma carne." },
                        { number: 25, text: "E ambos estavam nus, o homem e a sua mulher; e não se envergonhavam." }
                    ]
                };
            }
            
            // Fallback para João 3 (versículo mais famoso)
            if (bookAbbrev === 'jo' && chapter === '3') {
                return {
                    verses: [
                        { number: 1, text: "Havia um homem dos fariseus chamado Nicodemos, príncipe dos judeus." },
                        { number: 2, text: "Este foi ter com Jesus, de noite, e disse-lhe: Rabi, sabemos que és Mestre vindo da parte de Deus, pois ninguém pode fazer estes sinais que tu fazes, se Deus não estiver com ele." },
                        { number: 3, text: "Respondeu-lhe Jesus: Em verdade, em verdade te digo que, se alguém não nascer de novo, não pode ver o reino de Deus." },
                        { number: 4, text: "Perguntou-lhe Nicodemos: Como pode um homem nascer, sendo velho? Pode, porventura, voltar a entrar no ventre de sua mãe e nascer?" },
                        { number: 5, text: "Respondeu Jesus: Em verdade, em verdade te digo: Quem não nascer da água e do Espírito não pode entrar no reino de Deus." },
                        { number: 6, text: "O que é nascido da carne é carne; e o que é nascido do Espírito é espírito." },
                        { number: 7, text: "Não te admires de eu te dizer: Importa-vos nascer de novo." },
                        { number: 8, text: "O vento sopra onde quer, ouves a sua voz, mas não sabes donde vem, nem para onde vai; assim é todo o que é nascido do Espírito." },
                        { number: 9, text: "Perguntou-lhe Nicodemos: Como pode suceder isto?" },
                        { number: 10, text: "Respondeu-lhe Jesus: Tu és mestre em Israel e não compreendes estas coisas?" },
                        { number: 11, text: "Em verdade, em verdade te digo que nós dizemos o que sabemos e testemunhamos o que temos visto; contudo, não aceitais o nosso testemunho." },
                        { number: 12, text: "Se, tratando de coisas terrenas, não me credes, como crereis, se vos falar das celestiais?" },
                        { number: 13, text: "Ora, ninguém subiu ao céu, senão aquele que de lá desceu, a saber, o Filho do Homem." },
                        { number: 14, text: "E, como Moisés levantou a serpente no deserto, assim importa que o Filho do Homem seja levantado," },
                        { number: 15, text: "para que todo o que nele crê tenha a vida eterna." },
                        { number: 16, text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna." },
                        { number: 17, text: "Porquanto Deus enviou o seu Filho ao mundo, não para que julgue o mundo, mas para que o mundo seja salvo por ele." },
                        { number: 18, text: "Quem nele crê não é julgado; o que não crê já está julgado, porquanto não crê no nome do unigênito Filho de Deus." },
                        { number: 19, text: "O julgamento é este: que a luz veio ao mundo, e os homens amaram mais as trevas do que a luz; porque as suas obras eram más." },
                        { number: 20, text: "Porque todo aquele que pratica o mal aborrece a luz e não vem para a luz, para que as suas obras não sejam reprovadas." },
                        { number: 21, text: "Mas quem pratica a verdade vem para a luz, a fim de que as suas obras sejam manifestas, porque feitas em Deus." }
                    ]
                };
            }
            
            // Fallback para Salmos 23 (Salmo do Pastor)
            if (bookAbbrev === 'sl' && chapter === '23') {
                return {
                    verses: [
                        { number: 1, text: "O Senhor é o meu pastor, nada me faltará." },
                        { number: 2, text: "Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas." },
                        { number: 3, text: "Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome." },
                        { number: 4, text: "Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam." },
                        { number: 5, text: "Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda." },
                        { number: 6, text: "Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias." }
                    ]
                };
            }
            
            // Fallback genérico para outros livros/capítulos
            return {
                verses: [
                    { number: 1, text: `Versículo 1 do capítulo ${chapter} de ${bookAbbrev} - Carregando da API...` },
                    { number: 2, text: `Versículo 2 do capítulo ${chapter} de ${bookAbbrev} - Carregando da API...` },
                    { number: 3, text: `Versículo 3 do capítulo ${chapter} de ${bookAbbrev} - Carregando da API...` },
                    { number: 4, text: `Versículo 4 do capítulo ${chapter} de ${bookAbbrev} - Carregando da API...` },
                    { number: 5, text: `Versículo 5 do capítulo ${chapter} de ${bookAbbrev} - Carregando da API...` }
                ]
            };
        }
    },
    
    getBookAbbrev(bookName) {
        const bookMap = {
            'Gênesis': 'gn', 'Êxodo': 'ex', 'Levítico': 'lv', 'Números': 'nm', 'Deuteronômio': 'dt',
            'Josué': 'js', 'Juízes': 'jz', 'Rute': 'rt', '1º Samuel': '1sm', '2º Samuel': '2sm',
            '1º Reis': '1rs', '2º Reis': '2rs', '1º Crônicas': '1cr', '2º Crônicas': '2cr',
            'Esdras': 'ed', 'Neemias': 'ne', 'Ester': 'et', 'Jó': 'job', 'Salmos': 'sl',
            'Provérbios': 'pv', 'Eclesiastes': 'ec', 'Cânticos': 'ct', 'Isaías': 'is', 'Jeremias': 'jr',
            'Lamentações': 'lm', 'Ezequiel': 'ez', 'Daniel': 'dn', 'Oséias': 'os', 'Joel': 'jl',
            'Amós': 'am', 'Obadias': 'ob', 'Jonas': 'jn', 'Miquéias': 'mq', 'Naum': 'na',
            'Habacuque': 'hc', 'Sofonias': 'sf', 'Ageu': 'ag', 'Zacarias': 'zc', 'Malaquias': 'ml',
            'Mateus': 'mt', 'Marcos': 'mc', 'Lucas': 'lc', 'João': 'jo', 'Atos': 'atos',
            'Romanos': 'rm', '1ª Coríntios': '1co', '2ª Coríntios': '2co', 'Gálatas': 'gl',
            'Efésios': 'ef', 'Filipenses': 'fp', 'Colossenses': 'cl', '1ª Tessalonicenses': '1ts',
            '2ª Tessalonicenses': '2ts', '1ª Timóteo': '1tm', '2ª Timóteo': '2tm', 'Tito': 'tt',
            'Filemom': 'fm', 'Hebreus': 'hb', 'Tiago': 'tg', '1ª Pedro': '1pe', '2ª Pedro': '2pe',
            '1ª João': '1jo', '2ª João': '2jo', '3ª João': '3jo', 'Judas': 'jd', 'Apocalipse': 'ap'
        };
        return bookMap[bookName] || bookName.toLowerCase();
    },
    
    // Método para buscar informações do livro
    async getBookInfo(bookAbbrev) {
        try {
            const response = await fetch(`${this.baseUrl}/books/${bookAbbrev}`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Erro ao buscar informações do livro:', error);
            // Fallback: usar informações locais
            const localBook = bibleBooks.find(b => b.abbrev?.pt === bookAbbrev || b.abbrev?.en === bookAbbrev);
            return localBook || { chapters: 50 }; // Fallback padrão
        }
    },
    
    // Método para buscar por texto
    async searchByText(query) {
        try {
            const response = await fetch(`${this.baseUrl}/verses/${this.version}/search/${encodeURIComponent(query)}`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Erro na busca por texto:', error);
            // Fallback: retornar resultados simulados
            return [
                {
                    reference: "João 3:16",
                    text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
                    book: { name: "João" },
                    chapter: 3,
                    number: 16
                }
            ];
        }
    },
    
    // Método para buscar por referência
    async getVersesByReference(reference) {
        try {
            // Parsear referência simples (ex: "João 3:16")
            const match = reference.match(/^([1-3]?[a-zA-Zçãõáéíóúâêîôû\s]+)\s+(\d+):(\d+)$/);
            if (match) {
                const bookName = match[1].trim();
                const chapter = match[2];
                const verse = match[3];
                const bookAbbrev = this.getBookAbbrev(bookName);
                
                // Buscar versículo específico
                const response = await fetch(`${this.baseUrl}/verses/${this.version}/${bookAbbrev}/${chapter}/${verse}`);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return await response.json();
            }
            throw new Error('Formato de referência inválido');
        } catch (error) {
            console.error('Erro ao buscar por referência:', error);
            // Fallback: retornar João 3:16
            return {
                reference: "João 3:16",
                text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
                book: { name: "João" },
                chapter: 3,
                number: 16
            };
        }
    }
};

console.log('BiblePage - bibleApi criado inline:', bibleApi);

export default function BiblePage() {
    const [selectedBook, setSelectedBook] = useState("Gênesis");
    const [selectedChapter, setSelectedChapter] = useState("1");
    const [selectedVerse, setSelectedVerse] = useState("");
    const [bibleText, setBibleText] = useState("Capítulo 1 de Gênesis");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [comment, setComment] = useState("");
    const [showMarriageAnimation, setShowMarriageAnimation] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentVerses, setCurrentVerses] = useState([
        { number: 1, text: "No princípio, criou Deus os céus e a terra.", isHighlighted: false },
        { number: 2, text: "A terra, porém, estava sem forma e vazia; havia trevas sobre a face do abismo, e o Espírito de Deus pairava sobre as águas.", isHighlighted: false },
        { number: 3, text: "Disse Deus: Haja luz; e houve luz.", isHighlighted: false },
        { number: 4, text: "Viu Deus que a luz era boa; e fez separação entre a luz e as trevas.", isHighlighted: false },
        { number: 5, text: "Chamou Deus à luz dia e às trevas, noite. Houve tarde e manhã, o primeiro dia.", isHighlighted: false },
        { number: 6, text: "Disse Deus: Haja um firmamento no meio das águas e separação entre águas e águas.", isHighlighted: false },
        { number: 7, text: "Fez, pois, Deus o firmamento e separação entre as águas que estavam debaixo do firmamento e as que estavam sobre o firmamento. E assim se fez.", isHighlighted: false },
        { number: 8, text: "E chamou Deus ao firmamento céus. Houve tarde e manhã, o segundo dia.", isHighlighted: false },
        { number: 9, text: "Disse Deus: Ajuntem-se as águas debaixo dos céus num só lugar, e apareça a porção seca. E assim se fez.", isHighlighted: false },
        { number: 10, text: "E chamou Deus à porção seca terra e ao ajuntamento das águas, mares. E viu Deus que isso era bom.", isHighlighted: false }
    ]);
    const [bookInfo, setBookInfo] = useState(bibleBooks.find(b => b.name === 'Gênesis') || { chapters: 50 });

    // Carregar dados iniciais
    useEffect(() => {
        console.log('Página da Bíblia carregada com sucesso!');
        
        // Configurar informações do livro Gênesis
        const genesisBook = bibleBooks.find(b => b.name === 'Gênesis');
        if (genesisBook) {
            setBookInfo(genesisBook);
            console.log('Informações do Gênesis carregadas:', genesisBook);
        }
        
        console.log('Estado inicial configurado:');
        console.log('- Livro:', selectedBook);
        console.log('- Capítulo:', selectedChapter);
        console.log('- Versículos:', currentVerses.length);
        console.log('- Texto:', bibleText);
        console.log('- BookInfo:', genesisBook);
    }, []);

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;
        
        setIsSearching(true);
        try {
            console.log('Iniciando busca por:', searchQuery);
            
            // Tentar buscar por referência primeiro
            if (searchQuery.includes(':')) {
                console.log('Buscando por referência...');
                const results = await bibleApi.getVersesByReference(searchQuery);
                console.log('Resultados da referência:', results);
                setSearchResults([results]);
            } else {
                // Buscar por texto
                console.log('Buscando por texto...');
                const results = await bibleApi.searchByText(searchQuery);
                console.log('Resultados do texto:', results);
                setSearchResults(Array.isArray(results) ? results : [results]);
            }
        } catch (error) {
            console.error("Erro na busca:", error);
            setSearchResults([]);
        } finally {
            setIsSearching(false);
        }
    };

    const handleBookChange = (book) => {
        console.log('Selecionando livro:', book);
        setSelectedBook(book);
        setSelectedChapter("");
        setSelectedVerse("");
        setBibleText("");
        setCurrentVerses([]);
        
        // Buscar informações do livro
        const localBook = bibleBooks.find(b => b.name === book);
        if (localBook) {
            setBookInfo(localBook);
            console.log('Informações do livro carregadas:', localBook);
            } else {
            setBookInfo({ chapters: 50 }); // Fallback padrão
        }
    };

    const handleChapterChange = (chapter) => {
        console.log('Selecionando capítulo:', chapter, 'do livro:', selectedBook);
        setSelectedChapter(chapter);
        setSelectedVerse("");
        setBibleText("");
        setCurrentVerses([]);
        
        if (selectedBook && chapter) {
            // Fallback: usar versículos simulados para teste
            const fallbackVerses = [
                { number: 1, text: `Versículo 1 do capítulo ${chapter} de ${selectedBook} - Carregando...`, isHighlighted: false },
                { number: 2, text: `Versículo 2 do capítulo ${chapter} de ${selectedBook} - Carregando...`, isHighlighted: false },
                { number: 3, text: `Versículo 3 do capítulo ${chapter} de ${selectedBook} - Carregando...`, isHighlighted: false },
                { number: 4, text: `Versículo 4 do capítulo ${chapter} de ${selectedBook} - Carregando...`, isHighlighted: false },
                { number: 5, text: `Versículo 5 do capítulo ${chapter} de ${selectedBook} - Carregando...`, isHighlighted: false }
            ];
            
            setCurrentVerses(fallbackVerses);
            setBibleText(`Capítulo ${chapter} de ${selectedBook} (Modo Offline)`);
            console.log('Versículos simulados carregados:', fallbackVerses);
        }
    };

    const handleVerseChange = (verse) => {
        console.log('Selecionando versículo:', verse);
        setSelectedVerse(verse);
        
        if (currentVerses.length > 0) {
            // Atualizar destaque dos versículos
            const updatedVerses = currentVerses.map(v => ({
                ...v,
                isHighlighted: v.number === parseInt(verse)
            }));
            setCurrentVerses(updatedVerses);
            
            const selectedVerseData = currentVerses.find(v => v.number === parseInt(verse));
            if (selectedVerseData) {
                setBibleText(selectedVerseData.text);
                console.log('Versículo destacado:', selectedVerseData);
            }
        }
    };

    const handleCommentChange = (text) => {
        setComment(text);
        
        // Verificar se está em Gênesis 2:24-25 e se escreveu a frase especial
        if (selectedBook === "Gênesis" && selectedChapter === "2" && 
            (selectedVerse === "24" || selectedVerse === "25" || 
             (selectedChapter === "2" && selectedVerse === ""))) {
            
            const specialPhrase = "O casamento é a mais bela instituição humana, a mais pura relação entre dois seres que se amam e se respeitam.";
            
            if (text.trim().toLowerCase() === specialPhrase.toLowerCase()) {
                setShowMarriageAnimation(true);
                // Ocultar animação após 10 segundos
                setTimeout(() => setShowMarriageAnimation(false), 10000);
            }
        }
    };

    return (
        <div className="min-h-screen p-6 bg-crosses-css">
            <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
                                                    <div className="inline-flex items-center justify-center w-28 h-28 rounded-full shadow-2xl mb-6 overflow-hidden border-4 border-medieval-gold bg-white p-0">
                                    <img 
                                        src="/images/logo.png" 
                                        alt="Bíblia Sagrada Logo" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                    <h1 className="text-4xl md:text-5xl font-bold medieval-title">
                        Bíblia Sagrada
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed text-on-light">
                        Vulgata Católica - Palavra de Deus
                    </p>
                </div>

                {/* Busca de Versículos */}
                <Card className="bg-white shadow-lg border-2 border-medieval-gold">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-white">
                            <Search className="w-6 h-6 text-medieval-gold" />
                            Buscar Versículos
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-3">
                            <input
                                type="text"
                                placeholder="Digite palavras-chave ou referência (ex: João 3:16)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 px-4 py-2 border-2 border-medieval-gold rounded-md focus:outline-none focus:ring-2 focus:ring-medieval-gold transition-all bg-white text-medieval-black placeholder-gray-500"
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <Button 
                                onClick={handleSearch}
                                disabled={isSearching || !searchQuery.trim()}
                                className="bg-medieval-red text-white hover:bg-medieval-black transition-colors duration-200 px-6 py-2 rounded-md"
                            >
                                {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                                {isSearching ? 'Buscando...' : 'Buscar'}
                            </Button>
                        </div>

                        {/* Resultados da Busca */}
                        {searchResults.length > 0 && (
                            <div className="space-y-3">
                                <h4 className="font-semibold text-medieval-black">Resultados da Busca:</h4>
                                {searchResults.map((result, index) => (
                                    <Card key={index} className="transition-all bg-white border-2 border-medieval-gold hover:bg-gray-50">
                                        <CardContent className="p-4">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <h5 className="font-semibold mb-2 text-medieval-red hover:text-medieval-black transition-colors">
                                                        {result.reference || `${result.book?.name || 'Bíblia'} ${result.chapter}:${result.number || result.verse}`}
                                                    </h5>
                                                                                            <p className="leading-relaxed text-black bg-white p-2 rounded">
                                            {result.text || result.content}
                                        </p>
                                                </div>
                                                <AudioPlayer
                                                    text={result.text || result.content}
                                                    language="pt-BR"
                                                    showControls={false}
                                                    className="ml-4"
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Navegação por Livro/Capítulo/Versículo */}
                <Card className="bg-white shadow-lg border-2 border-medieval-gold">
                    <CardHeader>
                        <CardTitle className="text-white">Navegação Bíblica</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Seleção de Livro */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-white">
                                    Livro
                                </label>
                                <select 
                                    value={selectedBook} 
                                    onChange={(e) => handleBookChange(e.target.value)}
                                    className="w-full h-10 px-3 py-2 border-2 border-medieval-gold rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-medieval-gold bg-white text-medieval-black hover:bg-gray-50 transition-colors"
                                >
        {bibleBooks.map((book) => (
                                        <option key={book.name} value={book.name}>
                                            {book.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                                                        {/* Seleção de Capítulo */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-white">
                                    Capítulo
                                </label>
                                <select 
                                    value={selectedChapter} 
                                    onChange={(e) => handleChapterChange(e.target.value)}
                                    disabled={!selectedBook}
                                    className="w-full h-10 px-3 py-2 border-2 border-medieval-gold rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-medieval-gold disabled:opacity-50 disabled:cursor-not-allowed bg-white text-medieval-black hover:bg-gray-50 transition-colors"
                                >
                                    <option value="">Selecione um capítulo</option>
                                    {selectedBook && bookInfo && Array.from({ length: bookInfo.chapters }, (_, i) => i + 1).map((chapter) => (
                                        <option key={chapter} value={chapter.toString()}>
                                            {chapter}
                                        </option>
                                    ))}
                                </select>
        </div>

                                                        {/* Seleção de Versículo */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-white">
                                    Versículo
                                </label>
                                <select 
                                    value={selectedVerse} 
                                    onChange={(e) => handleVerseChange(e.target.value)}
                                    disabled={!selectedChapter || currentVerses.length === 0}
                                    className="w-full h-10 px-3 py-2 border-2 border-medieval-gold rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-medieval-gold disabled:opacity-50 disabled:cursor-not-allowed bg-white text-medieval-black hover:bg-gray-50 transition-colors"
                                >
                                    <option value="">Selecione um versículo</option>
                                    {selectedChapter && currentVerses.length > 0 && currentVerses.map((verse) => (
                                        <option key={verse.number} value={verse.number.toString()}>
                                            {verse.number}
                                        </option>
                                    ))}
                                </select>
        </div>
        </div>

                        {/* Texto Bíblico */}
                        {isLoading ? (
                            <Card className="border-2 border-dashed border-medieval-gold bg-white">
                                <CardContent className="p-6 text-center">
                                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-medieval-gold" />
                                    <p className="text-medieval-black">Carregando capítulo...</p>
                                </CardContent>
                            </Card>
                        ) : currentVerses.length > 0 ? (
                            <Card className="border-2 border-medieval-gold bg-white">
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <h4 className="font-semibold text-medieval-red hover:text-medieval-black transition-colors">
                                            {selectedBook} {selectedChapter}
                                        </h4>
                                        <AudioPlayer
                                            text={currentVerses.map(v => `${v.number}. ${v.text}`).join(' ')}
                                            language="pt-BR"
                                            showControls={false}
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        {currentVerses.map((verse) => (
                                            <div 
                                                key={verse.number} 
                                                className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-200 bg-white ${
                                                    verse.isHighlighted 
                                                        ? 'border-2 border-medieval-gold shadow-lg' 
                                                        : 'hover:bg-gray-50 border border-gray-200'
                                                }`}
                                            >
                                                <span 
                                                    className={`font-bold text-sm ${
                                                        verse.isHighlighted ? 'text-lg' : ''
                                                    } text-medieval-gold hover:text-medieval-black transition-colors`}
                                                >
                                                    {verse.number}.
                                                </span>
                                                <p 
                                                    className={`flex-1 leading-relaxed ${
                                                        verse.isHighlighted ? 'font-medium text-red-600' : 'text-black'
                                                    }`}
                                                >
                {verse.text}
                </p>
                                                <AudioPlayer
                                                    text={verse.text}
                                                    language="pt-BR"
                                                    showControls={false}
                                                    className="text-sm"
                                                />
                                            </div>
            ))}
            </div>

            {/* Campo de Comentários */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-blue-800">Seus Comentários e Reflexões</h4>
                </div>
                <Textarea
                    placeholder="Escreva seus pensamentos, reflexões ou comentários sobre este capítulo..."
                    value={comment}
                    onChange={(e) => handleCommentChange(e.target.value)}
                    className="min-h-[100px] resize-none border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                    rows={4}
                />
                <p className="text-xs text-blue-600 mt-2">
                    💡 Dica: Compartilhe o que Deus falou ao seu coração através desta passagem
                </p>
            </div>
                                </CardContent>
                            </Card>
                        ) : selectedBook && selectedChapter ? (
                            <Card className="border-2 border-dashed" style={{borderColor: 'var(--theme-border)'}}>
                                <CardContent className="p-6 text-center">
                                    <p style={{color: 'var(--theme-text-dark)'}}>Selecione um capítulo para ver os versículos</p>
                                </CardContent>
                            </Card>
                        ) : (
                            <Card className="border-2 border-dashed" style={{borderColor: 'var(--theme-border)'}}>
                                <CardContent className="p-6 text-center">
                                    <Book className="w-12 h-12 mx-auto mb-4" style={{color: 'var(--theme-primary)'}} />
                                    <h4 className="text-lg font-semibold mb-2" style={{color: 'var(--theme-primary)'}}>
                                        Bem-vindo à Bíblia Sagrada
                                    </h4>
                                    <p style={{color: 'var(--theme-text-light)'}} className="mb-4">
                                        Selecione um livro e capítulo para começar a ler, ou use a busca para encontrar versículos específicos.
                                    </p>
                                    <div className="text-sm" style={{color: 'var(--theme-text-light)'}}>
                                        <p>💡 Dica: Comece selecionando "Gênesis" e depois o capítulo 1</p>
                                    </div>
                                </CardContent>
                            </Card>
        )}
        </CardContent>
        </Card>

                {/* IA Bíblica */}
                <Card className="shadow-lg" style={{borderColor: 'var(--theme-border)'}}>
                    <CardHeader>
                        <CardTitle style={{color: 'var(--theme-primary)'}}>Assistente Bíblico com IA</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4" style={{color: 'var(--theme-text-light)'}}>
                            Faça perguntas sobre passagens bíblicas e receba orientações espirituais inteligentes.
                        </p>
                        <div className="space-y-3">
                            <Button 
                                className="w-full text-white hover:opacity-90"
                                style={{backgroundColor: 'var(--theme-primary)'}}
                                onClick={async () => {
                                    try {
                                        const response = await InvokeLLM(
                                            "João 3:16 - Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
                                            "Explique este versículo e como aplicá-lo na vida diária"
                                        );
                                        alert(response.text);
                                    } catch (error) {
                                        alert("Erro ao gerar insight bíblico. Tente novamente.");
                                    }
                                }}
                            >
                                <Sparkles className="w-4 h-4 mr-2" />
                                Perguntar à IA sobre João 3:16
        </Button>
                            <Button 
                                variant="outline"
                                className="w-full"
                                onClick={async () => {
                                    try {
                                        const response = await InvokeLLM(
                                            "Como posso crescer na fé e na vida espiritual?",
                                            "Dê orientações práticas para crescimento espiritual baseadas na Bíblia"
                                        );
                                        alert(response.text);
                                    } catch (error) {
                                        alert("Erro ao gerar orientação espiritual. Tente novamente.");
                                    }
                                }}
                            >
                                <Lightbulb className="w-4 h-4 mr-2" />
                                Pedir Orientação Espiritual
        </Button>
        </div>
                    </CardContent>
                </Card>
        </div>

        {/* Animação de Pedido de Casamento */}
        {showMarriageAnimation && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                <div className="relative w-full max-w-4xl mx-4">
                    {/* Céu Estrelado Animado */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-purple-900 to-pink-900 overflow-hidden">
                        {[...Array(50)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${2 + Math.random() * 2}s`
                                }}
                            >
                                <div className="w-2 h-2 bg-yellow-300 rounded-full shadow-lg shadow-yellow-300/50"></div>
                            </div>
                        ))}
                    </div>

                    {/* Conteúdo Principal */}
                    <div className="relative z-10 text-center text-white p-8">
                        {/* Anéis de Casamento Animados */}
                        <div className="mb-8 animate-bounce">
                            <div className="flex justify-center items-center gap-4">
                                {/* Anel Dourado */}
                                <div className="relative">
                                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-400/50 animate-pulse">
                                        <div className="w-12 h-12 bg-transparent border-4 border-white rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
                                    </div>
                                    {/* Brilhos ao redor do anel */}
                                    {[...Array(8)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-2 h-2 bg-yellow-200 rounded-full animate-sparkle"
                                            style={{
                                                left: `${50 + 30 * Math.cos(i * Math.PI / 4)}%`,
                                                top: `${50 + 30 * Math.sin(i * Math.PI / 4)}%`,
                                                animationDelay: `${i * 0.2}s`
                                            }}
                                        ></div>
                                    ))}
                                </div>
                                
                                {/* Símbolo de Infinito/União */}
                                <div className="text-6xl text-pink-300 animate-pulse">
                                    ∞
                                </div>
                                
                                {/* Anel Rosa */}
                                <div className="relative">
                                    <div className="w-20 h-20 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl shadow-pink-400/50 animate-pulse" style={{animationDelay: '0.5s'}}>
                                        <div className="w-12 h-12 bg-transparent border-4 border-white rounded-full animate-spin" style={{animationDuration: '3s', animationDirection: 'reverse'}}></div>
                                    </div>
                                    {/* Brilhos ao redor do anel */}
                                    {[...Array(8)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-2 h-2 bg-pink-200 rounded-full animate-sparkle"
                                            style={{
                                                left: `${50 + 30 * Math.cos(i * Math.PI / 4)}%`,
                                                top: `${50 + 30 * Math.sin(i * Math.PI / 4)}%`,
                                                animationDelay: `${i * 0.2 + 1}s`
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Texto Principal */}
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-pulse">
                            💍 CASAMENTO 💍
                        </h1>
                        
                        <div className="space-y-6 text-xl md:text-2xl">
                            <p className="animate-fade-in-up" style={{animationDelay: '1s'}}>
                                "Por isso deixará o homem seu pai e sua mãe, e se unirá à sua mulher, e serão os dois uma só carne."
                            </p>
                            <p className="text-yellow-300 font-semibold animate-fade-in-up" style={{animationDelay: '2s'}}>
                                Gênesis 2:24
                            </p>
                            
                            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                                <p className="text-lg md:text-xl leading-relaxed animate-fade-in-up" style={{animationDelay: '3s'}}>
                                    !.
                                </p>
                                <p className="text-yellow-300 mt-4 animate-fade-in-up" style={{animationDelay: '4s'}}>
                                    Que Deus abençoe todos os casais! 🙏✨
                                </p>
                            </div>
                        </div>

                        {/* Botão para fechar */}
                        <button
                            onClick={() => setShowMarriageAnimation(false)}
                            className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            ✨ Fechar ✨
                        </button>
                    </div>

                    {/* Confetes Caindo */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(40)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-confetti"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `-20px`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${4 + Math.random() * 6}s`
                                }}
                            >
                                {/* Confetes de diferentes formas e cores */}
                                {i % 5 === 0 && <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>}
                                {i % 5 === 1 && <div className="w-2 h-4 bg-pink-400 shadow-lg"></div>}
                                {i % 5 === 2 && <div className="w-4 h-2 bg-purple-400 shadow-lg"></div>}
                                {i % 5 === 3 && <div className="w-3 h-3 bg-blue-400 transform rotate-45 shadow-lg"></div>}
                                {i % 5 === 4 && <div className="w-2 h-2 bg-red-400 rounded-full shadow-lg"></div>}
                            </div>
                        ))}
                    </div>
                    
                    {/* Efeitos de Partículas Flutuantes */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(15)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-float"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${3 + Math.random() * 4}s`
                                }}
                            >
                                <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-lg animate-pulse"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
        </div>
    );
}
