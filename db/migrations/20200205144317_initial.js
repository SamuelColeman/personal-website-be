exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('projects', (table) => {
      table.increments('id').primary();
      table.string('name')
      table.string('image_one')
      table.string('image_two')
      table.string('description')
      table.string('tools')
    }),

    knex.schema.createTable('schools', (table) => {
      table.increments('id').primary();
      table.string('name')
      table.string('major')
      table.string('start_date')
      table.string('end_date')
    }),
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('projects'),
    knex.schema.dropTable('schools')
  ])
};