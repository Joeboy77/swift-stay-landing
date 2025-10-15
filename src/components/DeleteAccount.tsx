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
      const loginResponse = await fetch('https://swift-stay-be.onrender.com/api/auth/login', {
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
      const deleteResponse = await fetch('https://swift-stay-be.onrender.com/api/users/profile', {
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
    <Layout className="delete-account-page" style={{ minHeight: '100vh', background: '#0f172a' }}>
      <Content style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <Button 
          type="link" 
          icon={<ArrowLeftOutlined />} 
          onClick={() => navigate('/')}
          style={{ marginBottom: '20px', fontSize: '16px', color: '#93c5fd' }}
        >
          Back to Home
        </Button>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <UserDeleteOutlined style={{ fontSize: '48px', color: '#ef4444', marginBottom: '20px' }} />
          <Title level={1} style={{ color: '#f3f4f6', marginBottom: '10px' }}>
            Delete My Account
          </Title>
          <Paragraph style={{ fontSize: '18px', color: '#cbd5e1' }}>
            Request to permanently delete your Swift Stay account and associated data
          </Paragraph>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '40px', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.35)', marginBottom: '30px' }}>
          <Alert
            message="Important Information"
            description="Account deletion is permanent and cannot be undone. Please read all information carefully before proceeding."
            type="warning"
            icon={<ExclamationCircleOutlined />}
            style={{ marginBottom: '30px' }}
          />

          <Title level={2} style={{ color: '#f3f4f6', marginBottom: '20px' }}>How to Delete Your Account</Title>
          
          <Steps current={currentStep} style={{ marginBottom: '40px' }}>
            {steps.map((item, index) => (
              <Step key={index} title={item.title} description={item.description} />
            ))}
          </Steps>

          <Card style={{ marginBottom: '30px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <Title level={3} style={{ color: '#e5e7eb' }}>Step 1: Contact Us</Title>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1' }}>
              To delete your account, please contact us using one of the methods below. Include the following information:
            </Paragraph>
            
            <div style={{ background: 'rgba(255,255,255,0.06)', padding: '20px', borderRadius: '8px', margin: '20px 0', border: '1px solid rgba(255,255,255,0.12)', color: '#e5e7eb' }}>
              <Text strong style={{ color: '#e5e7eb' }}>Required Information:</Text>
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
                style={{ background: 'linear-gradient(135deg, #ef4444, #f59e0b)', borderColor: 'transparent' }}
              >
                Email Us
              </Button>
              <Button 
                icon={<PhoneOutlined />} 
                size="large"
                href="tel:+233240333837"
                style={{ color: '#93c5fd', borderColor: 'rgba(255,255,255,0.12)' }}
              >
                Call Us
              </Button>
              <Button 
                type="default" 
                icon={<LockOutlined />} 
                size="large"
                onClick={() => setShowDeleteForm(!showDeleteForm)}
                style={{ borderColor: '#ef4444', color: '#ef4444' }}
              >
                Delete Account Now
              </Button>
            </div>
          </Card>

          {showDeleteForm && (
            <Card style={{ marginBottom: '30px', border: '2px solid #ef4444', background: 'rgba(255,255,255,0.04)' }}>
              <Title level={3} style={{ color: '#e5e7eb', marginBottom: '20px' }}>
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
                    style={{ background: '#0b1220', borderColor: '#334155', color: '#e5e7eb' }}
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
                    style={{ background: '#0b1220', borderColor: '#334155', color: '#e5e7eb' }}
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
                      background: 'linear-gradient(135deg, #ef4444, #f59e0b)',
                      borderColor: 'transparent'
                    }}
                  >
                    {isDeleting ? 'Deleting Account...' : 'Delete My Account'}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          )}

          <Card style={{ marginBottom: '30px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <Title level={3} style={{ color: '#e5e7eb' }}>What Data Will Be Deleted</Title>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1' }}>
              When you delete your account, we will permanently remove the following data:
            </Paragraph>
            
            <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#e5e7eb' }}>
              {dataTypes.map((item, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <CheckCircleOutlined style={{ color: '#22c55e', marginRight: '8px' }} />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card style={{ marginBottom: '30px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <Title level={3} style={{ color: '#e5e7eb' }}>Data We May Retain</Title>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1' }}>
              For legal, regulatory, or security purposes, we may retain certain data:
            </Paragraph>
            
            <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#e5e7eb' }}>
              {retainedData.map((item, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <ExclamationCircleOutlined style={{ color: '#f59e0b', marginRight: '8px' }} />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <Title level={3} style={{ color: '#e5e7eb' }}>Processing Timeline</Title>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
              <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(59,130,246,0.15)', borderRadius: '8px', border: '1px solid rgba(59,130,246,0.35)' }}>
                <Title level={4} style={{ color: '#60a5fa' }}>24-48 Hours</Title>
                <Text style={{ color: '#e5e7eb' }}>Initial response and verification</Text>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(34,197,94,0.15)', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.35)' }}>
                <Title level={4} style={{ color: '#86efac' }}>7-14 Days</Title>
                <Text style={{ color: '#e5e7eb' }}>Account deletion completion</Text>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(245,158,11,0.12)', borderRadius: '8px', border: '1px solid rgba(245,158,11,0.35)' }}>
                <Title level={4} style={{ color: '#fbbf24' }}>30 Days</Title>
                <Text style={{ color: '#e5e7eb' }}>Data purged from backups</Text>
              </div>
            </div>
          </Card>
        </div>

        <div style={{ background: 'rgba(239,68,68,0.1)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(239,68,68,0.35)' }}>
          <Title level={4} style={{ color: '#fca5a5', marginBottom: '10px' }}>
            <ExclamationCircleOutlined style={{ marginRight: '8px' }} />
            Important Notes
          </Title>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#e5e7eb' }}>
            <li>Account deletion is permanent and cannot be reversed</li>
            <li>You will lose access to all your bookings and preferences</li>
            <li>Any active bookings will be cancelled</li>
            <li>You can create a new account at any time after deletion</li>
            <li>If you have any concerns, please contact us before proceeding</li>
          </ul>
        </div>

        <Divider />

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Paragraph style={{ fontSize: '16px', color: '#cbd5e1' }}>
            Need help or have questions? Contact us at{' '}
            <a href="mailto:kwesiselasi476@gmail.com" style={{ color: '#93c5fd' }}>
              kwesiselasi476@gmail.com
            </a>
          </Paragraph>
        </div>
      </Content>
    </Layout>
  );
};

export default DeleteAccount;