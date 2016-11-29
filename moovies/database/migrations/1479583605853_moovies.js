'use strict'

const Schema = use('Schema')

class MooviesTableSchema extends Schema {

  up () {
    this.create('moovies', (table) => {
      table.increments()
      
      table.string('title').notNullable().unique()
      table.string('director')
      table.integer('year')
      table.integer('length')
      table.string('plot', 300)
      table.string('youtube', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('moovies')
  }

}

module.exports = MooviesTableSchema
