pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo "Cloning repository..."
                git branch: 'Atharv', url: 'https://github.com/Pragatiwanzare/lab-3.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh 'docker build -t lab3-app .'
            }
        }

        stage('Run Container') {
            steps {
                echo "Running Docker container..."
                sh 'docker run -d -p 8085:80 lab3-app || true'
            }
        }

        stage('Check Running Containers') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
