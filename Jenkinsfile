node {

    stage('Checkout Code') {
        checkout scm
    }

    stage('Build & Run Containers') {
        sh 'docker-compose up -d --build'
    }

    stage('Check Running Containers') {
        sh 'docker ps'
    }

}