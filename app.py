import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
if os.path.exists("env.py"):
    import env


app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY")


@app.route("/")
@app.route("/index", methods=["POST, GET"])
def index():
    return render_template("index.html")


@app.route("/services")
def services():
    return render_template("services.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
