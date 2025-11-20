# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/bf2c9bb3-8702-4aaf-b969-7d8e078f51a1

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/bf2c9bb3-8702-4aaf-b969-7d8e078f51a1) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/bf2c9bb3-8702-4aaf-b969-7d8e078f51a1) and click on Share -> Publish.

## Deploying to Render.com

### Option 1: Static Site (Recommended - Free)

1. **Push your code to GitHub**
   ```sh
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Create a Render account**
   - Go to [render.com](https://render.com) and sign up/login
   - Connect your GitHub account

3. **Create a new Static Site**
   - Click "New +" → "Static Site"
   - Connect your GitHub repository
   - Configure the settings:
     - **Name**: portfolio (or your preferred name)
     - **Branch**: main (or your default branch)
     - **Build Command**: `npm install && npm run build`
     - **Publish Directory**: `dist`
   - Click "Create Static Site"

4. **Wait for deployment**
   - Render will automatically build and deploy your site
   - You'll get a URL like: `https://portfolio.onrender.com`

**Important**: The project includes a `_redirects` file in the `public` directory that handles client-side routing for React Router. This file is automatically copied to `dist` during build and ensures all routes serve `index.html` (required for SPAs).

### Option 2: Using render.yaml (Automated)

If you've already pushed the `render.yaml` file to your repo:

1. Go to Render Dashboard → "New +" → "Blueprint"
2. Connect your GitHub repository
3. Render will automatically detect the `render.yaml` file
4. Click "Apply" to deploy

### Environment Variables (if needed)

If your app needs environment variables:
- Go to your service settings on Render
- Navigate to "Environment" tab
- Add your environment variables

### Custom Domain

1. Go to your Static Site settings on Render
2. Click "Custom Domains"
3. Add your domain and follow the DNS configuration instructions

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
