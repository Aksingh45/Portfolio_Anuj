export default defineConfig({
	plugins: [sveltekit()],
	server: {
		cors: {
			origin: ['https://portfolio-anuj.onrender.com', 'http://localhost:5173'],
			methods: ['GET', 'POST'],
			allowedHeaders: ['Content-Type']
		},
		allowedHosts: ['portfolio-anuj.onrender.com']
	}
});