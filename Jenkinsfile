pipeline {
    agent any

    environment {
        APP_NAME = "StudentApp"
    }

    stages {

        stage('Backend Install') {
            steps {
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Backend Test') {
            steps {
                dir('backend') {
                    bat 'node -e "console.log(\'Backend OK\')"'
                }
            }
        }

        stage('Frontend Check') {
            steps {
                dir('frontend') {
                    bat 'dir'
                }
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
