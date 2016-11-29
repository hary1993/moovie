'use strict'


const Lucid = use('Lucid')

class Rate extends Lucid {
  moovie () {
    return this.belongsTo('App/Model/Moovie')
  }
}

module.exports = Rate
