module.exports = {
  insert: function (db) {
    db.collection("users").insertMany([
      {
        name: 'kt1',
        age: 1,
      }, {
        name: 'kt2',
        age: 2,
      }, {
        name: 'kt3',
        age: 1,
      }, {
        name: 'kt4',
        age: 2,
      }, {
        name: 'kt5',
        age: 2,
      },
    ])
  }
}