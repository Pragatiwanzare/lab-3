pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Clean Old Containers') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker rm -f backend || true'
                sh 'docker rm -f frontend || true'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Verify Running') {
            steps {
                sh 'docker ps'
            }
        }
    }
}