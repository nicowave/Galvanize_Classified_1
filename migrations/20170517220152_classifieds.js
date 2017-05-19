
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classifieds', function(table) {
    table.increments().primary();
    table.string('title').notNullable().defaultTo('');
    table.string('description').notNullable().defaultTo('');
    table.decimal('price').notNullable();
    table.string('item_image').notNullable();
    table.timestamps(true, true).defaultTo(knex.fn.now());
  });
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTable('classifieds');
};
