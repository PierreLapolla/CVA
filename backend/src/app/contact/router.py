from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse

from app.contact.dependencies import get_email_service
from app.contact.schemas import ContactForm
from app.contact.service import EmailService

contact_router = APIRouter()


@contact_router.post("/")
async def send_email(
        contact_form: ContactForm,
        email_service: EmailService = Depends(get_email_service)
) -> JSONResponse:
    response = email_service.send_contact_email(contact_form)
    return response
