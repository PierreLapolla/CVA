from utils.logger import log
from utils.timer import timer


@timer
def main() -> None:
    log.info("Hello from python-template!")


if __name__ == "__main__":
    main()
