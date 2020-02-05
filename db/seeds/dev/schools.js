const schools = require('../../../data/schools');

exports.seed = async knex => {
  await knex('schools').del()
  await knex('schools').insert(schools)
};