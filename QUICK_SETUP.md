# Quick Setup Guide

## Step 1: Set Up Formspree (5 minutes)

### Create Your Formspree Account

1. **Open this link**: [https://formspree.io/register](https://formspree.io/register)

2. **Sign up** with your email or GitHub account

3. **Create a new form**:
   - Click "New Form" or "Create Form"
   - Give it a name like "Portfolio Contact Form"
   - Copy the **Form ID** (looks like `xyzabc123`)

4. **Update Contact.jsx**:
   - Open `src/components/Contact.jsx`
   - **Line 24**: Replace `YOUR_FORM_ID` with your actual Form ID
   - **Line 232**: Replace `your.email@example.com` with your real email

---

## Step 2: Test Locally

Run your portfolio locally and test the contact form:

```bash
npm run dev
```

Visit `http://localhost:5173/contact` and submit a test message!

---

## Step 3: Deploy (Choose One)

### Option A: Vercel (Recommended - Fastest)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login and Deploy**:
   ```bash
   vercel login
   vercel
   ```

3. **Follow prompts**:
   - Set up and deploy? **Yes**
   - Which scope? **Your account**
   - Link to existing project? **No**
   - Project name? **portfolio** (or any name)
   - Directory? **./  (press Enter)**
   - Override settings? **No**

4. **Done!** You'll get a URL like: `https://manish.prm86.workers.dev/`

### Option B: Netlify

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login and Deploy**:
   ```bash
   netlify login
   netlify deploy --prod
   ```

3. **Follow prompts** and get your live URL!

---

## Step 4: Share Your Portfolio

Your portfolio is now live! Share the URL with anyone:
- ✅ Works on mobile phones
- ✅ Works on tablets
- ✅ Works on any computer
- ✅ Contact form sends you emails

---

## Need Help?

If you need me to help with any step, just let me know!

**Your email for contact form**: _________________

**Formspree Form ID**: _________________

Once you provide these, I can update the files for you!
