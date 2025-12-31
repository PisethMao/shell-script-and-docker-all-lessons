pipeline {
    agent any

    stages {
        stage("Build"){
            steps{
                sh """
                    docker build -t jenkins-react-pipeline . 
                """
            }
        }


        stage("Deploy"){
            steps{
                sh"""
                
                 docker stop reactjs-cont || true 
                docker rm reactjs-cont || true 
                
                docker run -dp 3000:80 \
                    --name reactjs-cont \
                    jenkins-react-pipeline
                """

            }
        }
    
        stage("Add Domain name "){
            steps{
                sh """
                echo "Runing shellscript to add the domain name for the service " 
                
                """
            }
        }
        
    }
}
