export class User {
    constructor(data = {}) {
        this.id = data.id || Math.random().toString(36).substr(2, 9);
        this.name = data.name || '';
        this.email = data.email || '';
        this.avatar = data.avatar || '';
        this.devotional_streak = data.devotional_streak || 0;
        this.createdAt = data.createdAt || new Date();
    }

    static async list() {
        // Simulação de dados de usuários
        return [
            new User({
                id: '1',
                name: 'Usuário Padrão',
                email: 'usuario@exemplo.com',
                avatar: '',
                devotional_streak: 7,
                createdAt: new Date()
            })
        ];
    }

    static async me() {
        // Simulação de usuário logado
        return new User({
            id: '1',
            name: 'Usuário Padrão',
            email: 'usuario@exemplo.com',
            avatar: '',
            devotional_streak: 7,
            createdAt: new Date()
        });
    }

    static async findById(id) {
        const users = await this.list();
        return users.find(user => user.id === id);
    }
}
