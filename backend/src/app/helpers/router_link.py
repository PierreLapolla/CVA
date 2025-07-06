from fastapi import FastAPI, APIRouter

root_router = APIRouter()


@root_router.get("/")
async def root():
    return {"message": "Check /docs for available routes"}


def include_routers(app: FastAPI) -> None:
    app.include_router(root_router)
