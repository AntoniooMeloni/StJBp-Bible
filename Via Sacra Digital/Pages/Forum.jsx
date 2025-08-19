import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, PlusCircle, ArrowLeft, Send } from "lucide-react";
import { ForumPost } from "@/entities/ForumPost";
import { ForumReply } from "@/entities/ForumReply";
import { User } from "@/entities/User";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function ForumPage() {
    const [view, setView] = useState('list'); // 'list', 'post', 'form'
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [replies, setReplies] = useState([]);
    const [newPost, setNewPost] = useState({ title: "", content: "", category: "geral" });
    const [newReply, setNewReply] = useState("");
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await User.me();
                setCurrentUser(user);
            } catch (e) {
                console.log("Not logged in");
            }
        };
        fetchUser();
        if (view === 'list') {
            loadPosts();
        }
    }, [view]);

    const loadPosts = async () => {
        const data = await ForumPost.list('-created_date');
        setPosts(data);
    };

    const loadPostAndReplies = async (postId) => {
        const postData = await ForumPost.get(postId);
        const repliesData = await ForumReply.filter({ post_id: postId }, '-created_date');
        setSelectedPost(postData);
        setReplies(repliesData);
        setView('post');
    };

    const handleCreatePost = async () => {
        if (!currentUser) { alert("Você precisa estar logado para postar."); return; }
        await ForumPost.create(newPost);
        setNewPost({ title: "", content: "", category: "geral" });
        setView('list');
    };

    const handleCreateReply = async () => {
        if (!currentUser) { alert("Você precisa estar logado para responder."); return; }
        await ForumReply.create({ post_id: selectedPost.id, content: newReply });
        setNewReply("");
        loadPostAndReplies(selectedPost.id);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50/20 via-white to-sky-50/20 p-6">
        <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-sky-600 rounded-full shadow-lg">
        <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-700 to-sky-600 bg-clip-text text-transparent">
        Fórum Católico
        </h1>
        <p className="text-lg text-theme-text-light max-w-2xl mx-auto">
        Um lugar para compartilhar a fé, tirar dúvidas e crescer em comunidade.
        </p>
        </div>

        {/* Lista de Posts */}
        {view === 'list' && (
            <Card className="catholic-shadow border-theme-border">
            <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-theme-text-dark">Tópicos Recentes</CardTitle>
            <Button onClick={() => setView('form')}><PlusCircle className="w-4 h-4 mr-2"/> Novo Tópico</Button>
            </CardHeader>
            <CardContent className="space-y-3">
            {posts.map(post => (
                <div key={post.id} onClick={() => loadPostAndReplies(post.id)} className="p-4 border rounded-lg hover:bg-indigo-50/50 cursor-pointer">
                <h3 className="font-semibold text-indigo-800">{post.title}</h3>
                <p className="text-sm text-theme-text-light">
                por {post.created_by.split('@')[0]} • {formatDistanceToNow(new Date(post.created_date), { addSuffix: true, locale: ptBR })}
                </p>
                </div>
            ))}
            </CardContent>
            </Card>
        )}

        {/* Visualização de Post */}
        {view === 'post' && selectedPost && (
            <Card className="catholic-shadow border-theme-border">
            <CardHeader className="bg-indigo-50/50">
            <Button variant="outline" onClick={() => setView('list')} className="mb-4"><ArrowLeft className="w-4 h-4 mr-2"/> Voltar</Button>
            <CardTitle className="text-2xl text-indigo-900">{selectedPost.title}</CardTitle>
            <p className="text-sm text-theme-text-light">por {selectedPost.created_by.split('@')[0]} • {formatDistanceToNow(new Date(selectedPost.created_date), { addSuffix: true, locale: ptBR })}</p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
            <p className="text-lg leading-relaxed whitespace-pre-wrap">{selectedPost.content}</p>
            <hr/>
            <h3 className="font-semibold text-theme-text-dark">Respostas</h3>
            <div className="space-y-4">
            {replies.map(reply => (
                <div key={reply.id} className="p-4 bg-slate-50 rounded-lg">
                <p>{reply.content}</p>
                <p className="text-xs text-theme-text-light mt-2">por {reply.created_by.split('@')[0]} • {formatDistanceToNow(new Date(reply.created_date), { addSuffix: true, locale: ptBR })}</p>
                </div>
            ))}
            </div>
            {currentUser &&
                <div className="flex gap-2">
                <Textarea value={newReply} onChange={e => setNewReply(e.target.value)} placeholder="Escreva sua resposta..."/>
                <Button onClick={handleCreateReply}><Send className="w-4 h-4"/></Button>
                </div>
            }
            </CardContent>
            </Card>
        )}

        {/* Formulário Novo Post */}
        {view === 'form' && (
            <Card className="catholic-shadow border-theme-border">
            <CardHeader>
            <Button variant="outline" onClick={() => setView('list')} className="mb-4"><ArrowLeft className="w-4 h-4 mr-2"/> Voltar</Button>
            <CardTitle className="text-theme-text-dark">Criar Novo Tópico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <Input placeholder="Título do tópico" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} />
            <Textarea placeholder="Escreva o conteúdo do seu tópico..." rows={8} value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} />
            <Select value={newPost.category} onValueChange={value => setNewPost({...newPost, category: value})}>
            <SelectTrigger><SelectValue placeholder="Categoria" /></SelectTrigger>
            <SelectContent>
            <SelectItem value="geral">Geral</SelectItem>
            <SelectItem value="doutrina">Doutrina</SelectItem>
            <SelectItem value="escrituras">Escrituras</SelectItem>
            <SelectItem value="oracao">Oração</SelectItem>
            <SelectItem value="testemunho">Testemunho</SelectItem>
            </SelectContent>
            </Select>
            </CardContent>
            <CardFooter>
            <Button onClick={handleCreatePost} className="w-full">Publicar Tópico</Button>
            </CardFooter>
            </Card>
        )}
        </div>
        </div>
    );
}
