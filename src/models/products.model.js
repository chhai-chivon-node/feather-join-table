// products-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const category = require('./categories.model');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const products = new Schema({
    productName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    category: [{ type: Schema.Types.ObjectId, ref: 'category' }]
  });

  return mongooseClient.model('products', products);
};
