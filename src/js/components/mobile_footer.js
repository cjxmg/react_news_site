import React from 'react';
import { Row, Col } from 'antd';

const year = new Date().getFullYear();

export default class MobileFooter extends React.Component{

	render(){ 
		return (
			<footer>
				<Row> 
	    		<Col span={2}></Col>
	    		<Col span={20} className="footer">
						&copy;&nbsp;{year} ReactNews. Developed by cjxmg.
	    		</Col>
	      	<Col span={2}></Col>
	  		</Row>
	  	</footer>
		) 
	}
} 

      
