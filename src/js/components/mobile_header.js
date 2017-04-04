import React from 'react';
import { Row, Col, Menu, Icon, Modal, Button, Tabs, Form, Input, notification } from 'antd';

const TabPane = Tabs.TabPane;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class MobileHeader extends React.Component{
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
			<div id="mobileheader">
				<header>
					<img src="./src/images/logo.png" alt="logo"/>
					<span>ReactNews</span>
					<Icon type="setting" onClick={()=>this.setModalVisible(true)}/>
				</header>
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
								<Form>

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
			</div>

		) 
	}
} 

//不使用Form.create的话getFieldDecorator为undefined
export default MobileHeader = Form.create({})(MobileHeader); 
    