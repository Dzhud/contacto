# Contacto App

This is a simple Contacts web application built using Django, demonstrating basic CRUD operations, API integration, and dynamic user interactions.

## Table of Contents

-   [Instructions for Cloning](#instructions-for-cloning)
-   [Installation](#installation)
-   [Running Locally](#running-locally)
-   [Deployment](#deployment)

## Instructions for Cloning <a name="instructions-for-cloning"></a>

To clone the repository, use the following command:

```bash
git clone [https://github.com/Dzhud/contacto-app.git](https://github.com/Dzhud/contacto.git)

# Installation <a name="installation"></a>

### Create and activate a virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate  # For Linux/macOS
.venv\Scripts\activate     # For Windows

### Install project dependencies:

```bash
pip install -r requirements.txt
```

> *(Create a `requirements.txt` file in your project root and list all required packages: `django`, `djangorestframework`, etc. Use `pip freeze > requirements.txt` to generate the file.)*


---

# Running Locally <a name="running-locally"></a>

### Migrate the database:

```bash
python manage.py makemigrations
python manage.py migrate
```

### Start the development server:

```bash
python manage.py runserver
```

### Access the application:

Open your web browser and navigate to [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

---

# Deployment <a name="deployment"></a>

For production deployment, AWS offers a robust and scalable infrastructure. Here's a high-level outline for deploying to AWS using EC2 (Elastic Compute Cloud) and S3 (Simple Storage Service):

1. **Create an AWS account** and configure your AWS credentials.
2. **Launch an EC2 instance**:
   - Choose an appropriate Amazon Machine Image (AMI) (e.g., Amazon Linux 2, Ubuntu).
   - Configure security groups to allow HTTP/HTTPS traffic.
3. **Connect to your EC2 instance**:
   - Use SSH to connect to your instance.
4. **Install required software**:
   - Install Python and project dependencies (`pip install -r requirements.txt`).
   - Install a web server (e.g., Nginx or Apache) and a WSGI server (e.g., Gunicorn).
5. **Configure your web server**:
   - Configure Nginx or Apache to serve your static files from an S3 bucket and proxy requests to your WSGI server.
6. **Configure Gunicorn**:
   - Set up Gunicorn to serve your Django application.
7. **Create an S3 bucket**:
   - Create an S3 bucket to store your static files.
8. **Collect static files**:
   - Run `python manage.py collectstatic` on your EC2 instance to gather all static files.
   - Configure Django to use your S3 bucket as the storage backend for static files.
9. **Deploy your code**:
   - Copy your project code to your EC2 instance (e.g., using `scp` or Git).
10. **Start your application**:
    - Start your Gunicorn and web server processes.
11. **Configure a domain name**:
    - Point your domain name to your EC2 instance's public IP address or use a load balancer.