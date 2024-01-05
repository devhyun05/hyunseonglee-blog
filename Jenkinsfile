pipeline {
    agent any

    tools {nodejs "nodejs"}

       environment {
        HEROKU_API_KEY = credentials('my-heroku-credentials')
    }
    stages {
        stage("Build") {
            steps {
                echo 'Building the application...'
                dir('frontend') {
                    sh "npm install -g yarn"
                    sh 'yarn install'
                    sh 'yarn build'
                }
            }
        }

        stage("Test") {
            steps {
                echo 'Testing the application...'
                dir('frontend/src/_tests_') {
                    sh 'yarn test login.test.js'
                }
            }
        }

         stage("deploy") {
            steps {
                echo 'Deploying the application...'                               
                
                dir('frontend') {
                    sh 'yarn build'
                    sh 'cp -r build/* ../backend/public'
                }
                dir('backend') {
                    script {
                    withCredentials([string(credentialsId: 'my-heroku-credentials', variable: 'HEROKU_API_KEY')]) {
                        sh "heroku auth:token --write"
                        sh "git push heroku main"
                    }
                }
                }
              
            }
        }
    }
}
