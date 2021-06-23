const CenterSchema = require('./cats.schema');

const catExample = () => {
    CenterSchema.create(
        {
            name: 'OSLO',
            age: '1Y',
            breed: 'Maine Coon',
            fur: 'Long Tabby',
            history: 'Owners cannot keep it longer',
            center: '60d35305fc6b6ea0a809d06b'
        }
    );
}

module.exports = {
    catExample
}