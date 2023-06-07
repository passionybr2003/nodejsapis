module.exports = (sequelize, Sequelize) => {
	const Payment_Transaction = sequelize.define("payment", {
		customerName: {
			type: Sequelize.STRING
		},
		cartId: {
			type: Sequelize.TEXT
		},
		cardNumber: {
			type: Sequelize.TEXT
		},
		limit: {
			type: Sequelize.FLOAT(5,2)
		},
		balance: {
			type: Sequelize.FLOAT(5,2)
		},
		createdAt: {
			type: Sequelize.DATE
		},
		updatedAt: {
			type: Sequelize.DATE
		}
	});

	return Payment_Transaction;
};