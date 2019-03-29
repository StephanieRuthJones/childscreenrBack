exports.up = function (knex, Promise) {
    return knex.schema.createTable('educators', table => {
        table.increments('id')
        table.text('name').notNullable().defaultsTo('')
        table.text('email').notNullable().defaultsTo('')
        table.text('password').notNullable().defaultsTo('')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('educators')
};

