exports.up = function (knex, Promise) {
    return knex.schema.createTable('students', table => {
        table.increments('id')

        table.integer('test_id').notNullable().defaultsTo(0).notNullable()
            .references('id')
            .inTable('tests')
            .onDelete('CASCADE')
            .index();

        table.integer('educator_id').notNullable().defaultsTo(0)
            .notNullable()
            .references('id')
            .inTable('educators')
            .onDelete('CASCADE')
            .index();

        table.text('firstName').notNullable().defaultsTo('')
        table.text('lastName').notNullable().defaultsTo('')
        table.integer('totalScore').notNullable().defaultsTo(0)
        table.integer('receptiveScore').defaultsTo(0)
        table.integer('expressiveScore').defaultsTo(0)
        table.integer('articulationScore').defaultsTo(0)
        table.integer('socialSkillsScore').defaultsTo(0)
        table.integer('redFlags').defaultsTo(0)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('students')
};

