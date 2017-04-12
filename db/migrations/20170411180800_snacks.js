'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('snacks', (table) => {
    table.increments().notNullable();
    table.string('name').notNullable();
    table.text('image_url').notNullable();
    table.string('review_description').notNullable();
    table.integer('rating').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('snacks');
};
