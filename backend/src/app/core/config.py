from pydantic_settings import BaseSettings, SettingsConfigDict


class BaseAppSettings(BaseSettings):
    app_name: str = "Raspberry Pi SensorHub API"
    app_description: str = "This API is used to bridge communications between the application and the sensors"
    app_version: str = "0.1.0"

    model_config = SettingsConfigDict(env_file=".env", extra="allow")


settings = BaseAppSettings()
