/*
  TODO: Signup View

  Use OAuth to allow users to create accounts using email/password
  Also offers Next/Link to Login
 */

import BasicLayout from '../components/authantication/basicLayout'
import { Form, Input, Button, Select } from 'antd'
const { Option } = Select

const SignUp: React.FC = () => {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="1">+1</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  )
  const onFinish = values => {
    console.log('Received values of form: ', values)
  }
  return (
    <BasicLayout>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          prefix: 1,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="Email"
          rules={[
            {
              required: true,
              message: 'Please input your email',
            },
          ]}
        >
          <Input placeholder="Email" size="large" className="sm:w-[25rem]" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password
            type="password"
            placeholder="Password (6 digits at least, case sensitive)"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }

                return Promise.reject(new Error('The two passwords that you entered do not match!'))
              },
            }),
          ]}
        >
          <Input.Password type="password" placeholder="Confirm password" size="large" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input size="large" placeholder="Phone number" addonBefore={prefixSelector} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Sign up
          </Button>
          <a className="mt-3 flex justify-end text-blue-500" href="/login">
            Have an account already? Click here to login
          </a>
        </Form.Item>
      </Form>
    </BasicLayout>
  )
}

export default SignUp
