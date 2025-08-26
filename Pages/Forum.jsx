import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../src/components/ui/card";
import { Button } from "../src/components/ui/button";
import { Input } from "../src/components/ui/input";
import { Textarea } from "../src/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../src/components/ui/select";
import { MessageCircle, PlusCircle, ArrowLeft, Send } from "lucide-react";
import { ForumPost } from "../Entities/ForumPost";
import { ForumReply } from "../Entities/ForumReply";
import { User } from "../Entities/User";
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
        loadPosts(); // Carrega posts sempre que a página carrega
    }, []);

    const loadPosts = async () => {
        const data = await ForumPost.list();
        setPosts(data);
    };

    const loadPostAndReplies = async (postId) => {
        const postData = await ForumPost.findById(postId);
        const repliesData = await ForumReply.findByPostId(postId);
        setSelectedPost(postData);
        setReplies(repliesData);
        setView('post');
    };

    const handleCreatePost = async () => {
        if (!currentUser) { alert("Você precisa estar logado para postar."); return; }
        const post = new ForumPost({
            title: newPost.title,
            content: newPost.content,
            category: newPost.category,
            userId: currentUser.id,
            createdAt: new Date()
        });
        await post.save();
        setNewPost({ title: "", content: "", category: "geral" });
        setView('list');
        loadPosts();
    };

    const handleCreateReply = async () => {
        if (!currentUser) { alert("Você precisa estar logado para responder."); return; }
        const reply = new ForumReply({
            content: newReply,
            userId: currentUser.id,
            postId: selectedPost.id,
            createdAt: new Date()
        });
        await reply.save();
        setNewReply("");
        loadPostAndReplies(selectedPost.id);
    };

    return (
        <div className="min-h-screen bg-crosses-css p-6">
        <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4 mb-8">
                                                    <div className="inline-flex items-center justify-center w-28 h-28 rounded-full shadow-2xl mb-6 overflow-hidden border-4 border-medieval-gold bg-white p-0">
                                    <img 
                                        src="/images/logo.png" 
                                        alt="Fé Católica Logo" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                    <h1 className="text-4xl md:text-5xl font-bold medieval-title">
                        Fórum Católico
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto leading-relaxed text-white">
                        Um lugar para compartilhar a fé, tirar dúvidas e crescer em comunidade.
                    </p>
                </div>

        {/* Lista de Posts */}
        {view === 'list' && (
            <Card className="bg-white shadow-xl border-2 border-medieval-gold">
            <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-medieval-blue to-medieval-purple text-white">
            <CardTitle className="text-white">Tópicos Recentes</CardTitle>
            <Button onClick={() => setView('form')} className="bg-medieval-gold hover:bg-yellow-600 text-medieval-black font-bold"><PlusCircle className="w-4 h-4 mr-2"/> Novo Tópico</Button>
            </CardHeader>
            <CardContent className="space-y-3">
            {posts.map(post => (
                <div key={post.id} onClick={() => loadPostAndReplies(post.id)} className="p-4 border-2 border-medieval-gold rounded-lg hover:bg-medieval-cream/50 cursor-pointer transition-colors">
                <h3 className="font-semibold text-white">{post.title}</h3>
                <p className="text-sm text-white">
                por {post.userId} • {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true, locale: ptBR })}
                </p>
                </div>
            ))}
            </CardContent>
            </Card>
        )}

        {/* Visualização de Post */}
        {view === 'post' && selectedPost && (
            <Card className="bg-white shadow-xl border-2 border-medieval-gold">
            <CardHeader className="bg-gradient-to-r from-medieval-green to-emerald-600 text-white">
            <Button variant="outline" onClick={() => setView('list')} className="mb-4 border-2 border-medieval-gold text-white hover:bg-medieval-gold hover:text-medieval-black"><ArrowLeft className="w-4 h-4 mr-2"/> Voltar</Button>
            <CardTitle className="text-2xl text-white">{selectedPost.title}</CardTitle>
            <p className="text-sm text-white">por {selectedPost.userId} • {formatDistanceToNow(new Date(selectedPost.createdAt), { addSuffix: true, locale: ptBR })}</p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
            <p className="text-lg leading-relaxed whitespace-pre-wrap text-white">{selectedPost.content}</p>
            <hr className="border-medieval-gold"/>
            <h3 className="font-semibold text-white">Respostas</h3>
            <div className="space-y-4">
            {replies.map(reply => (
                <div key={reply.id} className="p-4 bg-medieval-cream rounded-lg border border-medieval-gold">
                <p className="text-medieval-black">{reply.content}</p>
                <p className="text-xs text-medieval-black mt-2">por {reply.userId} • {formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true, locale: ptBR })}</p>
                </div>
            ))}
            </div>
            {currentUser &&
                <div className="flex gap-2">
                <Textarea value={newReply} onChange={e => setNewReply(e.target.value)} placeholder="Escreva sua resposta..." className="border-2 border-medieval-gold focus:ring-2 focus:ring-medieval-gold"/>
                <Button onClick={handleCreateReply} className="bg-medieval-gold hover:bg-yellow-600 text-medieval-black font-bold"><Send className="w-4 h-4"/></Button>
                </div>
            }
            </CardContent>
            </Card>
        )}

        {/* Formulário Novo Post */}
        {view === 'form' && (
            <Card className="bg-white shadow-xl border-2 border-medieval-gold">
            <CardHeader className="bg-gradient-to-r from-medieval-red to-red-600 text-white">
            <Button variant="outline" onClick={() => setView('list')} className="mb-4 border-2 border-medieval-gold text-white hover:bg-medieval-gold hover:text-medieval-black"><ArrowLeft className="w-4 h-4 mr-2"/> Voltar</Button>
            <CardTitle className="text-white">Criar Novo Tópico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <Input placeholder="Título do tópico" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} className="border-2 border-medieval-gold focus:ring-2 focus:ring-medieval-gold" />
            <Textarea placeholder="Escreva o conteúdo do seu tópico..." rows={8} value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} className="border-2 border-medieval-gold focus:ring-2 focus:ring-medieval-gold" />
            <Select value={newPost.category} onValueChange={value => setNewPost({...newPost, category: value})}>
            <SelectTrigger className="border-2 border-medieval-gold focus:ring-2 focus:ring-medieval-gold"><SelectValue placeholder="Categoria" /></SelectTrigger>
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
            <Button onClick={handleCreatePost} className="w-full bg-medieval-gold hover:bg-yellow-600 text-medieval-black font-bold">Publicar Tópico</Button>
            </CardFooter>
            </Card>
        )}
        </div>
        </div>
    );
}
