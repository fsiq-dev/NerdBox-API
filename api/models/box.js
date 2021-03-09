module.exports = (sequelize, DataTypes) => {
    const box = sequelize.define(
        'box', {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNUll: false,
            },
            name: {
                type: DataTypes.STRING(32),
                unique: true,
                allowNUll:false
              },
              description: {
                type: DataTypes.STRING(500),
                allowNUll: false
              },
              price: {
                type: DataTypes.INTEGER,
                allowNUll: false
              },
        },
        { 
            tableName: 'box',
            underscored: true,
            paranoid: true,
            timestamps: false
        }
    )
    return box;
}