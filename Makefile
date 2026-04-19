run:
	@echo "Welcome to this simple project"
	@echo ""
	@echo "Below the link to play the game has been created for you"
	@echo "Click on "http://0.0.0.0:8000/" to play"
	@echo "To close do Ctrl + C"
	python3 -m http.server 8000

open:
	xdg-open http://localhost:8000 || open http://localhost:8000
