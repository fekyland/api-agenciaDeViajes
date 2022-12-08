const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Reservas.init(sequelize, DataTypes);
}

class Reservas extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_reserva: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha_entrada: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecha_salida: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_hotel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'hoteles',
        key: 'id_hotel'
      }
    },
    id_cliente: {
      type: DataTypes.STRING(40),
      allowNull: true,
      references: {
        model: 'clientes',
        key: 'id_dni'
      }
    },
    comprobante_hotel: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    importe: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reservas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_reserva" },
        ]
      },
      {
        name: "id_hotel",
        using: "BTREE",
        fields: [
          { name: "id_hotel" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
  }
}
