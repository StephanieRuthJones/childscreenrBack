exports.up = function (knex, Promise) {
    return knex.schema.createTable('test_testItem', table => {
        table.increments('id')
        table.integer('test_id').notNullable().defaultsTo(0).notNullable()
            .references('id')
            .inTable('tests')
            .onDelete('CASCADE')
            .index();
        table.integer('testItem_id').notNullable().defaultsTo(0)
            .notNullable()
            .references('id')
            .inTable('testItems')
            .onDelete('CASCADE')
            .index();
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('test_testItem')
};

