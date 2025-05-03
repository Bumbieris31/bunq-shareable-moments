# Local Setup Instructions for bunq-app

Follow these steps to run the app locally on your machine:

## 1. Clone the Repository

```
git clone <your-repo-url>
cd bunq-app
```

## 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) (v16 or higher recommended) and npm installed.

```
npm install
```

## 3. Start the Development Server

```
npm run dev
```

This will start the Vite development server. You should see output similar to:

```
➜  Local:   http://localhost:5173/
```

## 4. Open the App in Your Browser

Go to [http://localhost:5173/](http://localhost:5173/) in your web browser.

---

### Optional

- **Expose to Local Network:**
  ```
  npm run dev -- --host
  ```
- **Production Build:**
  ```
  npm run build
  npm run preview
  ``` 