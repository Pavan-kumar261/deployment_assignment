pipeline {
    agent any
       stages {
        stage('INSTALLATION') {
            steps {
                echo 'INSTALLING DEPENDENCIES'
                sh 'npm install'
            }
        }
        stage('TESTING') {
            steps {
                echo 'TESTING'
                sh 'CI=true npm test'
            }
        }
        stage('Sonarqube') {
    environment {
        scannerHome = tool 'sonar_scanner'
    }
    steps {
        echo 'SONAR-QUBE CODE QUALITY ANALYSIS'
        withSonarQubeEnv('Sonarqube') {
            sh "${scannerHome}/bin/sonar-scanner"
        }
       }
}
  stage('PRODUCTION-BUILD') {
            steps {
                echo 'WORKING ON PRODUCTION BUILD'
                sh 'npm run build'
            }
        }
    stage('DEPLOYMENT') {
        steps{
        echo 'UPLOADING TO AWS S3 BUCKET'
        dir('/home/nineleaps/Jenkins/JenkinsHome/workspace/TranslateApp'){
           withAWS(region:'ap-south-1',credentials:'AWS_S3') {
              s3Upload(bucket:"mytranslateapp", workingDir:'build', includePathPattern:'**/*');
            }
        }
    }
    }
}
}