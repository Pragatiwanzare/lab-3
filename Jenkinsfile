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
                bat 'docker build -t lab3-app ./frontend'
            }
        }

        stage('Run Container') {
            steps {
                echo "Running container..."
                bat 'docker rm -f lab3-container || exit 0'
                bat 'docker run -d -p 8085:80 --name lab3-container lab3-app'
            }
        }

        stage('Check Containers') {
            steps {
                bat 'docker ps'
            }
        }
    }
}
