const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Clientes.init(sequelize, DataTypes);
}

class Clientes extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_dni: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    Telefono: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_dni" },
        ]
      },
    ]
  });
  }
}
