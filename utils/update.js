const { ObjectID } = require('mongodb')

module.exports = {
  update: async function (db) {
    const filter = {
      age: 2
    };
    const updaterObj = {
      // $set: {
      //   name: 'kt1'
      // }
      $inc: {
        age: 2
      }
    };
    try {
      const res = await db.collection("users").updateMany(filter, updaterObj);
      console.log(res.modifiedCount)
      process.exit(0);
    } catch (err) {
      console.log(err)
    }
  }
}