from flask import Flask, request, jsonify
import openai
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)


openai.api_key = os.getenv('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')

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    question = data.get('question')
    
    response = openai.Completion.create(
        engine="davinci",
        prompt="Answer the following medical question: {}".format(question),
        max_tokens=150,
        n=1,
        stop=None,
        temperature=0.5,
    )
    
    answer = response.choices[0].text.strip()
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(debug=True)