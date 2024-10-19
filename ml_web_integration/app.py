from flask import Flask, render_template, request, jsonify
import sqlite3
import os

app = Flask(__name__)
db_path = os.path.join(os.path.dirname(__file__), 'students.db')

def get_rank(score):
    if score >= 9:
        return "Excellent"
    elif score >= 7.5:
        return "Very Good"
    elif score >= 6:
        return "Good"
    else:
        return "Needs Improvement"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    try:
        data = request.json
        academic = float(data['academic'])
        
        conn = sqlite3.connect(db_path)
        c = conn.cursor()
        score = academic  # Simple score for demo, modify as per need

        c.execute("INSERT INTO students (name, batch, academic, score) VALUES (?, ?, ?, ?)",
                  (data['name'], data['batch'], academic, score))
        conn.commit()
        conn.close()

        return jsonify({"predicted_score": score})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/all_data', methods=['GET'])
def get_all_data():
    conn = sqlite3.connect(db_path)
    c = conn.cursor()
    c.execute("SELECT name, batch, score FROM students")
    students = c.fetchall()
    conn.close()
    return jsonify({"students": [{"name": s[0], "batch": s[1], "score": s[2]} for s in students]})

@app.route('/top_students', methods=['GET'])
def get_top_students():
    conn = sqlite3.connect(db_path)
    c = conn.cursor()
    c.execute("SELECT name, score FROM students ORDER BY score DESC LIMIT 3")
    top_students = c.fetchall()
    conn.close()

    return jsonify({"top_students": [{"name": s[0], "score": s[1], "rank": get_rank(s[1])} for s in top_students]})

if __name__ == '__main__':
    app.run(debug=True)
