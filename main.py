from flask import Flask, request, jsonify
# Dodaje wsparcie dla CORS (połączenie z aplikacją mobilną)
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Zezwala na zapytania z React Native / przeglądarki

# 🏠 Testowa trasa na start


@app.route("/")
def home():
    return "🚀 Flask działa! Endpoint /connections dostępny."

# 🚍 Przykładowy endpoint do symulacji połączeń autobusowych


@app.route("/connections", methods=["GET"])
def get_connections():
    from_coord = request.args.get("from")
    to_coord = request.args.get("to")

    # Prosta walidacja
    if not from_coord or not to_coord:
        return jsonify({"error": "Brakuje parametrów 'from' lub 'to'"}), 400

    # Zwracamy przykładowe dane (na razie bez web scrapingu)
    return jsonify([
        {
            "line": "110",
            "from": "Winiary, Szpital",
            "to": "Skarpa",
            "departure": "14:42"
        },
        {
            "line": "38",
            "from": "Winiary, Szpital",
            "to": "Skarpa",
            "departure": "14:58"
        }
    ])


# 🔁 Uruchomienie serwera
if __name__ == "__main__":
    app.run(debug=True)
