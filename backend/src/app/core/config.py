from pydantic_settings import BaseSettings, SettingsConfigDict
from utils.singleton import singleton

@singleton
class BaseAppSettings(BaseSettings):
    app_name: str = "Personal Website Backend"
    app_description: str = "This API is the backend of my personal website."
    app_version: str = "0.1.0"

    aws_region: str = "eu-west-3"
    AWS_ACCESS_KEY_ID: str = "" # KEEP EMPTY, set in .env file
    AWS_SECRET_ACCESS_KEY: str = "" # KEEP EMPTY, set in .env file

    recipient_email: str = "pro@pierrelapolla.com"

    model_config = SettingsConfigDict(env_file=".env", extra="allow")


settings = BaseAppSettings()
