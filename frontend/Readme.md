# 🛠 Technologies Used

- HTML  
- CSS  
- JavaScript  
- Fetch API  
- Node.js  
- Express  

---

# 🌐 Deploy Frontend (Open New Terminal)

## 📂 Go to Frontend Folder

```bash
cd frontend
```

## ▶️ Open in Browser

Open the `index.html` file in your preferred web browser  
(or simply double-click `index.html`).

---

# 🔗 How Frontend Connects to Backend

- The backend runs on **Node.js** at:

```
http://localhost:5000
```

- The frontend sends HTTP requests using the **Fetch API** to:

```
http://localhost:5000/students
```

- Since both frontend and backend run on the same machine,  
  `localhost` is used for communication.

---

# ⚙️ How It Works

1. Start the backend server:
   ```bash
   node server.js
   ```

2. Open `index.html` in your browser.

3. The frontend uses `fetch()` to send requests to:
   ```
   http://localhost:5000
   ```

4. The backend processes the request and sends a response.

---

✅ Keep the backend terminal running while testing.  
✅ Do NOT close the backend server.