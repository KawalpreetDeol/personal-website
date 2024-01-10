pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Build Docker Image
                sh 'docker build -t personal-website .'
            }
        }
        stage('Test') {
            steps {
                // Run tests
                sh 'docker run personal-website npm test'
            }
        }
        stage('Deploy') {
            steps {
                withCredentials([file(credentialsId: 'firebase-token', variable: 'FIREBASE_TOKEN')]) {
                    // Deploy to Firebase
                    sh 'docker run -e "FIREBASE_TOKEN=$FIREBASE_TOKEN" personal-website firebase deploy --only hosting --token "$FIREBASE_TOKEN"'
                }
            }
        }
    }
}
