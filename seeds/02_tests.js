
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tests').del()
    .then(function () {
      // Inserts seed entries
      return knex('tests').insert([
        { id: 1, title: 'preschool screener 2', educator_id: 2 },
        { id: 2, title: 'preschool screener 1', educator_id: 1 },
        { id: 3, title: 'preschool screener 3', educator_id: 3 }
      ]);
    });
};
