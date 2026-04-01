pipeline {
    agent any

    environment {
        GIT_URL = "https://github.com/Pragatiwanzare/lab-3.git"  // Your repo
        BACKEND_IMAGE = "sms-backend"
        FRONTEND_IMAGE = "sms-frontend"
        BACKEND_CONTAINER = "sms-backend-container"
        FRONTEND_CONTAINER = "sms-frontend-container"
        BACKEND_PORT = "5000"   // Node.js backend
        FRONTEND_PORT = "8080"  // Frontend HTML served via Apache Docker
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: "${BRANCH_NAME}"]],
                    userRemoteConfigs: [[url: "${GIT_URL}"]]])
            }
        }

        // ===================== BACKEND =====================
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
                    sh "docker build -t ${BACKEND_IMAGE}:${BRANCH_NAME} ."
                }
            }
        }

        stage('Run Backend Container') {
            steps {
                sh "docker rm -f ${BACKEND_CONTAINER} || true"
                sh "docker run -d --name ${BACKEND_CONTAINER} -p ${BACKEND_PORT}:5000 ${BACKEND_IMAGE}:${BRANCH_NAME}"
            }
        }

        // ===================== FRONTEND =====================
        stage('Frontend Docker Build') {
            steps {
                dir('frontend') {
                    sh "docker build -t ${FRONTEND_IMAGE}:${BRANCH_NAME} ."
                }
            }
        }

        stage('Run Frontend Container') {
            steps {
                sh "docker rm -f ${FRONTEND_CONTAINER} || true"
                sh "docker run -d --name ${FRONTEND_CONTAINER} -p ${FRONTEND_PORT}:80 ${FRONTEND_IMAGE}:${BRANCH_NAME}"
            }
        }

    }

    post {
        success {
            echo "✅ Deployment Successful!"
            echo "Backend running at http://localhost:${BACKEND_PORT}"
            echo "Frontend running at http://localhost:${FRONTEND_PORT}"
        }
        failure {
            echo "❌ Build or Deployment Failed!"
        }
    }
}
