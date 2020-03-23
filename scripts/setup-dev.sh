docker build -t beautiful-mutmatt "$PWD"
docker run -d -p 4000:4000 --name beautiful-mutmatt -v "$PWD":/srv/jekyll beautiful-mutmatt