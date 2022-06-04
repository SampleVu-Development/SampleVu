import BasicLayout from '../components/authantication/basicLayout'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Login: React.FC = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values)
  }
  return (
    <BasicLayout>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
            size="large"
            className="sm:w-[25rem]"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            size="large"
          />
          <div className="mt-2 flex justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a href="" className="text-blue-500">
              Forgot password
            </a>
          </div>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Log in
          </Button>
          <a className="mt-3 flex justify-end text-blue-500" href="/signup">
            Sign up now
          </a>
        </Form.Item>
      </Form>
    </BasicLayout>
  )
}

export default Login
