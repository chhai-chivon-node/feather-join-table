// categories-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const categories = new Schema({
    categoryName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    subCategory: { type: Schema.Types.ObjectId, ref: 'categories' }
  });

  return mongooseClient.model('categories', categories);
};
