from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your-secret-key-here'  # Change this to a random secret key

db.init_app(app)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

# SIGNUP ROUTE - This was missing!
@app.route("/signup", methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        # Get form data
        username = request.form.get('username')
        email = request.form.get('email')  # You mentioned email in your question
        password = request.form.get('password')
        
        # Basic validation
        if not username or not password:
            flash('Username and password are required!')
            return redirect(url_for('signup'))
        
        # Check if user already exists
        existing_user = User.query.filter_by(username=username).first()
        if existing_user:
            flash('Username already exists!')
            return redirect(url_for('signup'))
        
        # Create new user with hashed password
        hashed_password = generate_password_hash(password)
        new_user = User(username=username, password_hash=hashed_password)
        
        try:
            # Add to database and commit - This was the missing part!
            db.session.add(new_user)
            db.session.commit()
            flash('Registration successful!')
            return redirect(url_for('login'))
        except Exception as e:
            db.session.rollback()
            flash('Error creating account. Please try again.')
            return redirect(url_for('signup'))
    
    return render_template("signup.html")

# LOGIN ROUTE - This was missing!
@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        if not username or not password:
            flash('Username and password are required!')
            return redirect(url_for('login'))
        
        # Find user in database
        user = User.query.filter_by(username=username).first()
        
        # Check if user exists and password is correct
        if user and check_password_hash(user.password_hash, password):
            flash('Login successful!')
            return redirect(url_for('home'))  # Or wherever you want to redirect after login
        else:
            flash('Invalid username or password!')
            return redirect(url_for('login'))
    
    return render_template("login.html")

# Optional: API endpoints if you're using AJAX/fetch from React
@app.route("/api/signup", methods=['POST'])
def api_signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400
    
    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({'error': 'Username already exists'}), 400
    
    hashed_password = generate_password_hash(password)
    new_user = User(username=username, password_hash=hashed_password)
    
    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'Registration successful'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': 'Error creating account'}), 500

@app.route("/api/login", methods=['POST'])
def api_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400
    
    user = User.query.filter_by(username=username).first()
    
    if user and check_password_hash(user.password_hash, password):
        return jsonify({'message': 'Login successful', 'user_id': user.id}), 200
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)