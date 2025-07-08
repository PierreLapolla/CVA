from app.contact.service import EmailService


def get_email_service() -> EmailService:
    return EmailService()
