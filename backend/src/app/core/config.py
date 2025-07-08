from pydantic_settings import BaseSettings, SettingsConfigDict


class BaseAppSettings(BaseSettings):
    app_name: str = "Personal Website Backend"
    app_description: str = "This API is the backend of my personal website."
    app_version: str = "0.1.0"

    model_config = SettingsConfigDict(env_file=".env", extra="allow")


settings = BaseAppSettings()
