# from app.sensors.repository import SensorRepository
# from app.sensors.service import SensorService
# from app.helpers.database import get_db
# from fastapi import Depends
#
#
# def get_sensor_repository(database=Depends(get_db)) -> SensorRepository:
#     """
#     Dependency to get the SensorRepository.
#
#     :param database: Database session dependency.
#     :type database: Session
#     :return: Instance of SensorRepository.
#     :rtype: SensorRepository
#     """
#     return SensorRepository(database)
#
#
# def get_sensor_service(
#         sensor_repository: SensorRepository = Depends(get_sensor_repository),
# ) -> SensorService:
#     """
#     Dependency to get the SensorService.
#
#     :param sensor_repository: Sensor repository dependency.
#     :type sensor_repository: SensorRepository
#     :return: Instance of SensorService.
#     :rtype: SensorService
#     """
#     return SensorService(sensor_repository)
