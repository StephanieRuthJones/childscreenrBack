
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('educators').del()
    .then(function () {
      // Inserts seed entries
      return knex('educators').insert([
        { id: 1, name: 'Stephanie Jones', email: 'stephanieruthjones@gmail.com', password: '12345' },
        { id: 2, name: 'Peter Jones', email: 'petejones@gmail.com', password: '12345' },
        { id: 3, name: 'Elise Jones', email: 'elsie@gmail.com', password: '12345' },
      ]);
    });
};
