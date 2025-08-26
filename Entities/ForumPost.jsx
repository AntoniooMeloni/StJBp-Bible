export class ForumPost {
    constructor(data = {}) {
        this.id = data.id || Math.random().toString(36).substr(2, 9);
        this.title = data.title || '';
        this.content = data.content || '';
        this.userId = data.userId || '';
        this.category = data.category || 'geral';
        this.createdAt = data.createdAt || new Date();
        this.replies = data.replies || [];
    }

    static async list() {
        // Simulação de dados de posts do fórum
        return [
            new ForumPost({
                id: '1',
                title: 'Bem-vindos ao Fórum Católico',
                content: 'Este é um espaço para compartilhar experiências e discutir temas relacionados à fé católica.',
                userId: '1',
                category: 'geral',
                replies: []
            }),
            new ForumPost({
                id: '2',
                title: 'Dúvida sobre Oração',
                content: 'Alguém pode me explicar melhor sobre a oração do Rosário?',
                userId: '1',
                category: 'oracao',
                replies: []
            })
        ];
    }

    static async findByCategory(category) {
        const posts = await this.list();
        return posts.filter(post => post.category === category);
    }

    static async findById(id) {
        const posts = await this.list();
        return posts.find(post => post.id === id);
    }

    async save() {
        // Simulação de salvamento
        if (!this.id) {
            this.id = Math.random().toString(36).substr(2, 9);
        }
        return this;
    }
}
