docker build --no-cache -f SQL\Dockerfile.PostgreSql -t primer-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t primer-java/app ../../..
