exports.up = function (knex, Promise) {
    return knex.schema.createTable('student_testItem', table => {
        table.increments('id')
        table.integer('student_id').notNullable().defaultsTo(0).notNullable()
            .references('id')
            .inTable('students')
            .onDelete('CASCADE')
            .index();
        table.integer('testItem_id').notNullable().defaultsTo(0)
            .notNullable()
            .references('id')
            .inTable('testItems')
            .onDelete('CASCADE')
            .index();
        table.boolean('accuracy').defaultsTo(0)
        table.text('notes').defaultsTo('')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('student_testItem')
};



