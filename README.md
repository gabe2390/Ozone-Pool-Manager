# Ozone Pool Manager - Manage a game of pool
## React JS, Axios, .Net Core Web API 2, Entity Framework

- clone or download repo

###### backend (must have .Net Core, and dotnet cli tools installed)
- navigate to pool_assignment_backend
- dotnet restore
- dotnet run (should start server at localhost:5000. no views, only controller endpoints)

###### frontend - uses React JS and axios
- navigate to pool_assignemnt
- npm install
- npm run start
- navigate to localhost:8080 in your browser

###### backend tests
- navigate to pool_assignment_backend_tests
- dotnet restore
- dotnet test

Uses an in memory database to save players, but I included a basic sql script to create the appropriate table.
