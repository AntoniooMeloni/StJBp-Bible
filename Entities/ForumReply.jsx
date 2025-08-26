export class ForumReply {
    constructor(data = {}) {
        this.id = data.id || Math.random().toString(36).substr(2, 9);
        this.content = data.content || '';
        this.userId = data.userId || '';
        this.postId = data.postId || '';
        this.createdAt = data.createdAt || new Date();
    }

    static async list() {
        // Simulação de dados de respostas do fórum
        return [
            new ForumReply({
                id: '1',
                content: 'Excelente post! Muito útil para a comunidade.',
                userId: '1',
                postId: '1',
                createdAt: new Date()
            })
        ];
    }

    static async findByPostId(postId) {
        const replies = await this.list();
        return replies.filter(reply => reply.postId === postId);
    }

    static async findById(id) {
        const replies = await this.list();
        return replies.find(reply => reply.id === id);
    }

    async save() {
        // Simulação de salvamento
        if (!this.id) {
            this.id = Math.random().toString(36).substr(2, 9);
        }
        return this;
    }
}
