'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
  moovies () {
    return this.hasMany('App/Model/Moovie')
  }
}

module.exports = Category