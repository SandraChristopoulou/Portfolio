# EmailJS Debugging Guide

## Common Issues and Solutions:

### 1. Template Variable Names
Make sure your EmailJS template uses these exact variable names:
- `{{from_name}}` - for the sender's name
- `{{from_email}}` - for the sender's email
- `{{phone}}` - for phone number
- `{{message}}` - for the message content

### 2. Template Setup
Your template should look like this:
```
Subject: New Contact from {{from_name}}

Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

Best regards,
Your Website Contact Form
```

### 3. Common Errors and Solutions:

**Error: "The service is not available"**
- Check if your Service ID is correct
- Make sure your email service is properly connected in EmailJS dashboard

**Error: "Template not found"**
- Verify your Template ID is correct
- Make sure the template is published (not in draft mode)

**Error: "Invalid user ID"**
- Check if your Public Key is correct
- Make sure you're using the Public Key, not the Private Key

**Error: "Limit exceeded"**
- You've hit the free tier limit (200 emails/month)
- Upgrade your plan or wait until next month

### 4. How to Test:
1. Open browser developer tools (F12)
2. Go to Console tab
3. Try submitting the form
4. Check for any error messages in the console
5. Check the Network tab to see the actual request being made

### 5. Debugging Steps:
1. ✅ EmailJS library installed
2. ✅ Public key initialized
3. ✅ Service ID set
4. ✅ Template ID set
5. ❓ Template variables match form field names
6. ❓ Email service connected in EmailJS dashboard
7. ❓ Template is published (not draft)

## Quick Test Form
If the main form doesn't work, try this simple test form:

```jsx
const testEmailJS = () => {
  const templateParams = {
    from_name: 'Test User',
    from_email: 'test@example.com',
    phone: '123-456-7890',
    message: 'This is a test message'
  };

  emailjs.send('service_kgdvbe1', 'template_gxclxv2', templateParams)
    .then((result) => {
      console.log('SUCCESS!', result.status, result.text);
    }, (error) => {
      console.log('FAILED...', error);
    });
};
```

Add this function to your component and call it with a button to test the EmailJS configuration directly.
