from app.contact.service import EmailService
from app.contact.schemas import ContactForm


def test_email_service():
    email_service = EmailService()

    contact_form_data = {
        "email": "test@mail.com",
        "subject": "Test Subject",
        "message": "This is a test message."
    }
    contact_form = ContactForm(**contact_form_data)

    response = email_service.send_contact_email(contact_form)
    assert response.status_code == 200