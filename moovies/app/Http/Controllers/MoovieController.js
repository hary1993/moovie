'use strict'

const Database = use('Database')
const Category = use('App/Model/Category')
const Moovie = use('App/Model/Moovie')
const Rate = use('App/Model/Rate')
const Validator = use('Validator')
const User =use('App/Model/User')


class MoovieController {

  * index(request, response) {

    const moovies = yield Moovie.all()
    yield response.sendView('main', {
      name: '',
      moovies: moovies.toJSON()
    })  
  }

  * index2(request, response) {

    const categories = yield Category.all()
    for(let category of categories) {
      const moovies = yield category.moovies().limit(3).fetch();
      category.topMoovies = moovies.toJSON();
    }

    yield response.sendView('layout', {
      name: '',
      categories: categories.toJSON()
    })  
  }

* doCreate (request, response) {
  const user_id = request.param('user_id')
  const rateData = request.except('_csrf');
      const rules = {
      komment: 'required',
      rate: 'required',
      user_name: 'required'
    };

    const validation = yield Validator.validateAll(rateData, rules)

    if (validation.fails()) {
      yield request
        .withAll()
        .andWith({errors: validation.messages()})
        .flash()
      response.redirect('back')
      return
    }
    const id = request.param('id')
    rateData.user_name = request.currentUser.username
    rateData.moovie_id= id
    const rates = yield Rate.create(rateData)

    response.redirect("/moovies/"+ id + "/komment")
  }


  * edit (request, response) {
    const id = request.param('id');
    const rates = yield Rate.all()
    yield response.sendView('moovieComment', {
      rates:  rates.toJSON(),
      currentId: id
    })
  }


  * show (request, response) {
    const id = request.param('id');
    const moovie = yield Moovie.find(id);
    yield moovie.related('category').load();
    yield response.sendView('moovieShow', {
      moovie: moovie.toJSON()
    })
  }
}

module.exports = MoovieController
