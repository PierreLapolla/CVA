from fastapi.responses import JSONResponse


def send_contact_email_error() -> JSONResponse:
    return JSONResponse(
        status_code=500,
        content={"message": "Failed to send contact email."}
    )
