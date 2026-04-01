pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/Pragatiwanzare/lab-3.git'
            }
        }

        stage('Stop Old Containers') {
            steps {
                sh 'docker-compose down || true'
            }
        }

        stage('Remove Old Images') {
            steps {
                sh 'docker rmi lab-3-backend lab-3-frontend || true'
            }
        }

        stage('Build & Run Containers') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }

        stage('Check Running Containers') {
            steps {
                sh 'docker ps'
            }
        }
    }

    post {
        success {
            echo '✅ Deployment Successful! App running at http://localhost:3000'
        }
        failure {
            echo '❌ Deployment Failed! Check logs.'
        }
    }
}