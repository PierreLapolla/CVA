# from typing import List, Optional, Type
#
# from app.sensors.models import Sensor
# from app.sensors.schemas import SensorCreate
# from sqlalchemy.orm import Session
#
#
# class SensorRepository:
#     """
#     Repository for performing CRUD operations on Sensor model.
#     """
#
#     def __init__(self, db: Session):
#         """
#         Initialize the repository with a database session.
#
#         :param db: Database session.
#         :type db: Session
#         """
#         self.db = db
#
#     def create_sensor(self, sensor_in: SensorCreate) -> Sensor:
#         """
#         Create a new sensor.
#
#         :param sensor_in: Sensor creation schema.
#         :type sensor_in: SensorCreate
#         :return: Created sensor.
#         :rtype: Sensor
#         """
#         sensor = Sensor(
#             mac_address=sensor_in.mac_address,
#             name=sensor_in.name,
#             type=sensor_in.type,
#         )
#         self.db.add(sensor)
#         self.db.commit()
#         self.db.refresh(sensor)
#         return sensor
#
#     def get_sensor_by_id(self, sensor_id: int) -> Optional[Sensor]:
#         """
#         Get a sensor by its ID.
#
#         :param sensor_id: Sensor ID.
#         :type sensor_id: int
#         :return: Sensor instance or None.
#         :rtype: Optional[Sensor]
#         """
#         return self.db.query(Sensor).filter(Sensor.id == sensor_id).first()
#
#     def get_sensor_by_mac_address(self, mac_address: str) -> Optional[Sensor]:
#         """
#         Get a sensor by its MAC address.
#
#         :param mac_address: Sensor MAC address.
#         :type mac_address: str
#         :return: Sensor instance or None.
#         :rtype: Optional[Sensor]
#         """
#         return self.db.query(Sensor).filter(Sensor.mac_address == mac_address).first()
#
#     def get_all_sensors(self) -> List[Type[Sensor]]:
#         """
#         Get all sensors.
#
#         :return: List of all sensors.
#         :rtype: List[Type[Sensor]]
#         """
#         return self.db.query(Sensor).all()
#
#     def delete_sensor(self, sensor_id: int) -> bool:
#         """
#         Delete a sensor by its ID.
#
#         :param sensor_id: Sensor ID.
#         :type sensor_id: int
#         :return: True if deletion was successful, False otherwise.
#         :rtype: bool
#         """
#         sensor = self.get_sensor_by_id(sensor_id)
#         if sensor:
#             self.db.delete(sensor)
#             self.db.commit()
#             return True
#         return False
