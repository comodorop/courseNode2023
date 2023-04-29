
exports.up = function (knex) {
    return knex.schema.table("Invoices", (table) => {
        table.string("name", 30)
    })
};

exports.down = function (knex) {

};
