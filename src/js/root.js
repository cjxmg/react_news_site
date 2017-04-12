import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import PcIndex from './components/pc_index';
import MobileIndex from './components/mobile_index'; 
import MediaQuery from 'react-responsive';
import PcNewsDetails from './components/pc_news_details';
import MobileDetails from './components/mobile_news_details';

export default class Root extends React.Component{ 
	render(){ 
		return ( 
			<div>   
    		<MediaQuery query='(min-device-width: 1224px)'>
    			<Router history={hashHistory}>
    				<Route path="/" component={PcIndex}></Route>
						<Route path="/details/:uniquekey" component={PcNewsDetails}></Route>
    			</Router>
				</MediaQuery>  
				<MediaQuery query='(max-device-width: 1224px)'>
					<Router history={hashHistory}>
    				<Route path="/" component={MobileIndex}></Route>
						<Route path="/details/:uniquekey" component={MobileDetails}></Route>
    			</Router>
				</MediaQuery>
  		</div> 
		) 
	}
} 

ReactDOM.render(<Root/>, document.getElementById('main'));

