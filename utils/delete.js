const { ObjectID } = require('mongodb')

module.exports = {
  deleteFn: async function (db) {
    const filter = {
      age: 4
    };
    try {
      const res = await db.collection("users").deleteMany(filter);
      console.log(res.deletedCount)
      process.exit(0);
    } catch (err) {
      console.log(err)
    }
  }
}