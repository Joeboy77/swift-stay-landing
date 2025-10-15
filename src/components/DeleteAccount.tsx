import React, { useState } from 'react';
import { Layout, Typography, Button, Card, Steps, Alert, Divider, Form, Input, message } from 'antd';
import { ArrowLeftOutlined, UserDeleteOutlined, MailOutlined, PhoneOutlined, ExclamationCircleOutlined, CheckCircleOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Step } = Steps;

const DeleteAccount: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep] = useState(0);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [form] = Form.useForm();

  const steps = [
    {
      title: 'Contact Us',
      description: 'Send deletion request',
    },
    {
      title: 'Verification',
      description: 'We verify your identity',
    },
    {
      title: 'Processing',
      description: 'Data deletion begins',
    },
    {
      title: 'Confirmation',
      description: 'Account deleted',
    },
  ];

  const handleDeleteAccount = async (values: { phoneNumber: string; password: string }) => {
    setIsDeleting(true);
    try {
      // First, login to get the token
      const loginResponse = await fetch('https://hos-find-be.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: values.phoneNumber,
          password: values.password,
        }),
      });

      if (!loginResponse.ok) {
        const errorData = await loginResponse.json();
        throw new Error(errorData.message || 'Invalid credentials');
      }

      const loginData = await loginResponse.json();
      console.log('Login response:', loginData);
      
      const token = loginData.data?.tokens?.accessToken;

      if (!token) {
        throw new Error('Failed to get authentication token');
      }

      // Now delete the account using the token
      const deleteResponse = await fetch('https://hos-find-be.onrender.com/api/users/profile', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!deleteResponse.ok) {
        const errorData = await deleteResponse.json();
        throw new Error(errorData.message || 'Failed to delete account');
      }

      const deleteData = await deleteResponse.json();
      console.log('Delete response:', deleteData);

      message.success('Account deleted successfully!');
      setShowDeleteForm(false);
      form.resetFields();
    } catch (error) {
      console.error('Delete account error:', error);
      message.error(error instanceof Error ? error.message : 'Failed to delete account');
    } finally {
      setIsDeleting(false);
    }
  };

  const dataTypes = [
    'Personal information (name, email, phone number)',
    'Account credentials and authentication tokens',
    'Booking history and preferences',
    'Location data and search history',
    'Profile photos and uploaded content',
    'Notification preferences and push tokens',
    'App usage analytics and crash reports',
  ];

  const retainedData = [
    'Financial transaction records (for legal compliance) - 7 years',
    'Anonymized usage statistics (no personal identifiers) - Indefinitely',
    'Security logs and fraud prevention data - 2 years',
  ];

  return (
    <Layout className="delete-account-page" style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <Content style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <Button 
          type="link" 
          icon={<ArrowLeftOutlined />} 
          onClick={() => navigate('/')}
          style={{ marginBottom: '20px', fontSize: '16px' }}
        >
          Back to Home
        </Button>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <UserDeleteOutlined style={{ fontSize: '48px', color: '#e74c3c', marginBottom: '20px' }} />
          <Title level={1} style={{ color: '#e74c3c', marginBottom: '10px' }}>
            Delete My Account
          </Title>
          <Paragraph style={{ fontSize: '18px', color: '#666' }}>
            Request to permanently delete your Swift Stay account and associated data
          </Paragraph>
        </div>

        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
          <Alert
            message="Important Information"
            description="Account deletion is permanent and cannot be undone. Please read all information carefully before proceeding."
            type="warning"
            icon={<ExclamationCircleOutlined />}
            style={{ marginBottom: '30px' }}
          />

          <Title level={2} style={{ color: '#e74c3c', marginBottom: '20px' }}>How to Delete Your Account</Title>
          
          <Steps current={currentStep} style={{ marginBottom: '40px' }}>
            {steps.map((item, index) => (
              <Step key={index} title={item.title} description={item.description} />
            ))}
          </Steps>

          <Card style={{ marginBottom: '30px' }}>
            <Title level={3} style={{ color: '#e74c3c' }}>Step 1: Contact Us</Title>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              To delete your account, please contact us using one of the methods below. Include the following information:
            </Paragraph>
            
            <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
              <Text strong>Required Information:</Text>
              <ul style={{ marginTop: '10px' }}>
                <li>Your registered phone number</li>
                <li>Your account password</li>
                <li>Subject line: "Account Deletion Request" (for email method)</li>
                <li>Confirmation that you want to permanently delete your account</li>
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
              <Button 
                type="primary" 
                icon={<MailOutlined />} 
                size="large"
                href="mailto:kwesiselasi476@gmail.com?subject=Account%20Deletion%20Request"
                style={{ backgroundColor: '#e74c3c', borderColor: '#e74c3c' }}
              >
                Email Us
              </Button>
              <Button 
                icon={<PhoneOutlined />} 
                size="large"
                href="tel:+233240333837"
              >
                Call Us
              </Button>
              <Button 
                type="default" 
                icon={<LockOutlined />} 
                size="large"
                onClick={() => setShowDeleteForm(!showDeleteForm)}
                style={{ borderColor: '#e74c3c', color: '#e74c3c' }}
              >
                Delete Account Now
              </Button>
            </div>
          </Card>

          {showDeleteForm && (
            <Card style={{ marginBottom: '30px', border: '2px solid #e74c3c' }}>
              <Title level={3} style={{ color: '#e74c3c', marginBottom: '20px' }}>
                ⚠️ Delete Account Immediately
              </Title>
              <Alert
                message="Warning: This action cannot be undone!"
                description="Once you delete your account, all your data will be permanently removed and cannot be recovered."
                type="error"
                style={{ marginBottom: '20px' }}
              />
              
              <Form
                form={form}
                onFinish={handleDeleteAccount}
                layout="vertical"
                style={{ maxWidth: '400px' }}
              >
                <Form.Item
                  name="phoneNumber"
                  label="Phone Number"
                  rules={[
                    { required: true, message: 'Please enter your phone number' },
                    { pattern: /^[0-9+\-\s()]+$/, message: 'Please enter a valid phone number' }
                  ]}
                >
                  <Input 
                    prefix={<PhoneOutlined />} 
                    placeholder="Enter your phone number"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    { required: true, message: 'Please enter your password' }
                  ]}
                >
                  <Input.Password 
                    prefix={<LockOutlined />} 
                    placeholder="Enter your password"
                    size="large"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={isDeleting}
                    size="large"
                    danger
                    style={{ 
                      width: '100%',
                      backgroundColor: '#e74c3c',
                      borderColor: '#e74c3c'
                    }}
                  >
                    {isDeleting ? 'Deleting Account...' : 'Delete My Account'}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          )}

          <Card style={{ marginBottom: '30px' }}>
            <Title level={3} style={{ color: '#e74c3c' }}>What Data Will Be Deleted</Title>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              When you delete your account, we will permanently remove the following data:
            </Paragraph>
            
            <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
              {dataTypes.map((item, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card style={{ marginBottom: '30px' }}>
            <Title level={3} style={{ color: '#e74c3c' }}>Data We May Retain</Title>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              For legal, regulatory, or security purposes, we may retain certain data:
            </Paragraph>
            
            <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
              {retainedData.map((item, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <ExclamationCircleOutlined style={{ color: '#faad14', marginRight: '8px' }} />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <Title level={3} style={{ color: '#e74c3c' }}>Processing Timeline</Title>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
              <div style={{ textAlign: 'center', padding: '20px', background: '#f0f9ff', borderRadius: '8px' }}>
                <Title level={4} style={{ color: '#1890ff' }}>24-48 Hours</Title>
                <Text>Initial response and verification</Text>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: '#f6ffed', borderRadius: '8px' }}>
                <Title level={4} style={{ color: '#52c41a' }}>7-14 Days</Title>
                <Text>Account deletion completion</Text>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: '#fff7e6', borderRadius: '8px' }}>
                <Title level={4} style={{ color: '#faad14' }}>30 Days</Title>
                <Text>Data purged from backups</Text>
              </div>
            </div>
          </Card>
        </div>

        <div style={{ background: '#fff2f0', padding: '20px', borderRadius: '8px', border: '1px solid #ffccc7' }}>
          <Title level={4} style={{ color: '#cf1322', marginBottom: '10px' }}>
            <ExclamationCircleOutlined style={{ marginRight: '8px' }} />
            Important Notes
          </Title>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li>Account deletion is permanent and cannot be reversed</li>
            <li>You will lose access to all your bookings and preferences</li>
            <li>Any active bookings will be cancelled</li>
            <li>You can create a new account at any time after deletion</li>
            <li>If you have any concerns, please contact us before proceeding</li>
          </ul>
        </div>

        <Divider />

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Paragraph style={{ fontSize: '16px', color: '#666' }}>
            Need help or have questions? Contact us at{' '}
            <a href="mailto:kwesiselasi476@gmail.com" style={{ color: '#e74c3c' }}>
              kwesiselasi476@gmail.com
            </a>
          </Paragraph>
        </div>
      </Content>
    </Layout>
  );
};

export default DeleteAccount;