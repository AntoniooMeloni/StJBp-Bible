import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Calendar, BookOpen, PlusCircle, Save } from "lucide-react";
import { DevotionalEntry } from "@/entities/DevotionalEntry";
import { User } from "@/entities/User";
import { format, isToday } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function DevotionalPage() {
    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState({
        date: format(new Date(), 'yyyy-MM-dd'),
                                             reflection: "",
                                             bible_verse: "",
                                             gratitude: "",
                                             prayer_intentions: ""
    });
    const [view, setView] = useState('list'); // 'list' or 'form'

    useEffect(() => {
        loadEntries();
    }, []);

    const loadEntries = async () => {
        const data = await DevotionalEntry.list('-date');
        setEntries(data);
    };

    const handleSave = async () => {
        await DevotionalEntry.create(newEntry);
        await updateUserStreak();
        setView('list');
        loadEntries();
        setNewEntry({
            date: format(new Date(), 'yyyy-MM-dd'),
                    reflection: "",
                    bible_verse: "",
                    gratitude: "",
                    prayer_intentions: ""
        });
    };

    const updateUserStreak = async () => {
        try {
            const user = await User.me();
            const lastDate = user.last_devotional_date ? new Date(user.last_devotional_date) : null;
            let newStreak = user.devotional_streak || 0;

            if (!lastDate || !isToday(lastDate)) {
                newStreak++;
            }

            await User.updateMyUserData({
                devotional_streak: newStreak,
                last_devotional_date: format(new Date(), 'yyyy-MM-dd')
            });

        } catch(e) {
            console.error("Error updating streak", e);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50/20 via-white to-cyan-50/20 p-6">
        <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full shadow-lg">
        <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent">
        Diário Devocional
        </h1>
        <p className="text-lg text-theme-text-light max-w-2xl mx-auto">
        Registre sua jornada de fé, reflexões e orações.
        </p>
        </div>

        {view === 'list' && (
            <Card className="catholic-shadow border-theme-border">
            <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-theme-text-dark">Suas Entradas</CardTitle>
            <Button onClick={() => setView('form')}><PlusCircle className="w-4 h-4 mr-2"/> Nova Entrada</Button>
            </CardHeader>
            <CardContent className="space-y-4">
            {entries.length > 0 ? entries.map(entry => (
                <Card key={entry.id} className="border-teal-100">
                <CardHeader className="bg-teal-50/50">
                <CardTitle className="text-lg text-teal-800">
                {format(new Date(entry.date), "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                <p><strong>Reflexão:</strong> {entry.reflection}</p>
                <p><strong>Versículo:</strong> {entry.bible_verse}</p>
                <p><strong>Gratidão:</strong> {entry.gratitude}</p>
                <p><strong>Intenções:</strong> {entry.prayer_intentions}</p>
                </CardContent>
                </Card>
            )) : <p className="text-center text-theme-text-light p-8">Nenhuma entrada ainda. Clique em "Nova Entrada" para começar.</p>}
            </CardContent>
            </Card>
        )}

        {view === 'form' && (
            <Card className="catholic-shadow border-theme-border">
            <CardHeader>
            <CardTitle className="text-theme-text-dark">Nova Entrada no Diário</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <div>
            <label className="text-sm font-medium text-theme-text-dark">Data</label>
            <Input type="date" value={newEntry.date} onChange={e => setNewEntry({...newEntry, date: e.target.value})} />
            </div>
            <div>
            <label className="text-sm font-medium text-theme-text-dark">Reflexão do Dia</label>
            <Textarea placeholder="O que Deus falou ao seu coração hoje?" value={newEntry.reflection} onChange={e => setNewEntry({...newEntry, reflection: e.target.value})} />
            </div>
            <div>
            <label className="text-sm font-medium text-theme-text-dark">Versículo de Meditação</label>
            <Input placeholder="Ex: João 3:16" value={newEntry.bible_verse} onChange={e => setNewEntry({...newEntry, bible_verse: e.target.value})}/>
            </div>
            <div>
            <label className="text-sm font-medium text-theme-text-dark">Pelo que você é grato hoje?</label>
            <Textarea placeholder="Agradeça pelas bênçãos recebidas..." value={newEntry.gratitude} onChange={e => setNewEntry({...newEntry, gratitude: e.target.value})} />
            </div>
            <div>
            <label className="text-sm font-medium text-theme-text-dark">Intenções de Oração</label>
            <Textarea placeholder="Apresente seus pedidos a Deus..." value={newEntry.prayer_intentions} onChange={e => setNewEntry({...newEntry, prayer_intentions: e.target.value})} />
            </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setView('list')}>Cancelar</Button>
            <Button onClick={handleSave} className="bg-teal-600 hover:bg-teal-700"><Save className="w-4 h-4 mr-2"/> Salvar Entrada</Button>
            </CardFooter>
            </Card>
        )}
        </div>
        </div>
    );
}
