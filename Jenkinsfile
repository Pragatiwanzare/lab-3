pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'Atharv', url: 'https://github.com/Pragatiwanzare/lab-3.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image from frontend..."
                sh 'docker build -t lab3-app ./frontend'
            }
        }

        stage('Run Container') {
            steps {
                echo "Running container..."
                sh 'docker run -d -p 8085:80 lab3-app || true'
            }
        }

        stage('Check Containers') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
