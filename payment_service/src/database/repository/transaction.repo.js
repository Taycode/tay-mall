const BaseRepository = require('./base');
const Transaction = require('../model/transaction');

class TransactionRepository extends BaseRepository {
  constructor() {
    super(Transaction);
  }
}

module.exports = new TransactionRepository();
