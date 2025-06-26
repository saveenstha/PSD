 
# Use official Python image as the base
FROM python:3.11-slim

# Set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy app
COPY . .

# Expose port
EXPOSE 8000

# Default command
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]
