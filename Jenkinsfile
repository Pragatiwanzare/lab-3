pipeline {
    agent any

    environment {
        APP_NAME = "MyApp"
    }

    stages {

        stage('Build') {
            steps {
                sh 'npm install'   // for Node.js project
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo "Deploying ${APP_NAME} to Production..."
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
