module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Pessoas', [
			{
				nome: 'Ana Souza',
				descricao: true,
				data_nascimento: 'ana@ana.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Marcos Cintra',
				descricao: true,
				data_nascimento: 'marcos@marcos.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Felipe Cardoso',
				descricao: true,
				data_nascimento: 'felipe@felipe.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sandra Gomes',
				descricao: false,
				data_nascimento: 'sandra@sandra.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Paula Morais',
				descricao: true,
				data_nascimento: 'paula@paula.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sergio Lopes',
				descricao: true,
				data_nascimento: 'sergio@sergio.com',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Pessoas', null, {})
	}
}
