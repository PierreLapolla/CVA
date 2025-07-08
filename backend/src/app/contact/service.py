import boto3
from botocore.exceptions import ClientError
from fastapi.responses import JSONResponse

from app.contact.exceptions import send_contact_email_error
from app.contact.schemas import ContactForm
from app.core.config import settings
from utils.singleton import singleton
from utils.try_except import try_except


@singleton
class EmailService:
    def __init__(self):
        self.client = boto3.client('ses', region_name=settings.aws_region)
        self.recipient_email = settings.recipient_email

    @try_except(exceptions=ClientError, error_callable=send_contact_email_error)
    def send_contact_email(self, contact_form: ContactForm) -> JSONResponse:
        # TODO: Implement email sending logic using AWS SES
        return JSONResponse(
            status_code=200,
            content={"message": "Successfully sent contact email."}
        )
