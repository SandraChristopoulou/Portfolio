# EmailJS Setup Guide

## Steps to enable email functionality in your contact form:

### 1. Create an EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account
- Verify your email address

### 2. Create an Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail is recommended)
- Follow the setup instructions to connect your email account
- Note down your **Service ID**

### 3. Create an Email Template
- Go to "Email Templates" in your dashboard
- Click "Create New Template"
- Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
```

- Save the template and note down your **Template ID**

### 4. Get Your Public Key
- Go to "Account" → "General"
- Find your **Public Key** (also called User ID)

### 5. Update Your Code
- Open `/app/contact/page.jsx`
- Replace the placeholder values around line 15-17:
  ```javascript
  const serviceID = 'YOUR_ACTUAL_SERVICE_ID';
  const templateID = 'YOUR_ACTUAL_TEMPLATE_ID';
  const publicKey = 'YOUR_ACTUAL_PUBLIC_KEY';
  ```

### 6. Test Your Contact Form
- Save your changes
- Restart your development server (`npm run dev`)
- Test the contact form on your website
- Check your email inbox for the test message

## Alternative: Simple Form Service (Easier Option)

If EmailJS setup is too complex, you can use Formspree instead:

1. Go to https://formspree.io/
2. Sign up for a free account
3. Create a new form and get your form endpoint
4. Replace the form action in your contact form:

```jsx
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  ref={formRef}
  onSubmit={handleSend}
>
```

## Need Help?
If you encounter any issues, please let me know and I can help you troubleshoot!
