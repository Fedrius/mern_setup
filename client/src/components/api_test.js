import React, {Component} from 'react';
import axios from 'axios';

class ApiTest extends Component {

    getUserData(){
        axios.get('/api/get-user').then((response) => {
            console.log('response from get-user:', response);
        }).catch((error) => {
            console.log('error from get-user:', error);
        })
    }

    getArticleData(){
        axios.get('/api/get-articles').then(response => {
            console.log('resp from articles:', response)
        }).catch(error => {
            console.log('error from get:', error.message)
        })
    }

    render(){
        return(
            <div>
                <h1>API TESTING GROUNDZZ</h1>
                <button onClick={this.getUserData}>get user info</button>
                <br/>
                <button onClick={this.getArticleData}>get article DATA</button>
            </div>
        )
    }
}

export default ApiTest;