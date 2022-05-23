module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Pessoas', [
			{
				nome: 'Ana Souza',
				descricao: 'Padeira',
				data_nascimento: '1993-03-20',
        ativo: false,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Marcos Cintra',
				descricao: 'Guardinha',
				data_nascimento: '1990-04-25',
        ativo: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Felipe Cardoso',
				descricao: 'Arquiteto',
				data_nascimento: '1966-03-21',
        ativo: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sandra Gomes',
				descricao: 'Softawe Engineer',
				data_nascimento: '2005-03-15',
        ativo: false,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Paula Morais',
				descricao: 'Tester',
				data_nascimento: '1944-03-02',
        ativo: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sergio Lopes',
				descricao: 'Historiador',
				data_nascimento: '1920-12-25',
        ativo: false,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Pessoas', null, {})
	}
}
