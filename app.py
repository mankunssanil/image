from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Code to predict skin disease goes here
    # You will need to handle the prediction logic and return the result
    # For demonstration, let's assume the prediction result is 'predicted_disease'
    predicted_disease = "Skin Disease"  # Replace this with actual prediction
    
    return jsonify({'predicted_disease': predicted_disease})

if __name__ == '__main__':
    app.run(debug=True)
