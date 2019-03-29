
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('test_testItem').del()
    .then(function () {
      // Inserts seed entries
      return knex('test_testItem').insert([
        { id: 1, test_id: 1, testItem_id: 1 },

      ]);
    });
};
