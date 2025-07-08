# from typing import Union
#
# from fastapi import Request
# from fastapi.responses import JSONResponse
# from pydantic_extra_types.mac_address import MacAddress
#
#
# class SensorNotFound(Exception):
#     """
#     Exception raised when a sensor is not found.
#
#     :param sensor_id: Sensor ID or MAC address.
#     :type sensor_id: Union[int, MacAddress]
#     """
#
#     def __init__(self, sensor_id: Union[int, MacAddress]):
#         self.code = 404  # Not Found
#         self.id = sensor_id if isinstance(sensor_id, int) else None
#         self.mac_address = sensor_id if isinstance(sensor_id, MacAddress) else None
#
#     def __str__(self):
#         if self.id:
#             return f"SensorNotFound: Sensor with ID {self.id} was not found."
#         if self.mac_address:
#             return f"SensorNotFound: Sensor with MAC address {self.mac_address} was not found."
#         return None
#
#
# async def sensor_not_found_handler(
#         request: Request, exception: SensorNotFound
# ) -> JSONResponse:
#     """
#     Handler for SensorNotFound exception.
#
#     :param request: Request object.
#     :type request: Request
#     :param exception: SensorNotFound exception instance.
#     :type exception: SensorNotFound
#     :return: JSON response with error details.
#     :rtype: JSONResponse
#     """
#     return JSONResponse(status_code=exception.code, content={"detail": str(exception)})
#
#
# class SensorAlreadyExists(Exception):
#     """
#     Exception raised when a sensor already exists.
#
#     :param sensor_id: Sensor ID.
#     :type sensor_id: int
#     :param sensor_mac_address: Sensor MAC address.
#     :type sensor_mac_address: str
#     """
#
#     def __init__(self, sensor_id: int, sensor_mac_address: str):
#         self.code = 400  # Bad Request
#         self.id = sensor_id
#         self.mac_address = sensor_mac_address
#
#     def __str__(self):
#         return f"SensorAlreadyExists: Sensor with MAC address {self.mac_address} already exists, ID: {self.id}."
#
#
# async def sensor_already_exists_handler(
#         request: Request, exception: SensorAlreadyExists
# ) -> JSONResponse:
#     """
#     Handler for SensorAlreadyExists exception.
#
#     :param request: Request object.
#     :type request: Request
#     :param exception: SensorAlreadyExists exception instance.
#     :type exception: SensorAlreadyExists
#     :return: JSON response with error details.
#     :rtype: JSONResponse
#     """
#     return JSONResponse(status_code=exception.code, content={"detail": str(exception)})
