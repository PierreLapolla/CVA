# from app.sensors.schemas import SensorType
# from app.helpers.database import Base
# from sqlalchemy import Column, Integer, String, Enum
#
#
# class Sensor(Base):
#     __tablename__ = "sensors"
#
#     id = Column(Integer, primary_key=True, index=True)
#     mac_address = Column(String, unique=True, index=True, nullable=False)
#     name = Column(String, index=True)
#     type = Column(Enum(SensorType), nullable=False)
