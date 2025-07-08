from fastapi import FastAPI, APIRouter
from app.contact.router import contact_router

root_router = APIRouter()


@root_router.get("/")
async def root():
    return {"message": "Check /docs for available routes"}


def include_routers(app: FastAPI) -> None:
    app.include_router(root_router)
    # app.include_router(contact_router, prefix="/contact", tags=["contact"])
