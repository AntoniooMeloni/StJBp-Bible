import React, { useState, useEffect, useRef } from 'react';
import { Button } from './button';
import { Volume2, VolumeX, Play, Pause, Settings, RotateCcw } from 'lucide-react';

const AudioPlayer = ({ 
    text, 
    language = 'pt-BR', 
    className = '',
    showControls = true,
    autoPlay = false 
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [currentVoice, setCurrentVoice] = useState(null);
    const [availableVoices, setAvailableVoices] = useState([]);
    const [rate, setRate] = useState(0.9);
    const [pitch, setPitch] = useState(1);
    const [volume, setVolume] = useState(1);
    const [showSettings, setShowSettings] = useState(false);
    const utteranceRef = useRef(null);

    useEffect(() => {
        loadVoices();
        if (autoPlay && text) {
            speak();
        }
    }, [text, autoPlay]);

    const loadVoices = () => {
        const voices = window.speechSynthesis?.getVoices() || [];
        const filteredVoices = voices.filter(voice => 
            voice.lang.startsWith(language) || 
            voice.lang.startsWith('pt') || 
            voice.lang.startsWith('en')
        );
        
        setAvailableVoices(filteredVoices);
        
        // Selecionar a melhor voz disponível
        if (filteredVoices.length > 0) {
            const preferredVoice = filteredVoices.find(voice => 
                voice.name.includes('Google') || 
                voice.name.includes('Natural') ||
                voice.name.includes('Premium')
            ) || filteredVoices[0];
            setCurrentVoice(preferredVoice);
        }
    };

    const speak = () => {
        if (!text || !currentVoice) return;

        // Cancelar qualquer fala anterior
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = currentVoice;
        utterance.lang = currentVoice.lang || language;
        utterance.rate = rate;
        utterance.pitch = pitch;
        utterance.volume = volume;

        utterance.onstart = () => {
            setIsPlaying(true);
            setIsPaused(false);
        };

        utterance.onend = () => {
            setIsPlaying(false);
            setIsPaused(false);
        };

        utterance.onpause = () => {
            setIsPaused(true);
        };

        utterance.onresume = () => {
            setIsPaused(false);
        };

        utterance.onerror = (event) => {
            console.error('Erro na síntese de fala:', event);
            setIsPlaying(false);
            setIsPaused(false);
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    };

    const pause = () => {
        window.speechSynthesis.pause();
        setIsPaused(true);
    };

    const resume = () => {
        window.speechSynthesis.resume();
        setIsPaused(false);
    };

    const stop = () => {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setIsPaused(false);
    };

    const handleVoiceChange = (voiceName) => {
        const selectedVoice = availableVoices.find(voice => voice.name === voiceName);
        if (selectedVoice) {
            setCurrentVoice(selectedVoice);
            if (isPlaying) {
                stop();
                setTimeout(speak, 100);
            }
        }
    };

    const resetSettings = () => {
        setRate(0.9);
        setPitch(1);
        setVolume(1);
    };

    if (!showControls) {
        return (
            <Button
                onClick={isPlaying ? stop : speak}
                variant="ghost"
                size="sm"
                className={`text-medieval-gold hover:bg-medieval-gold/10 ${className}`}
                disabled={!text || !currentVoice}
            >
                {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
        );
    }

    return (
        <div className={`medieval-container p-6 ${className}`}>
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold medieval-subtitle-on-light">Controles de Áudio</h4>
                <Button
                    onClick={() => setShowSettings(!showSettings)}
                    variant="ghost"
                    size="sm"
                    className="text-medieval-red hover:bg-medieval-red/20"
                >
                    <Settings className="w-4 h-4" />
                </Button>
            </div>

            {/* Controles principais */}
            <div className="flex items-center gap-3 mb-4">
                <Button
                    onClick={isPlaying ? (isPaused ? resume : pause) : speak}
                    variant="outline"
                    size="sm"
                    className="bg-medieval-blue/20 border-medieval-blue/50 text-medieval-blue hover:bg-medieval-blue/30"
                    disabled={!text || !currentVoice}
                >
                    {!isPlaying ? <Play className="w-4 h-4" /> : 
                     isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                    {!isPlaying ? 'Ouvir' : isPaused ? 'Continuar' : 'Pausar'}
                </Button>

                <Button
                    onClick={stop}
                    variant="outline"
                    size="sm"
                    className="bg-medieval-blue/20 border-medieval-blue/50 text-medieval-blue hover:bg-medieval-blue/30"
                    disabled={!isPlaying}
                >
                    <RotateCcw className="w-4 h-4" />
                    Parar
                </Button>
            </div>

            {/* Configurações avançadas */}
            {showSettings && (
                <div className="space-y-4 pt-4 border-t-2 border-medieval-gold">
                    {/* Seleção de voz */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-medieval-black">Voz:</label>
                        <select
                            value={currentVoice?.name || ''}
                            onChange={(e) => handleVoiceChange(e.target.value)}
                            className="medieval-select w-full p-2 text-sm"
                        >
                            {availableVoices.map((voice) => (
                                <option key={voice.name} value={voice.name}>
                                    {voice.name} ({voice.lang})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Velocidade */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-medieval-black">
                            Velocidade: {rate.toFixed(1)}x
                        </label>
                        <input
                            type="range"
                            min="0.5"
                            max="2"
                            step="0.1"
                            value={rate}
                            onChange={(e) => setRate(parseFloat(e.target.value))}
                            className="w-full accent-medieval-red"
                        />
                    </div>

                    {/* Tom */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-medieval-black">
                            Tom: {pitch.toFixed(1)}
                        </label>
                        <input
                            type="range"
                            min="0.5"
                            max="2"
                            step="0.1"
                            value={pitch}
                            onChange={(e) => setPitch(parseFloat(e.target.value))}
                            className="w-full accent-medieval-red"
                        />
                    </div>

                    {/* Volume */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-medieval-black">
                            Volume: {Math.round(volume * 100)}%
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                            className="w-full accent-medieval-red"
                        />
                    </div>

                    {/* Botão reset */}
                    <Button
                        onClick={resetSettings}
                        variant="outline"
                        size="sm"
                        className="bg-medieval-blue/20 border-medieval-blue/50 text-medieval-blue hover:bg-medieval-blue/30 w-full"
                    >
                        Restaurar Padrões
                    </Button>
                </div>
            )}

            {/* Status */}
            <div className="text-center text-sm text-medieval-white mt-3">
                {!currentVoice ? 'Carregando vozes...' :
                 isPlaying ? 'Reproduzindo...' :
                 isPaused ? 'Pausado' : 'Pronto para reproduzir'}
            </div>
        </div>
    );
};

export default AudioPlayer;

