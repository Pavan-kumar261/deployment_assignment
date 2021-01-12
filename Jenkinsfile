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
//   stage('PRODUCTION-BUILD') {
//             steps {
//                 echo 'WORKING ON PRODUCTION BUILD'
//                 sh 'npm run build'
//             }
//         }
//     stage('DEPLOYMENT') {
//         steps{
//         echo 'UPLOADING TO AWS S3 BUCKET'
//         dir('/var/lib/jenkins/workspace/responsivescreen/'){
//            withAWS(region:'ap-south-1',credentials:'s3cred') {
//               s3Upload(bucket:"mydeployment-assignment", workingDir:'build', includePathPattern:'**/*');
//             }
//         }
//     }
//     }
}
}