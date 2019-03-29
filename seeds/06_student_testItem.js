
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('student_testItem').del()
    .then(function () {
      // Inserts seed entries
      return knex('student_testItem').insert([

      ]);
    });
};
