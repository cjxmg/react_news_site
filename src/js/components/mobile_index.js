import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileList from './mobile_list';
import { Tabs, Carousel } from 'antd';

const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component{
	render(){ 
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
		};

		//轮播html
		const carousel = (
			<div className="carousel">
				<Carousel {...settings}>
					<div><img src="./src/images/carousel_1.png"/></div>
					<div><img src="./src/images/carousel_2.jpg"/></div>
					<div><img src="./src/images/carousel_3.jpg"/></div>
					<div><img src="./src/images/carousel_4.jpg"/></div>
				</Carousel>
			</div>
		);

		return (
			<div>
				<MobileHeader/>	
				<Tabs>
					<TabPane tab="头条" key="1">
						{carousel}
						<MobileList count={20} type="top"/>
					</TabPane>
					<TabPane tab="新闻" key="2">
						<MobileList count={20} type="shehui"/>
					</TabPane>
					<TabPane tab="财经" key="3">
						<MobileList count={20} type="caijing"/>
					</TabPane>
					<TabPane tab="娱乐" key="4">
						<MobileList count={20} type="yule"/>
					</TabPane>
					<TabPane tab="军事" key="5">
						<MobileList count={20} type="junshi"/>
					</TabPane>
					<TabPane tab="科技" key="6">
						<MobileList count={20} type="keji"/>
					</TabPane>
					<TabPane tab="国际" key="7">
						<MobileList count={20} type="guoji"/>
					</TabPane>
				</Tabs>
				<MobileFooter/>
			</div>
		) 
	}
} 