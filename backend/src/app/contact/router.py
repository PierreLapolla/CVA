from fastapi import APIRouter
from fastapi.responses import JSONResponse

from app.contact.schemas import ContactForm
from utils.logger import log

contact_router = APIRouter()


@contact_router.post("/")
async def send_email(
        contact_form: ContactForm,
) -> JSONResponse:
    log.info(
        f"Received contact form submission: {contact_form.email}, {contact_form.subject}, {contact_form.message}"
    )
    return JSONResponse(
        status_code=201,
        content={"message": "Contact form submitted successfully."},
    )
