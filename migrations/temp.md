exports.up = function (knex, Promise) {
    return knex.schema.createTable('educators', table => {
        table.increments('id')
        table.text('name').notNullable().defaultsTo('')
        table.text('email').notNullable().defaultsTo('')
        table.text('password').notNullable().defaultsTo('')
    }),
        knex.schema.createTable('tests', table => {
            table.increments('id')
            table.text('title').defaultsTo('')
            table.integer('educator_id').notNullable().defaultsTo(0).notNullable()
                .references('id')
                .inTable('educators')
                .onDelete('CASCADE')
                .index();

        }),
        knex.schema.createTable('testItems', table => {
            table.increments('id')
            table.text('category').notNullable().defaultsTo('')
            table.text('testItem').notNullable().defaultsTo('')
            table.text('examiner_instructions').defaultsTo('')
            table.text('correct_answer').defaultsTo('')
            table.text('incorrect_answer').defaultsTo('')

        }),
        knex.schema.createTable('test_testItem', table => {
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
        }),
        knex.schema.createTable('students', table => {
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
            table.text('redFlags').defaultsTo('')
        }),
        knex.schema.createTable('student_testItem', table => {
            table.increments('id')
            table.integer('student_id').notNullable().defaultsTo(0)
                .notNullable()
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
            table.integer('accuracy').defaultsTo(0)
            table.text('notes').defaultsTo('')
        })
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('educators'),
        knex.schema.dropTable('tests'),
        knex.schema.dropTable('testItems'),
        knex.schema.dropTable('test_testItem'),
        knex.schema.dropTable('students'),
        knex.schema.dropTable('student_testItem')


    ])
};
