exports.up = function (knex, Promise) {
    return knex.schema.createTable('testItems', table => {
        table.increments('id')
        table.text('category').notNullable().defaultsTo('')
        table.text('test_item').notNullable().defaultsTo('')
        table.text('examiner_instructions').defaultsTo('')
        table.text('correct_answer').defaultsTo('')
        table.integer('correct_answer_value').defaultsTo(1)
        table.text('incorrect_answer').defaultsTo('')
        table.integer('incorrect_answer_value').defaultsTo(0)

    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('testItems')
};

