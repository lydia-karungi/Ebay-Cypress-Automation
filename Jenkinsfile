pipeline {
    agent any

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        
        stage('Parallel') { // add this
            parallel {
                stage('First Parallel Stage') {
                    environment {
                        TEST = 3
                    }
                    
                    steps {
                        echo "$TEST"
                        sh 'npx cypress open:ci'
                    }
                }
                
                stage('Execute this together') {s
                    stages {
                        stage('Another_One') {
                            steps {
                                echo "4"
                            }
                        }
                        
                        stage('Yet Another_One') {
                            steps {
                                echo "5"
                            }
                        }
                    }
                }
            }
        }
    }
}