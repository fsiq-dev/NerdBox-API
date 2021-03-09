module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define(
        'product', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNULL: false,
                primaryKey: true,
              },
              category: {
                type: DataTypes.STRING(32),
                allowNULL:false,
                unique: true
              },
              description: {
                type: DataTypes.STRING(500)
              },
              price: {
                type: DataTypes.REAL,
                allowNULL: false
              }
        },
        {
            tableName: 'product',
            underscored: true,
            paranoid: true,
            timestamps: false
        }
    )
    return product;
}