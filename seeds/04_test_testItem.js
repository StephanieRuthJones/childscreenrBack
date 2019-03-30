
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('test_testItem').del()
    .then(function () {
      // Inserts seed entries
      return knex('test_testItem').insert([
        { id: 1, test_id: 1, testItem_id: 1 },
        { id: 2, test_id: 1, testItem_id: 2 },
        { id: 3, test_id: 1, testItem_id: 3 },
        { id: 4, test_id: 1, testItem_id: 4 },
        { id: 5, test_id: 1, testItem_id: 5 },
        { id: 6, test_id: 1, testItem_id: 6 },
        { id: 7, test_id: 1, testItem_id: 7 },
        { id: 8, test_id: 1, testItem_id: 8 },
        { id: 9, test_id: 1, testItem_id: 9 },
        { id: 10, test_id: 1, testItem_id: 10 },
        { id: 11, test_id: 1, testItem_id: 11 },
        { id: 12, test_id: 1, testItem_id: 12 },
        { id: 13, test_id: 1, testItem_id: 13 },
        { id: 14, test_id: 1, testItem_id: 14 },
        { id: 15, test_id: 1, testItem_id: 15 },
        { id: 16, test_id: 1, testItem_id: 16 },
        { id: 17, test_id: 1, testItem_id: 17 },
        { id: 18, test_id: 1, testItem_id: 18 },
        { id: 19, test_id: 1, testItem_id: 19 },
        { id: 20, test_id: 1, testItem_id: 20 },
        { id: 21, test_id: 1, testItem_id: 21 },
        { id: 22, test_id: 1, testItem_id: 22 },
        { id: 23, test_id: 1, testItem_id: 23 },
        { id: 24, test_id: 1, testItem_id: 24 },
        { id: 25, test_id: 1, testItem_id: 25 },
        { id: 26, test_id: 1, testItem_id: 26 },
        { id: 27, test_id: 1, testItem_id: 27 },
        { id: 28, test_id: 1, testItem_id: 28 },
        { id: 29, test_id: 1, testItem_id: 29 },
        { id: 30, test_id: 1, testItem_id: 30 },
        { id: 31, test_id: 1, testItem_id: 31 },
        { id: 32, test_id: 1, testItem_id: 32 },
        { id: 33, test_id: 1, testItem_id: 33 },
        { id: 34, test_id: 1, testItem_id: 34 },
        { id: 35, test_id: 1, testItem_id: 35 },
        { id: 36, test_id: 1, testItem_id: 36 },
        { id: 37, test_id: 1, testItem_id: 37 },
        { id: 38, test_id: 1, testItem_id: 38 },
        { id: 39, test_id: 1, testItem_id: 39 },
        { id: 40, test_id: 1, testItem_id: 40 },
        { id: 41, test_id: 1, testItem_id: 41 },
        { id: 42, test_id: 1, testItem_id: 42 },
        { id: 43, test_id: 1, testItem_id: 43 },
        { id: 44, test_id: 1, testItem_id: 44 },


      ]);
    });
};
