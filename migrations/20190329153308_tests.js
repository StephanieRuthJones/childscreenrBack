exports.up = function (knex, Promise) {
    return knex.schema.createTable('tests', table => {
        table.increments('id')
        table.text('title').defaultsTo('')
        table.integer('educator_id').notNullable().defaultsTo(0).notNullable()
            .references('id')
            .inTable('educators')
            .onDelete('CASCADE')
            .index();

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tests')
};

