import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import PcIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import MediaQuery from 'react-responsive';

export default class Root extends React.Component{
	render(){ 
		return (
			<div>   
    		<MediaQuery query='(min-device-width: 1224px)'>
					<PcIndex/>
				</MediaQuery>  
				<MediaQuery query='(max-device-width: 1224px)'>
					<MobileIndex/>
				</MediaQuery>
  		</div> 
		) 
	}
} 

ReactDOM.render(<Root/>, document.getElementById('main'));

