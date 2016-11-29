'use strict'


const Lucid = use('Lucid')

class Moovie extends Lucid {
  category () {
    return this.belongsTo('App/Model/Category')
  }
    rate () {
    return this.belongsTo('App/Model/Rate')
  }
}

module.exports = Moovie
