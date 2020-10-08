# Chucker 
## Todo App to become Chuck Norris

Before start be sure you have this dependencies installed:

* Ruby 2.6.5

* PostgreSQL 10.x.x

* NodeJS 12.x.x

* Yarn ^1.22

## Installation
### Install backend dependencies
```
  cd next-todo-app
  bundle install
```
* Create database

```
rails db:create db:migrate
```
* [Optional] Seed sample data
``
rails db:seed
``
### Install frontend dependencies
```
cd client && yarn install
```
* Run dev server
```
foreman start -f Procfile.dev
```
### Enjoy!
