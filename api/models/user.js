module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        "users",
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true,
                allowNull: false
            },
            name:{
                type: DataTypes.STRING(32),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(32),
                unique: true,
                allowNull: false
            },
            birth_date: {
                type: DataTypes.STRING,
                allowNull: false
            },
            },
            {
                underscored: true,
                paranoid: true,
                timestamps: false
            }
    );
    return user;
}