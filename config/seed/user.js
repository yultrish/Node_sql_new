exports.seed = function (knex) {

return knex('users')
.del()
.then(function () {
    // insert seed entries
    return knex('users').insert([
        {name: 'yultrish', email: 'yultrish@gmail.com', password: 'admin1234'},
        {name: 'rash', email: 'rash@gmail.com', password: 'rash1234'},
    ]);
});
};