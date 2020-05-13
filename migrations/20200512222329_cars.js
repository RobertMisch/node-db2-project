
exports.up = function (knex) {
    //these always have to be return functions
    //test sdata
    // {
    //     "vin":"asdasdasd",
    //     "make":"ford",
    //     "model":"shelby",
    //     "milage":"20000"
    // }
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();

        tbl.string('vin', 127).notNullable().unique();
        tbl.string('make', 127).notNullable()
        tbl.string('model', 127).notNullable()
        tbl.string('milage', 127).notNullable()
        tbl.string('transmission', 127)
        tbl.string('title', 127)
        

        tbl.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};
