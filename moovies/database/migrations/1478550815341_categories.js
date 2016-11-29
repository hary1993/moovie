'use strict'

const Schema = use('Schema')

class CategoriesTableSchema extends Schema {

  up () {
    this.create('categories', (table) => {
	  table.string('name', 20).notNullable().unique()
    })
  }

  down () {
    this.drop('categories')
  }

}

module.exports = CategoriesTableSchema
