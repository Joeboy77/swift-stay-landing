import React from 'react';
import { Layout, Typography, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout className="privacy-policy-page" style={{ minHeight: '100vh', background: '#0f172a' }}>
      <Content style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <Button 
          type="link" 
          icon={<ArrowLeftOutlined />} 
          onClick={() => navigate('/')}
          style={{ marginBottom: '20px', fontSize: '16px', color: '#93c5fd' }}
        >
          Back to Home
        </Button>

        <Title level={1} style={{ color: '#f3f4f6', marginBottom: '30px', textAlign: 'center' }}>
          Privacy Policy
        </Title>

        <div style={{ background: 'rgba(255,255,255,0.06)', padding: '40px', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.12)' }}>
          <Paragraph style={{ fontSize: '16px', marginBottom: '30px', textAlign: 'center', color: '#cbd5e1' }}>
            <Text strong>Last updated: {new Date().toLocaleDateString()}</Text>
          </Paragraph>

          <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#e5e7eb' }}>
            This Privacy Policy describes how Swift Stay ("we", "our", or "us") collects, uses, and shares your personal information when you use our mobile application and related services.
          </Paragraph>

          <Title level={2} style={{ color: '#e5e7eb', marginTop: '40px' }}>Information We Collect</Title>
          
          <Title level={3}>Personal Information</Title>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1' }}>
            When you create an account, we may collect:
            <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <li>Name and email address</li>
              <li>Phone number</li>
              <li>Profile information and preferences</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>
          </Paragraph>

          <Title level={3}>Usage Information</Title>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1' }}>
            We automatically collect certain information about your use of our app:
            <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <li>Device information (device type, operating system, unique device identifiers)</li>
              <li>App usage data (features used, time spent, pages viewed)</li>
              <li>Location data (with your permission)</li>
              <li>Log data (IP address, access times, app crashes)</li>
            </ul>
          </Paragraph>

          <Title level={2} style={{ color: '#e5e7eb', marginTop: '40px' }}>How We Use Your Information</Title>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1' }}>
            We use the information we collect to:
            <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <li>Provide and improve our services</li>
              <li>Process bookings and payments</li>
              <li>Send you important updates about your bookings</li>
              <li>Personalize your experience</li>
              <li>Communicate with you about our services</li>
              <li>Ensure the security of our platform</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Paragraph>

          <Title level={2} style={{ color: '#e5e7eb', marginTop: '40px' }}>Information Sharing</Title>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1' }}>
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <li><strong>Service Providers:</strong> With trusted third parties who help us operate our app (payment processors, cloud storage providers)</li>
              <li><strong>Property Owners:</strong> With accommodation providers when you make a booking</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </Paragraph>

          <Title level={2} style={{ color: '#e5e7eb', marginTop: '40px' }}>Data Security</Title>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1' }}>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </Paragraph>

          <Title level={2} style={{ color: '#e5e7eb', marginTop: '40px' }}>Your Rights</Title>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1' }}>
            Depending on your location, you may have the following rights:
            <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Portability of your data</li>
              <li>Objection to certain processing activities</li>
              <li>Withdrawal of consent</li>
            </ul>
          </Paragraph>

          <Title level={2} style={{ color: '#e5e7eb', marginTop: '40px' }}>Cookies and Tracking</Title>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1' }}>
            Our app may use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content.
          </Paragraph>

          <Title level={2} style={{ color: '#e5e7eb', marginTop: '40px' }}>Third-Party Services</Title>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1' }}>
            Our app may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.
          </Paragraph>

          <Title level={2} style={{ color: '#e5e7eb', marginTop: '40px' }}>Children's Privacy</Title>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1' }}>
            Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </Paragraph>

          <Title level={2} style={{ color: '#e5e7eb', marginTop: '40px' }}>Changes to This Policy</Title>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1' }}>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </Paragraph>

          <Title level={2} style={{ color: '#e5e7eb', marginTop: '40px' }}>Contact Us</Title>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1' }}>
            If you have any questions about this Privacy Policy, please contact us:
            <br />
            <strong>Email:</strong> kwesiselasi476@gmail.com
            <br />
            <strong>Phone:</strong> +233 24 033 3837
            <br />
            <strong>Address:</strong> Ghana
          </Paragraph>

          <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(255,255,255,0.06)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.12)' }}>
            <Text type="secondary" style={{ fontSize: '16px', color: '#cbd5e1' }}>
              By using our app, you agree to the collection and use of information in accordance with this Privacy Policy.
            </Text>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default PrivacyPolicy;
