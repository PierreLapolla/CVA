# Python App Template

This project provide a template for Python projects, including a basic structure and configuration files to help you get started quickly.
It aims to enforce best practices and provide a consistent development experience.

## Installation

### Requirements

- [UV](https://docs.astral.sh/uv/) package manager

### Clone the repository

```bash
  git clone https://github.com/PierreLapolla/python_template.git
  cd python_template
```

## Running the project

To run the project locally, run the following command:

```bash
  uv run -m src.app
```

## Docker Support

You can also run the application in a Docker container:

```bash
  docker build -t python-app .
  docker run -it python-app
```

The Docker image is optimized for this project and uses UV package manager for dependency management.

## Tests, type checks, linting and formatting - AUTOMATED

These steps are automatically handled by [pre-commit](https://pre-commit.com/) hooks defined
in [.pre-commit-config.yaml](.pre-commit-config.yaml).
Additionally, you can run them manually with the following commands:

```bash
  uv run pytest
```

```bash
  uvx ty check
```

```bash
  uvx ruff check . --fix
```

```bash
  uvx ruff format .
```

Or you can run all of them at once using pre-commit::

```bash
  uv run pre-commit run --all-files
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
