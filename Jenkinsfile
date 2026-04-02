node {

    stage('Checkout Code') {
        checkout scm
    }

    stage('Clean Workspace') {
        sh 'rm -rf node_modules'
    }

    stage('Build Docker Images') {
        sh 'docker compose build'
    }

    stage('Run Containers') {
        sh 'docker compose up -d'
    }

    stage('Check Running Containers') {
        sh 'docker ps'
    }

}