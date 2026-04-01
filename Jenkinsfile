pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "sms-backend"
        FRONTEND_IMAGE = "sms-frontend"
        BACKEND_CONTAINER = "sms-backend-container"
        FRONTEND_CONTAINER = "sms-frontend-container"
        BACKEND_PORT = "5000"
        FRONTEND_PORT = "8080"
        GIT_URL = "https://github.com/Pragatiwanzare/lab-3.git"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: "${GIT_URL}"
            }
        }

        stage('Backend Build') {
            steps {
                dir('backend') {
                    echo "Installing backend dependencies..."
                    sh 'npm install'
                }
            }
        }

        stage('Backend Docker Build') {
            steps {
                dir('backend') {
                    sh "docker build -t ${BACKEND_IMAGE}:latest ."
                }
            }
        }

        stage('Run Backend Container') {
            steps {
                sh "docker rm -f ${BACKEND_CONTAINER} || true"
                sh "docker run -d --name ${BACKEND_CONTAINER} -p ${BACKEND_PORT}:5000 ${BACKEND_IMAGE}:latest"
            }
        }

        stage('Frontend Docker Build') {
            steps {
                dir('frontend') {
                    sh "docker build -t ${FRONTEND_IMAGE}:latest ."
                }
            }
        }

        stage('Run Frontend Container') {
            steps {
                sh "docker rm -f ${FRONTEND_CONTAINER} || true"
                sh "docker run -d --name ${FRONTEND_CONTAINER} -p ${FRONTEND_PORT}:80 ${FRONTEND_IMAGE}:latest"
            }
        }
    }

    post {
        success {
            echo "✅ Backend running on http://localhost:${BACKEND_PORT}"
            echo "✅ Frontend running on http://localhost:${FRONTEND_PORT}"
        }
        failure {
            echo "❌ Build or Deployment Failed!"
        }
    }
}
