import React from 'react';
import PcHeader from './pc_header';
import PcFooter from './pc_footer';
import PcNewsContainer from './pc_newscontainer';

export default class PcIndex extends React.Component{
	render(){ 
		return (
			<div>
				<PcHeader/>
				<PcNewsContainer/>
				<PcFooter/>
			</div>
		) 
	}
} 

      
    