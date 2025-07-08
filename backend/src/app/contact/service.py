# from typing import List, Optional, Type
#
# from app.sensors.exceptions import SensorNotFound, SensorAlreadyExists
# from app.sensors.models import Sensor
# from app.sensors.repository import SensorRepository
# from app.sensors.schemas import SensorCreate
# from fastapi.responses import JSONResponse
# from pydantic_extra_types.mac_address import MacAddress
#
#
# class SensorService:
#     """
#     Service layer for Sensor operations.
#     """
#
#     def __init__(self, sensor_repository: SensorRepository):
#         """
#         Initialize the service with a sensor repository.
#
#         :param sensor_repository: Sensor repository instance.
#         :type sensor_repository: SensorRepository
#         """
#         self.sensor_repository = sensor_repository
#
#     def create_sensor(self, sensor_in: SensorCreate) -> Sensor:
#         """
#         Create a new sensor.
#
#         :param sensor_in: Sensor creation schema.
#         :type sensor_in: SensorCreate
#         :return: Created sensor.
#         :rtype: Sensor
#         :raises SensorAlreadyExists: If a sensor with the same MAC address already exists.
#         """
#         sensor = self.sensor_repository.get_sensor_by_mac_address(sensor_in.mac_address)
#         if sensor:
#             raise SensorAlreadyExists(sensor.id, sensor.mac_address)
#         return self.sensor_repository.create_sensor(sensor_in)
#
#     def get_sensor_by_mac_address(self, mac_address: MacAddress):
#         """
#         Get a sensor by its MAC address.
#
#         :param mac_address: Sensor MAC address.
#         :type mac_address: MacAddress
#         :return: Sensor instance.
#         :rtype: Sensor
#         :raises SensorNotFound: If no sensor with the given MAC address is found.
#         """
#         sensor = self.sensor_repository.get_sensor_by_mac_address(mac_address)
#         if sensor is None:
#             raise SensorNotFound(mac_address)
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
#         :raises SensorNotFound: If no sensor with the given ID is found.
#         """
#         sensor = self.sensor_repository.get_sensor_by_id(sensor_id)
#         if sensor is None:
#             raise SensorNotFound(sensor_id)
#         return sensor
#
#     def get_all_sensors(self) -> List[Type[Sensor]]:
#         """
#         Get all sensors.
#
#         :return: List of all sensors.
#         :rtype: List[Type[Sensor]]
#         """
#         return self.sensor_repository.get_all_sensors()
#
#     def delete_sensor(self, sensor_id: int) -> JSONResponse:
#         """
#         Delete a sensor by its ID.
#
#         :param sensor_id: Sensor ID.
#         :type sensor_id: int
#         :return: JSON response with deletion message.
#         :rtype: JSONResponse
#         :raises SensorNotFound: If no sensor with the given ID is found.
#         """
#         success = self.sensor_repository.delete_sensor(sensor_id)
#         if not success:
#             raise SensorNotFound(sensor_id)
#         return JSONResponse(
#             content={"message": f"Sensor with ID: {sensor_id} deleted."}
#         )
