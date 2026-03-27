pipeline {
    agent any

    environment {
        APP_NAME = "MyApp"
    }

    stages {

        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo "Deploying ${APP_NAME}..."
            }
        }
    }

    post {
        success {
            echo "Build Success ✅"
        }
        failure {
            echo "Build Failed ❌"
        }
    }
}
