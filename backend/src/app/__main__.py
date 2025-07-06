from app.core.config import settings
from app.helpers.exception_link import add_exception_handlers
from app.helpers.router_link import include_routers
from fastapi import FastAPI


def create_app() -> FastAPI:

    api = FastAPI(
        title=settings.app_name,
        description=settings.app_description,
        version=settings.app_version,
    )
    add_exception_handlers(api)
    include_routers(api)

    return api


if __name__ == "__main__":
    print(
        "Please use the command provided in the README.md file to run the application."
    )
