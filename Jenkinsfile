pipeline{
    agent any
    tools {
        nodejs "node"
    }
    stages{
        stage('test'){
            steps{
                echo "Testing stage"
            }
        }

        stage('production'){
            steps{
                echo "Production stage"
                sh '''
                    sudo ssh -i /var/lib/jenkins/cent.pem -t -o StrictHostKeyChecking=no ubuntu@ec2-3-84-52-79.compute-1.amazonaws.com
                    
                    cd /var/www/
                    sudo rm -rf html
                    sudo mkdir html
                    cd html
                    sudo git init   
                    sudo git remote add origin https://github.com/Jadesolax/kanayo.git
                    sudo git fetch
                    sudo git pull origin master
                    sudo npm install
                    pm2 kill
                    PORT=3000 pm2 start app.js
                    '''
            }
        }
    
}
}
