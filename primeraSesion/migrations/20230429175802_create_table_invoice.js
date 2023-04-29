
exports.up = function(knex) {
    return knex.schema.createTable("Invoices",(table)=>{
        table.string('uuid').primary()
        table.string('price').notNullable()
    })
};


exports.down = function(knex) {

};
