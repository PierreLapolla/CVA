import logging
from typing import Callable, Any, Optional, TypeVar, Union, Tuple, Type

from utils.logger import log, LOG_LEVEL


def try_except(
    _func=None,
    *,
    exceptions: Union[Type[Exception], Tuple[Type[Exception], ...]] = Exception,
    finally_callable: Optional[Callable[[], Any]] = None,
    error_callable: Optional[Callable[[], Any]] = None,
) -> Callable:
    """
    Decorator to catch exceptions in a function.

    :param _func: The function to decorate.
    :param exceptions: Exception or tuple of exceptions to catch. Default is Exception (catches all exceptions).
    :param finally_callable: Optional parameterless callable to execute in finally.
    :param error_callable: Optional parameterless callable to execute when an error is caught.
    :return: The wrapper function.
    """
    R = TypeVar("R")

    def decorator_func(func: Callable[..., R]) -> Callable[..., Optional[R]]:
        def wrapper(*args, **kwargs) -> Optional[R]:
            try:
                return func(*args, **kwargs)

            except exceptions as e:
                message = f"{func.__name__}: {e.__class__.__name__}: {e}"
                log.error(message, exc_info=LOG_LEVEL <= logging.DEBUG)
                if error_callable:
                    log.debug(f"calling {error_callable.__name__} from {func.__name__}")
                    return error_callable()
                return None

            finally:
                if finally_callable:
                    finally_callable()
                    log.debug(f"{finally_callable.__name__} executed from {func.__name__}")

        return wrapper

    if _func is None:
        return decorator_func
    else:
        return decorator_func(_func)


if __name__ == "__main__":
    """
    Example usage of the try_except decorator with both error and finally callables.
    """

    def cleanup():
        log.info("Cleanup executed.")

    def handle_error():
        log.info("Error handled.")

    @try_except(exceptions=(ZeroDivisionError, ValueError), error_callable=handle_error, finally_callable=cleanup)
    def divide(a, b):
        return a / b

    return_value = divide(1, 0)
    log.debug(f"Return value: {return_value}")
