# Portfolio Deployment Guide

## 🚀 Quick Start - Deploy Your Portfolio

Your portfolio is ready to deploy! Follow these steps to get it online and accessible from anywhere.

---

## Step 1: Set Up Formspree (Email Notifications)

1. **Go to [Formspree.io](https://formspree.io/)**
2. **Sign up** for a free account (50 submissions/month)
3. **Create a new form**
4. **Copy your Form ID** (looks like `xyzabc123`)
5. **Update Contact.jsx**:
   - Open `src/components/Contact.jsx`
   - Find line 24: `https://formspree.io/f/YOUR_FORM_ID`
   - Replace `YOUR_FORM_ID` with your actual form ID
   - Also update line 232: `your.email@example.com` with your real email

---

## Step 2: Deploy to Vercel (Recommended - Easiest)

### Option A: Deploy via GitHub

1. **Create GitHub Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com/)
   - Sign up with GitHub
   - Click "New Project"
   - Import your portfolio repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Done! You'll get a URL like `https://manish.manish55555parmar.workers.dev/`

### Option B: Deploy via Vercel CLI (Faster)

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts, and you're live!

---

## Step 3: Alternative - Deploy to Netlify

1. **Create GitHub Repository** (same as above)

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com/)
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings are already configured in `netlify.toml`
   - Click "Deploy"
   - Done! You'll get a URL like `https://manish.manish55555parmar.workers.dev/`

---

## Step 4: Test Your Live Site

1. **Visit your deployment URL**
2. **Test on mobile**: Open the URL on your phone
3. **Test contact form**: Submit a test message
4. **Check your email**: You should receive the notification!

---

## Step 5: Custom Domain (Optional)

### For Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain (e.g., `manishparmar.com`)
4. Follow DNS configuration instructions

### For Netlify:
1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration instructions

---

## 📱 Mobile Access

Once deployed, your portfolio will be accessible from:
- ✅ **Any mobile device** (iOS/Android)
- ✅ **Any tablet**
- ✅ **Any computer**
- ✅ **Anywhere in the world**

Just share your deployment URL!

---

## 🔔 Email Notifications

When someone fills out your contact form:
1. **Formspree** receives the submission
2. **You get an email** with their message
3. **You can reply** directly from your email

---

## 🛠️ Updating Your Portfolio

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel/Netlify will **automatically redeploy** your site!

---

## ✅ Checklist

- [ ] Update Formspree form ID in `Contact.jsx`
- [ ] Update email address in `Contact.jsx`
- [ ] Create GitHub repository
- [ ] Deploy to Vercel or Netlify
- [ ] Test contact form
- [ ] Share your URL!

---

## 🎉 You're Done!

Your portfolio is now live and accessible from anywhere. People can contact you, and you'll receive email notifications!

**Need help?** Check the deployment platform's documentation or let me know!
