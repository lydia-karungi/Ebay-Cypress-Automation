pipeline{
    agent any

    environment{
        CHROME_BIN = '/bin/google-chrome'
    }

    stages{
        stage('Dependancies'){
            steps{
                sh 'npm i'
            }
        
        stage(e2e tests){
            Parallel{
                stage('Test 1'){
                    steps{
                        sh 'npx cypress open:ci'
                    }
                }

                stage('Test 2'){
                    steps{
                        sh 'npx cypress2 open:ci'
                    }
                }
            }
        stage('deploy'){
            steps{
                echo 'Deploying'
            }
        }
        }

        }
    }
}