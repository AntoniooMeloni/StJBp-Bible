export class DevotionalEntry {
    constructor(data = {}) {
        this.id = data.id || Math.random().toString(36).substr(2, 9);
        this.title = data.title || '';
        this.content = data.content || '';
        this.date = data.date || new Date();
        this.userId = data.userId || '';
        this.createdAt = data.createdAt || new Date();
    }

    static async list() {
        // Simulação de dados de devocionais
        return [
            new DevotionalEntry({
                id: '1',
                title: 'Reflexão Matinal',
                content: 'Hoje é um novo dia para agradecer a Deus por todas as bênçãos recebidas.',
                date: new Date(),
                userId: '1'
            }),
            new DevotionalEntry({
                id: '2',
                title: 'Gratidão',
                content: 'Agradecer é reconhecer que tudo vem de Deus.',
                date: new Date(Date.now() - 86400000), // ontem
                userId: '1'
            })
        ];
    }

    static async findByUserId(userId) {
        const entries = await this.list();
        return entries.filter(entry => entry.userId === userId);
    }

    static async findById(id) {
        const entries = await this.list();
        return entries.find(entry => entry.id === id);
    }

    async save() {
        // Simulação de salvamento
        if (!this.id) {
            this.id = Math.random().toString(36).substr(2, 9);
        }
        return this;
    }
}
