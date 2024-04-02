import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import './App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Formpage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);


    const onFinish = async (values) => {
        console.log('Success:', values);
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:4000/loginpage', values)
            console.log('Response:', response.data)
            form.resetFields();
            navigate('/userdash');

        } catch (error) {
            console.error('Error', error)
            toast.error('Incorrect username or password. Please try again.');
        } finally {
            setLoading(false); // Set loading state back to false
        }
    };
const navigate=useNavigate()

   
    return (
        <>
            <h1>Login Page</h1>
            <div className='formpage'>
                
                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="user_name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="user_password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>



                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        {/* onClick={clickcbtn} */}
                        <Button  type="primary" loading={loading} htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </>
    )


};
export default Formpage;