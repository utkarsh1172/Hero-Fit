const config = {
    apiUrl: process.env.NODE_ENV === "development" ? "http://localhost:3000/api/" : "https://hero-fit-app.vercel.app/",
}

export default config