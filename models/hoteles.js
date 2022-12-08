const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Hoteles.init(sequelize, DataTypes);
}

class Hoteles extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_hotel: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_hotel: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    provincia: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ciudad: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hoteles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_hotel" },
        ]
      },
    ]
  });
  }
}
