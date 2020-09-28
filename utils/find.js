module.exports = {
  find: function (db) {
    db.collection("users").find({
      age: 2
    }).limit(2).project({ name: 1, _id: 0 }).toArray((err, users) => {
      console.log(users)
    })
  }
}