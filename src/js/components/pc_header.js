import React from 'react';
import { Row, Col, Menu, Icon, Modal, Button, Tabs, Form, Input, notification } from 'antd';
import {Link} from 'react-router';

const TabPane = Tabs.TabPane;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class PcHeader extends React.Component{
	constructor(){
		super();
		this.state = {
			username: '',
			current: 'top',
			visible: false
		}
	}

	//设置弹出框是否显示
	setModalVisible(value){
		this.setState({
			visible: value
		});
	}

	//导航条点击选中效果
	navActive(e){
		if(e.key == 'register'){
			this.setState({current: 'register'});
			this.setModalVisible(true);  //弹出框
		}
		else{
			this.setState({current: e.key});
		}
	}

	//表单提交
	handleSubmit(e){
		e.preventDefault();
		var fetchOptions = {
			method: 'GET'
		};

		this.props.form.validateFields((err, values) => {
    	// console.log(values.username);
    	// console.log(values.password);

    	//因为还没做登录注册功能，告诉用户一声
    	notification.open({
    	message: '亲爱的 ' + values.username + ' 你好呀！',
    	description: '登录注册功能还没完成，程序员哥哥正在加班努力中~~ ヽ(。>д<)ｐ',
    	duration: 5.2,
  	});
    });
	}

	componentDidMount(){
		this.props.form.validateFields();
	}

	render(){
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

		//当用户输入值之后，又把值删了，就会出错，提示用户值不能为空
		const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const r_usernameError = isFieldTouched('r_username') && getFieldError('r_username');
    const r_passwordError = isFieldTouched('r_password') && getFieldError('r_password');

		return (
			<Row>
    		<Col span={1}></Col>
    		<Col span={4}>
    			<Link to="/" className="logo">
    				<img src="./src/images/logo.png" alt="logo"/>
    				<span>ReactNews</span>
    			</Link>
    		</Col>
    		<Col span={18}>
					<Menu mode="horizontal" onClick={this.navActive.bind(this)} selectedKeys={[this.state.current]}>
				  	<Menu.Item key="top">
				  		<Icon type="appstore"/>头条
				  	</Menu.Item>
				  	<Menu.Item key="news">
				  		<Icon type="exception" />新闻
				  	</Menu.Item>
				  	<Menu.Item key="caijing">
				  		<Icon type="red-envelope" />财经
				  	</Menu.Item>
				  	<Menu.Item key="yule">
				  		<Icon type="coffee" />娱乐
				  	</Menu.Item>
				  	<Menu.Item key="junshi">
				  		<Icon type="flag" />军事
				  	</Menu.Item>
				  	<Menu.Item key="education">
				  		<Icon type="team" />教育
				  	</Menu.Item>
				  	<Menu.Item key="keji">
				  		<Icon type="rocket" />科技
				  	</Menu.Item>
				  	<Menu.Item key="NBA">
				  		<Icon type="global" />NBA
				  	</Menu.Item>
				  	<Menu.Item key="women">
				  		<Icon type="heart" />女性
				  	</Menu.Item>
				  	<Menu.Item key="jiankang">
				  		<Icon type="disconnect" />健康
				  	</Menu.Item>
						<Menu.Item key="register" className="register">
							<Button type="primary">
								<Icon type="user-add" />登录/注册
							</Button>
						</Menu.Item>
					</Menu>
        	<Modal title="用户中心" visible={this.state.visible} onOk={()=>this.setModalVisible(false)} onCancel={()=>this.setModalVisible(false)} okText="关闭">
          	<div className="card-container">
	          	<Tabs type="card">
								<TabPane tab="登录" key="1">
									<Form onSubmit={this.handleSubmit.bind(this)}>

										<Form.Item label="账户" validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
											{getFieldDecorator('username', {
            						rules: [{ required: true, message: '请输入用户名'}],
          						})(
            					<Input prefix={<Icon type="user"/>} placeholder="请输入您的账号"/>
          						)}
										</Form.Item>

										<Form.Item label="密码" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
											{getFieldDecorator('password', {
            						rules: [{ required: true, message: '请输入密码' }],
          						})(
            					<Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入您的密码"/>
          						)}

										</Form.Item>

										<Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError(['username', 'password']))}>登录</Button>
									</Form>
								</TabPane>
								<TabPane tab="注册" key="2">
									<Form onSubmit={this.handleSubmit.bind(this)}>

										<Form.Item label="账户" validateStatus={r_usernameError ? 'error' : ''} help={r_usernameError || ''}>
											{getFieldDecorator('r_username', {
            						rules: [{ required: true, message: '请输入用户名' }],
          						})(
            					<Input prefix={<Icon type="user"/>} placeholder="请输入您的账号"/>
          						)}
										</Form.Item>

										<Form.Item label="密码" validateStatus={r_passwordError ? 'error' : ''} help={r_passwordError || ''}>
											{getFieldDecorator('r_password', {
            						rules: [{ required: true, message: '请输入密码' }],
          						})(
            					<Input prefix={<Icon type="user"/>} type="password" placeholder="请输入您的密码" />
          						)}

										</Form.Item>

										<Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError(['r_username', 'r_password']))}>注册</Button>
									</Form>
								</TabPane>
							</Tabs>
						</div>
        	</Modal>
    		</Col>
      	<Col span={1}></Col>
  		</Row>
		)
	}
}

//不使用Form.create的话getFieldDecorator为undefined
export default PcHeader = Form.create({})(PcHeader);
