const CenterSchema = require('./centers.schema');

const centerExample = () => {
    CenterSchema.create(
        {
            centerName: 'Cris-Cats-Center',
            location: 'Barcelona',
            address: 'Carrer dels gats 33',
            contactPhone: 000000000,
            contactEmail: 'criscats@cats.cat'
        }
    );
}

module.exports = {
    centerExample
}