'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/', 'MoovieController.index2')
Route.get('/main', 'MoovieController.index')
Route.get('/layout', 'MoovieController.index2')
Route.get('/moovies/:id/komment', 'MoovieController.edit')
Route.post('/moovies/:id/komment', 'MoovieController.doCreate').middleware('auth')
Route.get('/moovies/:id', 'MoovieController.show')


Route.get('/register', 'UserController.register')
Route.get('/login', 'UserController.login')
Route.get('/login', 'UserController.login')
Route.post('/register', 'UserController.doRegister')
Route.post('/login', 'UserController.doLogin')
Route.get('/logout', 'UserController.doLogout')
