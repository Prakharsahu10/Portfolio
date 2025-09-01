# EmailJS Setup Instructions

## 📧 How to Configure EmailJS for Your Contact Form

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Set up Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

### Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

Hello Prakhar,

You have received a new message from your portfolio contact form:

Name: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. **Copy your Template ID** (you'll need this)

### Step 4: Get Public Key

1. Go to **Account** > **General**
2. Find your **Public Key**
3. **Copy your Public Key** (you'll need this)

### Step 5: Update the ContactForm Component

1. Open `components/ContactForm.tsx`
2. Replace the placeholder values:

```typescript
const result = await emailjs.sendForm(
  "YOUR_SERVICE_ID", // Replace with your Service ID
  "YOUR_TEMPLATE_ID", // Replace with your Template ID
  form.current,
  "YOUR_PUBLIC_KEY" // Replace with your Public Key
);
```

### Step 6: Test Your Form

1. Save the changes
2. Test the contact form on your website
3. Check your email for notifications

## 🚀 Expected Results

- ✅ Form submissions will be sent to your email
- ✅ You'll get instant notifications
- ✅ Users will see success/error messages
- ✅ Form includes validation and loading states

## 📝 EmailJS Free Tier

- 200 emails per month
- Perfect for portfolio contact forms
- No credit card required

## 🔧 Optional: Environment Variables

For better security, you can store your credentials in `.env.local`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update the ContactForm to use:

```typescript
process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
```
