import React from 'react';
import axios from 'axios';
export class AppService {
	getPerson(){	
		return axios.get('http://172.17.47.221/connect.php');


		/*return fetch('http://172.17.47.221/connect.php')
	    .then((response) => response.json())
	    .then((responseJson) => {
	      return responseJson;
	    })
	    .catch((error) => {
	      console.log(error);
	    });*/
	}
}
