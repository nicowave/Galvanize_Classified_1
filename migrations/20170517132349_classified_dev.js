
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classified', function(table) {
    table.increments();
    table.string('title').notNullable().defaultTo('');
    table.string('description').notNullable().defaultTo('');
    table.decimal('price').notNullable();
    table.string('item_image').notNullable();
    table.timestamps(true, true);
  });
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTable('classified_dev');
};
